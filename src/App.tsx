import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

// Legal pages carry their own text-heavy content and are rarely the entry
// route — code-split so a first-time visitor's bundle is just the home page.
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const DeleteAccountPage = lazy(() => import('./pages/DeleteAccountPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/delete-account" element={<DeleteAccountPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
