'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@supabase/supabase-js'

export type EmailActionState = { error: string; success?: undefined } | { success: true; error?: undefined } | null

function getSupabase() {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)
}

export async function submitEmail(_prev: EmailActionState, formData: FormData): Promise<EmailActionState> {
  const email = formData.get('email')?.toString().trim()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Geçerli bir email girin.' }
  }

  const { error } = await getSupabase()
    .from('waitlist')
    .insert({ email })

  if (error) {
    if (error.code === '23505') {
      return { error: 'Bu email zaten kayıtlı.' }
    }
    return { error: 'Bir hata oluştu, tekrar dene.' }
  }

  revalidatePath('/')
  return { success: true }
}

export async function getSignupCount(): Promise<number> {
  const { count } = await getSupabase()
    .from('waitlist')
    .select('*', { count: 'exact', head: true })

  return count ?? 0
}
