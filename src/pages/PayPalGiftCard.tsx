import { useEffect } from 'react';
import { GiftCardPage } from './GiftCardPage';

export function PayPalGiftCard() {
  useEffect(() => {
    document.title = 'Free PayPal Gift Cards - GameFlashX | Get PayPal Money';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get free PayPal gift cards and cash! Unlock $10, $25, $50, and $100 PayPal gift cards through GameFlashX. Use anywhere PayPal is accepted.');
    }
  }, []);

  return (
    <GiftCardPage
      brand="PayPal"
      icon="💰"
      values={[10, 25, 50, 100]}
      description="Unlock free PayPal gift cards and get real cash to your account. Get instant access to PayPal funds valued from $10 to $100."
      features={[
        'Instant PayPal balance credit',
        'Use anywhere PayPal is accepted',
        'Shop at millions of online stores',
        'Send money to friends and family',
        'Withdraw to your bank account',
        'Maximum flexibility with your rewards',
      ]}
      metaTitle="Free PayPal Gift Cards - GameFlashX"
      metaDescription="Get free PayPal gift cards and cash! Unlock $10, $25, $50, and $100 PayPal gift cards through GameFlashX."
    />
  );
}
