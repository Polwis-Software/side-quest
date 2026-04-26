'use server'

import { createClient } from '@/app/lib/supabase/server'
import { redirect } from 'next/navigation'

export type AuthState =
  | { error: string; success?: undefined }
  | { success: true; error?: undefined }
  | null

export async function signUp(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const password = formData.get('password')?.toString()

  if (!name || name.length < 2) return { error: 'İsim en az 2 karakter olmalı.' }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: 'Geçerli bir email girin.' }
  if (!password || password.length < 6) return { error: 'Şifre en az 6 karakter olmalı.' }

  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  })

  if (error) {
    if (error.message.includes('already registered')) return { error: 'Bu email zaten kayıtlı.' }
    return { error: 'Kayıt sırasında bir hata oluştu.' }
  }

  redirect('/onboarding')
}

export async function signIn(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = formData.get('email')?.toString().trim()
  const password = formData.get('password')?.toString()

  if (!email || !password) return { error: 'Email ve şifre gerekli.' }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) return { error: 'Email veya şifre hatalı.' }

  // Check onboarding status
  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarding_completed')
    .eq('id', data.user.id)
    .single()

  if (!profile?.onboarding_completed) {
    redirect('/onboarding')
  }

  redirect('/')
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}

export async function updateProfile(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const name = formData.get('name')?.toString().trim()
  const story = formData.get('story')?.toString().trim()
  const persona = formData.get('persona')?.toString() || null

  if (!name || name.length < 2) return { error: 'İsim en az 2 karakter olmalı.' }
  if (story && story.length > 280) return { error: 'Hikaye en fazla 280 karakter olabilir.' }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Oturum bulunamadı.' }

  const { error } = await supabase
    .from('profiles')
    .update({ name, story: story || null, persona: persona || null })
    .eq('id', user.id)

  if (error) return { error: 'Profil güncellenemedi.' }

  return { success: true }
}
