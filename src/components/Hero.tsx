import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface HeroProps {
  onUnlock?: () => void;
}

export function Hero({ onUnlock }: HeroProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    { name: 'Steam Gift Cards', icon: '🎮' },
    { name: 'Amazon Gift Cards', icon: '📦' },
    { name: 'Roblox Gift Cards', icon: '🎲' },
    { name: 'Netflix Gift Cards', icon: '🎬' },
  ];

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-8 animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Unlock{' '}
            <span className="text-glow" style={{ color: '#df104e' }}>
              Free Gift Cards
            </span>
            <br />& Premium Rewards
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the ultimate gaming rewards platform. Unlock digital gift cards through
            gamified experiences and join thousands of satisfied users worldwide.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <button onClick={onUnlock} className="btn-primary text-lg px-8 py-4">
            Unlock Now
          </button>
          <a
            href="#how-it-works"
            className="text-white hover:text-[#df104e] transition-colors duration-300 font-semibold"
          >
            Learn How It Works
          </a>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div className="glass-card p-2">
            <div className="flex items-center space-x-3 px-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for gift cards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="flex-1 bg-transparent border-none outline-none py-3 text-white placeholder-gray-400"
              />
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {showSuggestions && (searchTerm || filteredSuggestions.length > 0) && (
            <div className="absolute top-full mt-2 left-0 right-0 glass-card overflow-hidden z-10">
              {(searchTerm ? filteredSuggestions : suggestions).map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full px-6 py-3 text-left hover:bg-white/10 transition-colors duration-200 flex items-center space-x-3"
                  onClick={() => {
                    setSearchTerm(suggestion.name);
                    setShowSuggestions(false);
                  }}
                >
                  <span className="text-2xl">{suggestion.icon}</span>
                  <span className="text-white">{suggestion.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1M+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$50M+</div>
            <div className="text-gray-400">Rewards Unlocked</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400">Gift Card Types</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
