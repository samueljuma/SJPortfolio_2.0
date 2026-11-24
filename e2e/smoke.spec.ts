import { expect, test } from '@playwright/test';

test.describe('home', () => {
  test('renders every section with its heading', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Samuel Juma — Android Engineer');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('people rely on');
    for (const id of ['work', 'about', 'experience', 'skills', 'services', 'contact']) {
      await expect(page.locator(`section#${id}`)).toBeAttached();
    }
  });

  test('only bolttech Kenya links to a case study', async ({ page }) => {
    await page.goto('/');
    const caseLinks = page.locator('a[href^="/work/"]');
    await expect(caseLinks).toHaveCount(1);
    await expect(caseLinks.first()).toHaveAttribute('href', '/work/bolttech-kenya');
    await expect(page.locator('a[href^="https://play.google.com/"]')).toHaveCount(5);
  });

  test('contact form posts to formsubmit with labelled fields', async ({ page }) => {
    await page.goto('/');
    const form = page.locator('#contact form');
    await expect(form).toHaveAttribute('action', /formsubmit\.co/);
    await expect(page.getByLabel('Your name')).toHaveAttribute('placeholder', 'Jane Doe');
    await expect(page.getByLabel('Email')).toHaveAttribute('type', 'email');
    await expect(page.getByLabel('What are you building?')).toBeVisible();
  });

  test('every image has alt text and the page does not scroll sideways', async ({ page }) => {
    await page.goto('/');
    for (const img of await page.locator('img').all()) {
      expect(await img.getAttribute('alt')).not.toBeNull();
    }
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });
});

test('mobile menu opens and closes', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile only');
  await page.goto('/');
  const toggle = page.locator('#mobile-nav-toggle');
  const menu = page.locator('#mobile-nav');
  await expect(menu).toBeHidden();
  await toggle.click();
  await expect(menu).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await menu.getByRole('link', { name: 'Skills' }).click();
  await expect(menu).toBeHidden();
});

test('case study renders', async ({ page }) => {
  await page.goto('/work/bolttech-kenya');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('bolttech Kenya');
  await expect(page.getByRole('link', { name: 'Get it on Google Play' })).toBeVisible();
  await expect(page.getByText('20+')).toBeVisible();
});

test('old Vue routes redirect to home sections', async ({ request }) => {
  for (const [from, to] of [
    ['/about', '/#about'],
    ['/service', '/#services'],
    ['/work', '/#work'],
    ['/contact', '/#contact'],
  ]) {
    const res = await request.get(from, { maxRedirects: 0 });
    expect(res.status()).toBe(301);
    expect(res.headers()['location']).toBe(to);
  }
});

test('static assets are served', async ({ request }) => {
  for (const path of ['/resume.pdf', '/og-image.png', '/favicon.svg', '/sitemap-index.xml']) {
    expect((await request.get(path)).status()).toBe(200);
  }
  expect((await request.get('/no-such-page')).status()).toBe(404);
});
