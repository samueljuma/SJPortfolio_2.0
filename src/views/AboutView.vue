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
        👋 Hi, I'm <strong>Samuel Juma</strong> — a Native Android Engineer based in Nairobi, Kenya.
        </p>
          <p class="mt-4">
           With <strong>3+ years</strong> of experience, I design and build high-quality, production-ready mobile apps using <strong>Kotlin</strong>, <strong>Jetpack Compose</strong>, and the full <strong>Jetpack</strong> suite.
          </p>
          <p class="mt-4">
            I follow clean architecture, <strong>MVVM</strong> patterns, and solid design principles to ensure scalable, maintainable codebases. I also integrate RESTful APIs seamlessly and optimize performance using <strong>Kotlin Coroutines</strong> and dependency injection with <strong>Ktor</strong>.
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
    company: 'BuuPass Inc.',
    role: 'Mobile Engineer',
    period: 'Jul 2024 – Present',
    description: 'Built a mobile ticketing systems, optimized legacy code (25% fewer crashes), and improved app performance by 30%.',
  },
  {
    company: 'PhillQins Hub',
    role: 'Software Engineer',
    period: 'May 2024 – Jul 2024',
    description: ' Responsible for architecting clean, maintainable codebases, integrating APIs, and delivering apps from concept to deployment.',
  },
  {
    company: 'Freelance',
    role: 'Native Android Developer',
    period: 'Jan 2023 – May 2024',
    description: 'Handled full app lifecycles including testing, optimization, and CI/CD. Achieved 95% post-launch stability.',
  },
  {
    company: 'PWD Gigs / EldoHub',
    role: 'Software Developer',
    period: 'Oct 2021 – Jan 2023',
    description: 'Developed accessible mobile apps & refactored core web code to reduce page loads by 30%.',
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
    description: 'Kotlin, Jetpack Compose, MVVM, Material Design 3, XML, KMM',
  },
  {
    title: 'Architecture & State Management',
    description: 'Clean Architecture, MVVM, MVI, Repository Pattern, ViewModel, Hilt, Koin, StateFlow, LiveData',
  },
  {
    title: 'API Integration & Data',
    description: 'Retrofit, Ktor, RESTful APIs, Gson, Moshi, Room, SqlDelight, DataStore',
  },
  {
    title: 'CI/CD & DevOps',
    description: 'GitHub Actions, Firebase App Distribution, Modularization, Agile, Git',
  },
  {
    title: 'Testing & Debugging',
    description: 'JUnit, MockK, Espresso, LeakCanary, Crashlytics, Android Profiler',
  },
  {
    title: 'Cloud & AI',
    description: 'Microsoft Azure, Azure AI APIs, Edge computing integrations on Android',
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
