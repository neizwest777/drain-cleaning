<template>
  <div>
    <Header />
    
    <main class="section bg-white min-h-screen flex items-center">
      <div class="container-custom text-center">
        <div class="max-w-2xl mx-auto">
          <div class="text-9xl mb-8">🔧</div>
          <h1 class="text-6xl font-bold mb-6 text-gray-900">404</h1>
          <h2 class="text-3xl font-bold mb-4 text-gray-800">
            {{ t('404.title', lang) }}
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            {{ t('404.text', lang) }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="indexRoute.url()" class="btn-primary">
              <i class="fas fa-home mr-2"></i>
              {{ t('404.home', lang) }}
            </a>
            <a :href="`tel:+37253684587`" class="btn-secondary">
              <i class="fas fa-phone mr-2"></i>
              {{ t('common.callNow', lang) }}
            </a>
          </div>
        </div>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import { indexRoute } from '../index';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>