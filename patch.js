import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Данные для локализаций
const caseData = {
  ru: {
    tag1: "Mobile",
    tag2: "Communication",
    title: "Wave Messenger",
    desc: "Защищенная корпоративная платформа обмена сообщениями с end-to-end шифрованием",
    challenge: "Разработать отказоустойчивую архитектуру для real-time коммуникаций, исключающую компрометацию данных B2B сегмента.",
    solution: "Внедрен протокол обмена на базе WebSockets с децентрализованной валидацией и аппаратным шифрованием по стандарту AES-256.",
    result: "Высокопроизводительный клиент с задержкой доставки <50мс и SLA 99.99%.",
    overview: "UI спроектирован по паттернам Dark Linear Style. Фокус на Negative Space и строгой типографике для минимизации когнитивной нагрузки. \n\nЮзабилити: Реализован Floating UI для контекстного меню сообщений и навигации, обеспечивая интуитивный доступ к функциям.\n\nВизуальные акценты: Subtle Gradient и Glowing Borders используются точечно для индикации статуса доставки и активных диалогов."
  },
  en: {
    tag1: "Mobile",
    tag2: "Communication",
    title: "Wave Messenger",
    desc: "Secure corporate messaging platform with end-to-end encryption",
    challenge: "Develop a fault-tolerant architecture for real-time B2B communications, eliminating data compromise risks.",
    solution: "Implemented a WebSocket-based protocol with decentralized validation and AES-256 hardware encryption.",
    result: "High-performance client with delivery latency <50ms and 99.99% SLA.",
    overview: "UI designed following Dark Linear Style patterns. Focus on Negative Space and typography to reduce cognitive load. \n\nUsability: Implemented Floating UI for contextual message menus and navigation, providing intuitive access to functions.\n\nVisual accents: Subtle Gradient and Glowing Borders are used precisely to indicate delivery status and active dialogues."
  },
  tr: {
    tag1: "Mobil",
    tag2: "İletişim",
    title: "Wave Messenger",
    desc: "Uçtan uca şifrelemeli güvenli kurumsal mesajlaşma platformu",
    challenge: "Veri ihlali risklerini ortadan kaldıran, B2B gerçek zamanlı iletişim için hataya dayanıklı bir mimari geliştirmek.",
    solution: "Merkezi olmayan doğrulama ve AES-256 donanım şifrelemeli WebSocket tabanlı protokol uygulandı.",
    result: "<50ms teslimat gecikmesi ve %99.99 SLA ile yüksek performanslı istemci.",
    overview: "Arayüz Dark Linear Style desenlerine göre tasarlandı. Bilişsel yükü azaltmak için Negative Space ve sıkı tipografiye odaklanıldı. \n\nKullanılabilirlik: Bağlamsal mesaj menüleri ve navigasyon için Floating UI uygulandı, işlevlere sezgisel erişim sağlandı.\n\nGörsel vurgular: Subtle Gradient ve Glowing Borders, teslimat durumunu ve aktif diyalogları belirtmek için hassas bir şekilde kullanılır."
  }
};

// Функция поиска файлов
const findFile = (filename) => {
  const possiblePaths = [
    path.join(__dirname, filename),
    path.join(__dirname, 'locales', filename),
    path.join(__dirname, 'src', 'locales', filename)
  ];
  return possiblePaths.find(p => fs.existsSync(p));
};

// 1. Патчинг локализаций (AST-мутация через JSON.parse)
console.log('--- Интеграция локализаций ---');
['ru', 'en', 'tr'].forEach(lang => {
  const filePath = findFile(`${lang}.json`);
  if (filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!data.cases.case6) {
      data.cases.case6 = caseData[lang];
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`[+] Обновлен ${lang}.json`);
    } else {
      console.log(`[=] ${lang}.json уже содержит case6`);
    }
  } else {
    console.error(`[-] Файл ${lang}.json не найден`);
  }
});

// 2. Патчинг CaseStudy.tsx
console.log('\n--- Интеграция роутинга (CaseStudy.tsx) ---');
const caseStudyPath = path.join(__dirname, 'src', 'pages', 'CaseStudy.tsx');
if (fs.existsSync(caseStudyPath)) {
  let content = fs.readFileSync(caseStudyPath, 'utf8');
  if (!content.includes("'6': 'wave-messenger'")) {
    content = content.replace(
      /'5':\s*'financial-dashboard'/,
      "'5': 'financial-dashboard',\n  '6': 'wave-messenger'"
    );
    fs.writeFileSync(caseStudyPath, content, 'utf8');
    console.log('[+] Обновлен CaseStudy.tsx');
  } else {
    console.log('[=] CaseStudy.tsx уже содержит маппинг wave-messenger');
  }
} else {
  console.error('[-] CaseStudy.tsx не найден');
}

// 3. Патчинг Portfolio.tsx
console.log('\n--- Интеграция UI компонента (Portfolio.tsx) ---');
const portfolioPath = path.join(__dirname, 'src', 'pages', 'Portfolio.tsx');
if (fs.existsSync(portfolioPath)) {
  let content = fs.readFileSync(portfolioPath, 'utf8');
  if (!content.includes("id: 6")) {
    const newCaseNode = `desc: t('cases.case5.desc')
    },
    {
      id: 6,
      assetFolder: 'wave-messenger',
      tag1: t('cases.case6.tag1'),
      tag2: t('cases.case6.tag2'),
      title: t('cases.case6.title'),
      desc: t('cases.case6.desc')
    }`;
    
    // Заменяем конец объекта case5 на case5 + case6
    content = content.replace(/desc:\s*t\('cases\.case5\.desc'\)\s*\}/, newCaseNode);
    fs.writeFileSync(portfolioPath, content, 'utf8');
    console.log('[+] Обновлен Portfolio.tsx');
  } else {
    console.log('[=] Portfolio.tsx уже содержит кейс id: 6');
  }
} else {
  console.error('[-] Portfolio.tsx не найден');
}

console.log('\nПатчинг завершен.');