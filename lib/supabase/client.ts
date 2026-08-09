import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "./database.types"

let client: ReturnType<typeof createBrowserClient<Database>> | null = null

export function createClient() {
  if (typeof window === "undefined") {
    throw new Error(
      "createClient from @/lib/supabase/client should only be called in browser context. Use @/lib/supabase/server for server-side code.",
    )
  }

  if (client === null) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co"
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key"

    client = createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)
  }

  return client
}
