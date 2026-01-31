
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://oirpprfflpkcqeculvky.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pcnBwcmZmbHBrY3FlY3Vsdmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1OTg3MDksImV4cCI6MjA3NzE3NDcwOX0.CbkfJXkTvVtbSi_1_BYKJ9oKXYnO8c18btpewt2dxBg"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;