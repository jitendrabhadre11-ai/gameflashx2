import { useState } from 'react';
import { Menu, X, Instagram, Youtube } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Gift Cards', href: '#gift-cards' },
    { label: 'Categories', href: '#categories' },
    { label: 'Rewards', href: '#rewards' },
    { label: 'Creator Program', href: '#creator-program' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/GAME_FLASH_20260315_101308_0000.png"
              alt="GameFlashX Logo"
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-white">GameFlashX</span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="https://instagram.com/gameflashx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@gameflashx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <button
              onClick={() => window.location.href = 'https://gameflashx.space/cl/i/277ood'}
              className="btn-primary text-sm"
            >
              Unlock Now
            </button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <a
                href="https://instagram.com/gameflashx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@gameflashx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => window.location.href = 'https://gameflashx.space/cl/i/277ood'}
              className="btn-primary w-full text-sm"
            >
              Unlock Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
