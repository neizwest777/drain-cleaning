<template>
  <section class="section bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('myths.title', lang) }}
        </h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(myth, index) in myths" 
          :key="index"
          class="card"
        >
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <i class="fas fa-times text-red-600 text-xl"></i>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-lg mb-2 text-red-600">{{ myth.myth }}</h3>
              <div class="flex items-start space-x-2 mt-4">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <i class="fas fa-check text-green-600"></i>
                  </div>
                </div>
                <div>
                  <strong class="text-green-600">{{ lang === 'et' ? 'Tõde:' : 'Правда:' }}</strong>
                  <p class="text-gray-600 mt-1">{{ myth.truth }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');

const myths = computed(() => [
  {
    myth: lang.value === 'et' 
      ? 'Kuumaвода lahendab ummistuse' 
      : 'Горячая вода решит засор',
    truth: lang.value === 'et'
      ? 'Kuuma vesi võib aidata rasva puhul, kuid ei lahenda tõsiseid ummistusi. Vajate профессionaalset survepesu.'
      : 'Горячая вода может помочь при жире, но не решит серьезные засоры. Нужна профессиональная прочистка.'
  },
  {
    myth: lang.value === 'et'
      ? 'Keemilised tooted on alati ohutud'
      : 'Химические средства всегда безопасны',
    truth: lang.value === 'et'
      ? 'Keemilised tooted võivad kahjustada torusid ja keskonnale. Professionaalne mehaaniline puhastus on ohutum.'
      : 'Химические средства могут повредить трубы и вредны для окружающей среды. Профессиональная механическая прочистка безопаснее.'
  },
  {
    myth: lang.value === 'et'
      ? 'Kõik ummistused on ühesugused'
      : 'Все засоры одинаковы',
    truth: lang.value === 'et'
      ? 'Iga ummistus on erinev ja vajab individuaalset lähenemist. Diagnost määrame parima meetodi.'
      : 'Каждый засор уникален и требует индивидуального подхода. При диагностике определяем лучший метод.'
  },
  {
    myth: lang.value === 'et'
      ? 'Ummistust saab alati ise lahendada'
      : 'Засор всегда можно устранить самому',
    truth: lang.value === 'et'
      ? 'Mõned ummistused võivad süveneda DIY meetoditega. Professionaalne abi säästab aega ja raha.'
      : 'Некоторые засоры могут усугубиться при самостоятельных попытках. Профессиональная помощь экономит время и деньги.'
  }
]);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>