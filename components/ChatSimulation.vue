<template>
  <section class="section bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
    <!-- Декоративные элементы -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
    
    <div class="container-custom relative z-10">
      <!-- Заголовок -->
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="section-title">{{ t('chat.title', lang) }}</h2>
        <p class="section-subtitle">{{ t('chat.subtitle', lang) }}</p>
      </div>
      
      <!-- Чат-симуляция -->
      <div 
        ref="chatContainer"
        class="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
        :class="{'animate-slide-up': isVisible}"
      >
        <!-- Шапка чата (как в мессенджере) -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center space-x-3">
          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <i class="fas fa-wrench text-blue-600"></i>
          </div>
          <div>
            <div class="font-semibold">Prism Hooldus</div>
            <div class="text-xs text-blue-100">{{ lang === 'et' ? 'Võrgus' : 'Онлайн' }}</div>
          </div>
          <div class="ml-auto">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <!-- Тело чата с сообщениями -->
        <div class="p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white min-h-[500px] max-h-[600px] overflow-y-auto">
          <!-- Сообщение 1: Клиент -->
          <div 
            v-if="visibleMessages >= 1" 
            class="flex justify-end animate-message-in"
          >
            <div class="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-md">
              <p class="text-sm leading-relaxed">{{ t('chat.client.msg1', lang) }}</p>
              <span class="text-xs text-blue-200 mt-1 block">{{ getCurrentTime(0) }}</span>
            </div>
          </div>
          
          <!-- Индикатор печатания (после сообщения 1) -->
          <div 
            v-if="visibleMessages === 1 && showTyping" 
            class="flex justify-start"
          >
            <div class="bg-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0s"></div>
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
              </div>
            </div>
          </div>
          
          <!-- Сообщение 2: Администратор -->
          <div 
            v-if="visibleMessages >= 2" 
            class="flex justify-start animate-message-in"
          >
            <div class="bg-gray-200 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-md">
              <p class="text-sm leading-relaxed">{{ t('chat.admin.msg1', lang) }}</p>
              <span class="text-xs text-gray-500 mt-1 block">{{ getCurrentTime(1) }}</span>
            </div>
          </div>
          
          <!-- Сообщение 3: Клиент -->
          <div 
            v-if="visibleMessages >= 3" 
            class="flex justify-end animate-message-in"
          >
            <div class="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-md">
              <p class="text-sm leading-relaxed">{{ t('chat.client.msg2', lang) }}</p>
              <span class="text-xs text-blue-200 mt-1 block">{{ getCurrentTime(2) }}</span>
            </div>
          </div>
          
          <!-- Индикатор печатания (после сообщения 3) -->
          <div 
            v-if="visibleMessages === 3 && showTyping" 
            class="flex justify-start"
          >
            <div class="bg-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0s"></div>
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
              </div>
            </div>
          </div>
          
          <!-- Сообщение 4: Администратор -->
          <div 
            v-if="visibleMessages >= 4" 
            class="flex justify-start animate-message-in"
          >
            <div class="bg-gray-200 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-md">
              <p class="text-sm leading-relaxed">{{ t('chat.admin.msg2', lang) }}</p>
              <span class="text-xs text-gray-500 mt-1 block">{{ getCurrentTime(3) }}</span>
            </div>
          </div>
          
          <!-- Сообщение 5: Клиент -->
          <div 
            v-if="visibleMessages >= 5" 
            class="flex justify-end animate-message-in"
          >
            <div class="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-md">
              <p class="text-sm leading-relaxed">{{ t('chat.client.msg3', lang) }}</p>
              <span class="text-xs text-blue-200 mt-1 block">{{ getCurrentTime(4) }}</span>
            </div>
          </div>
          
          <!-- Индикатор печатания (после сообщения 5) -->
          <div 
            v-if="visibleMessages === 5 && showTyping" 
            class="flex justify-start"
          >
            <div class="bg-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0s"></div>
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
              </div>
            </div>
          </div>
          
          <!-- Сообщение 6: Администратор (финальное) -->
          <div 
            v-if="visibleMessages >= 6" 
            class="flex justify-start animate-message-in"
          >
            <div class="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-lg">
              <p class="text-sm leading-relaxed">{{ t('chat.admin.msg3', lang) }}</p>
              <span class="text-xs text-green-100 mt-1 block">{{ getCurrentTime(5) }}</span>
            </div>
          </div>
        </div>
        
        <!-- Футер чата (поле ввода) -->
        <div class="bg-gray-100 p-3 flex items-center space-x-2 border-t border-gray-200">
          <button class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
            <i class="fas fa-plus text-sm"></i>
          </button>
          <div class="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-400 border border-gray-300">
            {{ lang === 'et' ? 'Kirjuta sõnum...' : 'Написать сообщение...' }}
          </div>
          <button class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
            <i class="fas fa-paper-plane text-sm"></i>
          </button>
        </div>
      </div>
      
      <!-- Call-to-Action под чатом -->
      <div class="text-center mt-8 animate-fade-in" v-if="visibleMessages >= 6">
        <p class="text-gray-600 mb-4">
          {{ lang === 'et' 
            ? 'Alustame vestlust ka teiega! Võtke ühendust kohe.' 
            : 'Начнём общение и с вами! Свяжитесь прямо сейчас.' 
          }}
        </p>
        <a 
          href="tel:+37253684587" 
          class="btn-primary inline-flex items-center"
        >
          <i class="fas fa-phone mr-2"></i>
          +372 5368 4587
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');
const chatContainer = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const visibleMessages = ref(0);
const showTyping = ref(false);

// Массив задержек для каждого сообщения (в миллисекундах)
const messageDelays = [
  0,     // Сообщение 1 (клиент) - показывается сразу
  2000,  // Сообщение 2 (админ) - через 2 сек после появления
  1500,  // Сообщение 3 (клиент) - через 1.5 сек
  2500,  // Сообщение 4 (админ) - через 2.5 сек
  1200,  // Сообщение 5 (клиент) - через 1.2 сек
  2000   // Сообщение 6 (админ финальное) - через 2 сек
];

const typingDuration = 1500; // Длительность показа "печатает..."

let animationTimers: number[] = [];
let observer: IntersectionObserver | null = null;

// Функция для получения временных меток (для реалистичности)
const getCurrentTime = (messageIndex: number) => {
  const now = new Date();
  // Добавляем минуты в зависимости от индекса сообщения
  const offset = messageIndex * 2; // каждое сообщение "отправлено" на 2 минуты позже
  const time = new Date(now.getTime() + offset * 60000);
  return time.toLocaleTimeString('et-EE', { hour: '2-digit', minute: '2-digit' });
};

// Функция запуска анимации сообщений
const startAnimation = () => {
  let cumulativeDelay = 0;
  
  messageDelays.forEach((delay, index) => {
    cumulativeDelay += delay;
    
    // Показываем индикатор "печатает..." перед сообщениями админа
    if (index > 0 && index % 2 === 1) { // Админские сообщения (нечётные индексы: 1, 3, 5)
      const typingTimer = window.setTimeout(() => {
        showTyping.value = true;
      }, cumulativeDelay - typingDuration);
      
      animationTimers.push(typingTimer);
    }
    
    // Показываем само сообщение
    const messageTimer = window.setTimeout(() => {
      showTyping.value = false;
      visibleMessages.value = index + 1;
    }, cumulativeDelay);
    
    animationTimers.push(messageTimer);
  });
};

// Очистка таймеров
const clearTimers = () => {
  animationTimers.forEach(timer => clearTimeout(timer));
  animationTimers = [];
};

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
  
  // IntersectionObserver для запуска анимации при скролле
  if (chatContainer.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.value) {
            isVisible.value = true;
            // Запускаем анимацию сообщений через небольшую задержку
            setTimeout(() => {
              startAnimation();
            }, 500);
          }
        });
      },
      {
        threshold: 0.3 // Запускаем когда 30% элемента видно
      }
    );
    
    observer.observe(chatContainer.value);
  }
});

onUnmounted(() => {
  clearTimers();
  if (observer && chatContainer.value) {
    observer.unobserve(chatContainer.value);
  }
});
</script>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes messageIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

.animate-message-in {
  animation: messageIn 0.4s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

/* Стилизация скроллбара для тела чата */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>