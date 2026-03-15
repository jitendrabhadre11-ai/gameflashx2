import { useEffect } from 'react';
import { GiftCardPage } from './GiftCardPage';

export function AmazonGiftCard() {
  useEffect(() => {
    document.title = 'Free Amazon Gift Cards - GameFlashX | Unlock Amazon Rewards';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get free Amazon gift cards instantly! Unlock $10, $25, $50, $75, and $100 Amazon gift cards through GameFlashX. Shop for millions of products with your free Amazon rewards.');
    }
  }, []);

  return (
    <GiftCardPage
      brand="Amazon"
      icon="📦"
      values={[10, 25, 50, 75, 100]}
      description="Unlock free Amazon gift cards and shop for millions of products. Get instant access to digital Amazon gift cards valued from $10 to $100."
      features={[
        'Shop millions of products on Amazon.com',
        'No expiration date on gift cards',
        'Instant digital delivery',
        'Use for Prime membership, books, electronics, and more',
        'Combine multiple gift cards for larger purchases',
        'Safe and secure transactions',
      ]}
      metaTitle="Free Amazon Gift Cards - GameFlashX"
      metaDescription="Get free Amazon gift cards instantly! Unlock $10, $25, $50, $75, and $100 Amazon gift cards through GameFlashX."
    />
  );
}
