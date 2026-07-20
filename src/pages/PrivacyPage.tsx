import LegalLayout from '../components/LegalLayout';
import { PRIVACY_SECTIONS, PRIVACY_UPDATED } from '../legal/privacy-content';

export default function PrivacyPage() {
  return <LegalLayout title="Política de Privacidad" updated={PRIVACY_UPDATED} sections={PRIVACY_SECTIONS} />;
}
