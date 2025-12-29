<template>
  <div>
    <Header />
    
    <main class="section bg-white">
      <div class="container-custom max-w-4xl">
        <h1 class="text-4xl font-bold mb-6">{{ t('terms.title', lang) }}</h1>
        <p class="text-gray-600 mb-8">{{ t('privacy.updated', lang) }}: 2025-01-01</p>
        
        <div class="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '1. Teenuse ulatus' : '1. Область услуг' }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ lang === 'et'
                ? 'Pakume kanalisatsioonisüsteemide puhastuse ja hoolduse teenuseid Tallinnas ja Harjumaal. Teenused hõlmavad ummistuste likvideerimist, survepesut, videoinspektsiooni ja ennetavat hooldust.'
                : 'Мы предоставляем услуги по прочистке и обслуживанию канализационных систем в Таллине и Харьюмаа. Услуги включают устранение засоров, гидродинамическую прочистку, видеоинспекцию и профилактическое обслуживание.'
              }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '2. Hinnad ja makse' : '2. Цены и оплата' }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ lang === 'et'
                ? 'Lõplik hind määratakse pärast kohapealset diagnostikat. Makse toimub sularahas või pangaülekandega pärast töö lõpetamist. Veebilehel näidatud hinnad on orienteerivad.'
                : 'Окончательная цена определяется после диагностики на месте. Оплата наличными или банковским переводом после завершения работ. Цены на сайте ориентировочные.'
              }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '3. Garantii' : '3. Гарантия' }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ lang === 'et'
                ? 'Kõigile meie töödele anname garantii. Garantii kestus sõltub tehtud tööst ja kokkuleppest. Kui probleem tekib uuesti garantiiperioodi jooksul, tuleme ja kõrvaldame selle tasuta.'
                : 'На все наши работы предоставляется гарантия. Срок гарантии зависит от выполненных работ и договоренности. Если проблема возникнет снова в период гарантии, мы приедем и устраним ее бесплатно.'
              }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '4. Tühistamine' : '4. Отмена' }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ lang === 'et'
                ? 'Teenuse saab tühistada vähemalt 2 tundi enne kokkulepitud aega. Hiline tühistamine või kohale mitteilmumine võib kaasa tuua sõidu tasu.'
                : 'Услугу можно отменить минимум за 2 часа до согласованного времени. Поздняя отмена или неявка может повлечь плату за выезд.'
              }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '5. Vastutus' : '5. Ответственность' }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ lang === 'et'
                ? 'Vastutame oma töö kvaliteedi eest. Ei vastuta varjatud defektide eest, mis ei ole seotud meie tööga. Oleme kindlustatud vastavalt seadusele.'
                : 'Мы отвечаем за качество нашей работы. Не несем ответственность за скрытые дефекты, не связанные с нашей работой. Мы застрахованы в соответствии с законом.'
              }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">
              {{ lang === 'et' ? '6. Kontakt' : '6. Контакт' }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ lang === 'et'
                ? 'Küsimuste korral võtke ühendust:'
                : 'При возникновении вопросов обращайтесь:'
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