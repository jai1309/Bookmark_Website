import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ModeToggle } from "@/components/mode-toggle";
import LoginPage from "./auth/loginPage";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="h-screen relative">
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <span className="text-sm">Toggle Theme</span>
        <ModeToggle />
      </div>

      <div className="h-full flex items-center justify-center">
        <LoginPage />
      </div>
    </main>
  );
}
