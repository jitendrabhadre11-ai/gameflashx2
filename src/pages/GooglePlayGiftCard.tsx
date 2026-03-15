import { useEffect } from 'react';
import { GiftCardPage } from './GiftCardPage';

export function GooglePlayGiftCard() {
  useEffect(() => {
    document.title = 'Free Google Play Gift Cards - GameFlashX | Get Play Store Credits';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get free Google Play gift cards! Unlock $10, $25, $50, and $100 Google Play gift cards through GameFlashX. Buy apps, games, movies, books, and more.');
    }
  }, []);

  return (
    <GiftCardPage
      brand="Google Play"
      icon="▶️"
      values={[10, 25, 50, 100]}
      description="Unlock free Google Play gift cards and access millions of apps, games, and entertainment. Get instant access to Play Store credits valued from $10 to $100."
      features={[
        'Download apps and games on Android',
        'Purchase movies, music, and books',
        'In-app purchases and subscriptions',
        'Instant Google Play credit',
        'Works across all Android devices',
        'Access to exclusive Play Store content',
      ]}
      metaTitle="Free Google Play Gift Cards - GameFlashX"
      metaDescription="Get free Google Play gift cards! Unlock $10, $25, $50, and $100 Google Play gift cards through GameFlashX."
    />
  );
}
