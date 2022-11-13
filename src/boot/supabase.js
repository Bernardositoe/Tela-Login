import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ilgwiiogriqguuevyahs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsZ3dpaW9ncmlxZ3V1ZXZ5YWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODg3NjUsImV4cCI6MTk4Mzg2NDc2NX0.nmRDdH2K-LIFz4lzxRHp_mAawEB7FkqoZkh7K_31Ruc'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase:', supabase)

export default function useSupabase () {
  return { supabase }
}
