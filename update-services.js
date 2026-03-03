import fs from 'fs';
import { servicesData } from './src/data/services.js'; // I'll just copy the data here to avoid TS issues.

const data = [
  {
    id: "dev",
    title: { ru: "Проектирование и разработка", en: "Design and Development", tr: "Tasarım ve Geliştirme" },
    desc: { ru: "Создание IT-продуктов «под ключ», мобильная и веб-разработка, AI, RPA.", en: "Turnkey IT products, mobile and web development, AI, RPA.", tr: "Anahtar teslim BT ürünleri, mobil ve web geliştirme, AI, RPA." },
    items: [
      {
        id: "turnkey-it",
        title: { ru: "Создание IT-продуктов «под ключ»", en: "Turnkey IT Product Creation", tr: "Anahtar Teslim BT Ürünleri" },
        description: { ru: "Полный цикл разработки программного обеспечения от идеи до запуска и поддержки. Мы берем на себя все технические риски и гарантируем результат.", en: "Full cycle software development from idea to launch and support. We take on all technical risks and guarantee results.", tr: "Fikirden lansmana ve desteğe kadar tam döngü yazılım geliştirme. Tüm teknik riskleri üstleniyor ve sonuçları garanti ediyoruz." },
        steps: [
          { title: { ru: "Discovery Phase", en: "Discovery Phase", tr: "Keşif Aşaması" }, desc: { ru: "Сбор требований, анализ конкурентов и формирование концепции.", en: "Requirements gathering, competitor analysis, and concept formation.", tr: "Gereksinim toplama, rakip analizi ve konsept oluşturma." } },
          { title: { ru: "Проектирование", en: "Design", tr: "Tasarım" }, desc: { ru: "Разработка архитектуры, UX/UI дизайна и написание ТЗ.", en: "Architecture development, UX/UI design, and writing technical specifications.", tr: "Mimari geliştirme, UX/UI tasarımı ve teknik şartname yazımı." } },
          { title: { ru: "Разработка", en: "Development", tr: "Geliştirme" }, desc: { ru: "Итеративное создание продукта (Frontend, Backend, Mobile).", en: "Iterative product creation (Frontend, Backend, Mobile).", tr: "Yinelemeli ürün oluşturma (Frontend, Backend, Mobil)." } },
          { title: { ru: "QA и Тестирование", en: "QA and Testing", tr: "QA ve Test" }, desc: { ru: "Многоуровневое тестирование для обеспечения качества.", en: "Multi-level testing to ensure quality.", tr: "Kaliteyi sağlamak için çok seviyeli test." } },
          { title: { ru: "Релиз и Поддержка", en: "Release and Support", tr: "Sürüm ve Destek" }, desc: { ru: "Развертывание на серверах и дальнейшее сопровождение.", en: "Deployment on servers and further maintenance.", tr: "Sunucularda dağıtım ve daha fazla bakım." } }
        ]
      },
      {
        id: "mobile-web-dev",
        title: { ru: "Разработка мобильных и веб-клиентов", en: "Mobile and Web Client Development", tr: "Mobil ve Web İstemci Geliştirme" },
        description: { ru: "Создание современных, быстрых и адаптивных веб-приложений и нативных/кроссплатформенных мобильных приложений.", en: "Creating modern, fast, and responsive web applications and native/cross-platform mobile apps.", tr: "Modern, hızlı ve duyarlı web uygulamaları ile yerel/çapraz platform mobil uygulamalar oluşturma." },
        steps: [
          { title: { ru: "Анализ требований", en: "Requirements Analysis", tr: "Gereksinim Analizi" }, desc: { ru: "Определение целевых платформ и функционала.", en: "Defining target platforms and functionality.", tr: "Hedef platformları ve işlevselliği tanımlama." } },
          { title: { ru: "UI/UX Дизайн", en: "UI/UX Design", tr: "UI/UX Tasarımı" }, desc: { ru: "Создание интуитивно понятных интерфейсов.", en: "Creating intuitive interfaces.", tr: "Sezgisel arayüzler oluşturma." } },
          { title: { ru: "Разработка", en: "Development", tr: "Geliştirme" }, desc: { ru: "Программирование клиентской части (React, Vue, iOS, Android, Flutter).", en: "Client-side programming (React, Vue, iOS, Android, Flutter).", tr: "İstemci tarafı programlama (React, Vue, iOS, Android, Flutter)." } },
          { title: { ru: "Интеграция", en: "Integration", tr: "Entegrasyon" }, desc: { ru: "Подключение к API и сторонним сервисам.", en: "Connecting to APIs and third-party services.", tr: "API'lere ve üçüncü taraf hizmetlere bağlanma." } },
          { title: { ru: "Публикация", en: "Publication", tr: "Yayınlama" }, desc: { ru: "Размещение в App Store, Google Play или деплой на веб-сервер.", en: "Placement in the App Store, Google Play, or deployment to a web server.", tr: "App Store, Google Play'de yerleştirme veya bir web sunucusuna dağıtım." } }
        ]
      },
      {
        id: "front-back-eng",
        title: { ru: "Frontend и Backend инжиниринг", en: "Frontend and Backend Engineering", tr: "Frontend ve Backend Mühendisliği" },
        description: { ru: "Глубокая техническая разработка серверной и клиентской логики для высоконагруженных систем.", en: "Deep technical development of server and client logic for high-load systems.", tr: "Yüksek yüklü sistemler için sunucu ve istemci mantığının derin teknik gelişimi." },
        steps: [
          { title: { ru: "Архитектура", en: "Architecture", tr: "Mimari" }, desc: { ru: "Выбор стека технологий и проектирование баз данных.", en: "Choosing the technology stack and designing databases.", tr: "Teknoloji yığınını seçme ve veritabanlarını tasarlama." } },
          { title: { ru: "Backend разработка", en: "Backend Development", tr: "Backend Geliştirme" }, desc: { ru: "Создание надежного API и микросервисов.", en: "Creating a reliable API and microservices.", tr: "Güvenilir bir API ve mikro hizmetler oluşturma." } },
          { title: { ru: "Frontend разработка", en: "Frontend Development", tr: "Frontend Geliştirme" }, desc: { ru: "Реализация сложной бизнес-логики на стороне клиента.", en: "Implementing complex business logic on the client side.", tr: "İstemci tarafında karmaşık iş mantığını uygulama." } },
          { title: { ru: "Оптимизация", en: "Optimization", tr: "Optimizasyon" }, desc: { ru: "Профилирование производительности и устранение узких мест.", en: "Performance profiling and eliminating bottlenecks.", tr: "Performans profilleme ve darboğazları ortadan kaldırma." } },
          { title: { ru: "CI/CD", en: "CI/CD", tr: "CI/CD" }, desc: { ru: "Настройка непрерывной интеграции и доставки.", en: "Setting up continuous integration and delivery.", tr: "Sürekli entegrasyon ve teslimatı ayarlama." } }
        ]
      },
      {
        id: "ai-integration",
        title: { ru: "Интеграция искусственного интеллекта", en: "Artificial Intelligence Integration", tr: "Yapay Zeka Entegrasyonu" },
        description: { ru: "Внедрение нейросетей, машинного обучения и LLM моделей в бизнес-процессы компании.", en: "Implementation of neural networks, machine learning, and LLM models into company business processes.", tr: "Sinir ağlarının, makine öğreniminin ve LLM modellerinin şirket iş süreçlerine uygulanması." },
        steps: [
          { title: { ru: "Аудит процессов", en: "Process Audit", tr: "Süreç Denetimi" }, desc: { ru: "Поиск задач, которые можно автоматизировать с помощью ИИ.", en: "Finding tasks that can be automated using AI.", tr: "YZ kullanarak otomatikleştirilebilecek görevleri bulma." } },
          { title: { ru: "Подготовка данных", en: "Data Preparation", tr: "Veri Hazırlama" }, desc: { ru: "Сбор и разметка данных для обучения моделей.", en: "Collecting and labeling data for training models.", tr: "Modelleri eğitmek için veri toplama ve etiketleme." } },
          { title: { ru: "Разработка/Интеграция", en: "Development/Integration", tr: "Geliştirme/Entegrasyon" }, desc: { ru: "Обучение собственных моделей или интеграция готовых API (OpenAI, Gemini).", en: "Training custom models or integrating ready-made APIs (OpenAI, Gemini).", tr: "Özel modelleri eğitme veya hazır API'leri (OpenAI, Gemini) entegre etme." } },
          { title: { ru: "Тестирование", en: "Testing", tr: "Test" }, desc: { ru: "Оценка точности и корректировка алгоритмов.", en: "Evaluating accuracy and adjusting algorithms.", tr: "Doğruluğu değerlendirme ve algoritmaları ayarlama." } },
          { title: { ru: "Внедрение", en: "Implementation", tr: "Uygulama" }, desc: { ru: "Интеграция ИИ в существующую IT-инфраструктуру.", en: "Integrating AI into the existing IT infrastructure.", tr: "YZ'yi mevcut BT altyapısına entegre etme." } }
        ]
      },
      {
        id: "rpa-dev",
        title: { ru: "RPA-разработка", en: "RPA Development", tr: "RPA Geliştirme" },
        description: { ru: "Роботизация рутинных бизнес-процессов (Robotic Process Automation) для снижения издержек и ошибок.", en: "Robotic Process Automation (RPA) of routine business processes to reduce costs and errors.", tr: "Maliyetleri ve hataları azaltmak için rutin iş süreçlerinin Robotik Süreç Otomasyonu (RPA)." },
        steps: [
          { title: { ru: "Анализ процессов", en: "Process Analysis", tr: "Süreç Analizi" }, desc: { ru: "Выявление рутинных задач для роботизации.", en: "Identifying routine tasks for robotization.", tr: "Robotlaştırma için rutin görevleri belirleme." } },
          { title: { ru: "Проектирование робота", en: "Robot Design", tr: "Robot Tasarımı" }, desc: { ru: "Создание алгоритма действий программного робота.", en: "Creating an algorithm of actions for the software robot.", tr: "Yazılım robotu için eylem algoritması oluşturma." } },
          { title: { ru: "Разработка", en: "Development", tr: "Geliştirme" }, desc: { ru: "Написание скриптов и настройка RPA-платформы.", en: "Writing scripts and configuring the RPA platform.", tr: "Komut dosyaları yazma ve RPA platformunu yapılandırma." } },
          { title: { ru: "Опытная эксплуатация", en: "Pilot Operation", tr: "Pilot İşletim" }, desc: { ru: "Тестирование робота на реальных данных под контролем.", en: "Testing the robot on real data under supervision.", tr: "Robotu gözetim altında gerçek verilerle test etme." } },
          { title: { ru: "Масштабирование", en: "Scaling", tr: "Ölçeklendirme" }, desc: { ru: "Перевод робота в промышленную эксплуатацию.", en: "Transferring the robot to commercial operation.", tr: "Robotu ticari işletime aktarma." } }
        ]
      },
      {
        id: "bitrix-customization",
        title: { ru: "Внедрение и кастомизация систем Битрикс", en: "Implementation and Customization of Bitrix Systems", tr: "Bitrix Sistemlerinin Uygulanması ve Özelleştirilmesi" },
        description: { ru: "Настройка корпоративных порталов и CRM на базе 1С-Битрикс под уникальные нужды бизнеса.", en: "Configuring corporate portals and CRM based on 1C-Bitrix for unique business needs.", tr: "Benzersiz iş ihtiyaçları için 1C-Bitrix tabanlı kurumsal portalları ve CRM'i yapılandırma." },
        steps: [
          { title: { ru: "Бизнес-анализ", en: "Business Analysis", tr: "İş Analizi" }, desc: { ru: "Изучение структуры компании и процессов продаж.", en: "Studying the company structure and sales processes.", tr: "Şirket yapısını ve satış süreçlerini inceleme." } },
          { title: { ru: "Базовая настройка", en: "Basic Setup", tr: "Temel Kurulum" }, desc: { ru: "Установка портала, настройка прав и структуры.", en: "Installing the portal, configuring permissions and structure.", tr: "Portalı kurma, izinleri ve yapıyı yapılandırma." } },
          { title: { ru: "Кастомизация", en: "Customization", tr: "Özelleştirme" }, desc: { ru: "Разработка нестандартных модулей и бизнес-процессов.", en: "Developing non-standard modules and business processes.", tr: "Standart dışı modüller ve iş süreçleri geliştirme." } },
          { title: { ru: "Интеграция", en: "Integration", tr: "Entegrasyon" }, desc: { ru: "Связь Битрикс24 с 1С, телефонией, сайтом и мессенджерами.", en: "Connecting Bitrix24 with 1C, telephony, website, and messengers.", tr: "Bitrix24'ü 1C, telefon, web sitesi ve mesajlaşma programlarına bağlama." } },
          { title: { ru: "Обучение", en: "Training", tr: "Eğitim" }, desc: { ru: "Проведение обучающих семинаров для сотрудников.", en: "Conducting training seminars for employees.", tr: "Çalışanlar için eğitim seminerleri düzenleme." } }
        ]
      },
      {
        id: "ui-ux-design",
        title: { ru: "Проектирование визуальных интерфейсов", en: "Visual Interface Design", tr: "Görsel Arayüz Tasarımı" },
        description: { ru: "Создание продуманного UX/UI дизайна, который решает задачи бизнеса и удобен для пользователей.", en: "Creating thoughtful UX/UI design that solves business problems and is user-friendly.", tr: "İş sorunlarını çözen ve kullanıcı dostu, düşünceli UX/UI tasarımı oluşturma." },
        steps: [
          { title: { ru: "Исследование", en: "Research", tr: "Araştırma" }, desc: { ru: "Анализ целевой аудитории и конкурентов.", en: "Analysis of the target audience and competitors.", tr: "Hedef kitle ve rakiplerin analizi." } },
          { title: { ru: "Прототипирование", en: "Prototyping", tr: "Prototipleme" }, desc: { ru: "Создание wireframes и пользовательских путей (CJM).", en: "Creating wireframes and customer journey maps (CJM).", tr: "Tel kafesler ve müşteri yolculuğu haritaları (CJM) oluşturma." } },
          { title: { ru: "Визуальный дизайн", en: "Visual Design", tr: "Görsel Tasarım" }, desc: { ru: "Отрисовка макетов в фирменном стиле (UI).", en: "Drawing mockups in corporate style (UI).", tr: "Kurumsal stilde (UI) maketler çizme." } },
          { title: { ru: "Анимация", en: "Animation", tr: "Animasyon" }, desc: { ru: "Проектирование микровзаимодействий и анимаций.", en: "Designing micro-interactions and animations.", tr: "Mikro etkileşimler ve animasyonlar tasarlama." } },
          { title: { ru: "Передача в разработку", en: "Handover to Development", tr: "Geliştirmeye Devir" }, desc: { ru: "Подготовка UI-kit и спецификаций для программистов.", en: "Preparing UI-kit and specifications for programmers.", tr: "Programcılar için UI-kit ve spesifikasyonlar hazırlama." } }
        ]
      }
    ]
  },
  {
    id: "support",
    title: { ru: "Команды и поддержка", en: "Teams and Support", tr: "Ekipler ve Destek" },
    desc: { ru: "IT-аутсорсинг, аутстаффинг, техническая поддержка с SLA.", en: "IT outsourcing, outstaffing, technical support with SLA.", tr: "BT dış kaynak kullanımı, personel kiralama, SLA ile teknik destek." },
    items: [
      {
        id: "it-outsourcing",
        title: { ru: "IT-аутсорсинг", en: "IT Outsourcing", tr: "BT Dış Kaynak Kullanımı" },
        description: { ru: "Передача функций по разработке и поддержке IT-инфраструктуры нашей выделенной команде.", en: "Transfer of IT infrastructure development and support functions to our dedicated team.", tr: "BT altyapısı geliştirme ve destek işlevlerinin özel ekibimize devri." },
        steps: [
          { title: { ru: "Аудит", en: "Audit", tr: "Denetim" }, desc: { ru: "Оценка текущего состояния IT-инфраструктуры.", en: "Assessment of the current state of IT infrastructure.", tr: "BT altyapısının mevcut durumunun değerlendirilmesi." } },
          { title: { ru: "Формирование SLA", en: "SLA Formation", tr: "SLA Oluşturma" }, desc: { ru: "Согласование уровня сервиса и зон ответственности.", en: "Agreement on service level and areas of responsibility.", tr: "Hizmet seviyesi ve sorumluluk alanları üzerinde anlaşma." } },
          { title: { ru: "Приемка дел", en: "Handover", tr: "Devir Teslim" }, desc: { ru: "Передача доступов и документации.", en: "Transfer of access and documentation.", tr: "Erişim ve belgelerin devri." } },
          { title: { ru: "Обслуживание", en: "Maintenance", tr: "Bakım" }, desc: { ru: "Регулярная поддержка, мониторинг и развитие систем.", en: "Regular support, monitoring, and system development.", tr: "Düzenli destek, izleme ve sistem geliştirme." } },
          { title: { ru: "Отчетность", en: "Reporting", tr: "Raporlama" }, desc: { ru: "Предоставление прозрачных отчетов о проделанной работе.", en: "Providing transparent reports on the work done.", tr: "Yapılan işler hakkında şeffaf raporlar sunma." } }
        ]
      },
      {
        id: "outstaffing",
        title: { ru: "Аутстаффинг", en: "Outstaffing", tr: "Personel Kiralama" },
        description: { ru: "Усиление вашей команды нашими опытными разработчиками, аналитиками или тестировщиками.", en: "Strengthening your team with our experienced developers, analysts, or testers.", tr: "Ekibinizi deneyimli geliştiricilerimiz, analistlerimiz veya test uzmanlarımızla güçlendirme." },
        steps: [
          { title: { ru: "Запрос", en: "Request", tr: "Talep" }, desc: { ru: "Определение требуемых компетенций и грейдов.", en: "Determining required competencies and grades.", tr: "Gerekli yetkinliklerin ve derecelerin belirlenmesi." } },
          { title: { ru: "Подбор", en: "Selection", tr: "Seçim" }, desc: { ru: "Предоставление резюме подходящих специалистов.", en: "Providing resumes of suitable specialists.", tr: "Uygun uzmanların özgeçmişlerinin sunulması." } },
          { title: { ru: "Собеседование", en: "Interview", tr: "Mülakat" }, desc: { ru: "Интервью с кандидатами на вашей стороне.", en: "Interviews with candidates on your side.", tr: "Sizin tarafınızdaki adaylarla mülakatlar." } },
          { title: { ru: "Интеграция", en: "Integration", tr: "Entegrasyon" }, desc: { ru: "Выход специалиста на проект и адаптация в команде.", en: "Specialist onboarding and adaptation in the team.", tr: "Uzmanın projeye katılımı ve ekibe adaptasyonu." } },
          { title: { ru: "Сопровождение", en: "Support", tr: "Destek" }, desc: { ru: "Контроль качества работы и HR-поддержка.", en: "Quality control of work and HR support.", tr: "İşin kalite kontrolü ve İK desteği." } }
        ]
      },
      {
        id: "tech-support-sla",
        title: { ru: "Техническая поддержка с SLA", en: "Technical Support with SLA", tr: "SLA ile Teknik Destek" },
        description: { ru: "Гарантированное решение инцидентов и бесперебойная работа ваших сервисов 24/7.", en: "Guaranteed incident resolution and uninterrupted operation of your services 24/7.", tr: "Garantili olay çözümü ve hizmetlerinizin 7/24 kesintisiz çalışması." },
        steps: [
          { title: { ru: "Настройка мониторинга", en: "Monitoring Setup", tr: "İzleme Kurulumu" }, desc: { ru: "Подключение систем алертинга (Zabbix, Prometheus).", en: "Connecting alerting systems (Zabbix, Prometheus).", tr: "Uyarı sistemlerinin bağlanması (Zabbix, Prometheus)." } },
          { title: { ru: "Организация HelpDesk", en: "HelpDesk Organization", tr: "Yardım Masası Organizasyonu" }, desc: { ru: "Настройка каналов приема обращений.", en: "Setting up channels for receiving requests.", tr: "Talepleri almak için kanalların ayarlanması." } },
          { title: { ru: "Классификация", en: "Classification", tr: "Sınıflandırma" }, desc: { ru: "Распределение инцидентов по приоритетам.", en: "Distributing incidents by priority.", tr: "Olayları önceliğe göre dağıtma." } },
          { title: { ru: "Решение", en: "Resolution", tr: "Çözüm" }, desc: { ru: "Устранение сбоев в рамках оговоренного времени (SLA).", en: "Eliminating failures within the agreed time (SLA).", tr: "Arızaların kararlaştırılan süre içinde giderilmesi (SLA)." } },
          { title: { ru: "Анализ", en: "Analysis", tr: "Analiz" }, desc: { ru: "Пост-мортем анализ критических инцидентов.", en: "Post-mortem analysis of critical incidents.", tr: "Kritik olayların post-mortem analizi." } }
        ]
      },
      {
        id: "jira-service",
        title: { ru: "Внедрение и администрирование Jira Service", en: "Implementation and Administration of Jira Service", tr: "Jira Service Uygulaması ve Yönetimi" },
        description: { ru: "Настройка процессов ITSM и ESM на базе продуктов Atlassian.", en: "Setting up ITSM and ESM processes based on Atlassian products.", tr: "Atlassian ürünlerine dayalı ITSM ve ESM süreçlerinin ayarlanması." },
        steps: [
          { title: { ru: "Аудит процессов", en: "Process Audit", tr: "Süreç Denetimi" }, desc: { ru: "Изучение текущих процессов обработки заявок.", en: "Studying current request processing processes.", tr: "Mevcut talep işleme süreçlerinin incelenmesi." } },
          { title: { ru: "Проектирование", en: "Design", tr: "Tasarım" }, desc: { ru: "Разработка схемы рабочих процессов (workflows).", en: "Developing a workflow scheme.", tr: "Bir iş akışı şeması geliştirme." } },
          { title: { ru: "Настройка Jira", en: "Jira Setup", tr: "Jira Kurulumu" }, desc: { ru: "Создание портала, очередей, SLA и автоматизаций.", en: "Creating a portal, queues, SLA, and automations.", tr: "Bir portal, kuyruklar, SLA ve otomasyonlar oluşturma." } },
          { title: { ru: "Интеграция", en: "Integration", tr: "Entegrasyon" }, desc: { ru: "Связь с Confluence, Bitbucket и внешними системами.", en: "Connection with Confluence, Bitbucket, and external systems.", tr: "Confluence, Bitbucket ve dış sistemlerle bağlantı." } },
          { title: { ru: "Запуск", en: "Launch", tr: "Lansman" }, desc: { ru: "Обучение агентов и запуск системы в эксплуатацию.", en: "Training agents and launching the system into operation.", tr: "Temsilcileri eğitme ve sistemi işletime alma." } }
        ]
      }
    ]
  },
  {
    id: "refactoring",
    title: { ru: "Рефакторинг и доработка", en: "Refactoring and Improvement", tr: "Yeniden Düzenleme ve İyileştirme" },
    desc: { ru: "Модернизация легаси, антикризисный инжиниринг, QA и DevOps.", en: "Legacy modernization, anti-crisis engineering, QA, and DevOps.", tr: "Eski sistem modernizasyonu, kriz karşıtı mühendislik, QA ve DevOps." },
    items: [
      {
        id: "legacy-modernization",
        title: { ru: "Модернизация легаси-систем", en: "Legacy System Modernization", tr: "Eski Sistem Modernizasyonu" },
        description: { ru: "Безопасное обновление устаревшего кода и архитектуры без остановки бизнес-процессов.", en: "Safe updating of outdated code and architecture without stopping business processes.", tr: "İş süreçlerini durdurmadan eski kod ve mimarinin güvenli bir şekilde güncellenmesi." },
        steps: [
          { title: { ru: "Аудит кода", en: "Code Audit", tr: "Kod Denetimi" }, desc: { ru: "Анализ технического долга и архитектурных проблем.", en: "Analysis of technical debt and architectural problems.", tr: "Teknik borç ve mimari sorunların analizi." } },
          { title: { ru: "Стратегия", en: "Strategy", tr: "Strateji" }, desc: { ru: "Выбор подхода: постепенный рефакторинг или переписывание.", en: "Choosing an approach: gradual refactoring or rewriting.", tr: "Bir yaklaşım seçme: aşamalı yeniden düzenleme veya yeniden yazma." } },
          { title: { ru: "Покрытие тестами", en: "Test Coverage", tr: "Test Kapsamı" }, desc: { ru: "Написание автотестов для фиксации текущего поведения.", en: "Writing autotests to fix current behavior.", tr: "Mevcut davranışı düzeltmek için otomatik testler yazma." } },
          { title: { ru: "Рефакторинг", en: "Refactoring", tr: "Yeniden Düzenleme" }, desc: { ru: "Поэтапное обновление модулей и переход на новые технологии.", en: "Phased updating of modules and transition to new technologies.", tr: "Modüllerin aşamalı olarak güncellenmesi ve yeni teknolojilere geçiş." } },
          { title: { ru: "Миграция", en: "Migration", tr: "Geçiş" }, desc: { ru: "Бесшовный перенос данных и переключение трафика.", en: "Seamless data transfer and traffic switching.", tr: "Kesintisiz veri aktarımı ve trafik geçişi." } }
        ]
      },
      {
        id: "crisis-engineering",
        title: { ru: "Антикризисный инжиниринг", en: "Anti-crisis Engineering", tr: "Kriz Karşıtı Mühendislik" },
        description: { ru: "Экстренное спасение падающих проектов, оптимизация производительности и устранение критических уязвимостей.", en: "Emergency rescue of failing projects, performance optimization, and elimination of critical vulnerabilities.", tr: "Başarısız projelerin acil kurtarılması, performans optimizasyonu ve kritik güvenlik açıklarının giderilmesi." },
        steps: [
          { title: { ru: "Триаж", en: "Triage", tr: "Triyaj" }, desc: { ru: "Быстрая локализация проблемы и остановка деградации сервиса.", en: "Quick localization of the problem and stopping service degradation.", tr: "Sorunun hızlı bir şekilde yerelleştirilmesi ve hizmet bozulmasının durdurulması." } },
          { title: { ru: "Стабилизация", en: "Stabilization", tr: "Stabilizasyon" }, desc: { ru: "Временные патчи для восстановления работоспособности.", en: "Temporary patches to restore operability.", tr: "Çalışabilirliği geri yüklemek için geçici yamalar." } },
          { title: { ru: "Глубинный анализ", en: "In-depth Analysis", tr: "Derinlemesine Analiz" }, desc: { ru: "Поиск первопричины (Root Cause Analysis).", en: "Finding the root cause (Root Cause Analysis).", tr: "Kök nedeni bulma (Kök Neden Analizi)." } },
          { title: { ru: "Системное решение", en: "Systemic Solution", tr: "Sistemik Çözüm" }, desc: { ru: "Архитектурные изменения для предотвращения повторения.", en: "Architectural changes to prevent recurrence.", tr: "Tekrarlamayı önlemek için mimari değişiklikler." } },
          { title: { ru: "Мониторинг", en: "Monitoring", tr: "İzleme" }, desc: { ru: "Усиленный контроль за восстановленной системой.", en: "Enhanced control over the restored system.", tr: "Geri yüklenen sistem üzerinde artırılmış kontrol." } }
        ]
      },
      {
        id: "qa-sdet",
        title: { ru: "Обеспечение качества (QA) и SDET", en: "Quality Assurance (QA) and SDET", tr: "Kalite Güvencesi (QA) ve SDET" },
        description: { ru: "Построение процессов тестирования и разработка сложных фреймворков автоматизации.", en: "Building testing processes and developing complex automation frameworks.", tr: "Test süreçleri oluşturma ve karmaşık otomasyon çerçeveleri geliştirme." },
        steps: [
          { title: { ru: "Аудит QA", en: "QA Audit", tr: "QA Denetimi" }, desc: { ru: "Оценка текущих процессов тестирования.", en: "Assessment of current testing processes.", tr: "Mevcut test süreçlerinin değerlendirilmesi." } },
          { title: { ru: "Тест-дизайн", en: "Test Design", tr: "Test Tasarımı" }, desc: { ru: "Разработка тестовой документации и стратегии.", en: "Development of test documentation and strategy.", tr: "Test belgeleri ve stratejisi geliştirme." } },
          { title: { ru: "Автоматизация", en: "Automation", tr: "Otomasyon" }, desc: { ru: "Создание автотестов (UI, API, Load) на Python/Java/TS.", en: "Creating autotests (UI, API, Load) in Python/Java/TS.", tr: "Python/Java/TS'de otomatik testler (UI, API, Yük) oluşturma." } },
          { title: { ru: "Интеграция в CI/CD", en: "CI/CD Integration", tr: "CI/CD Entegrasyonu" }, desc: { ru: "Настройка регулярного запуска тестов при сборке.", en: "Setting up regular test runs during the build.", tr: "Derleme sırasında düzenli test çalıştırmaları ayarlama." } },
          { title: { ru: "Поддержка", en: "Support", tr: "Destek" }, desc: { ru: "Актуализация тестовой базы при изменении продукта.", en: "Updating the test base when the product changes.", tr: "Ürün değiştiğinde test tabanını güncelleme." } }
        ]
      },
      {
        id: "devops",
        title: { ru: "DevOps-сопровождение", en: "DevOps Support", tr: "DevOps Desteği" },
        description: { ru: "Автоматизация инфраструктуры, настройка CI/CD и обеспечение отказоустойчивости.", en: "Infrastructure automation, CI/CD setup, and ensuring fault tolerance.", tr: "Altyapı otomasyonu, CI/CD kurulumu ve hata toleransını sağlama." },
        steps: [
          { title: { ru: "Аудит инфраструктуры", en: "Infrastructure Audit", tr: "Altyapı Denetimi" }, desc: { ru: "Анализ текущих серверов и процессов деплоя.", en: "Analysis of current servers and deployment processes.", tr: "Mevcut sunucuların ve dağıtım süreçlerinin analizi." } },
          { title: { ru: "Infrastructure as Code", en: "Infrastructure as Code", tr: "Kod Olarak Altyapı" }, desc: { ru: "Описание инфраструктуры с помощью Terraform/Ansible.", en: "Describing infrastructure using Terraform/Ansible.", tr: "Terraform/Ansible kullanarak altyapıyı tanımlama." } },
          { title: { ru: "Контейнеризация", en: "Containerization", tr: "Konteynerleştirme" }, desc: { ru: "Упаковка приложений в Docker и оркестрация (Kubernetes).", en: "Packaging applications in Docker and orchestration (Kubernetes).", tr: "Uygulamaları Docker'da paketleme ve orkestrasyon (Kubernetes)." } },
          { title: { ru: "CI/CD Pipeline", en: "CI/CD Pipeline", tr: "CI/CD Boru Hattı" }, desc: { ru: "Настройка автоматической сборки и доставки кода.", en: "Setting up automatic code build and delivery.", tr: "Otomatik kod derleme ve teslimatını ayarlama." } },
          { title: { ru: "SecOps", en: "SecOps", tr: "SecOps" }, desc: { ru: "Внедрение практик безопасности в процесс разработки.", en: "Implementing security practices in the development process.", tr: "Geliştirme sürecinde güvenlik uygulamalarını uygulama." } }
        ]
      }
    ]
  },
  {
    id: "consulting",
    title: { ru: "Аналитика, аудит и консалтинг", en: "Analytics, Audit, and Consulting", tr: "Analitik, Denetim ve Danışmanlık" },
    desc: { ru: "Discovery Phase, проектирование архитектуры, бизнес-анализ, UX-аудит.", en: "Discovery Phase, architecture design, business analysis, UX audit.", tr: "Keşif Aşaması, mimari tasarım, iş analizi, UX denetimi." },
    items: [
      {
        id: "discovery-phase",
        title: { ru: "Discovery Phase", en: "Discovery Phase", tr: "Keşif Aşaması" },
        description: { ru: "Предпроектное исследование для минимизации рисков и точной оценки стоимости разработки.", en: "Pre-project research to minimize risks and accurately estimate development costs.", tr: "Riskleri en aza indirmek ve geliştirme maliyetlerini doğru bir şekilde tahmin etmek için proje öncesi araştırma." },
        steps: [
          { title: { ru: "Брифинг", en: "Briefing", tr: "Brifing" }, desc: { ru: "Сбор первичных требований и бизнес-целей.", en: "Collecting initial requirements and business goals.", tr: "İlk gereksinimleri ve iş hedeflerini toplama." } },
          { title: { ru: "Анализ рынка", en: "Market Analysis", tr: "Pazar Analizi" }, desc: { ru: "Изучение конкурентов и целевой аудитории.", en: "Studying competitors and target audience.", tr: "Rakipleri ve hedef kitleyi inceleme." } },
          { title: { ru: "Проектирование", en: "Design", tr: "Tasarım" }, desc: { ru: "Создание концепции, архитектуры и прототипов.", en: "Creating a concept, architecture, and prototypes.", tr: "Bir konsept, mimari ve prototipler oluşturma." } },
          { title: { ru: "Оценка", en: "Estimation", tr: "Tahmin" }, desc: { ru: "Формирование детальной сметы и плана работ.", en: "Forming a detailed estimate and work plan.", tr: "Ayrıntılı bir tahmin ve iş planı oluşturma." } },
          { title: { ru: "Артефакты", en: "Artifacts", tr: "Eserler" }, desc: { ru: "Передача Vision & Scope, ТЗ и кликабельного прототипа.", en: "Handover of Vision & Scope, technical specifications, and a clickable prototype.", tr: "Vizyon ve Kapsam, teknik şartname ve tıklanabilir bir prototipin teslimi." } }
        ]
      },
      {
        id: "it-architecture",
        title: { ru: "Проектирование IT-архитектуры", en: "IT Architecture Design", tr: "BT Mimari Tasarımı" },
        description: { ru: "Разработка масштабируемой и отказоустойчивой архитектуры для сложных систем.", en: "Developing a scalable and fault-tolerant architecture for complex systems.", tr: "Karmaşık sistemler için ölçeklenebilir ve hataya dayanıklı bir mimari geliştirme." },
        steps: [
          { title: { ru: "Сбор нефункциональных требований", en: "Gathering Non-functional Requirements", tr: "İşlevsel Olmayan Gereksinimleri Toplama" }, desc: { ru: "Определение нагрузок, SLA, требований к безопасности.", en: "Determining loads, SLA, security requirements.", tr: "Yükleri, SLA'yı, güvenlik gereksinimlerini belirleme." } },
          { title: { ru: "Выбор паттернов", en: "Choosing Patterns", tr: "Desen Seçimi" }, desc: { ru: "Микросервисы, монолит, событийно-ориентированная архитектура.", en: "Microservices, monolith, event-driven architecture.", tr: "Mikro hizmetler, monolit, olay odaklı mimari." } },
          { title: { ru: "Проектирование БД", en: "DB Design", tr: "Veritabanı Tasarımı" }, desc: { ru: "Выбор СУБД и нормализация данных.", en: "Choosing a DBMS and normalizing data.", tr: "Bir VTYS seçme ve verileri normalleştirme." } },
          { title: { ru: "Документирование", en: "Documentation", tr: "Belgeleme" }, desc: { ru: "Создание схем C4, UML и описания API.", en: "Creating C4, UML diagrams, and API descriptions.", tr: "C4, UML diyagramları ve API açıklamaları oluşturma." } },
          { title: { ru: "Защита архитектуры", en: "Architecture Defense", tr: "Mimari Savunma" }, desc: { ru: "Презентация и обоснование технических решений.", en: "Presentation and justification of technical solutions.", tr: "Teknik çözümlerin sunumu ve gerekçelendirilmesi." } }
        ]
      },
      {
        id: "business-system-analysis",
        title: { ru: "Бизнес-анализ и системный анализ", en: "Business and Systems Analysis", tr: "İş ve Sistem Analizi" },
        description: { ru: "Трансляция бизнес-требований в понятные для разработчиков технические спецификации.", en: "Translating business requirements into technical specifications understandable to developers.", tr: "İş gereksinimlerini geliştiriciler için anlaşılır teknik özelliklere dönüştürme." },
        steps: [
          { title: { ru: "Интервьюирование", en: "Interviewing", tr: "Görüşme" }, desc: { ru: "Общение с стейкхолдерами для выявления потребностей.", en: "Communicating with stakeholders to identify needs.", tr: "İhtiyaçları belirlemek için paydaşlarla iletişim kurma." } },
          { title: { ru: "Моделирование процессов", en: "Process Modeling", tr: "Süreç Modelleme" }, desc: { ru: "Описание AS-IS и TO-BE процессов (BPMN, UML).", en: "Description of AS-IS and TO-BE processes (BPMN, UML).", tr: "AS-IS ve TO-BE süreçlerinin tanımı (BPMN, UML)." } },
          { title: { ru: "Разработка ТЗ", en: "Developing Tech Specs", tr: "Teknik Şartname Geliştirme" }, desc: { ru: "Написание User Stories, Use Cases и спецификаций.", en: "Writing User Stories, Use Cases, and specifications.", tr: "Kullanıcı Hikayeleri, Kullanım Durumları ve spesifikasyonlar yazma." } },
          { title: { ru: "Проектирование интеграций", en: "Designing Integrations", tr: "Entegrasyon Tasarımı" }, desc: { ru: "Описание форматов обмена данными (REST, SOAP, MQ).", en: "Description of data exchange formats (REST, SOAP, MQ).", tr: "Veri değişim formatlarının tanımı (REST, SOAP, MQ)." } },
          { title: { ru: "Сопровождение", en: "Support", tr: "Destek" }, desc: { ru: "Консультирование команды разработки в ходе спринтов.", en: "Consulting the development team during sprints.", tr: "Sprintler sırasında geliştirme ekibine danışmanlık." } }
        ]
      },
      {
        id: "it-consulting-qa",
        title: { ru: "IT-консалтинг и QA-аудит", en: "IT Consulting and QA Audit", tr: "BT Danışmanlığı ve QA Denetimi" },
        description: { ru: "Экспертная оценка IT-процессов компании и разработка плана их оптимизации.", en: "Expert assessment of company IT processes and development of an optimization plan.", tr: "Şirket BT süreçlerinin uzman değerlendirmesi ve bir optimizasyon planının geliştirilmesi." },
        steps: [
          { title: { ru: "Сбор информации", en: "Information Gathering", tr: "Bilgi Toplama" }, desc: { ru: "Анкетирование и интервью с ключевыми сотрудниками.", en: "Questionnaires and interviews with key employees.", tr: "Önemli çalışanlarla anketler ve görüşmeler." } },
          { title: { ru: "Анализ метрик", en: "Metrics Analysis", tr: "Metrik Analizi" }, desc: { ru: "Изучение Time-to-market, Lead Time, Defect Rate.", en: "Studying Time-to-market, Lead Time, Defect Rate.", tr: "Pazara sunma süresi, Teslim Süresi, Hata Oranı incelenmesi." } },
          { title: { ru: "Выявление узких мест", en: "Identifying Bottlenecks", tr: "Darboğazları Belirleme" }, desc: { ru: "Поиск проблем в процессах разработки и тестирования.", en: "Finding problems in development and testing processes.", tr: "Geliştirme ve test süreçlerindeki sorunları bulma." } },
          { title: { ru: "Разработка рекомендаций", en: "Developing Recommendations", tr: "Öneriler Geliştirme" }, desc: { ru: "Формирование пошагового плана улучшений.", en: "Forming a step-by-step improvement plan.", tr: "Adım adım bir iyileştirme planı oluşturma." } },
          { title: { ru: "Внедрение", en: "Implementation", tr: "Uygulama" }, desc: { ru: "Помощь во внедрении новых практик и инструментов.", en: "Assistance in implementing new practices and tools.", tr: "Yeni uygulamaların ve araçların uygulanmasında yardım." } }
        ]
      },
      {
        id: "ux-audit",
        title: { ru: "UX-аудит", en: "UX Audit", tr: "UX Denetimi" },
        description: { ru: "Экспертная оценка пользовательских интерфейсов для повышения конверсии и лояльности.", en: "Expert assessment of user interfaces to increase conversion and loyalty.", tr: "Dönüşümü ve sadakati artırmak için kullanıcı arayüzlerinin uzman değerlendirmesi." },
        steps: [
          { title: { ru: "Эвристическая оценка", en: "Heuristic Evaluation", tr: "Sezgisel Değerlendirme" }, desc: { ru: "Проверка интерфейса на соответствие стандартам юзабилити.", en: "Checking the interface for compliance with usability standards.", tr: "Arayüzün kullanılabilirlik standartlarına uygunluğunun kontrol edilmesi." } },
          { title: { ru: "Анализ аналитики", en: "Analytics Analysis", tr: "Analitik Analizi" }, desc: { ru: "Изучение поведения пользователей (Яндекс.Метрика, Google Analytics).", en: "Studying user behavior (Yandex.Metrica, Google Analytics).", tr: "Kullanıcı davranışını inceleme (Yandex.Metrica, Google Analytics)." } },
          { title: { ru: "Пользовательское тестирование", en: "User Testing", tr: "Kullanıcı Testi" }, desc: { ru: "Наблюдение за реальными пользователями.", en: "Observing real users.", tr: "Gerçek kullanıcıları gözlemleme." } },
          { title: { ru: "Формирование отчета", en: "Report Generation", tr: "Rapor Oluşturma" }, desc: { ru: "Описание найденных проблем с оценкой критичности.", en: "Description of found problems with criticality assessment.", tr: "Kritiklik değerlendirmesi ile bulunan sorunların açıklaması." } },
          { title: { ru: "Прототипирование решений", en: "Prototyping Solutions", tr: "Çözüm Prototipleme" }, desc: { ru: "Предложение макетов для исправления ошибок.", en: "Proposing mockups to fix errors.", tr: "Hataları düzeltmek için maketler önerme." } }
        ]
      },
      {
        id: "financial-methodologies",
        title: { ru: "Разработка финансовых методологий", en: "Development of Financial Methodologies", tr: "Finansal Metodolojilerin Geliştirilmesi" },
        description: { ru: "Создание алгоритмов и математических моделей для финтех-проектов.", en: "Creating algorithms and mathematical models for fintech projects.", tr: "Fintech projeleri için algoritmalar ve matematiksel modeller oluşturma." },
        steps: [
          { title: { ru: "Анализ предметной области", en: "Domain Analysis", tr: "Alan Analizi" }, desc: { ru: "Изучение специфики финансового продукта.", en: "Studying the specifics of the financial product.", tr: "Finansal ürünün özelliklerini inceleme." } },
          { title: { ru: "Математическое моделирование", en: "Mathematical Modeling", tr: "Matematiksel Modelleme" }, desc: { ru: "Разработка формул и алгоритмов расчетов.", en: "Developing formulas and calculation algorithms.", tr: "Formüller ve hesaplama algoritmaları geliştirme." } },
          { title: { ru: "Проверка гипотез", en: "Hypothesis Testing", tr: "Hipotez Testi" }, desc: { ru: "Бэктестинг на исторических данных.", en: "Backtesting on historical data.", tr: "Tarihsel veriler üzerinde geriye dönük test." } },
          { title: { ru: "Спецификация", en: "Specification", tr: "Spesifikasyon" }, desc: { ru: "Описание методологии для разработчиков.", en: "Description of the methodology for developers.", tr: "Geliştiriciler için metodolojinin açıklaması." } },
          { title: { ru: "Валидация", en: "Validation", tr: "Doğrulama" }, desc: { ru: "Проверка корректности реализации в коде.", en: "Checking the correctness of implementation in code.", tr: "Koddaki uygulamanın doğruluğunu kontrol etme." } }
        ]
      }
    ]
  }
];

import path from 'path';

const ru = JSON.parse(fs.readFileSync('./src/locales/ru.json', 'utf-8'));
const en = JSON.parse(fs.readFileSync('./src/locales/en.json', 'utf-8'));
const tr = JSON.parse(fs.readFileSync('./src/locales/tr.json', 'utf-8'));

ru.servicesData = data.map(cat => ({
  id: cat.id,
  title: cat.title.ru,
  desc: cat.desc.ru,
  items: cat.items.map(item => ({
    id: item.id,
    title: item.title.ru,
    description: item.description.ru,
    steps: item.steps.map(step => ({ title: step.title.ru, desc: step.desc.ru }))
  }))
}));

en.servicesData = data.map(cat => ({
  id: cat.id,
  title: cat.title.en,
  desc: cat.desc.en,
  items: cat.items.map(item => ({
    id: item.id,
    title: item.title.en,
    description: item.description.en,
    steps: item.steps.map(step => ({ title: step.title.en, desc: step.desc.en }))
  }))
}));

tr.servicesData = data.map(cat => ({
  id: cat.id,
  title: cat.title.tr,
  desc: cat.desc.tr,
  items: cat.items.map(item => ({
    id: item.id,
    title: item.title.tr,
    description: item.description.tr,
    steps: item.steps.map(step => ({ title: step.title.tr, desc: step.desc.tr }))
  }))
}));

fs.writeFileSync('./src/locales/ru.json', JSON.stringify(ru, null, 2));
fs.writeFileSync('./src/locales/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('./src/locales/tr.json', JSON.stringify(tr, null, 2));

console.log('Services data translations updated');
