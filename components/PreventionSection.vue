<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            {{ t('prevention.title', lang) }}
          </h2>
          
          <div class="space-y-4 mb-8">
            <div v-for="(rule, index) in preventionRules" :key="index" class="flex items-start space-x-3">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <i class="fas fa-check text-green-600"></i>
                </div>
              </div>
              <p class="text-gray-700">{{ rule }}</p>
            </div>
          </div>
          
          <a :href="contactsRoute.url()" class="btn-primary inline-block">
            {{ lang === 'et' ? 'Telli ennetav hooldus' : 'Заказать профилактику' }}
          </a>
        </div>
        
        <div class="card bg-red-50 border-2 border-red-200">
          <h3 class="font-bold text-xl mb-4 flex items-center text-red-600">
            <i class="fas fa-ban mr-3 text-2xl"></i>
            {{ t('prevention.dontFlush', lang) }}
          </h3>
          
          <ul class="space-y-3">
            <li v-for="(item, index) in dontFlushItems" :key="index" class="flex items-center space-x-3">
              <i class="fas fa-times-circle text-red-500"></i>
              <span class="text-gray-700">{{ item }}</span>
            </li>
          </ul>
          
          <div class="mt-6 p-4 bg-white rounded-lg">
            <p class="text-sm text-gray-600 font-medium">
              {{ lang === 'et' 
                ? '💡 Meeldetuletus: WC-sse ainult tualettpaber ja inimese jäätmed!' 
                : '💡 Напоминание: в унитаз только туалетная бумага и продукты жизнедеятельности!' 
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { contactsRoute } from '../index';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');

const preventionRules = computed(() => [
  t('prevention.rule1', lang.value),
  t('prevention.rule2', lang.value),
  t('prevention.rule3', lang.value),
  t('prevention.rule4', lang.value)
]);

const dontFlushItems = computed(() => [
  t('prevention.item1', lang.value),
  t('prevention.item2', lang.value),
  t('prevention.item3', lang.value),
  t('prevention.item4', lang.value),
  t('prevention.item5', lang.value),
  t('prevention.item6', lang.value)
]);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>