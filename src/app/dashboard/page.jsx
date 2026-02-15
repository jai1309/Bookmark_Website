import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import DashboardClient from "./dashboardClient";
import { ModeToggle } from "@/components/mode-toggle";
import LogoutButton from "@/components/logoutButton";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  //Route protection
  if (!user) {
    redirect("/");
  }

  const username = user.email?.split("@")[0];

  return (
    <main className="p-6">
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <span className="text-sm">Toggle Theme</span>
        <ModeToggle />
        <LogoutButton />
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
      </div>
      <DashboardClient />
    </main>
  );
}
