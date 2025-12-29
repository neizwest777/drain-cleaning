<template>
  <footer class="bg-gray-900 text-white section">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <i class="fas fa-wrench text-2xl text-blue-400"></i>
            <div class="font-bold text-lg">Ummistuste Likvideerimine</div>
          </div>
          <p class="text-gray-400 text-sm mb-4">
            {{ t('footer.hours', lang) }}
          </p>
          <div class="space-y-2">
            <a :href="`tel:+37253684587`" class="flex items-center text-gray-400 hover:text-white transition-colors">
              <i class="fas fa-phone mr-2"></i>
              +372 5368 4587
            </a>
            <a :href="`mailto:info@prism.ee`" class="flex items-center text-gray-400 hover:text-white transition-colors">
              <i class="fas fa-envelope mr-2"></i>
              info@prism.ee
            </a>
          </div>
        </div>
        
        <!-- Services -->
        <div>
          <h3 class="font-bold text-lg mb-4">{{ t('footer.services', lang) }}</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a :href="servicesRoute.url()" class="text-gray-400 hover:text-white transition-colors">
                {{ t('nav.services', lang) }}
              </a>
            </li>
            <li>
              <a :href="pricingRoute.url()" class="text-gray-400 hover:text-white transition-colors">
                {{ t('nav.pricing', lang) }}
              </a>
            </li>
            <li>
              <a :href="contactsRoute.url()" class="text-gray-400 hover:text-white transition-colors">
                {{ t('nav.contacts', lang) }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Company -->
        <div>
          <h3 class="font-bold text-lg mb-4">{{ t('footer.company', lang) }}</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a :href="aboutRoute.url()" class="text-gray-400 hover:text-white transition-colors">
                {{ t('nav.about', lang) }}
              </a>
            </li>
            <li>
              <a :href="contactsRoute.url()" class="text-gray-400 hover:text-white transition-colors">
                {{ t('nav.contacts', lang) }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Legal -->
        <div>
          <h3 class="font-bold text-lg mb-4">{{ t('footer.legal', lang) }}</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a :href="privacyRoute.url()" class="text-gray-400 hover:text-white transition-colors">
                {{ t('footer.privacy', lang) }}
              </a>
            </li>
            <li>
              <a :href="termsRoute.url()" class="text-gray-400 hover:text-white transition-colors">
                {{ t('footer.terms', lang) }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Service Areas -->
      <div class="border-t border-gray-800 pt-8 mb-8">
        <h3 class="font-bold text-lg mb-4">{{ t('areas.title', lang) }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
          <div>
            <strong class="text-white">{{ t('areas.tallinn', lang) }}:</strong> 
            Kesklinn, Kristiine, Lasnamäe, Mustamäe, Nõmme, Pirita, Põhja-Tallinn, Haabersti
          </div>
          <div>
            <strong class="text-white">{{ t('areas.harjumaa', lang) }}:</strong> 
            Viimsi, Maardu, Keila, Saue, Paldiski, Loksa
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} {{ t('footer.rights', lang) }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { servicesRoute, pricingRoute, aboutRoute, contactsRoute, privacyRoute, termsRoute } from '../../index';
import { t, getCurrentLanguage, type Language } from '../../shared/i18n';

const lang = ref<Language>('et');

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>