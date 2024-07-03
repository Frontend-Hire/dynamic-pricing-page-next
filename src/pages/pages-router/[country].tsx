import PricingSection from '@/components/PricingSection';
import { GetStaticPaths, GetStaticProps } from 'next';

const PRICES: Record<string, string[]> = {
  IN: ['₹8,000', '₹80,000'],
  DEFAULT: ['$99', '$999'],
};

export const getStaticPaths = (async () => {
  const paths = Object.keys(PRICES).map((country) => ({
    params: { country: country.toLowerCase() },
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { params } = context;
  const country = (params?.country as string) || 'DEFAULT';

  const prices = PRICES[country.toUpperCase()];

  return { props: { prices } };
}) satisfies GetStaticProps;

export default function PagesRouterSSG({ prices }: { prices: string[] }) {
  return (
    <div className="container mx-auto px-5">
      <p className="text-xl font-bold">PagesRouterSSR</p>
      <PricingSection prices={prices} />
    </div>
  );
}
