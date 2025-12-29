<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('trust.title', lang) }}
        </h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(reason, index) in trustReasons" 
          :key="index"
          class="text-center card hover-lift"
        >
          <div class="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
            <i :class="reason.icon" class="text-white text-2xl"></i>
          </div>
          <h3 class="font-bold text-lg mb-2">{{ reason.title }}</h3>
          <p class="text-gray-600 text-sm">{{ reason.description }}</p>
        </div>
      </div>
      
      <!-- Stats -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
          <div class="text-gray-600">{{ lang === 'et' ? 'Rahulol klienti' : 'Довольных клиентов' }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
          <div class="text-gray-600">{{ lang === 'et' ? 'Valmisolek' : 'Готовность' }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">30</div>
          <div class="text-gray-600">{{ lang === 'et' ? 'Minutit' : 'Минут' }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</div>
          <div class="text-gray-600">{{ lang === 'et' ? 'Garantii' : 'Гарантия' }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');

const trustReasons = computed(() => [
  {
    icon: 'fas fa-medal',
    title: t('trust.experience', lang.value),
    description: lang.value === 'et' 
      ? 'Aastatepikkune kogemus ja tuhandeid lahendatud probleeme'
      : 'Многолетний опыт и тысячи решенных проблем'
  },
  {
    icon: 'fas fa-certificate',
    title: t('trust.quality', lang.value),
    description: lang.value === 'et'
      ? 'Kvaliteetsed materjalid ja töö garantii'
      : 'Качественные материалы и гарантия на работу'
  },
  {
    icon: 'fas fa-calculator',
    title: t('trust.price', lang.value),
    description: lang.value === 'et'
      ? 'Aus hind ilma varjatud kuludeta'
      : 'Честная цена без скрытых расходов'
  },
  {
    icon: 'fas fa-bolt',
    title: t('trust.fast', lang.value),
    description: lang.value === 'et'
      ? 'Saabume 30 minutiga ja töötame kiirelt'
      : 'Приезжаем за 30 минут и работаем быстро'
  }
]);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>