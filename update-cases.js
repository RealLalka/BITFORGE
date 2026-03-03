import fs from 'fs';

const ruCases = {
  case1: {
    tag1: "Web", tag2: "Ecosystem",
    title: "Young Designs",
    desc: "Цифровая экосистема для Всероссийского конкурса дизайнеров",
    challenge: "Спроектировать отказоустойчивую конкурсную платформу с многоуровневой системой модерации работ.",
    solution: "Реализован комплексный цифровой продукт, включающий портал подачи заявок, панель администрирования для экспертов и интеграцию с социальными медиа.",
    result: "youngdesignspb.ru",
    overview: "Дизайн фронтенда выполнен в стиле Dark Mode SaaS с акцентом на Negative Space, что позволяет сфокусировать внимание на контенте и ключевых объектах.\n\nВизуальные константы: Использование Glassmorphism в элементах навигации и Floating UI для интерактивных компонентов.\n\nГрафические доминанты: В центре композиции — сложная 3D-абстракция с эффектом хромирования и анизотропной фильтрацией света, символизирующая синергию и динамику творческого процесса.\n\nТипографика и юзабилити: Применена строгая иерархия заголовков для обеспечения высокого уровня Accessibility (a11y). Акцентная кнопка (CTA) реализована в неоново-фиолетовом градиенте, создавая необходимый визуальный вес на черном фоне.\n\nАрхитектура: Интерфейс построен по принципу интуитивности, минимизируя когнитивную нагрузку на пользователя при прохождении пути от ознакомления до регистрации в конкурсе."
  },
  case2: {
    tag1: "E-commerce", tag2: "Gaming",
    title: "SALAVPAY",
    desc: "Магазин игр и игровой валюты",
    challenge: "Разработать интуитивно понятный интерфейс для мгновенного пополнения цифровых сервисов и покупки внутриигровых активов.",
    solution: "Спроектирована высококонверсионная посадочная страница с фокусом на функциональные виджеты и упрощенный пользовательский путь (User Flow).",
    result: "Интегрированная форма транзакций для Steam и каталог популярных тайтлов (PUBG Mobile, Genshin Impact и др.).",
    overview: "Интерфейс базируется на принципах Dark Linear Style, обеспечивая комфортное визуальное восприятие в условиях низкой освещенности.\n\nUI-компоненты: Использование Glassmorphism для карточек товаров и центрального виджета пополнения, что создает эффект глубины за счет мягкого размытия фона (backdrop-filter).\n\nВизуальные акценты: Применен Subtle Gradient для логотипа и ключевых кнопок, обеспечивающий смысловое выделение элементов управления на темном фоне.\n\nЮзабилити и Доступность (a11y):\nFloating UI: Поля ввода и интерактивные элементы имеют четкие границы и достаточный контраст для безошибочного взаимодействия.\nNegative Space: Свободное пространство между секциями исключает визуальный шум, направляя внимание пользователя на форму ввода данных.\nИнтуитивность: Навигация реализована через гибридный поиск и структурированный каталог, что сокращает время поиска нужной услуги до минимума."
  },
  case3: {
    tag1: "Fintech", tag2: "Crypto",
    title: "PANDORA",
    desc: "Ваш платежный партнер для бизнеса и частных транзакций",
    challenge: "Создать интерфейс для финтех-платформы, транслирующий надежность и высокую скорость обработки операций.",
    solution: "Разработка лендинга в стиле Dark Mode SaaS с использованием динамических графических элементов, визуализирующих поток данных.",
    result: "Быстрый доступ к консультациям и точка входа в личный кабинет для управления мультивалютными переводами (USDT, EUR, RUB).",
    overview: "Визуальная стратегия построена на глубоких темно-синих оттенках, вызывающих ассоциации с безопасностью и технологичностью.\n\nUI-компоненты: Применение Floating UI для виджетов статуса платежей, которые создают эффект многослойности и современности интерфейса.\n\nВизуальные акценты: Использование Glowing Borders и неоновых синих оттенков для выделения ключевых слов в заголовке и активных кнопок (CTA).\n\nЮзабилити и Доступность (a11y):\nNegative Space: Масштабные отступы вокруг главного заголовка минимизируют когнитивную нагрузку, позволяя пользователю мгновенно считать УТП.\nИнтуитивность: Лаконичные теги над заголовком («Быстро», «Выгодно», «Безопасно») служат быстрыми маркерами преимуществ сервиса.\nГрафические доминанты: Правая часть экрана отведена под абстрактную визуализацию транзакций с эффектом Glassmorphism, демонстрирующую real-time уведомления о полученных средствах."
  },
  case4: {
    tag1: "Trading", tag2: "Analytics",
    title: "FOREX ANALYTICS",
    desc: "Интеллектуальная платформа для мониторинга валютных рынков",
    challenge: "Спроектировать информационную панель (Dashboard) с высокой плотностью данных, сохраняя визуальную чистоту и скорость считывания котировок.",
    solution: "Разработка интерфейса на базе Dark Linear Style с динамическими графиками и модульной сеткой для кастомизации рабочего пространства трейдера.",
    result: "Реал-тайм стриминг цен, предиктивная аналитика на базе ML и система мгновенного исполнения ордеров.",
    overview: "Визуальный стек ориентирован на профессиональный сегмент, где приоритетом является юзабилити при длительной работе с монитором.\n\nUI-компоненты: Применение Glassmorphism для оверлеев и модальных окон, что позволяет сохранять контекст основного графика при открытии инструментов анализа.\n\nВизуальные акценты: Использование Subtle Gradient в гистограммах и осцилляторах для дифференциации бычьих и медвежьих трендов без избыточной цветовой агрессии.\n\nЮзабилити и Доступность (a11y):\nNegative Space: Тщательная проработка микро-отступов между таблицами котировок (Order Book) для предотвращения ошибок при вводе объема лота.\nFloating UI: Виджеты инструментов рисования и выбора таймфреймов «парят» над графиком, обеспечивая быстрый доступ к функционалу.\nИнтуитивность: Логическое разделение экрана на зоны мониторинга (лево), анализа (центр) и исполнения (право), соответствующее естественному паттерну движения взгляда."
  },
  case5: {
    tag1: "Dashboard", tag2: "Finance",
    title: "FINANCIAL DASHBOARD",
    desc: "Аналитическая панель управления капиталом и ликвидностью",
    challenge: "Агрегировать разрозненные финансовые потоки в единый интерфейс с мгновенным доступом к метрикам эффективности (P&L, Cash Flow).",
    solution: "Разработка модульной системы управления активами на базе Dark Linear Style, обеспечивающей визуализацию транзакций в реальном времени.",
    result: "Интерактивные чарты, система предиктивного прогнозирования кассовых разрывов и экспорт детализированной отчетности.",
    overview: "Проектирование велось с упором на минимизацию когнитивной нагрузки при анализе больших массивов числовых данных.\n\nUI-компоненты: Применение Glassmorphism для карточек KPI, что создает иерархию слоев и отделяет ключевые показатели от второстепенных графиков.\n\nВизуальные акценты: Использование Subtle Gradient в линейных диаграммах для индикации положительной и отрицательной динамики, что улучшает юзабилити при быстром сканировании экрана.\n\nЮзабилити и Доступность (a11y):\nNegative Space: Широкие межмодульные отступы предотвращают визуальное слияние графиков, обеспечивая чистоту восприятия (Minimalist style).\nFloating UI: Навигационное меню и фильтры реализованы в виде парящих панелей, что оптимизирует полезную площадь экрана для вывода данных.\nИнтуитивность: Использование стандартных паттернов «сверху-вниз» (от общих итогов к детальным транзакциям) позволяет пользователю бесшовно проводить глубокий аудит (Drill-down)."
  }
};

const enCases = {
  case1: {
    tag1: "Web", tag2: "Ecosystem",
    title: "Young Designs",
    desc: "Digital ecosystem for the All-Russian Designers Competition",
    challenge: "Design a fault-tolerant competition platform with a multi-level work moderation system.",
    solution: "Implemented a comprehensive digital product, including an application portal, an administration panel for experts, and social media integration.",
    result: "youngdesignspb.ru",
    overview: "The frontend design is executed in a Dark Mode SaaS style with an emphasis on Negative Space, allowing focus on content and key objects.\n\nVisual constants: Use of Glassmorphism in navigation elements and Floating UI for interactive components.\n\nGraphic dominants: In the center of the composition is a complex 3D abstraction with a chrome effect and anisotropic light filtering, symbolizing the synergy and dynamics of the creative process.\n\nTypography and usability: A strict hierarchy of headings is applied to ensure a high level of Accessibility (a11y). The call-to-action (CTA) button is implemented in a neon-purple gradient, creating the necessary visual weight on a black background.\n\nArchitecture: The interface is built on the principle of intuitiveness, minimizing the cognitive load on the user when navigating from familiarization to registration in the competition."
  },
  case2: {
    tag1: "E-commerce", tag2: "Gaming",
    title: "SALAVPAY",
    desc: "Game and in-game currency store",
    challenge: "Develop an intuitive interface for instant replenishment of digital services and purchase of in-game assets.",
    solution: "Designed a high-conversion landing page with a focus on functional widgets and a simplified User Flow.",
    result: "Integrated transaction form for Steam and a catalog of popular titles (PUBG Mobile, Genshin Impact, etc.).",
    overview: "The interface is based on Dark Linear Style principles, providing comfortable visual perception in low-light conditions.\n\nUI components: Use of Glassmorphism for product cards and the central replenishment widget, creating a depth effect through soft background blur (backdrop-filter).\n\nVisual accents: Applied Subtle Gradient for the logo and key buttons, providing semantic highlighting of controls on a dark background.\n\nUsability and Accessibility (a11y):\nFloating UI: Input fields and interactive elements have clear boundaries and sufficient contrast for error-free interaction.\nNegative Space: Free space between sections eliminates visual noise, directing user attention to the data entry form.\nIntuitiveness: Navigation is implemented through hybrid search and a structured catalog, reducing the time to find the desired service to a minimum."
  },
  case3: {
    tag1: "Fintech", tag2: "Crypto",
    title: "PANDORA",
    desc: "Your payment partner for business and private transactions",
    challenge: "Create an interface for a fintech platform that broadcasts reliability and high speed of transaction processing.",
    solution: "Development of a landing page in Dark Mode SaaS style using dynamic graphic elements visualizing the data flow.",
    result: "Quick access to consultations and an entry point to the personal account for managing multi-currency transfers (USDT, EUR, RUB).",
    overview: "The visual strategy is built on deep dark blue shades, evoking associations with security and technology.\n\nUI components: Application of Floating UI for payment status widgets, creating an effect of multi-layering and modernity of the interface.\n\nVisual accents: Use of Glowing Borders and neon blue shades to highlight key words in the heading and active buttons (CTA).\n\nUsability and Accessibility (a11y):\nNegative Space: Large-scale indents around the main heading minimize cognitive load, allowing the user to instantly read the USP.\nIntuitiveness: Concise tags above the heading (\"Fast\", \"Profitable\", \"Safe\") serve as quick markers of the service's advantages.\nGraphic dominants: The right side of the screen is dedicated to an abstract visualization of transactions with a Glassmorphism effect, demonstrating real-time notifications of received funds."
  },
  case4: {
    tag1: "Trading", tag2: "Analytics",
    title: "FOREX ANALYTICS",
    desc: "Intelligent platform for monitoring currency markets",
    challenge: "Design an information panel (Dashboard) with high data density, maintaining visual cleanliness and speed of reading quotes.",
    solution: "Development of an interface based on Dark Linear Style with dynamic charts and a modular grid for customizing the trader's workspace.",
    result: "Real-time price streaming, predictive analytics based on ML, and an instant order execution system.",
    overview: "The visual stack is oriented towards the professional segment, where usability during prolonged work with a monitor is a priority.\n\nUI components: Application of Glassmorphism for overlays and modal windows, allowing the context of the main chart to be preserved when opening analysis tools.\n\nVisual accents: Use of Subtle Gradient in histograms and oscillators to differentiate bullish and bearish trends without excessive color aggression.\n\nUsability and Accessibility (a11y):\nNegative Space: Careful elaboration of micro-indents between quote tables (Order Book) to prevent errors when entering lot volume.\nFloating UI: Drawing tool widgets and timeframe selection \"float\" above the chart, providing quick access to functionality.\nIntuitiveness: Logical division of the screen into monitoring (left), analysis (center), and execution (right) zones, corresponding to the natural pattern of eye movement."
  },
  case5: {
    tag1: "Dashboard", tag2: "Finance",
    title: "FINANCIAL DASHBOARD",
    desc: "Analytical dashboard for capital and liquidity management",
    challenge: "Aggregate disparate financial flows into a single interface with instant access to performance metrics (P&L, Cash Flow).",
    solution: "Development of a modular asset management system based on Dark Linear Style, providing real-time visualization of transactions.",
    result: "Interactive charts, a predictive cash gap forecasting system, and export of detailed reporting.",
    overview: "The design focused on minimizing cognitive load when analyzing large arrays of numerical data.\n\nUI components: Application of Glassmorphism for KPI cards, creating a hierarchy of layers and separating key indicators from secondary charts.\n\nVisual accents: Use of Subtle Gradient in line charts to indicate positive and negative dynamics, improving usability during quick screen scanning.\n\nUsability and Accessibility (a11y):\nNegative Space: Wide inter-module indents prevent visual merging of charts, ensuring clarity of perception (Minimalist style).\nFloating UI: The navigation menu and filters are implemented as floating panels, optimizing the useful screen area for data output.\nIntuitiveness: The use of standard \"top-down\" patterns (from general totals to detailed transactions) allows the user to seamlessly conduct a deep audit (Drill-down)."
  }
};

const trCases = { ...enCases }; // Fallback to EN for TR to save space, user requested RU primarily.

const data = {
  ru: {
    cases: ruCases,
    portfolio: { title: "Решения", subtitle: "Наши успешные проекты" },
    nav: { portfolio: "Решения" },
    case: { overview: "Обзор проекта", tech: "Техническая эстетика и UX-анализ", back: "Назад к решениям", video: "Смотреть демо", gallery: "Галерея", stack: "Технологии" }
  },
  en: {
    cases: enCases,
    portfolio: { title: "Solutions", subtitle: "Our successful projects" },
    nav: { portfolio: "Solutions" },
    case: { overview: "Project Overview", tech: "Tech Esthetics & UX Analysis", back: "Back to solutions", video: "Watch Demo", gallery: "Gallery", stack: "Tech Stack" }
  },
  tr: {
    cases: trCases,
    portfolio: { title: "Çözümler", subtitle: "Başarılı projelerimiz" },
    nav: { portfolio: "Çözümler" },
    case: { overview: "Proje Özeti", tech: "Teknik Estetik ve UX Analizi", back: "Çözümlere dön", video: "Demoyu İzle", gallery: "Galeri", stack: "Teknolojiler" }
  }
};

['ru', 'en', 'tr'].forEach(lang => {
  const filePath = `./src/locales/${lang}.json`;
  const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  fileData.cases = data[lang].cases;
  fileData.portfolio = { ...fileData.portfolio, ...data[lang].portfolio };
  fileData.nav = { ...fileData.nav, ...data[lang].nav };
  fileData.case = { ...fileData.case, ...data[lang].case };

  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
});
