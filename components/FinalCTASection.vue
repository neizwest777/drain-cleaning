<template>
  <section class="gradient-secondary text-white section relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
    </div>
    
    <div class="container-custom relative z-10 text-center">
      <h2 class="text-3xl md:text-5xl font-bold mb-6">
        {{ t('finalCta.title', lang) }}
      </h2>
      <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
        {{ t('finalCta.subtitle', lang) }}
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          :href="`tel:+37253684587`" 
          class="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg"
        >
          <i class="fas fa-phone mr-2"></i>
          +372 5368 4587
        </a>
        <a 
          :href="contactsRoute.url()" 
          class="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-lg"
        >
          <i class="fas fa-envelope mr-2"></i>
          {{ lang === 'et' ? 'Või saada päring' : 'Или отправьте запрос' }}
        </a>
      </div>
      
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div class="flex items-center justify-center space-x-2">
          <i class="fas fa-clock text-2xl text-blue-300"></i>
          <span>24/7 {{ lang === 'et' ? 'valmisolek' : 'готовность' }}</span>
        </div>
        <div class="flex items-center justify-center space-x-2">
          <i class="fas fa-bolt text-2xl text-blue-300"></i>
          <span>30 {{ lang === 'et' ? 'minutit' : 'минут' }}</span>
        </div>
        <div class="flex items-center justify-center space-x-2">
          <i class="fas fa-shield-alt text-2xl text-blue-300"></i>
          <span>{{ lang === 'et' ? 'Garantii' : 'Гарантия' }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { contactsRoute } from '../index';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>