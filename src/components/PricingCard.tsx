type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
};

export default function PricingCard({
  plan,
  price,
  features,
}: PricingCardProps) {
  return (
    <div className="space-y-4 rounded bg-slate-300 p-4">
      <div className="space-y-1 text-center">
        <p className="text-xl font-medium">{plan}</p>
        <p className="text-4xl font-bold">{price}</p>
      </div>
      <ul className="list-disc pl-4">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button className="w-full rounded bg-slate-600 py-2 text-white">
        Get started
      </button>
    </div>
  );
}
