import LegalLayout from '../components/LegalLayout';
import { TERMS_SECTIONS, TERMS_UPDATED } from '../legal/terms-content';

export default function TermsPage() {
  return <LegalLayout title="Términos de Uso" updated={TERMS_UPDATED} sections={TERMS_SECTIONS} />;
}
