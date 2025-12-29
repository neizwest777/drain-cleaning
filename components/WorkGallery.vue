<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ title || t('gallery.title', lang) }}
        </h2>
        <p v-if="subtitle" class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
        <p v-else class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ t('gallery.subtitle', lang) }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <figure 
          v-for="(work, index) in works" 
          :key="index"
          :data-index="index"
          class="gallery-item group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
        >
          <!-- Image -->
          <div class="relative overflow-hidden bg-gray-100">
            <img 
              :src="work.imageUrl" 
              :alt="work.alt[lang]"
              loading="lazy"
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <!-- Caption -->
          <figcaption class="p-4 bg-white">
            <p class="text-gray-700 text-sm leading-relaxed mb-2">
              {{ work.description[lang] }}
            </p>
            <div class="flex items-center text-xs text-gray-500">
              <i class="fas fa-map-marker-alt mr-1"></i>
              <span>{{ work.location }}</span>
            </div>
          </figcaption>
        </figure>
      </div>
      
      <!-- CTA Button -->
      <div v-if="showCta" class="mt-12 text-center">
        <a :href="`tel:+37253684587`" class="btn-primary inline-block">
          <i class="fas fa-phone mr-2"></i>
          {{ t('common.callNow', lang) }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { t, getCurrentLanguage, portfolioWorks, type Language, type PortfolioWork } from '../shared/i18n';

interface Props {
  title?: string;
  subtitle?: string;
  limit?: number;
  showCta?: boolean;
  filter?: (work: PortfolioWork) => boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showCta: true,
  limit: 6
});

const lang = ref<Language>('et');
let observer: IntersectionObserver | null = null;

const works = computed(() => {
  let filtered = props.filter ? portfolioWorks.filter(props.filter) : portfolioWorks;
  return props.limit ? filtered.slice(0, props.limit) : filtered;
});

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
  
  // Intersection Observer for animation on scroll
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-fade-in-up');
        }, index * 100);
        observer?.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe all gallery items
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => observer?.observe(item));
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
.gallery-item {
  opacity: 0;
  transform: translateY(20px);
}

.gallery-item.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>