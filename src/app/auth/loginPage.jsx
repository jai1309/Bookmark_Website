"use client";

import { FcGoogle } from "react-icons/fc";
import { createClient } from "@/lib/supabase/client";
export default function LoginPage() {
  const supabase = createClient();
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.PUBLIC_VERCEL_URL}/auth/callback`,
      },
    });
  };

  return (
    <div className="ex items-center justify-center">
      <div className="w-full max-w-md rounded-xl border border-slate-800 p-6 shadow-lg">
        {/* Heading */}
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-2xl font-semibold">
            Marksy | Save smarter, Find faster
          </h1>
        </div>

        <p className="text-sm mb-6">
          Sign in to Marksy using Gmail. No password required!
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            className="w-full flex items-center justify-center gap-2 rounded-md border border-slate-700 py-2.5 text-sm hover:bg-slate-800 transition cursor-pointer"
            onClick={loginWithGoogle}
          >
            <FcGoogle />
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
}
