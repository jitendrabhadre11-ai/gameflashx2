import { MessageCircle, Star } from 'lucide-react';

export function Community() {
  const testimonials = [
    {
      name: 'Sarah M.',
      country: 'United States',
      rating: 5,
      text: 'I was skeptical at first, but GameFlashX is legit! I\'ve already unlocked $150 in Amazon gift cards. The process is super easy and rewards are delivered instantly.',
    },
    {
      name: 'Tom B.',
      country: 'United Kingdom',
      rating: 5,
      text: 'Best rewards platform I\'ve ever used. Got my Steam gift card in minutes. The gamification makes it actually fun to earn rewards!',
    },
    {
      name: 'Jessica L.',
      country: 'Canada',
      rating: 5,
      text: 'The Creator Program is amazing! I made $500 last month just posting videos about my experience. Highly recommend to anyone looking to earn extra cash.',
    },
    {
      name: 'David K.',
      country: 'Australia',
      rating: 5,
      text: 'Fast, reliable, and actually pays out. I\'ve tried many reward sites but GameFlashX is by far the best. Customer support is excellent too!',
    },
  ];

  const communityBenefits = [
    'Creator rewards and bonuses',
    'Promotional video templates',
    'Content creation resources',
    'Exclusive reward offers',
    '24/7 community support',
    'Early access to new features',
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Become part of the GameFlashX community and unlock exclusive benefits,
            connect with other creators, and maximize your rewards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#df104e] to-[#b3114c] flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.country}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#df104e] to-[#b3114c] flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Whop Community Benefits
              </h3>
              <p className="text-gray-300 mb-6">
                Join our exclusive Whop community to access premium features, connect with
                fellow creators, and get the most out of GameFlashX.
              </p>
              <a
                href="https://whop.com/gameflashx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="btn-primary text-lg px-8 py-4">
                  Join Community on Whop
                </button>
              </a>
            </div>
            <div>
              <ul className="space-y-4">
                {communityBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
