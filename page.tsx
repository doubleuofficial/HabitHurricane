import { supabase } from "@/lib/supabase";

export async function POST(req) {
  const { linkId } = await req.json();

  await supabase
    .from("user_casino_links")
    .update({ last_claimed_bonus: new Date().toISOString() })
    .eq("id", linkId);

  return Response.json({ success: true });
}
