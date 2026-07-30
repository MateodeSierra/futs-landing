import LegalLayout from '../components/LegalLayout';
import { DELETE_ACCOUNT_SECTIONS, DELETE_ACCOUNT_UPDATED } from '../legal/delete-account-content';

export default function DeleteAccountPage() {
  return <LegalLayout title="Eliminar cuenta" updated={DELETE_ACCOUNT_UPDATED} sections={DELETE_ACCOUNT_SECTIONS} />;
}
