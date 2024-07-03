import PricingCard from './PricingCard';

export default function PricingSection() {
  return (
    <section className="container mx-auto space-y-2">
      <h1 className="text-center text-4xl font-medium">Pricing</h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <PricingCard
          plan="Monthly"
          price="$99"
          features={[
            '10 users included',
            '2 GB of storage',
            'Email support',
            'Help center access',
          ]}
        />
        <PricingCard
          plan="Annually"
          price="$999"
          features={[
            '20 users included',
            '5 GB of storage',
            'Email and Phone support',
            'Dedicated Help Center',
          ]}
        />
      </div>
    </section>
  );
}
