<template>
  <div>
    <Header />
    <StickyCallButton />
    
    <Breadcrumbs :items="breadcrumbs" />
    
    <main>
      <!-- Hero section -->
      <section class="gradient-primary text-white py-16">
        <div class="container-custom text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ t('pricing.title', lang) }}
          </h1>
          <p class="text-xl text-blue-100 max-w-2xl mx-auto">
            {{ t('pricing.subtitle', lang) }}
          </p>
        </div>
      </section>
      
      <!-- Pricing factors -->
      <section class="section bg-white">
        <div class="container-custom max-w-4xl">
          <h2 class="text-3xl font-bold text-center mb-8">
            {{ t('pricing.factors.title', lang) }}
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div v-for="(factor, index) in pricingFactors" :key="index" class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <i class="fas fa-check text-blue-600"></i>
                </div>
              </div>
              <div class="flex-1">
                <p class="text-gray-700">{{ factor }}</p>
              </div>
            </div>
          </div>
          
          <div class="card bg-blue-50 border-2 border-blue-200">
            <div class="flex items-start space-x-4">
              <i class="fas fa-info-circle text-blue-600 text-2xl flex-shrink-0 mt-1"></i>
              <p class="text-gray-700">
                {{ t('pricing.note', lang) }}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Service packages -->
      <section class="section bg-gray-50">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-12">
            {{ lang === 'et' ? 'Ligikaudsed hinnad' : 'Примерные цены' }}
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div v-for="(pkg, index) in packages" :key="index" class="card hover-lift text-center flex flex-col">
              <div class="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                <i :class="pkg.icon" class="text-white text-2xl"></i>
              </div>
              
              <h3 class="text-2xl font-bold mb-2">{{ pkg.title }}</h3>
              
              <div class="text-3xl font-bold text-blue-600 mb-4">
                {{ t('pricing.from', lang) }} €{{ pkg.priceFrom }}
              </div>
              
              <ul class="text-left space-y-2 mb-6 flex-grow">
                <li v-for="(item, i) in pkg.includes" :key="i" class="flex items-start space-x-2">
                  <i class="fas fa-check text-green-600 mt-1 flex-shrink-0"></i>
                  <span class="text-gray-700 text-sm">{{ item }}</span>
                </li>
              </ul>
              
              <a :href="`tel:+37253684587`" class="btn-primary w-full mt-auto">
                <i class="fas fa-phone mr-2"></i>
                {{ t('common.callNow', lang) }}
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA -->
      <FinalCTASection />
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import StickyCallButton from '../components/layout/StickyCallButton.vue';
import Breadcrumbs from '../components/layout/Breadcrumbs.vue';
import FinalCTASection from '../components/FinalCTASection.vue';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';
import { getBreadcrumbSchema } from '../shared/schemas';

const lang = ref<Language>('et');

const breadcrumbs = computed(() => [
  { name: t('breadcrumb.pricing', lang.value) }
]);

const pricingFactors = computed(() => [
  t('pricing.factor1', lang.value),
  t('pricing.factor2', lang.value),
  t('pricing.factor3', lang.value),
  t('pricing.factor4', lang.value)
]);

const packages = computed(() => [
  {
    icon: 'fas fa-home',
    title: lang.value === 'et' ? 'Põhipuhastus' : 'Базовая прочистка',
    priceFrom: 100,
    includes: lang.value === 'et'
      ? [
          'Sõit Tallinna piires',
          'Diagnostika',
          'Lihtne ummistus (WC, kraanikauss)',
          'Töö ja tööriistad',
          'Garantii'
        ]
      : [
          'Выезд в пределах Таллина',
          'Диагностика',
          'Простой засор (унитаз, раковина)',
          'Работа и инструменты',
          'Гарантия'
        ]
  },
  {
    icon: 'fas fa-wrench',
    title: lang.value === 'et' ? 'Keskmine' : 'Средняя',
    priceFrom: 150,
    includes: lang.value === 'et'
      ? [
          'Kõik põhipakett',
          'Keerukamate ummistuste lahendamine',
          'Survepesutehnika kasutamine',
          'Kuni 20m torustiku puhastus',
          'Pikendatud garantii'
        ]
      : [
          'Все из базового пакета',
          'Решение сложных засоров',
          'Использование гидродинамики',
          'Прочистка до 20м трубопровода',
          'Расширенная гарантия'
        ]
  },
  {
    icon: 'fas fa-star',
    title: lang.value === 'et' ? 'Premium' : 'Премиум',
    priceFrom: 200,
    includes: lang.value === 'et'
      ? [
          'Kõik keskmine pakett',
          'Videoinspektsioon',
          'Pikemad torustikud',
          'Detailne aruanne',
          'Ennetava hoolduse soovitused',
          'Maksimaalne garantii'
        ]
      : [
          'Все из среднего пакета',
          'Видеоинспекция',
          'Длинные трубопроводы',
          'Подробный отчет',
          'Рекомендации по профилактике',
          'Максимальная гарантия'
        ]
  }
]);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
  
  // Add Breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: window.location.origin },
    { name: t('breadcrumb.pricing', lang.value), url: window.location.href }
  ]);
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);
});
</script>