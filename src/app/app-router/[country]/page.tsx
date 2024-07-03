import PricingSection from '@/components/PricingSection';

const PRICES: Record<string, string[]> = {
  IN: ['₹8,000', '₹80,000'],
  DEFAULT: ['$99', '$999'],
};

export const generateStaticParams = async () => {
  const paths = Object.keys(PRICES).map((country) => ({
    country: country.toLowerCase(),
  }));

  return paths;
};

export default function AppRouterSSG({
  params,
}: {
  params: { country: string };
}) {
  const prices = PRICES[params.country.toUpperCase()];

  return (
    <div className="container mx-auto px-5">
      <p className="text-xl font-bold">AppRouterSSG</p>
      <PricingSection prices={prices} />
    </div>
  );
}
