import { Routes, Route } from 'react-router-dom';
import { MarketingSite } from './MarketingSite';
import PrivacyPage from './PrivacyPage';

export const App = () => (
  <Routes>
    <Route path="/" element={<MarketingSite />} />
    <Route path="/privacy" element={<PrivacyPage />} />
  </Routes>
);

export default App;
