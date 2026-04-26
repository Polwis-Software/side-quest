import { createClient } from '@/app/lib/supabase/server'
import EditProfileForm from './EditProfileForm'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Profili Düzenle — Side Quest' }

export default async function DuzenlerPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: profile } = user
    ? await supabase.from('profiles').select('*').eq('id', user.id).single()
    : { data: null }

  return <EditProfileForm profile={profile} userId={user?.id ?? ''} />
}
