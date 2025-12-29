<template>
  <section class="section bg-gray-900 text-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('equipment.title', lang) }}
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          {{ t('equipment.desc', lang) }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(equipment, index) in equipmentList" 
          :key="index"
          class="text-center"
        >
          <div class="w-24 h-24 rounded-full bg-white bg-opacity-10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
            <i :class="equipment.icon" class="text-blue-400 text-4xl"></i>
          </div>
          <h3 class="font-bold text-lg mb-2">{{ equipment.title }}</h3>
          <p class="text-gray-400 text-sm">{{ equipment.description }}</p>
        </div>
      </div>
      
      <div class="mt-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center">
        <p class="text-xl mb-6">
          {{ lang === 'et' 
            ? 'Meie varustus võimaldab meil lahendada kõige keerukamaid ummistusi kiiresti ja efektiivselt' 
            : 'Наше оборудование позволяет нам быстро и эффективно решать самые сложные засоры' 
          }}
        </p>
        <a :href="contactsRoute.url()" class="btn-primary bg-white text-gray-900 hover:bg-gray-100 inline-block">
          {{ t('common.orderService', lang) }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { contactsRoute } from '../index';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');

const equipmentList = computed(() => [
  {
    icon: 'fas fa-wind',
    title: lang.value === 'et' ? 'Survepesu' : 'Гидродинамика',
    description: lang.value === 'et' 
      ? 'Kõrgsurve survepesu seadmed'
      : 'Оборудование высокого давления'
  },
  {
    icon: 'fas fa-video',
    title: lang.value === 'et' ? 'Videoinspektsioon' : 'Видеоинспекция',
    description: lang.value === 'et'
      ? 'Kaamera torude kontrolli jaoks'
      : 'Камера для проверки труб'
  },
  {
    icon: 'fas fa-cog',
    title: lang.value === 'et' ? 'Spiraalid' : 'Спирали',
    description: lang.value === 'et'
      ? 'Mehhanilised puhastustöriistad'
      : 'Механические инструменты'
  },
  {
    icon: 'fas fa-toolbox',
    title: lang.value === 'et' ? 'Tööriistakomplekt' : 'Набор инструментов',
    description: lang.value === 'et'
      ? 'Täielik professionaalne komplekt'
      : 'Полный профессиональный набор'
  }
]);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>