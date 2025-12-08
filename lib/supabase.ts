import { createClient } from '@supabase/supabase-js'

let supabaseClient: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      // During build time, return a mock client to prevent errors
      if (typeof window === 'undefined') {
        supabaseClient = createClient('https://placeholder.supabase.co', 'placeholder-key')
      } else {
        throw new Error('Missing Supabase environment variables. Please check your .env.local file.')
      }
    } else {
      supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
    }
  }

  return supabaseClient
}

// For backward compatibility, export the client directly
export const supabase = getSupabaseClient()
