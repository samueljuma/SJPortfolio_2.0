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
          class="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-sky-500 transition-transform hover:-translate-y-2"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <div class="flex items-center justify-center w-16 h-16 bg-sky-500 rounded-full mx-auto mb-4">
            <img :src="service.icon" alt="Icon" class="w-8 h-8" />
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
    icon: "https://cdn-icons-png.flaticon.com/512/1821/1821089.png",
    description: "Building intuitive and responsive Android UIs using Jetpack Compose and Material Design 3."
  },
  {
    title: "RESTful API Integration",
    icon: "https://cdn-icons-png.flaticon.com/512/8443/8443836.png",
    description: "Seamless data integration with secure token handling, error states, and offline sync using Retrofit/Ktor."
  },
  {
    title: "App Architecture (MVVM)",
    icon: "https://cdn-icons-png.flaticon.com/512/4727/4727497.png",
    description: "Clean, scalable app design using MVVM, repository pattern, Hilt/Koin for DI, and modular codebases."
  },
  {
    title: "CI/CD Automation",
    icon: "https://cdn-icons-png.flaticon.com/512/7429/7429465.png",
    description: "Automated testing, builds, and releases with GitHub Actions, Firebase App Distribution, and Crashlytics."
  },
  {
    title: "Performance Optimization",
    icon: "https://cdn-icons-png.flaticon.com/512/992/992703.png",
    description: "Battery-efficient code, optimized layouts, and reduced memory usage for smooth experiences."
  },
  {
    title: "Secure & Testable Code",
    icon: "https://cdn-icons-png.flaticon.com/512/9742/9742084.png",
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
