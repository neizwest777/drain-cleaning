<template>
  <a
    href="tel:+37253684587"
    class="sticky-button hidden md:flex items-center justify-center w-16 h-16"
    :aria-label="t('common.callNow', lang)"
    :title="t('common.callNow', lang)"
  >
    <i class="fas fa-phone text-2xl"></i>
  </a>
  
  <!-- Mobile version - full width bar -->
  <a
    href="tel:+37253684587"
    class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-green-500 text-white py-4 text-center font-bold text-lg shadow-2xl active:bg-green-600"
  >
    <i class="fas fa-phone mr-2"></i>
    {{ t('common.callNow', lang) }}: +372 5368 4587
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { t, getCurrentLanguage, type Language } from '../../shared/i18n';

const lang = ref<Language>('et');

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>