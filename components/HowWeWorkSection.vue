<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('howWeWork.title', lang) }}
        </h2>
      </div>
      
      <div class="relative">
        <!-- Timeline line -->
        <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
        
        <div class="space-y-12">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            class="relative"
          >
            <div :class="['lg:w-1/2', index % 2 === 0 ? 'lg:ml-auto lg:pl-12' : 'lg:pr-12']">
              <div class="card hover-lift">
                <!-- Step number -->
                <div class="absolute -left-4 lg:-left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {{ index + 1 }}
                </div>
                
                <div class="pl-16 lg:pl-8">
                  <h3 class="font-bold text-xl mb-2 flex items-center">
                    <i :class="step.icon" class="text-blue-600 mr-3 text-2xl"></i>
                    {{ step.title }}
                  </h3>
                  <p class="text-gray-600">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <a :href="`tel:+37253684587`" class="btn-primary inline-block">
          <i class="fas fa-phone mr-2"></i>
          {{ t('common.callNow', lang) }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');

const steps = computed(() => [
  {
    icon: 'fas fa-phone-volume',
    title: t('howWeWork.step1.title', lang.value),
    description: t('howWeWork.step1.desc', lang.value)
  },
  {
    icon: 'fas fa-truck',
    title: t('howWeWork.step2.title', lang.value),
    description: t('howWeWork.step2.desc', lang.value)
  },
  {
    icon: 'fas fa-search',
    title: t('howWeWork.step3.title', lang.value),
    description: t('howWeWork.step3.desc', lang.value)
  },
  {
    icon: 'fas fa-tools',
    title: t('howWeWork.step4.title', lang.value),
    description: t('howWeWork.step4.desc', lang.value)
  },
  {
    icon: 'fas fa-check-circle',
    title: t('howWeWork.step5.title', lang.value),
    description: t('howWeWork.step5.desc', lang.value)
  }
]);

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>