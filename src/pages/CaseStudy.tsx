import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import YoungDesign from './cases/YoungDesign';
import StandardCase from './cases/StandardCase';

const assetFolderMap: Record<string, string> = {
  '1': 'young-design',
  '2': 'salavpay',
  '3': 'pandora',
  '4': 'forex-binary',
  '5': 'financial-dashboard'
};

export default function CaseStudy() {
  const { t } = useTranslation();
  const { id } = useParams();
  
  const caseId = id || '1';
  const caseData = t(`cases.case${caseId}`, { returnObjects: true }) as any;
  const assetFolder = assetFolderMap[caseId] || 'young-design';

  if (!caseData || typeof caseData === 'string' || !caseData.title) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-black uppercase text-beige tracking-tighter mb-6">{t('case.notFound')}</h1>
        <Link to="/portfolio" className="linear-btn">
          {t('case.back')}
        </Link>
      </div>
    );
  }

  if (caseId === '1') {
    return <YoungDesign caseData={caseData} assetFolder={assetFolder} />;
  }

  return <StandardCase caseData={caseData} assetFolder={assetFolder} caseId={caseId} />;
}
