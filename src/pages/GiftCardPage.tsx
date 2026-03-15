import { useState } from 'react';
import { Gift, CheckCircle, Star } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { RewardUnlockModal } from '../components/RewardUnlockModal';

interface GiftCardPageProps {
  brand: string;
  icon: string;
  values: number[];
  description: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
}

export function GiftCardPage({
  brand,
  icon,
  values,
  description,
  features,
}: GiftCardPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6 animate-float">{icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Free {brand} Gift Cards
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          <div className="glass-card p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Available Denominations
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {values.map((value) => (
                <div
                  key={value}
                  className="glass-card px-8 py-6 text-center hover:scale-105 transition-transform"
                >
                  <div className="text-4xl font-bold text-white mb-2">${value}</div>
                  <div className="text-sm text-gray-400">Gift Card</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary text-xl px-12 py-5"
              >
                Unlock {brand} Gift Card
              </button>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose {brand} Gift Cards?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#df104e] to-[#b3114c] flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Click Unlock</h3>
                <p className="text-gray-300">Choose your desired gift card value</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#df104e] to-[#b3114c] flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Complete Tasks</h3>
                <p className="text-gray-300">Verify your account and complete simple tasks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#df104e] to-[#b3114c] flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Get Your Card</h3>
                <p className="text-gray-300">Receive your gift card instantly</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">User Reviews</h2>
            <div className="space-y-6">
              {[
                {
                  name: 'Sarah M.',
                  rating: 5,
                  text: `I got my ${brand} gift card in minutes! Super easy process and completely legit.`,
                },
                {
                  name: 'John D.',
                  rating: 5,
                  text: `Best rewards platform I've used. ${brand} cards are delivered instantly.`,
                },
                {
                  name: 'Lisa K.',
                  rating: 5,
                  text: `Can't believe this is real! Already unlocked multiple ${brand} gift cards.`,
                },
              ].map((review, index) => (
                <div key={index} className="border-t border-white/10 pt-6 first:border-0 first:pt-0">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#df104e] to-[#b3114c] flex items-center justify-center text-white font-bold mr-3">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{review.name}</div>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center glass-card p-8">
            <Gift className="w-16 h-16 text-[#df104e] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Your Free {brand} Gift Card?
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Join thousands of users who have already unlocked their rewards
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-xl px-12 py-5"
            >
              Unlock Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <RewardUnlockModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
