<template>
  <div class="bg-gray-950 w-full font-sans">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white py-32 text-center animate-fade-in"
    >
      <div class="container mx-auto px-4">
        <h1 class="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
          👋 Hi, I'm <span class="text-sky-500">Samuel Juma</span>
        </h1>
        <p class="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto mb-6">
          A Native Android Engineer building smooth Kotlin apps with Compose, Clean
          Architecture & performance-driven code.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button
            @click="goToServicePage"
            class="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 hover:scale-105"
          >
            🚀 View My Work
          </button>
          <a
            href="../../public/resume.pdf"
            download
            class="border border-sky-500 hover:bg-sky-500 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 hover:scale-105"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section
      class="py-20 bg-gray-900 text-white px-6 md:px-20 animate-fade-in-up"
    >
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="../assets/profile_pic.png"
          alt="Samuel Juma"
          class="rounded-3xl w-72 h-72 mx-auto shadow-lg object-cover border-4 border-sky-500"
        />
        <div>
          <h2 class="text-3xl font-bold text-sky-500 mb-4">About Me</h2>
          <p class="text-lg leading-relaxed">
            I’m a Native Android Engineer with 3+ years of experience designing
            and building high-quality, production-ready mobile applications
            using Kotlin. My approach to development combines clean
            architecture, MVVM, and robust design principles ensuring
            every project is scalable and maintainable.
          </p>
          <p class="mt-4 text-lg leading-relaxed">
            I build with Jetpack Compose, leverage the full Jetpack library
            suite, and integrate seamlessly with RESTful APIs to deliver fast,
            intuitive, and impactful user experiences.
          </p>
          <p class="mt-4 text-sky-300 text-sm italic">
            My goal? To craft apps that not only function beautifully but scale
            with business goals and deliver real value to users.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="bg-gray-950 text-white py-20 animate-fade-in-up">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-sky-500">What I Can Do For You</h2>
        <p class="text-gray-400 mt-2">
          Your Android journey — built from idea to Google Play delivery.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8 md:px-16">
        <div
          class="bg-gray-800 rounded-xl text-center p-6 hover:shadow-lg hover:scale-105 transition"
        >
          <span class="material-symbols-outlined text-sky-500 text-4xl"
            >draw</span
          >
          <h3 class="text-xl font-semibold mt-4">Design Implementation</h3>
          <p class="text-gray-400 mt-2">
            Pixel-perfect UI from Figma using Jetpack Compose & Material 3.
          </p>
        </div>
        <div
          class="bg-gray-800 rounded-xl text-center p-6 hover:shadow-lg hover:scale-105 transition"
        >
          <span class="material-symbols-outlined text-sky-500 text-4xl"
            >sync_alt</span
          >
          <h3 class="text-xl font-semibold mt-4">API Integration</h3>
          <p class="text-gray-400 mt-2">
            Secure APIs using Retrofit, Ktor & token-based authentication.
          </p>
        </div>
        <div
          class="bg-gray-800 rounded-xl text-center p-6 hover:shadow-lg hover:scale-105 transition"
        >
          <span class="material-symbols-outlined text-sky-500 text-4xl"
            >published_with_changes</span
          >
          <h3 class="text-xl font-semibold mt-4">CI/CD Pipelines</h3>
          <p class="text-gray-400 mt-2">
            Automated builds/releases via GitHub Actions & Firebase Dist.
          </p>
        </div>
        <div
          class="bg-gray-800 rounded-xl text-center p-6 hover:shadow-lg hover:scale-105 transition"
        >
          <span class="material-symbols-outlined text-sky-500 text-4xl"
            >speed</span
          >
          <h3 class="text-xl font-semibold mt-4">Performance Tuning</h3>
          <p class="text-gray-400 mt-2">
            Battery-aware code, modularization, and performance profiling.
          </p>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <!-- Creative Tech Stack Flip Cards -->
    <section
      class="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden"
    >
      <div class="text-center mb-16 px-6">
        <h2 class="text-4xl font-bold text-sky-400 mb-4">Tech I Work With</h2>
        <p class="text-gray-400">
          Modern Android tools & libraries that empower the apps I build.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 sm:px-12">
        <div
          v-for="(tech, index) in techStack"
          :key="index"
          class="flip-card group perspective"
        >
          <div
            class="flip-card-inner group-hover:rotate-y-180 duration-700 ease-in-out"
          >
            <!-- Front -->
            <div
              class="flip-card-front bg-gray-800/60 rounded-xl shadow-md p-6 flex flex-col justify-center items-center text-center"
            >
              <!-- Show icon if it exists -->
              <font-awesome-icon
                v-if="tech.icon"
                :icon="tech.icon"
                class="text-sky-400 text-4xl mb-4"
              />

              <!-- Otherwise, show image -->
              <img
                v-else
                :src="tech.image"
                :alt="tech.name"
                class="w-16 h-16 mb-4 object-contain"
              />

              <h3 class="text-lg font-bold text-sky-300 mb-1">
                {{ tech.name }}
              </h3>
              <p class="text-gray-300 text-sm opacity-80">{{ tech.desc }}</p>
            </div>

            <!-- Back -->
            <div
              class="flip-card-back bg-sky-600 rounded-xl shadow-md p-6 flex flex-col justify-center items-center text-center"
            >
              <h3 class="text-lg font-bold text-white mb-1">{{ tech.name }}</h3>
              <p class="text-white text-sm">
                {{
                  tech.back ||
                  "Powerful, scalable & built for Android excellence."
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goToServicePage = () => router.push("/work");
const techStack = [
  {
    name: "Kotlin",
    desc: "Modern, expressive & my go-to for Android dev.",
    image: new URL("../assets/techstack/kotlin_lg.png", import.meta.url).href,
  },
  {
    name: "Jetpack Compose",
    desc: "Declarative UI for sleek, reactive Android UIs.",
    image: new URL("../assets/techstack/jetpack_logo.png", import.meta.url).href,
  },
  {
    name: "MVVM Architecture",
    desc: "Separation of concerns + DI for scalable apps.",
    icon: ["fas", "cubes"],
    image: new URL("../assets/techstack/kotlin_lg.png", import.meta.url).href,
  },
  {
    name: "Ktor",
    desc: "RESTful networking with token auth & error handling.",
    image: new URL("../assets/techstack/ktor_logo.png", import.meta.url).href,
  },
  {
    name: "Koin",
    desc: "Dependency injection made simple & testable.",
    image: new URL("../assets/techstack/koin_logo.png", import.meta.url).href,
  },
  {
    name: "Firebase",
    desc: "Auth, Realtime DB, crashlytics & analytics.",
    image: new URL("../assets/techstack/firebase_logo.png", import.meta.url)
      .href,
  },
  {
    name: "Room & DataStore",
    desc: "Local storage that works seamlessly.",
    icon: ["fas", "database"],
    image: new URL("../assets/techstack/kotlin_lg.png", import.meta.url).href,
  },
  {
    name: "GitHub Actions",
    desc: "CI/CD pipelines for smooth deployments.",
    icon: ["fab", "github"],
    image: new URL("../assets/techstack/kotlin_lg.png", import.meta.url).href,
  },
];
</script>

<style scoped>
.material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
.perspective {
  perspective: 1200px;
}
.flip-card {
  width: 100%;
  height: 250px;
}
.flip-card-inner {
  transition: transform 0.8s;
  transform-style: preserve-3d;
  position: relative;
  height: 100%;
}
.group-hover\:rotate-y-180:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flip-card-front {
  background: rgba(31, 41, 55, 0.6);
  backdrop-filter: blur(12px);
  z-index: 2;
}
.flip-card-back {
  transform: rotateY(180deg);
  background-color: #0284c7;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1.2s ease-in-out both;
}
.animate-fade-in-up {
  animation: fade-in 1.5s ease-in-out both;
}
</style>
