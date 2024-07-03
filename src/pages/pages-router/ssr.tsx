import { GetServerSideProps } from 'next';
import PricingSection from '@/components/PricingSection';

export const getServerSideProps = (async (context) => {
  const IP = context.req.headers['x-forwarded-for'] || 'unknown';
  const req = await fetch(`https://api.country.is/${IP}`);
  const data = await req.json();

  const PRICES: Record<string, string[]> = {
    IN: ['₹8,000', '₹80,000'],
    DEFAULT: ['$99', '$999'],
  };

  return {
    props: {
      prices: PRICES[data.country] || PRICES['DEFAULT'],
    },
  };
}) satisfies GetServerSideProps;

export default function PagesRouterSSR({ prices }: { prices: string[] }) {
  return (
    <div className="container mx-auto px-5">
      <p className="text-xl font-bold">PagesRouterSSR</p>
      <PricingSection prices={prices} />
    </div>
  );
}
