<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('problems.title', lang) }}
        </h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(problem, index) in problems" 
          :key="index"
          class="card hover-lift cursor-pointer"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <i :class="problem.icon" class="text-red-600 text-xl"></i>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-lg mb-2">{{ problem.title }}</h3>
              <p class="text-gray-600 text-sm">{{ problem.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <a :href="`tel:+37253684587`" class="btn-primary inline-block">
          <i class="fas fa-phone mr-2"></i>
          {{ t('problems.cta', lang) }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');

const problems = computed(() => [
  {
    icon: 'fas fa-toilet',
    title: t('problems.wc', lang.value),
    description: lang.value === 'et' 
      ? 'Vesi ei lähe alla või tuleb tagasi WC-potis'
      : 'Вода не уходит или возвращается в унитазе'
  },
  {
    icon: 'fas fa-sink',
    title: t('problems.sink', lang.value),
    description: lang.value === 'et'
      ? 'Kraanikauss või vann aeglaselt tühjaks'
      : 'Раковина или ванна медленно опорожняется'
  },
  {
    icon: 'fas fa-shower',
    title: t('problems.shower', lang.value),
    description: lang.value === 'et'
      ? 'Duši äravool ei toimi korralikult'
      : 'Слив душа работает плохо'
  },
  {
    icon: 'fas fa-wind',
    title: t('problems.smell', lang.value),
    description: lang.value === 'et'
      ? 'Ebameeldiv lõhn kanalisatsioonist'
      : 'Неприятный запах из канализации'
  },
  {
    icon: 'fas fa-water',
    title: t('problems.overflow', lang.value),
    description: lang.value === 'et'
      ? 'Vesi tuleb tagasi teistest seadmetest'
      : 'Вода возвращается из других устройств'
  },
  {
    icon: 'fas fa-exclamation-triangle',
    title: t('problems.pipe', lang.value),
    description: lang.value === 'et'
      ? 'Toru leke või kahjustus'
      : 'Протечка или повреждение трубы'
  }
]);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  document.querySelectorAll('.card').forEach((el) => {
    observer.observe(el);
  });
});
</script>