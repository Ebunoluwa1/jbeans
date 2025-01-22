/* eslint-disable no-undef */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl ='https://zbbgcquvivmzbmhzowqr.supabase.co'
// import.meta.env.REACT_APP_SUPABASE_URL

// import.meta.env.REACT_APP_ANON_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiYmdjcXV2aXZtemJtaHpvd3FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNzQ1MTcsImV4cCI6MjA1Mjk1MDUxN30.gJ96nHzHI0N5-7NF2kK2f8fmj3XJ9FBGamOcI8BuGCI'


export const supabase = createClient(supabaseUrl, supabaseKey)

