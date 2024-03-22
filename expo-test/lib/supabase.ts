import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://umitdgagtawyontgbuca.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtaXRkZ2FndGF3eW9udGdidWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwOTI2MzUsImV4cCI6MjAyNjY2ODYzNX0.4TIs-pGkmBsXoTjc2mHdymUu7R7eZkyE7-62MSR4a_0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});