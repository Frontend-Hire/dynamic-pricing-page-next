import React from 'react';
import useSWR from 'swr';
import PricingSection from '@/components/PricingSection';

const PRICES: Record<string, string[]> = {
  IN: ['₹8,000', '₹80,000'],
  DEFAULT: ['$99', '$999'],
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const getPrices = async () => {
  return fetcher('https://api.country.is/').then((data) => {
    const country = (data.country as string) || 'DEFAULT';
    const prices = PRICES[country.toUpperCase()];
    return prices;
  });
};

export default function PagesRouterCSR() {
  const { data } = useSWR('prices', getPrices, {
    fallbackData: PRICES['DEFAULT'],
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <div className="container mx-auto px-5">
      <p className="text-xl font-bold">PagesRouterCSR</p>
      <PricingSection prices={data} />
    </div>
  );
}
