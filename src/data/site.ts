import type { ImageMetadata } from 'astro';

import bolttechDlm from '../assets/projects/bolttech-dlm.png';
import bolttechKenya from '../assets/projects/bolttech-kenya.png';
import gms from '../assets/projects/gms.png';
import quickShuttle from '../assets/projects/quick-shuttle.png';
import soores from '../assets/projects/soores.png';
import type { IconName } from '../components/ui/icons';

/**
 * All site copy lives here. Components only render it. The design source of
 * truth is the Figma file "Samuel Juma — Portfolio" (fm6I0DZC08BnDHex2Ucq06).
 */

export const site = {
  name: 'Samuel Juma',
  role: 'Android Engineer',
  title: 'Samuel Juma — Android Engineer',
  description:
    'Android Engineer with 5 years shipping production Kotlin apps in fintech, insurtech and mobility. Jetpack Compose, Clean Architecture, MVVM and MVI.',
  email: 'samueljuma1024@gmail.com',
  phone: '+254 798 114 462',
  location: 'Nairobi, Kenya',
  resume: '/resume.pdf',
};

export interface Social {
  label: string;
  href: string;
  icon: IconName;
  /** Short display value for contact rows. */
  handle: string;
}

export const socials: Social[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/samueljuma',
    icon: 'github',
    handle: 'github.com/samueljuma',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/samueljuma',
    icon: 'linkedin',
    handle: 'linkedin.com/in/samueljuma',
  },
  { label: 'X', href: 'https://x.com/_jumasamuel', icon: 'x', handle: '@_jumasamuel' },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/254798114462',
    icon: 'whatsapp',
    handle: '+254 798 114 462',
  },
];

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

export const hero = {
  availability: 'Open to Android roles & contract work',
  /** Rendered as three lines; `highlight` is drawn in the accent colour. */
  headline: ['I build Android apps', 'people rely on', 'every day.'],
  highlight: 'rely on',
  lede: "I'm Samuel Juma, an Android Engineer with 5 years shipping production Kotlin apps in fintech, insurtech and mobility. Currently building at bolttech.",
  primaryCta: { label: 'View my work', href: '/#work' },
  secondaryCta: { label: 'Download résumé', href: '/resume.pdf' },
  locationNote: 'Nairobi, Kenya · working with teams worldwide',
  currentRole: { label: 'Currently', value: 'Android Engineer · bolttech' },
  playCard: { value: '5 apps', label: 'live on Google Play' },
  stats: [
    { value: '5+', label: 'Years shipping Android' },
    { value: '5', label: 'Production apps on Play' },
    { value: '3', label: 'Industries: fintech, insurtech, mobility' },
  ],
};

export interface CaseStudy {
  headline: string;
  lede: string;
  meta: { label: string; value: string }[];
  overview: string;
  challenge: string;
  built: string[];
  outcomes: { value: string; label: string }[];
  stack: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** Longer title used on the featured card. */
  fullTitle?: string;
  industry: string;
  summary: string;
  tags: string[];
  image: ImageMetadata;
  imageAlt: string;
  playStore: string;
  featured?: boolean;
  caseStudy?: CaseStudy;
}

export const work = {
  eyebrow: 'Selected work',
  title: 'Apps in production',
  lede: 'Real products with real users, from insurance and device financing to bus travel. Each one shipped to Google Play.',
  more: { label: 'More on GitHub', href: 'https://github.com/samueljuma' },
};

export const projects: Project[] = [
  {
    slug: 'bolttech-kenya',
    title: 'bolttech Kenya',
    fullTitle: 'bolttech Kenya — Insurance Marketplace',
    industry: 'Insurtech',
    summary:
      'Compare quotes from multiple underwriters, buy cover and manage policies and claims in one app. I led the full rebrand from mTek to bolttech across a multi-module Kotlin codebase, shipped in a single release.',
    tags: ['Kotlin', 'Compose', 'MVI', 'Koin', 'Ktor', 'Room'],
    image: bolttechKenya,
    imageAlt:
      'Five screens from the bolttech Kenya app: home, purchase review, policies, quotes and cover details',
    playStore: 'https://play.google.com/store/apps/details?id=com.hillcroft.apps.mtek',
    featured: true,
    caseStudy: {
      headline: 'bolttech Kenya — one app for every kind of insurance cover',
      lede: 'A consumer insurance marketplace that brings multiple underwriters and product lines into one place, so people can compare quotes, buy cover and manage claims without a broker.',
      meta: [
        { label: 'Role', value: 'Android Engineer' },
        { label: 'Company', value: 'bolttech (formerly mTek)' },
        { label: 'Timeline', value: '2026 — present' },
        { label: 'Stack', value: 'Kotlin · Compose · MVI' },
      ],
      overview:
        'mTek was a Kenyan insurance marketplace that became part of bolttech. The app lets customers browse motor, health, travel and gadget cover from several underwriters, get instant quotes, pay and manage their policies and claims from one place.',
      challenge:
        "Following the acquisition, the whole product had to move to the bolttech identity: new colours, typography, components and copy across a large multi-module codebase. All of it had to land in a single release without slowing down feature work or breaking existing users' flows.",
      built: [
        'Led the end-to-end rebrand across the multi-module Kotlin codebase and shipped it in one Play Store release.',
        "Built Gradle convention plugins that centralise dependency and build configuration across the app's modules.",
        'Created a shared Jetpack Compose design-system module now used on every screen in the app.',
        'Kept the architecture clean with MVI, Koin, Ktor and Room so new insurance products slot in quickly.',
      ],
      outcomes: [
        { value: '1', label: 'release to ship the full rebrand' },
        { value: '20+', label: 'features across 4 modules on shared build conventions' },
        { value: '100%', label: 'of screens on the shared design system' },
      ],
      stack: [
        'Kotlin',
        'Jetpack Compose',
        'MVI',
        'Clean Architecture',
        'Koin',
        'Ktor',
        'Room',
        'Gradle convention plugins',
        'Multi-module',
      ],
    },
  },
  {
    slug: 'bolttech-dlm',
    title: 'bolttech DLM',
    industry: 'Fintech',
    summary:
      'Device financing and repair claims, built end to end from first commit to production. Replaced a paper process run through agents.',
    tags: ['Kotlin', 'Compose', 'Clean Architecture'],
    image: bolttechDlm,
    imageAlt: 'Screens from the bolttech DLM device financing app',
    playStore: 'https://play.google.com/store/apps/details?id=com.bolttech.device',
  },
  {
    slug: 'gms',
    title: 'GMS — Gym Management',
    industry: 'SaaS',
    summary: 'Members, payments and attendance logs for gym admins and trainers, all from a phone.',
    tags: ['Kotlin', 'Compose', 'Ktor'],
    image: gms,
    imageAlt: 'GMS app screens showing gym members, payments and attendance',
    playStore: 'https://play.google.com/store/apps/details?id=com.samueljuma.gmsmobile',
  },
  {
    slug: 'soores',
    title: 'Soores',
    industry: 'Mobility',
    summary:
      'The official bus-booking app for Soores: one-way and return trips with mobile payments.',
    tags: ['Kotlin', 'M-Pesa', 'Firebase'],
    image: soores,
    imageAlt: 'Soores bus-booking app screens',
    playStore: 'https://play.google.com/store/apps/details?id=com.buupass.soores_marketplace',
  },
  {
    slug: 'quick-shuttle',
    title: 'Quick Shuttle BMS',
    industry: 'Mobility',
    summary:
      'Agent app for bus bookings and parcel services, built for fast and reliable counter sales.',
    tags: ['Kotlin', 'POS', 'Payments'],
    image: quickShuttle,
    imageAlt: 'Quick Shuttle agent app screens for bookings and parcels',
    playStore: 'https://play.google.com/store/apps/details?id=com.buupass.quickshuttle',
  },
];

export const about = {
  eyebrow: 'About me',
  title: 'I build apps that stay fast and easy to change.',
  highlight: 'fast and easy to change.',
  body: [
    "I build and ship production Kotlin apps in fintech, insurtech and mobility using Jetpack Compose and the full Jetpack suite. Today I'm an Android Engineer at bolttech, where I led the end-to-end rebrand of a multi-module insurance marketplace and own a device-financing app from first commit to production.",
    'I care about the parts users never see: the architecture, tooling and design systems that let a team keep shipping fast as an app grows.',
  ],
  principles: [
    {
      icon: 'blocks',
      title: 'Architecture first',
      text: 'Clean Architecture with MVVM or MVI, split into modules so large codebases stay easy to change.',
    },
    {
      icon: 'gauge',
      title: 'Performance matters',
      text: 'Profiling, leak fixes and battery-aware code so apps stay fast on everyday devices.',
    },
    {
      icon: 'package',
      title: 'Tooling that scales teams',
      text: 'Gradle convention plugins and shared Compose design systems that help whole teams ship faster.',
    },
    {
      icon: 'smartphone',
      title: 'End-to-end ownership',
      text: 'From first commit to Play Store release, with CI/CD and crash monitoring in place.',
    },
  ] satisfies { icon: IconName; title: string; text: string }[],
};

export const experience = {
  eyebrow: 'Experience',
  title: "Where I've shipped",
  roles: [
    {
      period: 'May 2026 — Present',
      role: 'Android Engineer',
      company: 'bolttech (formerly mTek)',
      text: 'Led the rebrand of the mTek insurance marketplace to bolttech Kenya across a multi-module Kotlin codebase in a single Play Store release. Built Gradle convention plugins to share build setup across modules, and a shared Compose design system.',
      tags: ['Compose', 'Multi-module', 'Gradle'],
    },
    {
      period: 'Sept 2023 — May 2026',
      role: 'Mobile Engineer',
      company: 'BuuPass',
      text: 'Rebuilt the UI and booking flow of the BuuPass marketplace, built mobile point-of-sale ticketing for bus agents and integrated M-Pesa payments via the Daraja API. Introduced Crashlytics for production visibility.',
      tags: ['M-Pesa Daraja', 'POS', 'Crashlytics'],
    },
    {
      period: 'Jan 2023 — Sept 2023',
      role: 'Android Developer',
      company: 'PhillQins Hub',
      text: 'Owned the release lifecycle for client Android apps, from testing and debugging to Play Store submission. Profiled and optimised performance through refactoring and memory-leak fixes.',
      tags: ['Play Console', 'Profiling'],
    },
    {
      period: 'Oct 2021 — Jan 2023',
      role: 'Software Developer',
      company: 'PWD Gigs / EldoHub',
      text: "Refactored the organisation's main website for performance and built a companion mobile app. Implemented WCAG accessibility: screen readers, contrast and keyboard navigation.",
      tags: ['Web', 'Accessibility'],
    },
  ],
  educationLabel: 'Education',
  education: [
    {
      title: 'BSc. Mathematics & Computer Science',
      detail: 'Taita Taveta University · 2016 — 2021',
    },
    {
      title: 'Transformational Digital Leadership',
      detail: 'Thunderbird School of Global Management · 2021',
    },
    { title: 'Professional Foundations', detail: 'African Leadership Experience · 2024' },
  ],
  resumeCard: {
    title: 'Want the full picture?',
    text: 'My résumé covers every role, project and tool in detail.',
    cta: 'Download résumé',
  },
};

export const skills = {
  eyebrow: 'Toolkit',
  title: 'Skills & stack',
  lede: 'The tools I reach for every day, from UI to the build pipeline.',
  groups: [
    {
      icon: 'smartphone',
      title: 'Mobile development',
      items: [
        'Kotlin',
        'Java',
        'Jetpack Compose',
        'Android SDK',
        'Material 3',
        'Coroutines',
        'Flow',
        'WorkManager',
      ],
    },
    {
      icon: 'blocks',
      title: 'Architecture & DI',
      items: ['Clean Architecture', 'MVVM', 'MVI', 'Multi-module', 'Hilt', 'Koin', 'SOLID'],
    },
    {
      icon: 'layers',
      title: 'Cross-platform',
      items: ['Kotlin Multiplatform', 'Compose Multiplatform'],
    },
    {
      icon: 'plug',
      title: 'APIs & data',
      items: ['Retrofit', 'Ktor', 'REST', 'M-Pesa Daraja', 'Room', 'DataStore'],
    },
    {
      icon: 'package',
      title: 'Build & delivery',
      items: [
        'Gradle',
        'Convention plugins',
        'Version catalogs',
        'KSP',
        'CI/CD',
        'Play Console',
        'Firebase',
      ],
    },
    {
      icon: 'flask',
      title: 'Testing & debugging',
      items: ['JUnit', 'MockK', 'Turbine', 'Espresso', 'Compose UI tests', 'Profiler'],
    },
  ] satisfies { icon: IconName; title: string; items: string[] }[],
};

export const services = {
  eyebrow: 'What I can do for you',
  title: 'From idea to Google Play',
  lede: "Hiring for a role or need a contractor? Here's where I add the most value.",
  items: [
    {
      icon: 'pen-tool',
      title: 'Design to Compose',
      text: 'Pixel-perfect, accessible UI from Figma with Jetpack Compose and Material 3.',
    },
    {
      icon: 'code',
      title: 'API integration',
      text: 'Secure networking with Retrofit or Ktor, token auth, error states and offline sync.',
    },
    {
      icon: 'git-branch',
      title: 'CI/CD & releases',
      text: 'Automated builds, tests and Play Store releases with GitHub Actions and Firebase.',
    },
    {
      icon: 'gauge',
      title: 'Performance tuning',
      text: 'Profiling, memory-leak fixes and battery-aware code for smooth, stable apps.',
    },
  ] satisfies { icon: IconName; title: string; text: string }[],
};

export const contact = {
  eyebrow: 'Contact',
  title: 'Have an app in mind?',
  titleAccent: "Let's build it.",
  lede: 'Open to full-time Android roles, contracts and collaborations. I usually reply within a day.',
  formTitle: 'Send a message',
  /** formsubmit.co forwards submissions to the inbox; no backend needed. */
  formAction: 'https://formsubmit.co/samueljuma1024@gmail.com',
  formSubject: 'New message from samueljuma.com',
  thanksUrl: 'https://samueljuma.com/thanks',
  fields: {
    name: { label: 'Your name', placeholder: 'Jane Doe' },
    email: { label: 'Email', placeholder: 'jane@company.com' },
    message: {
      label: 'What are you building?',
      placeholder: 'Tell me about the app, timeline and team…',
    },
  },
  submit: 'Send message',
  thanks: {
    title: 'Thanks, your message is on its way.',
    text: "I'll get back to you within a day. In the meantime, feel free to look around.",
    cta: 'Back to the homepage',
  },
};

export const caseStudyUi = {
  back: 'All work',
  eyebrowPrefix: 'Case study',
  toc: 'On this page',
  sections: {
    overview: 'Overview',
    challenge: 'The challenge',
    built: 'What I built',
    outcomes: 'Outcomes',
    stack: 'Tech stack',
  },
  more: {
    eyebrow: 'More work',
    title: 'Four more apps on Google Play',
    text: "Device financing, gym management and bus travel: see everything I've shipped.",
    cta: 'Back to all work',
  },
};

export const notFound = {
  title: 'This page took a wrong turn.',
  text: "The page you're looking for doesn't exist or has moved.",
  cta: 'Back to the homepage',
};
