<template>
  <nav class="container-custom py-4" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2 text-sm">
      <li>
        <a :href="indexRoute.url()" class="text-blue-600 hover:text-blue-800 transition-colors">
          <i class="fas fa-home mr-1"></i>
          {{ t('breadcrumb.home', lang) }}
        </a>
      </li>
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <i class="fas fa-chevron-right text-gray-400 mx-2 text-xs"></i>
        <a 
          v-if="item.url && index < items.length - 1" 
          :href="item.url" 
          class="text-blue-600 hover:text-blue-800 transition-colors"
        >
          {{ item.name }}
        </a>
        <span v-else class="text-gray-600">{{ item.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { indexRoute } from '../../index';
import { t, getCurrentLanguage, type Language } from '../../shared/i18n';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

defineProps<{
  items: BreadcrumbItem[];
}>();

const lang = ref<Language>('et');

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>