"use client";

import { FcGoogle } from "react-icons/fc";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border border-slate-800 p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mb-2">
          Marksy | Save smarter, Find faster
        </h1>

        <p className="text-sm mb-6">
          Sign in to Marksy using Gmail. No password required!
        </p>

        <button
          className="w-full flex items-center justify-center gap-2 rounded-md border border-slate-700 py-2.5 text-sm hover:bg-slate-800 transition"
          onClick={loginWithGoogle}
        >
          <FcGoogle />
          Google Login
        </button>
      </div>
    </div>
  );
}
