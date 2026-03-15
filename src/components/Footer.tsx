import { Instagram, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const footerLinks = {
    'Quick Links': [
      { label: 'Home', href: '/', internal: true },
      { label: 'Gift Cards', href: '#gift-cards', internal: false },
      { label: 'Categories', href: '#categories', internal: false },
      { label: 'How It Works', href: '#how-it-works', internal: false },
    ],
    'Popular Cards': [
      { label: 'Amazon Gift Cards', href: '/amazon-gift-card', internal: true },
      { label: 'Steam Gift Cards', href: '/steam-gift-card', internal: true },
      { label: 'Roblox Gift Cards', href: '/roblox-gift-card', internal: true },
      { label: 'Netflix Gift Cards', href: '/netflix-gift-card', internal: true },
    ],
    'Support': [
      { label: 'Help Center', href: '#support', internal: false },
      { label: 'Terms of Service', href: '#terms', internal: false },
      { label: 'Privacy Policy', href: '#privacy', internal: false },
      { label: 'Contact Us', href: '#contact', internal: false },
    ],
  };

  return (
    <footer className="bg-black/50 border-t border-white/10 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/GAME_FLASH_20260315_101308_0000.png"
                alt="GameFlashX Logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-white">GameFlashX</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The ultimate gaming rewards platform. Unlock digital gift cards through gamified
              experiences and join thousands of satisfied users worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/gameflashx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://youtube.com/@gameflashx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/gameflashx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.internal ? (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} GameFlashX. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Available in United States, United Kingdom, Canada, and Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
