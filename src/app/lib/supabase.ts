import { createClient } from '@supabase/supabase-js'

// Берем ключи из нашего скрытого файла .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Создаем "мост" к базе данных, который будем использовать по всему сайту
export const supabase = createClient(supabaseUrl, supabaseKey)