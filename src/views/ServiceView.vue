<template>
  <section class="bg-gray-950 text-white py-16 px-6">
    <div class="max-w-6xl mx-auto" data-aos="fade-up">
      <h2 class="text-4xl font-bold text-sky-500 text-center mb-12" data-aos="fade-down" data-aos-delay="100">
        What I Provide
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-sky-500 transition-transform hover:-translate-y-2"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <div class="flip-card-front shadow-md p-4 flex flex-col justify-center items-center text-center">
              <font-awesome-icon
                v-if="service.icon"
                :icon="service.icon"
                class="text-sky-400 text-4xl mb-4"
              />
              <img
                v-else
                :src="service.image"
                :alt="service.title"
                class="w-16 h-16 mb-4 object-contain"
              />
          </div>
          <h3 class="text-xl font-semibold text-center text-sky-400 mb-2">{{ service.title }}</h3>
          <p class="text-sm text-gray-300 text-center">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const services = ref([
  {
    title: "Jetpack Compose UI",
    icon: null,
    image: new URL("../assets/techstack/jetpack_logo.png", import.meta.url).href,
    description: "Building intuitive and responsive Android UIs using Jetpack Compose and Material Design 3."
  },
  {
    title: "RESTful API Integration",
    image: new URL("../assets/techstack/rest_api.png", import.meta.url).href,
    icon: null,
    description: "Seamless data integration with secure token handling, error states, and offline sync using Retrofit/Ktor."
  },
  {
    title: "App Architecture (MVVM)",
    icon: ["fas", "cubes"],
    description: "Clean, scalable app design using MVVM, repository pattern, Hilt/Koin for DI, and modular codebases."
  },
  {
    title: "CI/CD Automation",
    image: new URL("../assets/techstack/ci_cd.webp", import.meta.url).href,
    icon: null,
    description: "Automated testing, builds, and releases with GitHub Actions, Firebase App Distribution, and Crashlytics."
  },
  {
    title: "Performance Optimization",
    image: new URL("../assets/techstack/perf.png", import.meta.url).href,
    icon: null,
    description: "Battery-efficient code, optimized layouts, and reduced memory usage for smooth experiences."
  },
  {
    title: "Secure & Testable Code",
    icon: ["fas", "cubes"],
    description: "Writing maintainable code with test coverage using JUnit, MockK, Espresso, and LeakCanary."
  }
]);

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.bg-gray-950 {
  background-color: #0e0e16;
}
</style>
