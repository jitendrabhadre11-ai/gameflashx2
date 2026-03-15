import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { AmazonGiftCard } from './pages/AmazonGiftCard';
import { SteamGiftCard } from './pages/SteamGiftCard';
import { RobloxGiftCard } from './pages/RobloxGiftCard';
import { NetflixGiftCard } from './pages/NetflixGiftCard';
import { GooglePlayGiftCard } from './pages/GooglePlayGiftCard';
import { PayPalGiftCard } from './pages/PayPalGiftCard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/amazon-gift-card" element={<AmazonGiftCard />} />
        <Route path="/steam-gift-card" element={<SteamGiftCard />} />
        <Route path="/roblox-gift-card" element={<RobloxGiftCard />} />
        <Route path="/netflix-gift-card" element={<NetflixGiftCard />} />
        <Route path="/google-play-gift-card" element={<GooglePlayGiftCard />} />
        <Route path="/paypal-gift-card" element={<PayPalGiftCard />} />
      </Routes>
    </BrowserRouter>
  );
}
