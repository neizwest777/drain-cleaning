// @shared

export type Language = 'et' | 'ru';

export interface Translations {
  [key: string]: {
    et: string;
    ru: string;
  };
}

export const translations: Translations = {
  // Header & Navigation
  'nav.home': { et: 'Prism Hooldus', ru: 'Prism Hooldus' },
  'nav.services': { et: 'Teenused', ru: 'Услуги' },
  'nav.pricing': { et: 'Hinnad', ru: 'Цены' },
  'nav.about': { et: 'Meist', ru: 'О нас' },
  'nav.contacts': { et: 'Kontakt', ru: 'Контакты' },
  
  // Common
  'common.phone': { et: 'Telefon', ru: 'Телефон' },
  'common.email': { et: 'E-post', ru: 'Email' },
  'common.callNow': { et: 'Helista kohe', ru: 'Звоните сейчас' },
  'common.orderService': { et: 'Telli teenus', ru: 'Заказать услугу' },
  'common.readMore': { et: 'Loe edasi', ru: 'Читать далее' },
  'common.learnMore': { et: 'Lisateave', ru: 'Узнать больше' },
  
  // Hero Section
  'hero.title': { 
    et: 'Kiire ja professionaalne ummistuste likvideerimine Tallinnas', 
    ru: 'Быстрое и профессиональное устранение засоров в Таллине' 
  },
  'hero.subtitle': { 
    et: 'Kanalisatsiooni, WC, kraanide ja torude puhastus. Saabume 30 minutiga. Garantii ja läbipaistev hind.', 
    ru: 'Прочистка канализации, унитазов, раковин и труб. Приезжаем за 30 минут. Гарантия и прозрачная цена.' 
  },
  'hero.cta': { et: 'Telli teenus kohe', ru: 'Заказать услугу сейчас' },
  'hero.advantages': {
    et: 'Saabume kiirelt • Professionaalne varustus • Läbipaistev hind',
    ru: 'Быстрый приезд • Профессиональное оборудование • Прозрачная цена'
  },
  
  // Problems Section
  'problems.title': { et: 'Kas teil on mõni neist probleemidest?', ru: 'У вас есть одна из этих проблем?' },
  'problems.wc': { et: 'WC ummistus', ru: 'Засор унитаза' },
  'problems.sink': { et: 'Kraanikausi ummistus', ru: 'Засор раковины' },
  'problems.shower': { et: 'Duši äravool aeglane', ru: 'Медленный слив в душе' },
  'problems.smell': { et: 'Ebameeldiv lõhn', ru: 'Неприятный запах' },
  'problems.overflow': { et: 'Vesi tuleb tagasi', ru: 'Вода возвращается обратно' },
  'problems.pipe': { et: 'Toru leke või viga', ru: 'Протечка или повреждение трубы' },
  'problems.cta': { et: 'Lahendame probleemi kiiresti!', ru: 'Решим проблему быстро!' },
  
  // Services Section
  'services.title': { et: 'Meie teenused', ru: 'Наши услуги' },
  'services.wc.title': { et: 'WC ummistuste likvideerimine', ru: 'Устранение засоров унитаза' },
  'services.wc.desc': { et: 'Kiire ja efektiivne WC-poti puhastus professionaalse varustusega', ru: 'Быстрая и эффективная прочистка унитаза профессиональным оборудованием' },
  'services.sink.title': { et: 'Kraanikausi ja vannide puhastus', ru: 'Прочистка раковин и ванн' },
  'services.sink.desc': { et: 'Eemaldame ummistused vannitubades ja köökides', ru: 'Устраняем засоры в ванных комнатах и кухнях' },
  'services.sewer.title': { et: 'Kanalisatsiooni survepesu', ru: 'Гидродинамическая прочистка канализации' },
  'services.sewer.desc': { et: 'Professionaalne survepesu kõigile kanalisatsioonitorudele', ru: 'Профессиональная гидродинамическая промывка всех канализационных труб' },
  'services.inspection.title': { et: 'Videoinspektsioon', ru: 'Видеоинспекция' },
  'services.inspection.desc': { et: 'Kaamera abil toru seisukorra kontroll ja probleemide tuvastamine', ru: 'Проверка состояния труб камерой и выявление проблем' },
  'services.prevention.title': { et: 'Ennetav hooldus', ru: 'Профилактическое обслуживание' },
  'services.prevention.desc': { et: 'Regulaarne torustiku hooldus probleemide vältimiseks', ru: 'Регулярное обслуживание трубопроводов для предотвращения проблем' },
  'services.emergency.title': { et: 'Kiirabi 24/7', ru: 'Срочная помощь 24/7' },
  'services.emergency.desc': { et: 'Ööpäevaringne valmisolek hädaolukordades', ru: 'Круглосуточная готовность в чрезвычайных ситуациях' },
  
  // How We Work
  'howWeWork.title': { et: 'Kuidas me töötame', ru: 'Как мы работаем' },
  'howWeWork.step1.title': { et: 'Helistate meile', ru: 'Вы звоните нам' },
  'howWeWork.step1.desc': { et: 'Kirjeldage probleemi ja me anname esialgse hinnangu', ru: 'Описываете проблему и мы даем первичную оценку' },
  'howWeWork.step2.title': { et: 'Saabume 30 minutiga', ru: 'Приезжаем за 30 минут' },
  'howWeWork.step2.desc': { et: 'Meie spetsialist jõuab kohale koos vajalike tööriistadega', ru: 'Наш специалист прибывает на место со всем необходимым оборудованием' },
  'howWeWork.step3.title': { et: 'Diagnostika', ru: 'Диагностика' },
  'howWeWork.step3.desc': { et: 'Hindame olukorda ja räägime täpse hinna', ru: 'Оцениваем ситуацию и озвучиваем точную цену' },
  'howWeWork.step4.title': { et: 'Töö tegemine', ru: 'Выполнение работ' },
  'howWeWork.step4.desc': { et: 'Likvideerime ummistuse kiiresti ja kvaliteetselt', ru: 'Устраняем засор быстро и качественно' },
  'howWeWork.step5.title': { et: 'Kontroll ja garantii', ru: 'Проверка и гарантия' },
  'howWeWork.step5.desc': { et: 'Kontrollime tulemust ja anname garantii', ru: 'Проверяем результат и предоставляем гарантию' },
  
  // Equipment
  'equipment.title': { et: 'Professionaalne varustus', ru: 'Профессиональное оборудование' },
  'equipment.desc': { et: 'Kasutame kaasaegset tehnikat kõige keerukamate ummistuste likvideerimiseks', ru: 'Используем современную технику для устранения самых сложных засоров' },
  
  // Trust Section
  'trust.title': { et: 'Miks meid usalda?', ru: 'Почему нам доверяют?' },
  'trust.experience': { et: 'Pikaajaline kogemus', ru: 'Многолетний опыт' },
  'trust.quality': { et: 'Kvaliteet ja garantii', ru: 'Качество и гарантия' },
  'trust.price': { et: 'Läbipaistev hind', ru: 'Прозрачная цена' },
  'trust.fast': { et: 'Kiire reaktsioon', ru: 'Быстрая реакция' },
  
  // Myths Section
  'myths.title': { et: 'Müüdid ja tõde ummistuste kohta', ru: 'Мифы и правда о засорах' },
  
  // Prevention Section
  'prevention.title': { et: 'Kuidas ummistusi vältida', ru: 'Как избежать засоров' },
  'prevention.rule1': { et: 'WC-sse ainult tualettpaber', ru: 'В унитаз только туалетная бумага' },
  'prevention.rule2': { et: 'Ärge visake toidujääke kraanikausi', ru: 'Не выбрасывайте остатки пищи в раковину' },
  'prevention.rule3': { et: 'Kasutage sõelapunkte vannitubades', ru: 'Используйте сеточки в ванных' },
  'prevention.rule4': { et: 'Regulaarne ennetav hooldus', ru: 'Регулярное профилактическое обслуживание' },
  'prevention.dontFlush': { et: 'Mida EI tohi WC-potti visata:', ru: 'Что НЕЛЬЗЯ бросать в унитаз:' },
  'prevention.item1': { et: 'Niisked salvrätikud', ru: 'Влажные салфетки' },
  'prevention.item2': { et: 'Hügieenitarbed', ru: 'Средства гигиены' },
  'prevention.item3': { et: 'Vatt ja vatitupsud', ru: 'Вата и ватные палочки' },
  'prevention.item4': { et: 'Juuksed', ru: 'Волосы' },
  'prevention.item5': { et: 'Toidujäätmed', ru: 'Остатки пищи' },
  'prevention.item6': { et: 'Õli ja rasv', ru: 'Масло и жир' },
  
  // Reviews
  'reviews.title': { et: 'Klientide tagasiside', ru: 'Отзывы клиентов' },
  
  // Final CTA
  'finalCta.title': { et: 'Vajate abi kanalisatsiooniga?', ru: 'Нужна помощь с канализацией?' },
  'finalCta.subtitle': { et: 'Helistage kohe ja meie spetsialist saabub 30 minutiga', ru: 'Звоните сейчас и наш специалист приедет через 30 минут' },
  
  // Footer
  'footer.company': { et: 'Ettevõte', ru: 'Компания' },
  'footer.services': { et: 'Teenused', ru: 'Услуги' },
  'footer.legal': { et: 'Juriidiline', ru: 'Юридическое' },
  'footer.privacy': { et: 'Privaatsuspoliitika', ru: 'Политика конфиденциальности' },
  'footer.terms': { et: 'Kasutustingimused', ru: 'Условия использования' },
  'footer.hours': { et: 'Tööaeg: 24/7', ru: 'Режим работы: 24/7' },
  'footer.rights': { et: 'Kõik õigused kaitstud', ru: 'Все права защищены' },
  
  // Contact Page
  'contact.title': { et: 'Võtke meiega ühendust', ru: 'Свяжитесь с нами' },
  'contact.subtitle': { et: 'Saadame vormi või helistage otse', ru: 'Отправьте форму или позвоните напрямую' },
  'contact.form.name': { et: 'Nimi', ru: 'Имя' },
  'contact.form.phone': { et: 'Telefon', ru: 'Телефон' },
  'contact.form.email': { et: 'E-post (valikuline)', ru: 'Email (необязательно)' },
  'contact.form.message': { et: 'Sõnum', ru: 'Сообщение' },
  'contact.form.submit': { et: 'Saada päring', ru: 'Отправить запрос' },
  'contact.form.sending': { et: 'Saatmine...', ru: 'Отправка...' },
  'contact.form.success': { et: 'Täname! Võtame teiega peagi ühendust.', ru: 'Спасибо! Мы свяжемся с вами в ближайшее время.' },
  'contact.form.error': { et: 'Viga sõnumi saatmisel. Palun helistage meile.', ru: 'Ошибка отправки. Пожалуйста, позвоните нам.' },
  'contact.form.privacy': { 
    et: 'Saatmisega nõustute meie privaatsuspoliitikaga', 
    ru: 'Отправляя форму, вы соглашаетесь с нашей политикой конфиденциальности' 
  },
  'contact.hours.title': { et: 'Tööaeg', ru: 'Режим работы' },
  'contact.hours.text': { et: 'Ööpäevaringne teenindus, 7 päeva nädalas', ru: 'Круглосуточное обслуживание, 7 дней в неделю' },
  'contact.address.title': { et: 'Teeninduspiirkond', ru: 'Зона обслуживания' },
  'contact.address.text': { et: 'Tallinn ja Harjumaa', ru: 'Таллин и Харьюмаа' },
  'contact.faq.title': { et: 'Korduma kippuvad küsimused', ru: 'Часто задаваемые вопросы' },
  
  // FAQ
  'faq.q1': { et: 'Kui kiiresti te saabute?', ru: 'Как быстро вы приедете?' },
  'faq.a1': { 
    et: 'Tavaliselt saabume 30 minuti jooksul pärast teie kõnet. Hädaolukordades püüame olla kohapeal veelgi kiiremini.', 
    ru: 'Обычно мы прибываем в течение 30 минут после вашего звонка. В чрезвычайных ситуациях стараемся быть на месте еще быстрее.' 
  },
  'faq.q2': { et: 'Kui palju teenused maksavad?', ru: 'Сколько стоят услуги?' },
  'faq.a2': { 
    et: 'Täpne hind sõltub probleemi keerukusest. Pärast kohapealset diagnostikat räägime teile täpse hinna enne töö alustamist. Mitte mingeid varjatud kulusid.', 
    ru: 'Точная цена зависит от сложности проблемы. После диагностики на месте мы озвучиваем точную цену до начала работ. Никаких скрытых расходов.' 
  },
  'faq.q3': { et: 'Kas annate garantiid?', ru: 'Даете ли вы гарантию?' },
  'faq.a3': { 
    et: 'Jah, kõikidele meie töödele anname garantii. Garantii kestus sõltub tehtud tööst.', 
    ru: 'Да, на все наши работы мы предоставляем гарантию. Срок гарантии зависит от выполненных работ.' 
  },
  'faq.q4': { et: 'Kas töötate ka öösiti?', ru: 'Работаете ли вы ночью?' },
  'faq.a4': { 
    et: 'Jah, me töötame 24/7, sealhulgas öösiti ja nädalavahetustel. Kanalisatsiooni hädaolukorrad ei vali aega.', 
    ru: 'Да, мы работаем 24/7, включая ночи и выходные. Чрезвычайные ситуации с канализацией не выбирают время.' 
  },
  'faq.q5': { et: 'Kas peaksin enne teie saabumist midagi tegema?', ru: 'Нужно ли что-то делать до вашего приезда?' },
  'faq.a5': { 
    et: 'Kui võimalik, vältida vee kasutamist ummistunud süsteemis. Muud ettevalmistusi ei ole vaja - me toome kõik vajaliku varustuse kaasa.', 
    ru: 'По возможности, избегайте использования воды в засорившейся системе. Никакой другой подготовки не требуется - мы привезем все необходимое оборудование.' 
  },
  
  // Pricing Page
  'pricing.title': { et: 'Teenuste hinnad', ru: 'Цены на услуги' },
  'pricing.subtitle': { 
    et: 'Läbipaistvad ja õiglased hinnad. Lõplik hind selgub pärast diagnostikat.', 
    ru: 'Прозрачные и справедливые цены. Окончательная цена определяется после диагностики.' 
  },
  'pricing.factors.title': { et: 'Mida hind sisaldab', ru: 'Что влияет на цену' },
  'pricing.factor1': { et: 'Sõit kohale (Tallinn piires tasuta)', ru: 'Выезд на место (в пределах Таллина бесплатно)' },
  'pricing.factor2': { et: 'Diagnostika ja hindamine', ru: 'Диагностика и оценка' },
  'pricing.factor3': { et: 'Töö ja vajalik varustus', ru: 'Работа и необходимое оборудование' },
  'pricing.factor4': { et: 'Garantii', ru: 'Гарантия' },
  'pricing.note': { 
    et: 'Me ei paku "odavaimat" hinda - me pakume kvaliteetset ja ausat teenust õiglase hinnaga.', 
    ru: 'Мы не предлагаем "самую дешевую" цену - мы предлагаем качественный и честный сервис по справедливой цене.' 
  },
  'pricing.from': { et: 'alates', ru: 'от' },
  
  // About Page
  'about.title': { et: 'Meist', ru: 'О нас' },
  'about.intro': { 
    et: 'Professionaalne kanalisatsiooni teenus Tallinnas ja Harjumaal', 
    ru: 'Профессиональный сервис канализации в Таллине и Харьюмаа' 
  },
  'about.experience.title': { et: 'Kogemus ja professionaalsus', ru: 'Опыт и профессионализм' },
  'about.experience.text': { 
    et: 'Meie meeskond omab aastatepikkust kogemust kanalisatsioonisüsteemide hoolduses ja remondis. Oleme lahendanud tuhandeid ummistusi ja torustike probleeme Tallinnas ja ümbruskonnas.', 
    ru: 'Наша команда имеет многолетний опыт в обслуживании и ремонте канализационных систем. Мы решили тысячи проблем с засорами и трубопроводами в Таллине и окрестностях.' 
  },
  'about.equipment.title': { et: 'Kaasaegne tehnika', ru: 'Современное оборудование' },
  'about.equipment.text': { 
    et: 'Kasutame professionaalset survepesutehnikat, videoinspektsiooni kaameraid ja spetsiaalseid tööriistu. See võimaldab meil lahendada ka kõige keerukamaid ummistusi kiirelt ja efektiivselt.', 
    ru: 'Используем профессиональное гидродинамическое оборудование, камеры видеоинспекции и специальные инструменты. Это позволяет нам быстро и эффективно решать даже самые сложные засоры.' 
  },
  'about.approach.title': { et: 'Meie lähenemine', ru: 'Наш подход' },
  'about.approach.text': { 
    et: 'Oleme ausad ja läbipaistvad. Enne tööde alustamist räägime teile täpse hinna ja selgitame, mida on vaja teha. Mitte mingeid üllatusi või varjatud kulusid.', 
    ru: 'Мы честны и прозрачны. Перед началом работ мы озвучиваем точную цену и объясняем, что нужно сделать. Никаких сюрпризов или скрытых расходов.' 
  },
  'about.guarantee.title': { et: 'Garantii ja vastutus', ru: 'Гарантия и ответственность' },
  'about.guarantee.text': { 
    et: 'Kõigile meie töödele anname garantii. Kui probleem tekib uuesti garantiiperioodi jooksul, tuleme ja kõrvaldame selle tasuta. Vastutame oma töö kvaliteedi eest.', 
    ru: 'На все наши работы мы предоставляем гарантию. Если проблема возникнет снова в период гарантии, мы приедем и устраним ее бесплатно. Мы отвечаем за качество нашей работы.' 
  },
  
  // Privacy Page
  'privacy.title': { et: 'Privaatsuspoliitika', ru: 'Политика конфиденциальности' },
  'privacy.updated': { et: 'Viimati uuendatud', ru: 'Последнее обновление' },
  
  // Terms Page
  'terms.title': { et: 'Kasutustingimused', ru: 'Условия использования' },
  
  // 404 Page
  '404.title': { et: 'Lehte ei leitud', ru: 'Страница не найдена' },
  '404.text': { et: 'Kahjuks ei leidnud me seda lehte. Võib-olla on see lehe aadressis viga?', ru: 'К сожалению, мы не нашли эту страницу. Возможно, ошибка в адресе?' },
  '404.home': { et: 'Tagasi avalehele', ru: 'Вернуться на главную' },
  
  // Service Areas
  'areas.title': { et: 'Teeninduspiirkonnad', ru: 'Зоны обслуживания' },
  'areas.tallinn': { et: 'Tallinn linnaosad', ru: 'Районы Таллина' },
  'areas.harjumaa': { et: 'Harjumaa', ru: 'Харьюмаа' },
  
  // Breadcrumbs
  'breadcrumb.home': { et: 'Prism Hooldus', ru: 'Prism Hooldus' },
  'breadcrumb.services': { et: 'Teenused', ru: 'Услуги' },
  'breadcrumb.pricing': { et: 'Hinnad', ru: 'Цены' },
  'breadcrumb.about': { et: 'Meist', ru: 'О нас' },
  'breadcrumb.contacts': { et: 'Kontakt', ru: 'Контакты' },
  'breadcrumb.privacy': { et: 'Privaatsus', ru: 'Конфиденциальность' },
  'breadcrumb.terms': { et: 'Tingimused', ru: 'Условия' },
  
  // Work Gallery
  'gallery.title': { et: 'Meie tehtud tööd', ru: 'Наши выполненные работы' },
  'gallery.subtitle': { et: 'Vaata meie viimaseid projekte Tallinnas ja Harjumaal', ru: 'Посмотрите наши последние проекты в Таллине и Харьюмаа' },
  'gallery.recent': { et: 'Hiljutised tööd', ru: 'Последние работы' },
  'gallery.examples': { et: 'Tööde näited', ru: 'Примеры работ' },
  
  // Cookie Consent Banner
  'cookie.title': { et: 'Küpsised ja privaatsus', ru: 'Файлы cookie и конфиденциальность' },
  'cookie.message': { 
    et: 'Kasutame küpsiseid, et parandada kasutajakogemust ja analüüsida liiklust meie veebisaidil. Jätkates nõustute meie küpsiste kasutamisega.', 
    ru: 'Мы используем файлы cookie для улучшения пользовательского опыта и анализа трафика на нашем сайте. Продолжая, вы соглашаетесь с использованием нами файлов cookie.' 
  },
  'cookie.accept': { et: 'Nõustun', ru: 'Принять' },
  'cookie.learnMore': { et: 'Loe lähemalt', ru: 'Подробнее' },
  
  // Chat Simulation
  'chat.title': { et: 'Kuidas me suhtleme klientidega', ru: 'Как мы общаемся с клиентами' },
  'chat.subtitle': { et: 'Näide meie kiire ja professionaalse teeninduse kohta', ru: 'Пример нашего быстрого и профессионального обслуживания' },
  'chat.typing': { et: 'kirjutab...', ru: 'печатает...' },
  'chat.client.msg1': { 
    et: 'Tere! Meil on köögis kraanikauss täiesti ummistunud, vesi ei lähe üldse ära. Kas saate aidata?', 
    ru: 'Здравствуйте! У нас на кухне раковина сильно засорилась, вода вообще не уходит. Сможете помочь?' 
  },
  'chat.admin.msg1': { 
    et: 'Tere päevast! Muidugi saame aidata. Töötame 24/7. Millises Tallinna piirkonnas te asute?', 
    ru: 'Добрый день! Конечно поможем. Мы работаем круглосуточно. В каком районе Таллина вы находитесь?' 
  },
  'chat.client.msg2': { 
    et: 'Lasnamäe piirkond. Kui kiiresti meister kohale jõuab?', 
    ru: 'Район Ласнамяэ. Как быстро приедет мастер?' 
  },
  'chat.admin.msg2': { 
    et: 'Meister on teil kohal 30 minuti jooksul. Ummistuse kõrvaldamise hind alates 100€. Kas saadame meistri teele?', 
    ru: 'Мастер будет у вас в течение 30 минут. Стоимость устранения засора — от 100€. Отправлять машину?' 
  },
  'chat.client.msg3': { 
    et: 'Jah, palun! Kirjutan aadressi...', 
    ru: 'Да, записывайте адрес...' 
  },
  'chat.admin.msg3': { 
    et: 'Suurepärane! Meister võtab teiega 5 minuti pärast ühendust. Täname, et valisite meid! 🚀', 
    ru: 'Отлично! Мастер свяжется с вами через 5 минут. Спасибо, что выбрали нас! 🚀' 
  },
};

export interface PortfolioWork {
  imageUrl: string;
  alt: {
    et: string;
    ru: string;
  };
  description: {
    et: string;
    ru: string;
  };
  location: string;
}

export const portfolioWorks: PortfolioWork[] = [
  {
    imageUrl: 'https://usa.cdn-chatium.io/get/image_usa_7pLgMlBJab.940x623.jpeg',
    alt: {
      et: 'Ummistuse likvideerimine Lasnamäel',
      ru: 'Устранение засора в Ласнамяэ'
    },
    description: {
      et: 'Kanalisatsiooni torude puhastus ja survepesu Lasnamäel. Kiire diagnostika ja efektiivne lahendus.',
      ru: 'Прочистка и гидродинамическая промывка канализационных труб в Ласнамяэ. Быстрая диагностика и эффективное решение.'
    },
    location: 'Lasnamäe, Tallinn'
  },
  {
    imageUrl: 'https://usa.cdn-chatium.io/get/image_usa_374JS0ZWBN.434x650.jpeg',
    alt: {
      et: 'Radiaatori toru paigaldus Kesklinna piirkonnas',
      ru: 'Установка труб радиатора в районе Кесклинн'
    },
    description: {
      et: 'Täpne radiaatori torustiku paigaldus ja hermetiseerimine. Professionaalsed tööriistad ja kvaliteetne tulemus.',
      ru: 'Точная установка и герметизация труб радиатора. Профессиональные инструменты и качественный результат.'
    },
    location: 'Kesklinn, Tallinn'
  },
  {
    imageUrl: 'https://usa.cdn-chatium.io/get/image_usa_q6HDfCFbWF.940x627.jpeg',
    alt: {
      et: 'Toruliitmiku paigaldus Mustamäel',
      ru: 'Установка соединений труб в Мустамяэ'
    },
    description: {
      et: 'Kanalisatsiooni toruliitmiku professionaalne paigaldus. Garanteeritud tihedus ja vastupidavus.',
      ru: 'Профессиональная установка соединений канализационных труб. Гарантированная герметичность и долговечность.'
    },
    location: 'Mustamäe, Tallinn'
  },
  {
    imageUrl: 'https://usa.cdn-chatium.io/get/image_usa_T5T1ZJikYC.366x650.jpeg',
    alt: {
      et: 'Torustiku remont Kristiines',
      ru: 'Ремонт трубопровода в Кристийне'
    },
    description: {
      et: 'Keerulise torustiku ummistuse kõrvaldamine ja preventivne hooldus. Kaasaegsed meetodid ja varustus.',
      ru: 'Устранение сложного засора трубопровода и профилактическое обслуживание. Современные методы и оборудование.'
    },
    location: 'Kristiine, Tallinn'
  },
  {
    imageUrl: 'https://usa.cdn-chatium.io/get/image_usa_ZWEnkcESq9.940x627.jpeg',
    alt: {
      et: 'Väliste torude paigaldus Viimsis',
      ru: 'Установка наружных труб в Виимси'
    },
    description: {
      et: 'Väliste kanalisatsioonitorude kvaliteetne paigaldus. Vastupidavad materjalid ja täpne töö.',
      ru: 'Качественная установка наружных канализационных труб. Прочные материалы и точная работа.'
    },
    location: 'Viimsi, Harjumaa'
  },
  {
    imageUrl: 'https://usa.cdn-chatium.io/get/image_usa_w71Lzjka4n.433x650.jpeg',
    alt: {
      et: 'Survepesu seadme kasutamine Pirital',
      ru: 'Использование гидродинамического оборудования в Пирита'
    },
    description: {
      et: 'Professionaalse survepesu tehnika kasutamine ummistuste likvideerimiseks. Kiire ja efektiivne töö.',
      ru: 'Использование профессионального гидродинамического оборудования для устранения засоров. Быстрая и эффективная работа.'
    },
    location: 'Pirita, Tallinn'
  }
];

export function t(key: string, lang: Language): string {
  return translations[key]?.[lang] || key;
}

export function getCurrentLanguage(): Language {
  if (typeof window === 'undefined') return 'et';
  return (localStorage.getItem('language') as Language) || 'et';
}

export function setLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}
