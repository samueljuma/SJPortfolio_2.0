<template>
  <section class="bg-gray-950 text-white py-20 px-6">
    <div class="max-w-7xl mx-auto" data-aos="fade-up">
      <h2 class="text-4xl font-bold text-center mb-6 text-white" data-aos="fade-down">
        🚀 Featured Projects
      </h2>
      <p class="text-center max-w-3xl mx-auto text-gray-400 mb-14 text-lg" data-aos="fade-up" data-aos-delay="150">
        Explore some of the mobile apps I’ve built — carefully engineered with clean architecture, performance tuning, and intuitive UI/UX that users love.
      </p>

      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 hover:shadow-sky-600 transform transition-all duration-300 hover:-translate-y-2"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <div class="relative group">
            <img
              :src="project.image"
              alt="Project image"
              class="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-sky-400 mb-1">{{ project.title }}</h3>
            <p class="text-gray-300 text-sm leading-relaxed">{{ project.description }}</p>
            <div class="flex flex-wrap gap-3 mt-4">
              <a
                v-if="project.githubLink"
                :href="project.githubLink"
                target="_blank"
                class="bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold py-2 px-4 rounded-md"
              >
                View Code
              </a>
              <a
                v-if="project.playStoreLink"
                :href="project.playStoreLink"
                target="_blank"
                class="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold py-2 px-4 rounded-md"
              >
                Play Store
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="200">
        <a
          href="https://github.com/samueljuma"
          target="_blank"
          class="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-sky-500"
        >
          See All Projects →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({ once: true });
});

const placeholderImage = "https://via.placeholder.com/600x400?text=Project+Preview";

const projects = ref([
  {
    id: 1,
    title: "GMS",
    image: new URL ('../assets/projects/gms_fg.png', import.meta.url).href,
    description:
      "GMS (Gym Management System) is a powerful mobile tool built for gym Admins and Trainers to efficiently manage daily gym operations. From user records to payment tracking and attendance logs, GMS helps streamline your workflows — all from your phone.",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.samueljuma.gmsmobile",
  },
  {
    id: 2,
    title: "Soores",
    image: "https://res.cloudinary.com/du1q1vzeu/image/upload/v1761727259/soores_gf_x2uaxy.png",
    description:
      "The official bus-booking App for Soores. Whether you’re planning a quick one-way trip or a convenient return journey, Soores puts every option at your fingertips.",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.buupass.soores_marketplace",
  },
  {
    id: 3,
    title: "Quick Shuttle",
    image: "https://res.cloudinary.com/du1q1vzeu/image/upload/v1761727939/quick_fg_lodj3z.png",
    description:
      "QuickShuttle BMS is the official agent application for managing bus travel bookings and parcel services with QuickShuttle. Designed specifically for QuickShuttle agents, the app provides a fast, reliable, and secure way to serve customers who intend to travel or send/receive parcels.",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.buupass.quickshuttle",
  },
]);
</script>

<style scoped>
</style>
