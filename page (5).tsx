import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { name, logo_url, base_url, bonus_reset_hours } = await req.json();

  const { error } = await supabase.from("casinos").insert({
    name,
    logo_url,
    base_url,
    bonus_reset_hours
  });

  if (error) {
    console.error("Add casino error:", error);
    return new Response("Failed to add casino", { status: 500 });
  }

  return Response.json({ success: true });
}
