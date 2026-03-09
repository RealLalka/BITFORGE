import React from 'react';

// Common props for all icons
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
}

// Base Icon wrapper with strict geometric styling (miter joins for tech feel)
const BaseIcon = ({ size = 24, strokeWidth = 1.5, children, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="square"
    strokeLinejoin="miter"
    {...props}
  >
    {children}
  </svg>
);

// 1. Создание IT-продуктов «под ключ» (Isometric Cube)
export const TurnkeyIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="M3.27 6.96L12 12.01l8.73-5.05" />
    <path d="M12 22.08V12" />
  </BaseIcon>
);

// 2. Разработка мобильных и веб-клиентов (Monitor + Smartphone)
export const MobileWebIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="2" y="4" width="16" height="12" rx="2" />
    <path d="M8 20h4" />
    <path d="M10 16v4" />
    <rect x="16" y="10" width="6" height="10" rx="1" />
  </BaseIcon>
);

// 3. Frontend и Backend инжиниринг (Server Racks)
export const FrontBackIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="4" y="4" width="16" height="6" rx="1" />
    <rect x="4" y="14" width="16" height="6" rx="1" />
    <path d="M8 7h.01" />
    <path d="M8 17h.01" />
    <path d="M12 10v4" />
  </BaseIcon>
);

// 4. Интеграция искусственного интеллекта (Microchip with inner core)
export const AiIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
  </BaseIcon>
);

// 5. RPA-разработка (Automated Machine / Briefcase with Play)
export const RpaIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    <path d="M10 11v6l5-3-5-3z" />
  </BaseIcon>
);

// 6. Внедрение и кастомизация систем Битрикс (Network Tree inside Globe)
export const BitrixIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 22v-8" />
    <path d="M12 14l4-4" />
    <path d="M12 14l-4-4" />
    <path d="M16 10V6" />
    <path d="M8 10V6" />
  </BaseIcon>
);

// 7. Проектирование визуальных интерфейсов (Wireframe Layout)
export const UiUxIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </BaseIcon>
);

// 8. IT-аутсорсинг (Global Network)
export const OutsourcingIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </BaseIcon>
);

// 9. Аутстаффинг (User Plus Network)
export const OutstaffingIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M19 8v6" />
    <path d="M16 11h6" />
  </BaseIcon>
);

// 10. Техническая поддержка с SLA (Shield with Clock)
export const SlaIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4" />
    <path d="M12 12l2.5 2.5" />
  </BaseIcon>
);

// 11. Внедрение и администрирование Jira Service (Kanban Board)
export const JiraIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 7v7" />
    <path d="M12 7v4" />
    <path d="M16 7v9" />
  </BaseIcon>
);

// 12. Модернизация легаси-систем (History / Refresh)
export const LegacyIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M12 7v5l3 3" />
  </BaseIcon>
);

// 13. Антикризисный инжиниринг (Activity / Heartbeat)
export const CrisisIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </BaseIcon>
);

// 14. Обеспечение качества (QA) и SDET (Document with Checkmark)
export const QaIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 15l2 2 4-4" />
  </BaseIcon>
);

// 15. DevOps-сопровождение (Infinity)
export const DevopsIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" />
  </BaseIcon>
);

// 16. Discovery Phase (Compass)
export const DiscoveryIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </BaseIcon>
);

// 17. Проектирование IT-архитектуры (Org Chart)
export const ArchitectureIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="16" y="16" width="6" height="6" rx="1" />
    <rect x="2" y="16" width="6" height="6" rx="1" />
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
    <path d="M12 12V8" />
  </BaseIcon>
);

// 18. Бизнес-анализ и системный анализ (Bar Chart)
export const AnalysisIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M3 3v18h18" />
    <rect x="7" y="13" width="4" height="8" rx="1" />
    <rect x="15" y="5" width="4" height="16" rx="1" />
  </BaseIcon>
);

// 19. IT-консалтинг и QA-аудит (Lightbulb)
export const ConsultingIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </BaseIcon>
);

// 20. UX-аудит (Search over Wireframe)
export const UxAuditIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <circle cx="12" cy="15" r="3" />
    <path d="M14.5 17.5L17 20" />
  </BaseIcon>
);

// Fallback Icon
export const DefaultIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </BaseIcon>
);

export const getServiceIcon = (id: string) => {
  switch (id) {
    // dev
    case 'turnkey-it': return TurnkeyIcon;
    case 'mobile-web-dev': return MobileWebIcon;
    case 'front-back-eng': return FrontBackIcon;
    case 'ai-integration': return AiIcon;
    case 'rpa-dev': return RpaIcon;
    case 'bitrix-customization': return BitrixIcon;
    case 'ui-ux-design': return UiUxIcon;
    
    // support
    case 'it-outsourcing': return OutsourcingIcon;
    case 'outstaffing': return OutstaffingIcon;
    case 'tech-support-sla': return SlaIcon;
    case 'jira-service': return JiraIcon;
    
    // refactoring
    case 'legacy-modernization': return LegacyIcon;
    case 'crisis-engineering': return CrisisIcon;
    case 'qa-sdet': return QaIcon;
    case 'devops': return DevopsIcon;
    
    // consulting
    case 'discovery-phase': return DiscoveryIcon;
    case 'it-architecture': return ArchitectureIcon;
    case 'business-system-analysis': return AnalysisIcon;
    case 'it-consulting-qa': return ConsultingIcon;
    case 'ux-audit': return UxAuditIcon;
    
    default: return DefaultIcon;
  }
};
