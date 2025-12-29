<template>
  <section class="section bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('services.title', lang) }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ lang === 'et' 
            ? 'Pakume täielikku teenuste valikut kanalisatsioonisüsteemide hoolduseks' 
            : 'Предлагаем полный спектр услуг по обслуживанию канализационных систем' 
          }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="card hover-lift"
        >
          <div class="text-center">
            <div class="w-20 h-20 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
              <i :class="service.icon" class="text-white text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <a :href="servicesRoute.url()" class="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
              {{ t('common.learnMore', lang) }}
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <a :href="servicesRoute.url()" class="btn-secondary inline-block">
          {{ lang === 'et' ? 'Kõik teenused' : 'Все услуги' }}
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { servicesRoute } from '../index';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');

const services = computed(() => [
  {
    icon: 'fas fa-toilet',
    title: t('services.wc.title', lang.value),
    description: t('services.wc.desc', lang.value)
  },
  {
    icon: 'fas fa-sink',
    title: t('services.sink.title', lang.value),
    description: t('services.sink.desc', lang.value)
  },
  {
    icon: 'fas fa-water',
    title: t('services.sewer.title', lang.value),
    description: t('services.sewer.desc', lang.value)
  },
  {
    icon: 'fas fa-video',
    title: t('services.inspection.title', lang.value),
    description: t('services.inspection.desc', lang.value)
  },
  {
    icon: 'fas fa-shield-alt',
    title: t('services.prevention.title', lang.value),
    description: t('services.prevention.desc', lang.value)
  },
  {
    icon: 'fas fa-ambulance',
    title: t('services.emergency.title', lang.value),
    description: t('services.emergency.desc', lang.value)
  }
]);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>