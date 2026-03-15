import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrendingRewards } from './components/TrendingRewards';
import { Categories } from './components/Categories';
import { LiveActivityFeed } from './components/LiveActivityFeed';
import { CreatorProgram } from './components/CreatorProgram';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { RewardUnlockModal } from './components/RewardUnlockModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUnlock = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onUnlock={handleUnlock} />
      <TrendingRewards onUnlock={handleUnlock} />
      <Categories onUnlock={handleUnlock} />
      <LiveActivityFeed />
      <CreatorProgram />
      <Community />
      <Footer />
      <RewardUnlockModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
