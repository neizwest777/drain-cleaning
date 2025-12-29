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
            {{ t('about.title', lang) }}
          </h1>
          <p class="text-xl text-blue-100">
            {{ t('about.intro', lang) }}
          </p>
        </div>
      </section>
      
      <!-- Content sections -->
      <section class="section bg-white">
        <div class="container-custom max-w-4xl">
          <div class="space-y-12">
            <!-- Experience -->
            <div class="card">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <i class="fas fa-medal text-blue-600 text-2xl"></i>
                  </div>
                </div>
                <div>
                  <h2 class="text-2xl font-bold mb-4">{{ t('about.experience.title', lang) }}</h2>
                  <p class="text-gray-700 leading-relaxed">
                    {{ t('about.experience.text', lang) }}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Equipment -->
            <div class="card">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <i class="fas fa-tools text-blue-600 text-2xl"></i>
                  </div>
                </div>
                <div>
                  <h2 class="text-2xl font-bold mb-4">{{ t('about.equipment.title', lang) }}</h2>
                  <p class="text-gray-700 leading-relaxed">
                    {{ t('about.equipment.text', lang) }}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Approach -->
            <div class="card">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <i class="fas fa-handshake text-blue-600 text-2xl"></i>
                  </div>
                </div>
                <div>
                  <h2 class="text-2xl font-bold mb-4">{{ t('about.approach.title', lang) }}</h2>
                  <p class="text-gray-700 leading-relaxed">
                    {{ t('about.approach.text', lang) }}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Guarantee -->
            <div class="card">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <i class="fas fa-certificate text-blue-600 text-2xl"></i>
                  </div>
                </div>
                <div>
                  <h2 class="text-2xl font-bold mb-4">{{ t('about.guarantee.title', lang) }}</h2>
                  <p class="text-gray-700 leading-relaxed">
                    {{ t('about.guarantee.text', lang) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Values grid -->
          <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center card">
              <i class="fas fa-heart text-4xl text-red-500 mb-4"></i>
              <h3 class="font-bold text-lg">{{ lang === 'et' ? 'Kliendikesksus' : 'Клиентоориентированность' }}</h3>
            </div>
            <div class="text-center card">
              <i class="fas fa-leaf text-4xl text-green-500 mb-4"></i>
              <h3 class="font-bold text-lg">{{ lang === 'et' ? 'Keskkonnasõbralikkus' : 'Экологичность' }}</h3>
            </div>
            <div class="text-center card">
              <i class="fas fa-shield-alt text-4xl text-blue-500 mb-4"></i>
              <h3 class="font-bold text-lg">{{ lang === 'et' ? 'Usaldusväärsus' : 'Надежность' }}</h3>
            </div>
          </div>
          
        </div>
      </section>
      
      <!-- Work Gallery as E-E-A-T Proof -->
      <WorkGallery 
        :title="lang === 'et' ? 'Meie kogemus piltides' : 'Наш опыт в фотографиях'"
        :subtitle="lang === 'et' ? 'Vaata meie viimaseid projekte - tõendus meie professionaalsusest' : 'Посмотрите наши последние проекты - доказательство нашего профессионализма'"
        :limit="6"
        :show-cta="true"
      />
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
import { contactsRoute } from '../index';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';
import { getBreadcrumbSchema } from '../shared/schemas';

const lang = ref<Language>('et');

const breadcrumbs = computed(() => [
  { name: t('breadcrumb.about', lang.value) }
]);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
  
  // Add Breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: window.location.origin },
    { name: t('breadcrumb.about', lang.value), url: window.location.href }
  ]);
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);
});
</script>