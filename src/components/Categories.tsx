import { RewardCard } from './RewardCard';

interface CategoriesProps {
  onUnlock: () => void;
}

export function Categories({ onUnlock }: CategoriesProps) {
  const categories = [
    {
      name: 'Shopping',
      cards: [
        { name: 'Amazon', icon: '📦', values: [10, 25, 50, 75, 100] },
        { name: 'Walmart', icon: '🛒', values: [10, 25, 50, 100] },
        { name: 'Target', icon: '🎯', values: [10, 25, 50, 100] },
        { name: 'Best Buy', icon: '🔌', values: [25, 50, 100] },
        { name: 'eBay', icon: '🛍️', values: [10, 25, 50] },
      ],
    },
    {
      name: 'Gaming',
      cards: [
        { name: 'Steam', icon: '🎮', values: [10, 25, 50, 100] },
        { name: 'Roblox', icon: '🎲', values: [10, 25, 50] },
        { name: 'Fortnite V-Bucks', icon: '🎯', values: [10, 25, 50] },
        { name: 'Nintendo eShop', icon: '🕹️', values: [10, 25, 50] },
      ],
    },
    {
      name: 'Digital Platforms',
      cards: [
        { name: 'Google Play', icon: '▶️', values: [10, 25, 50, 100] },
        { name: 'Apple App Store', icon: '🍎', values: [10, 25, 50, 100] },
        { name: 'iTunes', icon: '🎵', values: [10, 25, 50] },
      ],
    },
    {
      name: 'Entertainment',
      cards: [
        { name: 'Netflix', icon: '🎬', values: [25, 50, 100] },
        { name: 'Spotify', icon: '🎧', values: [10, 25, 50] },
        { name: 'Disney+', icon: '🏰', values: [25, 50] },
        { name: 'Hulu', icon: '📺', values: [25, 50] },
      ],
    },
    {
      name: 'Food & Dining',
      cards: [
        { name: 'Starbucks', icon: '☕', values: [10, 25, 50] },
        { name: 'McDonald\'s', icon: '🍔', values: [10, 25] },
        { name: 'DoorDash', icon: '🚗', values: [25, 50, 75] },
        { name: 'Uber Eats', icon: '🍕', values: [25, 50, 75] },
      ],
    },
    {
      name: 'Transportation',
      cards: [
        { name: 'Uber', icon: '🚕', values: [25, 50, 100] },
        { name: 'Lyft', icon: '🚙', values: [25, 50, 100] },
        { name: 'Delta Airlines', icon: '✈️', values: [50, 100] },
      ],
    },
    {
      name: 'Financial',
      cards: [
        { name: 'PayPal', icon: '💰', values: [10, 25, 50, 100] },
        { name: 'Visa Prepaid', icon: '💳', values: [25, 50, 100] },
        { name: 'Vanilla Gift Card', icon: '🎁', values: [25, 50, 100] },
      ],
    },
  ];

  return (
    <section id="categories" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Gift Card Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from over 100 gift card types across multiple categories. All rewards are
            authentic and ready to unlock instantly.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-[#df104e] to-[#b3114c] mr-4 rounded-full"></span>
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.cards.map((card) => (
                  <RewardCard
                    key={card.name}
                    name={card.name}
                    icon={card.icon}
                    values={card.values}
                    onUnlock={onUnlock}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
