"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { toast } from "react-hot-toast"
import { Trash2, Pencil } from "lucide-react"

export default function DashboardClient() {
  const supabase = createClient()

  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [desc, setDesc] = useState("")
  const [bookmarks, setBookmarks] = useState([])
  const [editingId, setEditingId] = useState(null)

  // Load bookmarks
  const loadBookmarks = async () => {
    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .order("created_at", { ascending: false })

    setBookmarks(data || [])
  }

  useEffect(() => {
    loadBookmarks()

    // 🔥 REALTIME SUBSCRIPTION
const channel = supabase
  .channel("bookmarks-realtime")
  .on(
  "postgres_changes",
  {
    event: "*",
    schema: "public",
    table: "bookmarks",
  },
  () => {
    loadBookmarks()
  }
)
.subscribe()



    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  // Add OR Update bookmark
  const addOrUpdateBookmark = async (e) => {
    e.preventDefault()

    if (!title || !url) {
      toast.error("Title and URL are required!")
      return
    }

    if (editingId) {
      const { error } = await supabase
        .from("bookmarks")
        .update({ title, url, desc })
        .eq("id", editingId)

      if (error) {
        toast.error("Failed to update!")
        return
      }

      toast.success("Bookmark updated Successfully!")
      setEditingId(null)
    } else {
      const { error } = await supabase
        .from("bookmarks")
        .insert([{ title, url, desc }])

      if (error) {
        toast.error("Failed to add bookmark!")
        return
      }

      toast.success("Bookmark added Successfully!")
    }

    setTitle("")
    setUrl("")
    setDesc("")
    loadBookmarks()
  }

  // Delete bookmark
  const deleteBookmark = async (id) => {
    const { error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("id", id)

    if (error) {
      toast.error("Failed to delete")
      return
    }

    toast.success("Bookmark deleted")
    loadBookmarks()
  }

  // Start editing
  const startEdit = (bookmark) => {
    setTitle(bookmark.title)
    setUrl(bookmark.url)
    setDesc(bookmark.desc || "")
    setEditingId(bookmark.id)
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {editingId ? "Update Bookmark" : "Add Bookmark"}
      </h1>

      <form onSubmit={addOrUpdateBookmark} className="space-y-3 mb-8">
        <input
          className="border p-2 w-full rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 w-full rounded"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          className="border p-2 w-full rounded"
          placeholder="Description (Optional)"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className="px-4 py-2 bg-black text-white rounded border-gray-500 border-2 hover:bg-[#3645af] transition duration-300 hover:cursor-pointer">
          {editingId ? "Update Bookmark" : "Add Bookmark"}
        </button>
      </form>

      <h1 className="text-2xl font-bold mb-4">Your Bookmarks</h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-500 italic">No bookmarks yet. Add some!</p>
      ) : (
        <div className="space-y-3">
          {bookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="border rounded p-3 flex justify-between items-start"
            >
              <div>
                <h2 className="font-semibold">Title - {bookmark.title}</h2>
                <p className="text-sm mt-1">URL - {bookmark.url}</p>
                {bookmark.desc && (
                  <p className="text-sm mt-1">
                    Description - {bookmark.desc}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => startEdit(bookmark)}
                  className="text-gray-500 hover:text-blue-500 transition p-1 rounded hover:bg-blue-50"
                >
                  <Pencil size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => deleteBookmark(bookmark.id)}
                  className="text-gray-500 hover:text-red-500 transition p-1 rounded hover:bg-red-50"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
