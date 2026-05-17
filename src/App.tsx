import { Routes, Route } from 'react-router-dom';
import { MarketingSite } from './MarketingSite';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';

export const App = () => (
  <Routes>
    <Route path="/" element={<MarketingSite />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/terms" element={<TermsPage />} />
  </Routes>
);

export default App;
