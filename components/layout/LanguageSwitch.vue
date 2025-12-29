<template>
  <div class="flex items-center space-x-2">
    <button
      @click="switchLanguage('et')"
      :class="['px-3 py-1 rounded font-medium transition-all', lang === 'et' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
    >
      ET
    </button>
    <button
      @click="switchLanguage('ru')"
      :class="['px-3 py-1 rounded font-medium transition-all', lang === 'ru' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
    >
      RU
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getCurrentLanguage, setLanguage, type Language } from '../../shared/i18n';

const lang = ref<Language>('et');

onMounted(() => {
  lang.value = getCurrentLanguage();
});

function switchLanguage(newLang: Language) {
  lang.value = newLang;
  setLanguage(newLang);
  
  // Dispatch custom event for other components
  window.dispatchEvent(new CustomEvent('languageChanged'));
  
  // Reload page to apply language change
  window.location.reload();
}
</script>