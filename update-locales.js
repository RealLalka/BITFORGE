import fs from 'fs';

const ru = JSON.parse(fs.readFileSync('./src/locales/ru.json', 'utf-8'));
const en = JSON.parse(fs.readFileSync('./src/locales/en.json', 'utf-8'));
const tr = JSON.parse(fs.readFileSync('./src/locales/tr.json', 'utf-8'));

const uiRu = {
  more: "Подробнее",
  back: "Назад",
  mainMenu: "Главное меню",
  categories: "Категории услуг",
  steps: "Шаги работы",
  ready: "Готовы обсудить проект?",
  leaveReq: "Оставьте заявку, и наши специалисты свяжутся с вами для проведения бесплатной консультации.",
  contactUs: "Связаться с нами",
  notFound: "Услуга не найдена",
  backHome: "Вернуться на главную"
};

const uiEn = {
  more: "Learn more",
  back: "Back",
  mainMenu: "Main menu",
  categories: "Service Categories",
  steps: "Work steps",
  ready: "Ready to discuss your project?",
  leaveReq: "Leave a request, and our specialists will contact you for a free consultation.",
  contactUs: "Contact us",
  notFound: "Service not found",
  backHome: "Back to home"
};

const uiTr = {
  more: "Daha fazla",
  back: "Geri",
  mainMenu: "Ana menü",
  categories: "Hizmet Kategorileri",
  steps: "Çalışma adımları",
  ready: "Projenizi tartışmaya hazır mısınız?",
  leaveReq: "Bir talep bırakın, uzmanlarımız ücretsiz danışmanlık için sizinle iletişime geçsin.",
  contactUs: "Bize ulaşın",
  notFound: "Hizmet bulunamadı",
  backHome: "Ana sayfaya dön"
};

ru.ui = uiRu;
en.ui = uiEn;
tr.ui = uiTr;

fs.writeFileSync('./src/locales/ru.json', JSON.stringify(ru, null, 2));
fs.writeFileSync('./src/locales/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('./src/locales/tr.json', JSON.stringify(tr, null, 2));

console.log('Translations updated');
