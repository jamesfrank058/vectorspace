import { createClient } from '@supabase/supabase-js'

let supabaseClient: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      // During build time, return a mock client to prevent errors
      if (typeof window === 'undefined') {
        supabaseClient = createClient('https://ctrohbzsbckumgqtmrvw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0cm9oYnpzYmNrdW1ncXRtcnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NDAyNzYsImV4cCI6MjA4MDUxNjI3Nn0.3fQ9MQGTJnwrY-ZWuyX5CEa1rMIsULhf9O2pJRnN4v8')
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
