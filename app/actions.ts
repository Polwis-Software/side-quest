'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@supabase/supabase-js'

export type EmailActionState = { error: string; success?: undefined } | { success: true; error?: undefined } | null

function getSupabase() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY
  if (!url || !key) throw new Error('Supabase env vars missing')
  return createClient(url, key)
}

export async function submitEmail(_prev: EmailActionState, formData: FormData): Promise<EmailActionState> {
  const email = formData.get('email')?.toString().trim()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Geçerli bir email girin.' }
  }

  try {
    const { error } = await getSupabase()
      .from('waitlist')
      .insert({ email })

    if (error) {
      if (error.code === '23505') return { error: 'Bu email zaten kayıtlı.' }
      console.error('Supabase insert error:', error.message)
      return { error: 'Bir hata oluştu, tekrar dene.' }
    }

    revalidatePath('/')
    return { success: true }
  } catch (e) {
    console.error('submitEmail exception:', e)
    return { error: 'Bir hata oluştu, tekrar dene.' }
  }
}

export async function getSignupCount(): Promise<number> {
  try {
    const { count, error } = await getSupabase()
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Supabase count error:', error.message)
      return 0
    }
    return count ?? 0
  } catch (e) {
    console.error('getSignupCount exception:', e)
    return 0
  }
}
