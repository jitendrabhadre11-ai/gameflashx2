import { Video, DollarSign, Users, TrendingUp } from 'lucide-react';

export function CreatorProgram() {
  const platforms = [
    { name: 'Instagram Reels', icon: '📸' },
    { name: 'TikTok', icon: '🎵' },
    { name: 'YouTube Shorts', icon: '▶️' },
  ];

  const earnings = [
    { views: '1,000', earning: '$1', color: 'from-blue-500 to-blue-600' },
    { views: '10,000', earning: '$10', color: 'from-purple-500 to-purple-600' },
    { views: '100,000', earning: '$100', color: 'from-[#df104e] to-[#b3114c]' },
  ];

  const benefits = [
    { icon: DollarSign, title: 'Creator Rewards & Bonuses', description: 'Earn money for every view your content receives' },
    { icon: Video, title: 'Promotional Video Templates', description: 'Ready-to-use templates to get started quickly' },
    { icon: Users, title: '24/7 Community Support', description: 'Join our active creator community for help and tips' },
    { icon: TrendingUp, title: 'Exclusive Reward Offers', description: 'Access special rewards reserved for creators' },
  ];

  return (
    <section id="creator-program" className="py-20 px-4 bg-black/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GameFlashX Creator Program
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create short videos about GameFlashX rewards and earn real money. Turn your content
            into cash with our generous creator program.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Supported Platforms</h3>
            <div className="space-y-4">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="text-4xl">{platform.icon}</span>
                  <span className="text-lg text-white font-semibold">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Earnings Structure</h3>
            <div className="space-y-6">
              {earnings.map((earning) => (
                <div key={earning.views} className="relative">
                  <div className={`bg-gradient-to-r ${earning.color} p-6 rounded-lg`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-white/80 mb-1">Views</div>
                        <div className="text-3xl font-bold text-white">{earning.views}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-white/80 mb-1">Earn</div>
                        <div className="text-3xl font-bold text-white">{earning.earning}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Creator Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="glass-card p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#df104e] to-[#b3114c] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://whop.com/gameflashx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="btn-primary text-xl px-12 py-5">
              Join Creator Program
            </button>
          </a>
          <p className="mt-4 text-gray-400">
            Start earning today with our creator program
          </p>
        </div>
      </div>
    </section>
  );
}
