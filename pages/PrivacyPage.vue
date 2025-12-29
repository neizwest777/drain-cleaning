<template>
  <div>
    <Header />
    
    <main class="section bg-white">
      <div class="container-custom max-w-4xl">
        <h1 class="text-4xl font-bold mb-6">{{ t('privacy.title', lang) }}</h1>
        <p class="text-gray-600 mb-8">{{ t('privacy.updated', lang) }}: 2025-01-01</p>
        
        <div class="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '1. Sissejuhatus' : '1. Введение' }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ lang === 'et' 
                ? 'Käesolev privaatsuspoliitika kirjeldab, kuidas me kogume, kasutame ja kaitseme teie isikuandmeid, kui kasutate meie veebilehte ja teenuseid. Järgime GDPR (Üldine Andmekaitse Määrus) nõudeid.'
                : 'Настоящая политика конфиденциальности описывает, как мы собираем, используем и защищаем ваши персональные данные при использовании нашего веб-сайта и услуг. Мы соблюдаем требования GDPR (Общего регламента по защите данных).'
              }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '2. Kogutavad andmed' : '2. Собираемые данные' }}
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              {{ lang === 'et'
                ? 'Kontaktvormi kaudu kogume:'
                : 'Через контактную форму мы собираем:'
              }}
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>{{ lang === 'et' ? 'Nimi' : 'Имя' }}</li>
              <li>{{ lang === 'et' ? 'Telefoninumber' : 'Номер телефона' }}</li>
              <li>{{ lang === 'et' ? 'E-posti aadress (valikuline)' : 'Email адрес (необязательно)' }}</li>
              <li>{{ lang === 'et' ? 'Sõnum' : 'Сообщение' }}</li>
            </ul>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '3. Andmete kasutamine' : '3. Использование данных' }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ lang === 'et'
                ? 'Kasutame teie andmeid ainult teenuse osutamiseks: teie päringule vastamiseks ja teenuse pakkumiseks. Me ei jaga teie andmeid kolmandate osapooltega.'
                : 'Мы используем ваши данные только для оказания услуг: ответа на ваш запрос и предоставления услуги. Мы не передаем ваши данные третьим лицам.'
              }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '4. Andmete säilitamine' : '4. Хранение данных' }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ lang === 'et'
                ? 'Säilitame teie andmeid 12 kuud pärast viimast kontakti. Pärast seda kustutame need turvaliselt.'
                : 'Мы храним ваши данные в течение 12 месяцев после последнего контакта. После этого мы надежно их удаляем.'
              }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '5. Teie õigused' : '5. Ваши права' }}
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              {{ lang === 'et'
                ? 'Teil on õigus:'
                : 'У вас есть право:'
              }}
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>{{ lang === 'et' ? 'Juurdepääs oma andmetele' : 'Доступ к своим данным' }}</li>
              <li>{{ lang === 'et' ? 'Andmete parandamine' : 'Исправление данных' }}</li>
              <li>{{ lang === 'et' ? 'Andmete kustutamine' : 'Удаление данных' }}</li>
              <li>{{ lang === 'et' ? 'Andmetöötluse piirangud' : 'Ограничение обработки данных' }}</li>
            </ul>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '6. Küpsised' : '6. Cookies' }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ lang === 'et'
                ? 'Kasutame ainult vajalikke küpsiseid keele valiku salvestamiseks. Analüütika küpsised on anonüümsed.'
                : 'Мы используем только необходимые cookies для сохранения выбора языка. Аналитические cookies анонимны.'
              }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '7. Kontakt' : '7. Контакт' }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ lang === 'et'
                ? 'Privaatsuse küsimustes võtke ühendust:'
                : 'По вопросам конфиденциальности обращайтесь:'
              }}
            </p>
            <p class="text-gray-700 mt-2">
              Email: <a href="mailto:info@prism.ee" class="text-blue-600 hover:underline">info@prism.ee</a><br />
              {{ lang === 'et' ? 'Telefon' : 'Телефон' }}: <a href="tel:+37253684587" class="text-blue-600 hover:underline">+372 5368 4587</a>
            </p>
          </section>
        </div>
        
        <div class="mt-12 text-center">
          <a :href="indexRoute.url()" class="btn-secondary inline-block">
            <i class="fas fa-arrow-left mr-2"></i>
            {{ t('404.home', lang) }}
          </a>
        </div>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import { indexRoute } from '../index';
import { t, getCurrentLanguage, type Language } from '../shared/i18n';

const lang = ref<Language>('et');

onMounted(() => {
  lang.value = getCurrentLanguage();
  
  window.addEventListener('languageChanged', () => {
    lang.value = getCurrentLanguage();
  });
});
</script>