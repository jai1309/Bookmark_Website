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

  // Route protection
  if (!user) {
    redirect("/");
  }

  const username = user.email?.split("@")[0];

  return (
    <main className="p-4 sm:p-6 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        
        <h1 className="text-2xl font-bold break-words">
          Welcome, {username}!
        </h1>

        <div className="flex items-center gap-2">
          <span className="text-sm hidden sm:inline">Toggle Theme</span>
          <ModeToggle />
          <LogoutButton />
        </div>
      </div>

      <DashboardClient />
    </main>
  );
}
