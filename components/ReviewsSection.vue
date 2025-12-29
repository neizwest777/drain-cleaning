<template>
  <section class="section bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('reviews.title', lang) }}
        </h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(review, index) in reviews" 
          :key="index"
          class="card hover-lift"
        >
          <!-- Rating -->
          <div class="flex items-center mb-4">
            <i v-for="star in 5" :key="star" class="fas fa-star text-yellow-400"></i>
          </div>
          
          <!-- Review text -->
          <p class="text-gray-700 mb-4 italic">"{{ review.text }}"</p>
          
          <!-- Author -->
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              {{ review.name.charAt(0) }}
            </div>
            <div>
              <div class="font-bold">{{ review.name }}</div>
              <div class="text-sm text-gray-500">{{ review.location }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <div class="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
          <div class="flex">
            <i v-for="star in 5" :key="star" class="fas fa-star text-yellow-400"></i>
          </div>
          <span class="font-bold text-gray-900">5.0</span>
          <span class="text-gray-600">{{ lang === 'et' ? '(500+ arvustust)' : '(500+ отзывов)' }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');

const reviews = computed(() => [
  {
    text: lang.value === 'et'
      ? 'Kiire ja professionaalne teenus! Saabusid 25 minutiga ja lahendasid ummistuse kohe. Soovitan!'
      : 'Быстрый и профессиональный сервис! Приехали за 25 минут и сразу устранили засор. Рекомендую!',
    name: 'Maris K.',
    location: 'Kesklinn, Tallinn'
  },
  {
    text: lang.value === 'et'
      ? 'Väga heameelne meeskond. Selgitasid kõik ära ja hind oli täpselt nagu lubasid. Tänan!'
      : 'Очень приятная команда. Все объяснили и цена была точно как обещали. Спасибо!',
    name: 'Dmitri S.',
    location: 'Lasnamäe, Tallinn'
  },
  {
    text: lang.value === 'et'
      ? 'WC ummistus oli tõsine, kuid nemad lahendasid selle kiiresti. Kaasaegne varustus ja garantii. Nüüd tean keda kutsuda!'
      : 'Засор в унитазе был серьезный, но они быстро решили проблему. Современное оборудование и гарантия. Теперь знаю, кого вызывать!',
    name: 'Anna L.',
    location: 'Mustamäe, Tallinn'
  }
]);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>