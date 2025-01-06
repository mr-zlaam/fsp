import { config } from '@/config/config'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://kardvodkfllbklzicgqi.supabase.co'
const supabaseKey = config.apiKey
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase

