<template>
  <div class="container mx-auto bg-gray-950 w-full px-6 py-16 animate-fade-in">
    <!-- Intro Section -->
    <div class="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
      <img
        class="w-full max-w-md h-auto rounded-2xl mx-auto shadow-2xl object-cover"
        src="../assets/profile_pic.png"
        alt="Samuel Juma"
        data-aos="zoom-in"
      />
      <div class="text-white text-lg leading-relaxed">
        <p>
        👋 Hi, I'm <strong>Samuel Juma</strong> — an Android Engineer based in Nairobi, Kenya.
        </p>
          <p class="mt-4">
           With <strong>5 years</strong> of experience, I build and ship production Kotlin applications in <strong>fintech, insurtech and mobility</strong>, using <strong>Kotlin</strong>, <strong>Jetpack Compose</strong>, and the full <strong>Jetpack</strong> suite. I'm currently an Android Engineer at <strong>bolttech</strong>.
          </p>
          <p class="mt-4">
            I follow <strong>Clean Architecture</strong>, <strong>MVI</strong> and <strong>MVVM</strong> patterns across multi-module codebases, and build the internal tooling and design systems that let teams ship faster — from Gradle convention plugins to shared Compose design systems. I've owned apps end to end from first commit to Play Store release, and led a full product rebrand across multi-module codebases.
          </p>
          <p class="mt-4 italic text-sm text-sky-400">
            Architecture nerd. Battery optimizer. Clean code advocate.
          </p>
      </div>
    </div>

    <!-- Experience & Education -->
    <div class="grid md:grid-cols-2 gap-10 mt-24" data-aos="fade-up" data-aos-delay="200">
      <!-- Experience -->
      <div>
        <h2 class="text-2xl text-sky-500 font-bold mb-6">🧑‍💻 Experience</h2>
        <div class="space-y-6">
          <div v-for="(exp, index) in experiences" :key="index" class="flex items-start gap-4">
            <div class="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full">
              <span class="material-symbols-outlined text-sky-500">work</span>
            </div>
            <div class="text-white">
              <h3 class="font-bold text-lg">{{ exp.company }}</h3>
              <p class="text-sm text-sky-400">{{ exp.role }} • {{ exp.period }}</p>
              <p class="text-sm mt-1">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div>
        <h2 class="text-2xl text-sky-500 font-bold mb-6">🎓 Education</h2>
        <div class="space-y-6">
          <div v-for="(edu, index) in education" :key="index" class="flex items-start gap-4">
            <div class="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full">
              <span class="material-symbols-outlined text-sky-500">school</span>
            </div>
            <div class="text-white">
              <h3 class="font-bold text-lg">{{ edu.title }}</h3>
              <p class="text-sm text-gray-300">{{ edu.institution }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skill-Set -->
    <div class="bg-dark mt-24 p-10 rounded-2xl shadow-xl animate-fade-in-up">
      <h2 class="text-3xl font-bold text-white mb-10">🛠️ Skill-Set</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="skill in skills"
          :key="skill.title"
          class="bg-dark-lighter p-6 border-l-4 border-sky-500 rounded-lg shadow-md hover:scale-[1.02] transition-all"
        >
          <h3 class="text-white font-semibold text-lg">{{ skill.title }}</h3>
          <p class="text-gray-300 text-sm mt-2">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AOS from 'aos';

const experiences = [
  {
    company: 'bolttech (formerly mTek)',
    role: 'Android Engineer',
    period: 'May 2026 – Present',
    description: 'Led the end-to-end rebrand of the mTek insurance marketplace app to bolttech Kenya across a multi-module Kotlin codebase, shipping the new identity in a single Play Store release. Built a Gradle convention-plugin module centralizing dependency management across 21 feature modules, and shipped a shared Compose design-system module used across every screen.',
  },
  {
    company: 'BuuPass',
    role: 'Mobile Engineer',
    period: 'Sept 2023 – May 2026',
    description: 'Rebuilt the UI and booking flow of the BuuPass marketplace app, developed mobile point-of-sale ticketing for bus agents, and integrated M-Pesa payments via the Daraja API with instant digital ticketing. Introduced Firebase Crashlytics for production crash visibility.',
  },
  {
    company: 'PhillQins Hub',
    role: 'Android Developer',
    period: 'Jan 2023 – Sept 2023',
    description: 'Managed the full release lifecycle for client Android apps, including testing, debugging and Play Store submission. Profiled and optimized app performance through refactoring and memory-leak fixes.',
  },
  {
    company: 'PWD Gigs / EldoHub',
    role: 'Software Developer',
    period: 'Oct 2021 – Jan 2023',
    description: 'Refactored the organisation\'s primary website for performance and scalability, and built a companion mobile app extending its services to mobile users. Implemented WCAG accessibility standards — screen reader support, contrast and keyboard navigation.',
  }
];

const education = [
  {
    title: 'BSc. Mathematics and Computer Science',
    institution: 'Taita Taveta University (2016 – 2021)',
  },
  {
    title: 'Transformational Digital Leadership',
    institution: 'Thunderbird School of Global Management (2021)',
  },
  {
    title: 'Professional Foundations',
    institution: 'African Leadership Experience (Aug – Oct 2024)',
  }
];

const skills = [
  {
    title: 'Mobile Development',
    description: 'Kotlin, Java, Jetpack Compose, Android SDK, Material 3, Coroutines, Flow, WorkManager, Navigation',
  },
  {
    title: 'Architecture & Dependency Injection',
    description: 'Clean Architecture, MVI, MVVM, Multi-module architecture, Hilt, Koin, SOLID principles',
  },
  {
    title: 'Cross-platform',
    description: 'Kotlin Multiplatform (KMP/KMM), Compose Multiplatform',
  },
  {
    title: 'API Integration & Data',
    description: 'Retrofit, Ktor, RESTful APIs, M-Pesa Daraja API, Room, DataStore',
  },
  {
    title: 'Build & Delivery',
    description: 'Gradle, Gradle Convention Plugins, Version Catalogs, KSP, CI/CD, Google Play Console, Firebase (Crashlytics, Analytics, Remote Config)',
  },
  {
    title: 'Testing & Debugging',
    description: 'JUnit, MockK, Turbine, Espresso, Compose UI Testing, Android Profiler',
  }
];

onMounted(() => {
  AOS.refresh();
});
</script>

<style scoped>
.bg-dark {
  background-color: #0b0e13;
}
.bg-dark-lighter {
  background-color: #12151d;
}
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
}
.animate-fade-in {
  animation: fade-in 1.2s ease-in-out both;
}
.animate-fade-in-up {
  animation: fade-up 1.2s ease-in-out both;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-up {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
