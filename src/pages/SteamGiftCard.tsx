import { useEffect } from 'react';
import { GiftCardPage } from './GiftCardPage';

export function SteamGiftCard() {
  useEffect(() => {
    document.title = 'Free Steam Gift Cards - GameFlashX | Unlock Steam Wallet Codes';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get free Steam gift cards and wallet codes! Unlock $10, $25, $50, and $100 Steam gift cards through GameFlashX. Buy games, DLC, and in-game items on Steam.');
    }
  }, []);

  return (
    <GiftCardPage
      brand="Steam"
      icon="🎮"
      values={[10, 25, 50, 100]}
      description="Unlock free Steam gift cards and expand your gaming library. Get instant access to Steam Wallet codes valued from $10 to $100."
      features={[
        'Access to thousands of PC games on Steam',
        'Purchase games, DLC, and in-game items',
        'Instant Steam Wallet credit',
        'Works with Steam Sales and discounts',
        'No expiration on Steam Wallet funds',
        'Compatible with Steam Deck',
      ]}
      metaTitle="Free Steam Gift Cards - GameFlashX"
      metaDescription="Get free Steam gift cards and wallet codes! Unlock $10, $25, $50, and $100 Steam gift cards through GameFlashX."
    />
  );
}
