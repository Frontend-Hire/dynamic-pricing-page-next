import { headers } from 'next/headers';
import PricingSection from '@/components/PricingSection';

const getPrices = async () => {
  const IP = headers().get('x-forwarded-for') || 'unknown';
  const req = await fetch(`https://api.country.is/${IP}`);
  const data = await req.json();

  const PRICES: Record<string, string[]> = {
    IN: ['₹8,000', '₹80,000'],
    DEFAULT: ['$99', '$999'],
  };

  const country = (data.country as string) || 'DEFAULT';
  const prices = PRICES[country.toUpperCase()];

  return prices;
};

export default async function AppRouterSSR() {
  const prices = await getPrices();

  return (
    <div className="container mx-auto px-5">
      <p className="text-xl font-bold">AppRouterSSR</p>
      <PricingSection prices={prices} />
    </div>
  );
}
