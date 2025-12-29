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
            {{ t('services.title', lang) }}
          </h1>
          <p class="text-xl text-blue-100 max-w-2xl mx-auto">
            {{ lang === 'et' 
              ? 'Täielik teenuste valik kanalisatsioonisüsteemide hoolduseks ja remondiks' 
              : 'Полный спектр услуг по обслуживанию и ремонту канализационных систем' 
            }}
          </p>
        </div>
      </section>
      
      <!-- Services grid -->
      <section class="section bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              v-for="(service, index) in detailedServices" 
              :key="index"
              :id="service.id"
              class="card hover-lift"
            >
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                    <i :class="service.icon" class="text-white text-2xl"></i>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-2xl font-bold mb-3">{{ service.title }}</h2>
                  <p class="text-gray-600 mb-4">{{ service.description }}</p>
                  
                  <h3 class="font-bold mb-2">{{ lang === 'et' ? 'Mida see sisaldab:' : 'Что включает:' }}</h3>
                  <ul class="space-y-2 mb-4">
                    <li v-for="(item, i) in service.includes" :key="i" class="flex items-start space-x-2">
                      <i class="fas fa-check text-green-600 mt-1"></i>
                      <span class="text-gray-700">{{ item }}</span>
                    </li>
                  </ul>
                  
                  <a :href="`tel:+37253684587`" class="btn-primary inline-block">
                    <i class="fas fa-phone mr-2"></i>
                    {{ t('common.callNow', lang) }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Service areas -->
      <section class="section bg-gray-50">
        <div class="container-custom">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">
            {{ t('areas.title', lang) }}
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div class="card">
              <h3 class="font-bold text-xl mb-4 flex items-center">
                <i class="fas fa-city text-blue-600 mr-3"></i>
                {{ t('areas.tallinn', lang) }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="district in tallinnDistricts" :key="district" class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {{ district }}
                </span>
              </div>
            </div>
            
            <div class="card">
              <h3 class="font-bold text-xl mb-4 flex items-center">
                <i class="fas fa-map-marked-alt text-blue-600 mr-3"></i>
                {{ t('areas.harjumaa', lang) }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="city in harjumaaCities" :key="city" class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {{ city }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Work Gallery -->
      <WorkGallery 
        :title="lang === 'et' ? 'Tööde näited' : 'Примеры работ'"
        :limit="6" 
        :show-cta="false" 
      />
      
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
import WorkGallery from '../components/WorkGallery.vue';
import FinalCTASection from '../components/FinalCTASection.vue';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';
import { getServiceSchema, getBreadcrumbSchema } from '../shared/schemas';

const lang = ref<Language>('et');

const breadcrumbs = computed(() => [
  { name: t('breadcrumb.services', lang.value) }
]);

const tallinnDistricts = ['Kesklinn', 'Kristiine', 'Lasnamäe', 'Mustamäe', 'Nõmme', 'Pirita', 'Põhja-Tallinn', 'Haabersti'];
const harjumaaCities = ['Viimsi', 'Maardu', 'Keila', 'Saue', 'Paldiski', 'Loksa'];

const detailedServices = computed(() => [
  {
    id: 'wc',
    icon: 'fas fa-toilet',
    title: t('services.wc.title', lang.value),
    description: t('services.wc.desc', lang.value),
    includes: lang.value === 'et' 
      ? [
          'Kiire diagnostika ja probleemi tuvastamine',
          'Mehaaniline või survepesu puhastus',
          'Videoinspektsioon vajadusel',
          'Garantii tehtud tööle'
        ]
      : [
          'Быстрая диагностика и выявление проблемы',
          'Механическая или гидродинамическая прочистка',
          'Видеоинспекция при необходимости',
          'Гарантия на выполненные работы'
        ]
  },
  {
    id: 'sink',
    icon: 'fas fa-sink',
    title: t('services.sink.title', lang.value),
    description: t('services.sink.desc', lang.value),
    includes: lang.value === 'et'
      ? [
          'Kraanikausi ja vannide puhastus',
          'Sifonide puhastamine ja vahetamine',
          'Duši äravoolude puhastus',
          'Professionaalsed tööriistad'
        ]
      : [
          'Прочистка раковин и ванн',
          'Чистка и замена сифонов',
          'Прочистка душевых сливов',
          'Профессиональное оборудование'
        ]
  },
  {
    id: 'sewer',
    icon: 'fas fa-water',
    title: t('services.sewer.title', lang.value),
    description: t('services.sewer.desc', lang.value),
    includes: lang.value === 'et'
      ? [
          'Kõrgsurve survepesu',
          'Kõigi torude puhastus',
          'Rasvakihtide ja sadestiste eemaldamine',
          'Ennetav hooldus'
        ]
      : [
          'Гидродинамическая промывка высокого давления',
          'Прочистка всех труб',
          'Удаление жировых отложений и наслоений',
          'Профилактическое обслуживание'
        ]
  },
  {
    id: 'inspection',
    icon: 'fas fa-video',
    title: t('services.inspection.title', lang.value),
    description: t('services.inspection.desc', lang.value),
    includes: lang.value === 'et'
      ? [
          'Kaamera inspektsioon torudes',
          'Probleemide täpne lokaliseerimine',
          'Video salvestus tulemustega',
          'Detailne aruanne'
        ]
      : [
          'Камерная инспекция в трубах',
          'Точная локализация проблем',
          'Видеозапись результатов',
          'Подробный отчет'
        ]
  },
  {
    id: 'prevention',
    icon: 'fas fa-shield-alt',
    title: t('services.prevention.title', lang.value),
    description: t('services.prevention.desc', lang.value),
    includes: lang.value === 'et'
      ? [
          'Regulaarne kanalisatsiooni puhastus',
          'Probleemide ennetamine',
          'Pikendame torustiku eluiga',
          'Paindlikud graafikud'
        ]
      : [
          'Регулярная прочистка канализации',
          'Предотвращение проблем',
          'Продление срока службы трубопроводов',
          'Гибкие графики'
        ]
  },
  {
    id: 'emergency',
    icon: 'fas fa-ambulance',
    title: t('services.emergency.title', lang.value),
    description: t('services.emergency.desc', lang.value),
    includes: lang.value === 'et'
      ? [
          '24/7 valmisolek',
          'Kiire reageerimine (30 minutit)',
          'Hädaolukordade lahendamine',
          'Alati valmis aitama'
        ]
      : [
          'Готовность 24/7',
          'Быстрое реагирование (30 минут)',
          'Решение чрезвычайных ситуаций',
          'Всегда готовы помочь'
        ]
  }
]);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
  
  // JSON-LD schemas (Service, BreadcrumbList) are already server-side rendered in index.tsx
  // No need to add them again here to avoid duplication
});
</script>