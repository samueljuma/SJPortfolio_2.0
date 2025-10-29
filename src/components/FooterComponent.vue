<template>
  <footer class="bg-gray-900 text-white py-16 px-6 md:px-20">
    <div class="grid md:grid-cols-3 gap-10">
      <!-- About Samuel -->
      <div>
        <h3 class="text-sky-500 text-xl font-bold mb-4">About Me</h3>
        <p class="text-sm text-gray-300 leading-relaxed">
          I'm Samuel Juma — a Native Android Engineer crafting robust, scalable, and intuitive Android apps using Kotlin, Jetpack Compose, and clean architecture. I focus on performance, user experience, and maintainability.
        </p>
      </div>

      <!-- What I Do -->
      <div>
        <h3 class="text-sky-500 text-xl font-bold mb-4">What I Do</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li>→ Jetpack Compose UI Engineering</li>
          <li>→ REST API Integration with Ktor/Retrofit</li>
          <li>→ CI/CD Pipelines & App Distribution</li>
          <li>→ Scalable MVVM Architecture</li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-sky-500 text-xl font-bold mb-4">Get in Touch</h3>
        <ul class="space-y-3 text-sm text-gray-300">
          <li class="flex items-center gap-2">
            <span class="material-symbols-outlined text-sky-500">location_on</span>
            Nairobi, Kenya
          </li>
          <li class="flex items-center gap-2">
            <span class="material-symbols-outlined text-sky-500">call</span>
            +254 798 114 462
          </li>
          <li class="flex items-center gap-2">
            <span class="material-symbols-outlined text-sky-500">mail</span>
            samueljuma1024@gmail.com
          </li>
        </ul>

        <!-- Socials -->
        <div class="mt-6">
          <h4 class="text-sky-500 text-sm font-semibold mb-2">Social Links</h4>
          <div class="flex items-center space-x-4">
            <a href="https://linkedin.com/in/samueljuma/" target="_blank" aria-label="LinkedIn">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" class="text-sky-500 text-xl hover:scale-110 transition" />
            </a>
            <a href="https://wa.me/254798114462" target="_blank" aria-label="WhatsApp">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-sky-500 text-xl hover:scale-110 transition" />
            </a>
            <a href="https://x.com/_jumasamuel" target="_blank" aria-label="Twitter">
              <font-awesome-icon :icon="['fab', 'x-twitter']" class="text-sky-500 text-xl hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Line -->
    <div class="mt-12 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
      © {{ new Date().getFullYear() }} Samuel Juma. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
.icon {
  transition: transform 0.3s;
}
.icon:hover {
  transform: scale(1.2);
}
</style>
