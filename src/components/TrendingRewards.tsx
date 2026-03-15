import { RewardCard } from './RewardCard';
import { TrendingUp } from 'lucide-react';

interface TrendingRewardsProps {
  onUnlock: () => void;
}

export function TrendingRewards({ onUnlock }: TrendingRewardsProps) {
  const trendingCards = [
    { name: 'Amazon', icon: '📦', values: [10, 25, 50, 100] },
    { name: 'Steam', icon: '🎮', values: [10, 25, 50, 100] },
    { name: 'Roblox', icon: '🎲', values: [10, 25, 50] },
    { name: 'Netflix', icon: '🎬', values: [25, 50, 100] },
    { name: 'Google Play', icon: '▶️', values: [10, 25, 50, 100] },
    { name: 'PayPal', icon: '💰', values: [10, 25, 50, 100] },
  ];

  return (
    <section id="rewards" className="py-20 px-4 bg-black/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <TrendingUp className="w-8 h-8 text-[#df104e]" />
            <h2 className="text-4xl md:text-5xl font-bold">Trending Rewards</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Most popular gift cards unlocked by our community this week. Join thousands of users
            getting their favorite rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingCards.map((card) => (
            <RewardCard
              key={card.name}
              name={card.name}
              icon={card.icon}
              values={card.values}
              onUnlock={onUnlock}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary text-lg px-8 py-4">
            View All Rewards
          </button>
        </div>
      </div>
    </section>
  );
}
