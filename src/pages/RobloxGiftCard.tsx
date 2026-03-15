import { useEffect } from 'react';
import { GiftCardPage } from './GiftCardPage';

export function RobloxGiftCard() {
  useEffect(() => {
    document.title = 'Free Roblox Gift Cards - GameFlashX | Get Robux Codes';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get free Roblox gift cards and Robux! Unlock $10, $25, and $50 Roblox gift cards through GameFlashX. Enhance your Roblox gaming experience today.');
    }
  }, []);

  return (
    <GiftCardPage
      brand="Roblox"
      icon="🎲"
      values={[10, 25, 50]}
      description="Unlock free Roblox gift cards and get Robux to enhance your gaming experience. Get instant access to Roblox gift cards valued from $10 to $50."
      features={[
        'Get Robux to spend in Roblox games',
        'Purchase premium items and accessories',
        'Upgrade to Roblox Premium',
        'Instant code delivery',
        'Works on all platforms (PC, mobile, console)',
        'Access exclusive Roblox items',
      ]}
      metaTitle="Free Roblox Gift Cards - GameFlashX"
      metaDescription="Get free Roblox gift cards and Robux! Unlock $10, $25, and $50 Roblox gift cards through GameFlashX."
    />
  );
}
