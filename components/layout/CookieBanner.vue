<template>
  <Transition name="slide-up">
    <div 
      v-if="showBanner" 
      class="fixed bottom-0 left-0 right-0 z-[100] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl border-t border-gray-700"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div class="container-custom py-4 md:py-6">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <!-- Content -->
          <div class="flex items-start gap-3 flex-1">
            <div class="flex-shrink-0 mt-1">
              <i class="fas fa-cookie-bite text-2xl text-blue-400"></i>
            </div>
            <div>
              <h3 id="cookie-banner-title" class="text-lg font-semibold mb-1">
                {{ t('cookie.title', lang) }}
              </h3>
              <p id="cookie-banner-desc" class="text-sm text-gray-300 leading-relaxed">
                {{ t('cookie.message', lang) }}
              </p>
            </div>
          </div>
          
          <!-- Actions -->
          <div class="flex items-center gap-3 w-full md:w-auto">
            <a 
              :href="privacyUrl"
              class="text-sm text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
              @click.prevent="goToPrivacy"
            >
              {{ t('cookie.learnMore', lang) }}
            </a>
            <button
              @click="acceptCookies"
              class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg active:scale-95 whitespace-nowrap"
              aria-label="Accept cookies"
            >
              <i class="fas fa-check mr-2"></i>
              {{ t('cookie.accept', lang) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { t, getCurrentLanguage, type Language } from '../../shared/i18n';
import { privacyRoute } from '../../index';

const showBanner = ref(false);
const lang = ref<Language>('et');
const privacyUrl = ref('/privaatsus');

onMounted(() => {
  // Get current language
  lang.value = getCurrentLanguage();
  
  // Get privacy page URL
  privacyUrl.value = privacyRoute.url();
  
  // Check if user already accepted cookies
  const cookieConsent = localStorage.getItem('cookieConsent');
  
  if (!cookieConsent) {
    // Show banner after 2 seconds
    setTimeout(() => {
      showBanner.value = true;
    }, 2000);
  }
});

function acceptCookies() {
  // Save consent to localStorage
  localStorage.setItem('cookieConsent', 'accepted');
  localStorage.setItem('cookieConsentDate', new Date().toISOString());
  
  // Hide banner with animation
  showBanner.value = false;
  
  // Optional: Track acceptance event
  if (typeof window !== 'undefined' && (window as any).clrtTrack) {
    (window as any).clrtTrack({
      url: 'event://custom/drainCleaningTallinn',
      action: 'cookie-consent-accepted',
    });
  }
}

function goToPrivacy() {
  window.location.href = privacyUrl.value;
}
</script>

<style scoped>
.slide-up-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.5, 0, 0.75, 0);
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>