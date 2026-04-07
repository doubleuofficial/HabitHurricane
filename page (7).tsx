import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { id, notify } = await req.json();

  const { error } = await supabase
    .from("user_casino_links")
    .update({ notify_email: notify })
    .eq("id", id);

  if (error) {
    console.error("Update error:", error);
    return new Response("Failed to update", { status: 500 });
  }

  return Response.json({ success: true });
}
