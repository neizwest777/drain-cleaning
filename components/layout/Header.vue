<template>
  <header class="bg-white shadow-md sticky top-0 z-40">
    <div class="container-custom">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <a :href="indexRoute.url()" class="flex items-center space-x-2 hover-lift group">
          <div class="relative">
            <i class="fas fa-wrench text-3xl text-blue-600 logo-icon"></i>
            <div class="logo-glow"></div>
          </div>
          <div class="hidden sm:block">
            <div class="font-bold text-xl text-gray-900 logo-text">{{ t('nav.home', lang) }}</div>
            <div class="text-xs text-gray-600">24/7 Tallinn</div>
          </div>
        </a>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-6">
          <a :href="indexRoute.url()" class="nav-link">
            {{ t('nav.home', lang) }}
          </a>
          <a :href="servicesRoute.url()" class="nav-link">
            {{ t('nav.services', lang) }}
          </a>
          <a :href="pricingRoute.url()" class="nav-link">
            {{ t('nav.pricing', lang) }}
          </a>
          <a :href="aboutRoute.url()" class="nav-link">
            {{ t('nav.about', lang) }}
          </a>
          <a :href="contactsRoute.url()" class="nav-link">
            {{ t('nav.contacts', lang) }}
          </a>
          
          <LanguageSwitch />
          
          <a 
            :href="`tel:+37253684587`" 
            class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <i class="fas fa-phone mr-2"></i>
            +372 5368 4587
          </a>
        </nav>
        
        <!-- Mobile Menu Button -->
        <div class="flex items-center space-x-3 md:hidden">
          <LanguageSwitch />
          <button 
            @click="toggleMenu" 
            class="text-gray-700 hover:text-blue-600 p-2 transition-all duration-300"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-2xl transform transition-transform duration-300"></i>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <nav v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 animate-slideDown">
        <a 
          :href="indexRoute.url()" 
          class="nav-link-mobile"
        >
          {{ t('nav.home', lang) }}
        </a>
        <a 
          :href="servicesRoute.url()" 
          class="nav-link-mobile"
        >
          {{ t('nav.services', lang) }}
        </a>
        <a 
          :href="pricingRoute.url()" 
          class="nav-link-mobile"
        >
          {{ t('nav.pricing', lang) }}
        </a>
        <a 
          :href="aboutRoute.url()" 
          class="nav-link-mobile"
        >
          {{ t('nav.about', lang) }}
        </a>
        <a 
          :href="contactsRoute.url()" 
          class="nav-link-mobile"
        >
          {{ t('nav.contacts', lang) }}
        </a>
        <a 
          :href="`tel:+37253684587`" 
          class="block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          <i class="fas fa-phone mr-2"></i>
          +372 5368 4587
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { indexRoute, servicesRoute, pricingRoute, aboutRoute, contactsRoute } from '../../index';
import { t, getCurrentLanguage, type Language } from '../../shared/i18n';
import LanguageSwitch from './LanguageSwitch.vue';

const lang = ref<Language>('et');
const mobileMenuOpen = ref(false);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  // Update language on storage change
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<style scoped>
/* Плавные современные анимации */

/* Эффект для иконки логотипа */
.logo-icon {
  position: relative;
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .logo-icon {
  transform: rotate(20deg) scale(1.1);
  color: #2563eb;
}

/* Свечение вокруг иконки */
.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, rgba(37, 99, 235, 0) 70%);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1;
}

.group:hover .logo-glow {
  opacity: 1;
  animation: gentlePulse 2s infinite;
}

/* Эффект для текста логотипа */
.logo-text {
  position: relative;
  background: linear-gradient(90deg, #1e40af, #3b82f6, #1e40af);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s ease-in-out infinite;
  transition: all 0.3s ease;
}

.group:hover .logo-text {
  animation: gradientShift 2s ease-in-out infinite;
}

/* Анимации */
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gentlePulse {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

/* Плавная анимация для мобильного меню */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out forwards;
}

/* Стили для навигационных ссылок */
.nav-link {
  @apply text-gray-700 hover:text-blue-600 font-medium relative transition-colors duration-300;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link-mobile {
  @apply block py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300;
  position: relative;
  padding-left: 1rem;
}

.nav-link-mobile::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 0;
  background: linear-gradient(to bottom, #3b82f6, #2563eb);
  border-radius: 2px;
  transition: height 0.3s ease;
}

.nav-link-mobile:hover::before {
  height: 20px;
}

/* Эффект подъема для всего лого */
.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

/* Улучшенные тени для всей шапки */
.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>