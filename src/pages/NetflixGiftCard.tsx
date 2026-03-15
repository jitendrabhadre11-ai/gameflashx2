import { useEffect } from 'react';
import { GiftCardPage } from './GiftCardPage';

export function NetflixGiftCard() {
  useEffect(() => {
    document.title = 'Free Netflix Gift Cards - GameFlashX | Unlock Netflix Subscriptions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get free Netflix gift cards! Unlock $25, $50, and $100 Netflix gift cards through GameFlashX. Enjoy unlimited streaming of movies and TV shows.');
    }
  }, []);

  return (
    <GiftCardPage
      brand="Netflix"
      icon="🎬"
      values={[25, 50, 100]}
      description="Unlock free Netflix gift cards and enjoy unlimited streaming. Get instant access to Netflix gift cards valued from $25 to $100."
      features={[
        'Stream thousands of movies and TV shows',
        'Watch on any device - TV, phone, tablet, computer',
        'No ads, unlimited viewing',
        'Download content for offline viewing',
        'Create multiple profiles for family',
        'Cancel anytime with no commitment',
      ]}
      metaTitle="Free Netflix Gift Cards - GameFlashX"
      metaDescription="Get free Netflix gift cards! Unlock $25, $50, and $100 Netflix gift cards through GameFlashX."
    />
  );
}
