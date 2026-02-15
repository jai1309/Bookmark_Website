"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

export default function LogoutButton() {
  const supabase = createClient()
  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      toast.error("Failed to logout !")
      return
    }

    toast.success("Logged out successfully !")

    router.push("/")
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-black text-white rounded border-gray-500 border-2 hover:bg-[#3645af] transition duration-300 hover:cursor-pointer"
    >
      Logout
    </button>
  )
}
