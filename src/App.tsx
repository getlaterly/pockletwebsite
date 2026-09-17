import DeleteAccountPage from './DeleteAccountPage';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MarketingSite } from './MarketingSite';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export const App = () => (
  <><ScrollToTop />
  <Routes>
    <Route path="/" element={<MarketingSite />} />
    <Route path="/delete-account" element={<DeleteAccountPage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/terms" element={<TermsPage />} />
  </Routes></>
);

export default App;
