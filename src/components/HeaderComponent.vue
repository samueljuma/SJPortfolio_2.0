<template>
  <!-- Desktop Navigation -->
  <div class="hidden lg:flex justify-between items-center py-5 px-12 bg-gray-800 border-b border-sky-500 shadow-sm">
    <router-link to="/" class="text-3xl font-bold text-sky-500 hover:scale-110 transition duration-300">
      Samuel J.
    </router-link>
    <ul class="flex space-x-10 text-sm font-medium tracking-widest">
      <li><router-link to="/" class="text-white hover:text-sky-500 transition uppercase">Home</router-link></li>
      <li><router-link to="/about" class="text-white hover:text-sky-500 transition uppercase">About</router-link></li>
      <li><router-link to="/service" class="text-white hover:text-sky-500 transition uppercase">Services</router-link></li>
      <li><router-link to="/contact" class="text-white hover:text-sky-500 transition uppercase">Contact</router-link></li>
     </ul>
  </div>

  <!-- Mobile Navigation Toggle -->
  <div class="lg:hidden fixed top-0 left-0 w-full z-[100] bg-gray-800 shadow-md">
    <div class="flex items-center justify-between px-6 py-4">
      <router-link to="/" class="text-2xl font-bold text-sky-500">
        Samuel J.
      </router-link>
      <button @click="toggleMobileSidebar" class="text-white text-3xl focus:outline-none">
        ☰
      </button>
    </div>
  </div>

  <!-- Mobile Sidebar -->
  <transition name="slide">
    <div
      v-if="mobileSidebarOpen"
      class="fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-gray-900 text-white z-[200] p-6 shadow-lg transition duration-300 ease-in-out"
    >
      <div class="flex justify-between items-center mb-10">
        <span class="text-xl font-bold text-sky-500">Menu</span>
        <button @click="toggleMobileSidebar" class="text-white text-2xl">×</button>
      </div>
      <ul class="space-y-6 text-lg font-semibold tracking-wide">
        <li><router-link to="/" @click="toggleMobileSidebar" class="hover:text-sky-500 uppercase">Home</router-link></li>
        <li><router-link to="/about" @click="toggleMobileSidebar" class="hover:text-sky-500 uppercase">About</router-link></li>
        <li><router-link to="/service" @click="toggleMobileSidebar" class="hover:text-sky-500 uppercase">Services</router-link></li>
        <li><router-link to="/contact" @click="toggleMobileSidebar" class="hover:text-sky-500 uppercase">Contact</router-link></li>
      </ul>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
const mobileSidebarOpen = ref(false);
const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value;
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
