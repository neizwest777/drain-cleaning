<template>
  <section class="text-white section relative overflow-hidden">
    <!-- Background Image with High Priority Loading -->
    <img 
      src="https://usa.cdn-chatium.io/get/image_usa_lFWgnlczt9.1408x768.jpeg" 
      alt="Professional drain cleaning equipment and hydro jetting service in Tallinn"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      fetchpriority="high"
      loading="eager"
    />
    
    <!-- Dark Overlay for text readability -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
    
    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="fade-in">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {{ t('hero.title', lang) }}
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            {{ t('hero.subtitle', lang) }}
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              :href="`tel:+37253684587`" 
              class="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-center"
            >
              <i class="fas fa-phone mr-2"></i>
              {{ t('hero.cta', lang) }}
            </a>
            <a 
              :href="contactsRoute.url()" 
              class="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-center"
            >
              <i class="fas fa-envelope mr-2"></i>
              {{ t('nav.contacts', lang) }}
            </a>
          </div>
          
          <!-- Advantages -->
          <div class="flex flex-wrap items-center gap-6 text-sm md:text-base">
            <div class="flex items-center">
              <i class="fas fa-check-circle text-green-300 mr-2 text-xl"></i>
              <span>{{ lang === 'et' ? 'Saabume kiirelt' : 'Быстрый приезд' }}</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-check-circle text-green-300 mr-2 text-xl"></i>
              <span>{{ lang === 'et' ? 'Professionaalne varustus' : 'Профессиональное оборудование' }}</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-check-circle text-green-300 mr-2 text-xl"></i>
              <span>{{ lang === 'et' ? 'Läbipaistev hind' : 'Прозрачная цена' }}</span>
            </div>
          </div>
        </div>
        
        <!-- Hero Image/Illustration -->
        <div class="scale-in animation-delay-200 hidden lg:block">
          <div class="relative">
            <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white border-opacity-20">
              <i class="fas fa-tools text-9xl text-white opacity-50"></i>
            </div>
            
            <!-- Floating badges -->
            <div class="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-xl font-bold animate-bounce">
              24/7
            </div>
            <div class="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full shadow-xl font-bold">
              {{ lang === 'et' ? '30 min' : '30 мин' }}
            </div>
          </div>
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
  
  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  document.querySelectorAll('.fade-in, .scale-in, .slide-up').forEach((el) => {
    observer.observe(el);
  });
});
</script>