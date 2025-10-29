<template>
  <section class="bg-gray-950 text-white py-20 px-6">
    <div class="max-w-6xl mx-auto" data-aos="fade-up">
      <!-- Header -->
      <h2 class="text-4xl font-bold text-center text-sky-500 mb-6">Let's Work Together</h2>
      <p class="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        Have a project in mind, a product idea, or just want to collaborate on mobile solutions?
        I'm ready to help you build scalable Android experiences that matter.
      </p>

      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Contact Form -->
        <div class="lg:col-span-2 bg-gray-900 p-8 rounded-xl shadow-lg animate-fade-in-up">
          <form
            action="https://formsubmit.co/samueljuma1024@gmail.com"
            method="POST"
            class="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:border-sky-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:border-sky-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:border-sky-500 h-32"
            ></textarea>
            <button
              type="submit"
              class="w-full bg-sky-500 hover:bg-sky-600 transition font-bold py-3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6 animate-fade-in-up">
          <div class="bg-sky-500 p-6 rounded-lg text-black flex items-center gap-4">
            <span class="material-symbols-outlined text-3xl">mail</span>
            <div>
              <h3 class="font-bold">Email</h3>
              <p class="text-sm">samueljuma1024@gmail.com</p>
            </div>
          </div>
          <div class="bg-gray-900 p-6 rounded-lg flex items-center gap-4">
            <span class="material-symbols-outlined text-sky-500 text-3xl">call</span>
            <div>
              <h3 class="font-bold">Phone</h3>
              <p class="text-sm text-gray-300">+254 798 114 462</p>
            </div>
          </div>
          <div class="bg-gray-900 p-6 rounded-lg flex items-center gap-4">
            <span class="material-symbols-outlined text-sky-500 text-3xl">location_on</span>
            <div>
              <h3 class="font-bold">Location</h3>
              <p class="text-sm text-gray-300">Nairobi, Kenya</p>
            </div>
          </div>
          <div class="bg-gray-900 p-6 rounded-lg flex items-center gap-4">
            <span class="material-symbols-outlined text-sky-500 text-3xl">link</span>
            <div class="space-y-1 text-sm text-gray-300">
              <a href="https://linkedin.com/in/samueljuma" target="_blank" class="hover:text-sky-400">LinkedIn</a><br />
              <a href="https://github.com/samueljuma" target="_blank" class="hover:text-sky-400">GitHub</a><br />
              <a href="https://wa.me/254798114462" target="_blank" class="hover:text-sky-400">WhatsApp</a><br />
              <a href="https://x.com/_jumasamuel" target="_blank" class="hover:text-sky-400">X (Twitter)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}
</style>
