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
            {{ t('contact.title', lang) }}
          </h1>
          <p class="text-xl text-blue-100">
            {{ t('contact.subtitle', lang) }}
          </p>
        </div>
      </section>
      
      <!-- Contact Info & Form -->
      <section class="section bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Info -->
            <div>
              <h2 class="text-2xl font-bold mb-6">
                {{ lang === 'et' ? 'Kontaktandmed' : 'Контактная информация' }}
              </h2>
              
              <div class="space-y-6 mb-8">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-phone text-blue-600"></i>
                  </div>
                  <div>
                    <h3 class="font-bold mb-1">{{ t('common.phone', lang) }}</h3>
                    <a href="tel:+37253684587" class="text-xl text-blue-600 hover:text-blue-800">
                      +372 5368 4587
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-envelope text-blue-600"></i>
                  </div>
                  <div>
                    <h3 class="font-bold mb-1">{{ t('common.email', lang) }}</h3>
                    <a href="mailto:info@prism.ee" class="text-xl text-blue-600 hover:text-blue-800">
                      info@prism.ee
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-clock text-blue-600"></i>
                  </div>
                  <div>
                    <h3 class="font-bold mb-1">{{ t('contact.hours.title', lang) }}</h3>
                    <p class="text-gray-700">{{ t('contact.hours.text', lang) }}</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-map-marker-alt text-blue-600"></i>
                  </div>
                  <div>
                    <h3 class="font-bold mb-1">{{ t('contact.address.title', lang) }}</h3>
                    <p class="text-gray-700">{{ t('contact.address.text', lang) }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contact Form -->
            <div class="card bg-gray-50">
              <h2 class="text-2xl font-bold mb-6">
                {{ lang === 'et' ? 'Saada päring' : 'Отправить запрос' }}
              </h2>
              
              <form @submit.prevent="submitForm" class="space-y-4">
                <div>
                  <label class="block font-medium mb-2">{{ t('contact.form.name', lang) }}</label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    required 
                    class="input-field"
                    :placeholder="t('contact.form.name', lang)"
                  />
                </div>
                
                <div>
                  <label class="block font-medium mb-2">{{ t('contact.form.phone', lang) }}</label>
                  <input 
                    v-model="form.phone" 
                    type="tel" 
                    required 
                    class="input-field"
                    placeholder="+372 XXXX XXXX"
                  />
                </div>
                
                <div>
                  <label class="block font-medium mb-2">{{ t('contact.form.email', lang) }}</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    class="input-field"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label class="block font-medium mb-2">{{ t('contact.form.message', lang) }}</label>
                  <textarea 
                    v-model="form.message" 
                    required 
                    rows="4" 
                    class="input-field"
                    :placeholder="lang === 'et' ? 'Kirjeldage oma probleemi...' : 'Опишите вашу проблему...'"
                  ></textarea>
                </div>
                
                <!-- Honeypot field - hidden from users -->
                <input 
                  v-model="form.honeypot" 
                  type="text" 
                  name="website" 
                  style="display: none;" 
                  tabindex="-1" 
                  autocomplete="off"
                />
                
                <div class="text-sm text-gray-600">
                  {{ t('contact.form.privacy', lang) }}
                  <a :href="privacyRoute.url()" class="text-blue-600 hover:underline">
                    {{ t('footer.privacy', lang) }}
                  </a>
                </div>
                
                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="btn-primary w-full"
                  :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
                >
                  <i class="fas fa-paper-plane mr-2"></i>
                  {{ isSubmitting ? t('contact.form.sending', lang) : t('contact.form.submit', lang) }}
                </button>
                
                <div v-if="submitStatus === 'success'" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  {{ t('contact.form.success', lang) }}
                </div>
                
                <div v-if="submitStatus === 'error'" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {{ t('contact.form.error', lang) }}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <!-- FAQ Section -->
      <section class="section bg-gray-50">
        <div class="container-custom max-w-4xl">
          <h2 class="text-3xl font-bold text-center mb-12">
            {{ t('contact.faq.title', lang) }}
          </h2>
          
          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="card">
              <h3 class="font-bold text-lg mb-2 flex items-center">
                <i class="fas fa-question-circle text-blue-600 mr-3"></i>
                {{ faq.question }}
              </h3>
              <p class="text-gray-700 ml-9">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>
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
import { privacyRoute } from '../index';
import { contactFormRoute } from '../api/contact';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';
import { getBreadcrumbSchema, getFAQSchema } from '../shared/schemas';

const lang = ref<Language>('et');

const breadcrumbs = computed(() => [
  { name: t('breadcrumb.contacts', lang.value) }
]);

const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
  honeypot: '' // Anti-spam field
});

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');

const faqs = computed(() => [
  {
    question: t('faq.q1', lang.value),
    answer: t('faq.a1', lang.value)
  },
  {
    question: t('faq.q2', lang.value),
    answer: t('faq.a2', lang.value)
  },
  {
    question: t('faq.q3', lang.value),
    answer: t('faq.a3', lang.value)
  },
  {
    question: t('faq.q4', lang.value),
    answer: t('faq.a4', lang.value)
  },
  {
    question: t('faq.q5', lang.value),
    answer: t('faq.a5', lang.value)
  }
]);

async function submitForm() {
  if (isSubmitting.value) return;
  
  isSubmitting.value = true;
  submitStatus.value = 'idle';
  
  try {
    const response = await contactFormRoute.run(ctx, {
      name: form.value.name,
      phone: form.value.phone,
      email: form.value.email || undefined,
      message: form.value.message,
      honeypot: form.value.honeypot
    });
    
    if (response.success) {
      submitStatus.value = 'success';
      form.value = { name: '', phone: '', email: '', message: '', honeypot: '' };
    } else {
      submitStatus.value = 'error';
    }
  } catch (error) {
    console.error('Form submission error:', error);
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
  }
}

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
  
  // JSON-LD schemas (FAQPage, BreadcrumbList) are already server-side rendered in index.tsx
  // No need to add them again here to avoid duplication
});
</script>