import { supabase } from "@/lib/supabase";
import PromoCodeCard from "@/components/PromoCodeCard";

export default async function PromoCodes() {
  const { data } = await supabase
    .from("promo_codes")
    .select("*, casinos(*)")
    .order("expires_at", { ascending: true });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Promo Codes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((promo) => (
          <PromoCodeCard key={promo.id} promo={promo} />
        ))}
      </div>
    </div>
  );
}
