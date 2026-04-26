import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/app/lib/supabase/server'

export const dynamic = 'force-dynamic'

const bg = '#0b0916'
const purple = '#7f77dd'
const purpleDim = '#534ab7'
const text = '#e8e2ff'
const textMuted = '#c4b8f5'
const textDim = '#6a6080'
const textFaint = '#5a5070'
const divider = '#1e1a2e'
const card = 'rgba(255,255,255,0.03)'
const cardBorder = 'rgba(255,255,255,0.08)'

const personaAccent: Record<string, string> = {
  Vizyoner: '#7f77dd',
  İnşacı: '#d4a843',
  Destekçi: '#34c785',
}

type Profile = {
  id: string
  name: string | null
  story: string | null
  persona: string | null
  created_at: string
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data } = await supabase.from('profiles').select('name').eq('id', id).single()
  return { title: data?.name ? `${data.name} — Side Quest` : 'Quester — Side Quest' }
}

export default async function ProfilPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const [{ data: profile }, { data: { user } }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', id).single(),
    supabase.auth.getUser(),
  ])

  if (!profile) notFound()

  const isOwn = user?.id === profile.id
  const accent = profile.persona ? (personaAccent[profile.persona] ?? purple) : purple

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
          .fade { animation: fadeUp .5s ease both; }
        `
      }} />
      <main style={{
        backgroundColor: bg,
        minHeight: '100vh',
        fontFamily: 'system-ui,sans-serif',
        color: text,
      }}>
        {/* Nav */}
        <nav style={{
          borderBottom: `0.5px solid ${divider}`,
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Link href="/" style={{ fontSize: '19px', fontWeight: '700', color: purple, textDecoration: 'none' }}>
            Side Quest
          </Link>
          {user && (
            <Link href="/cikis" style={{ fontSize: '13px', color: textDim, textDecoration: 'none' }}>
              Çıkış yap
            </Link>
          )}
        </nav>

        {/* Content */}
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '80px 24px' }}>
          {/* Profile card */}
          <div className="fade" style={{
            background: card,
            border: `0.5px solid ${cardBorder}`,
            borderRadius: 20,
            backdropFilter: 'blur(20px)',
            padding: '40px 36px',
            marginBottom: 24,
          }}>
            {/* Avatar + name */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 28 }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: `linear-gradient(135deg, ${accent}33, ${accent}66)`,
                border: `1.5px solid ${accent}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                fontSize: '22px', fontWeight: '700', color: accent,
              }}>
                {(profile.name ?? 'Q')[0].toUpperCase()}
              </div>
              <div style={{ flex: 1 }}>
                <h1 style={{
                  fontSize: '24px', fontWeight: '700',
                  letterSpacing: '-0.3px', color: text,
                  marginBottom: 4,
                }}>
                  {profile.name ?? 'Quester'}
                </h1>
                {profile.persona && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: `${accent}18`,
                    border: `0.5px solid ${accent}44`,
                    color: accent,
                    fontSize: '11px', fontWeight: '700',
                    padding: '4px 12px', borderRadius: 20,
                    letterSpacing: '.06em',
                  }}>
                    {profile.persona}
                  </div>
                )}
              </div>
              {isOwn && (
                <Link href="/profil/duzenle" style={{
                  fontSize: '13px', color: purple,
                  textDecoration: 'none',
                  background: 'rgba(127,119,221,0.08)',
                  border: '0.5px solid rgba(127,119,221,0.25)',
                  padding: '7px 14px', borderRadius: 8,
                  fontWeight: '500', flexShrink: 0,
                }}>
                  Profili Düzenle
                </Link>
              )}
            </div>

            {/* Divider */}
            <div style={{ height: '0.5px', background: divider, marginBottom: 28 }} />

            {/* Story */}
            <div>
              <div style={{
                fontSize: '10px', fontWeight: '700', letterSpacing: '.12em',
                textTransform: 'uppercase', color: purpleDim, marginBottom: 14,
              }}>
                Hikaye
              </div>
              {profile.story ? (
                <p style={{
                  fontFamily: 'Georgia,"Times New Roman",serif',
                  fontSize: '16px', lineHeight: 1.8,
                  color: textMuted,
                }}>
                  {profile.story}
                </p>
              ) : (
                <p style={{ fontSize: '14px', color: textFaint, fontStyle: 'italic' }}>
                  Bu quester henüz hikayesini yazmadı.
                </p>
              )}
            </div>
          </div>

          {/* Back link */}
          <Link href="/" style={{ fontSize: '13px', color: textDim, textDecoration: 'none' }}>
            ← Ana sayfaya dön
          </Link>
        </div>
      </main>
    </>
  )
}
