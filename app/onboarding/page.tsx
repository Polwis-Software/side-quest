import Link from 'next/link'
import { createClient } from '@/app/lib/supabase/server'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Onboarding — Side Quest' }

const bg = '#0b0916'
const purple = '#7f77dd'
const purpleDim = '#534ab7'
const text = '#e8e2ff'
const textMuted = '#c4b8f5'
const textDim = '#6a6080'
const divider = '#1e1a2e'

export default async function OnboardingPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: profile } = user
    ? await supabase.from('profiles').select('name').eq('id', user.id).single()
    : { data: null }

  const name = profile?.name ?? 'Quester'

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          @keyframes pulse { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
        `
      }} />
      <main style={{
        backgroundColor: bg,
        minHeight: '100vh',
        fontFamily: 'system-ui,sans-serif',
        color: text,
        display: 'flex',
        flexDirection: 'column',
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
          <Link href="/cikis" style={{ fontSize: '13px', color: textDim, textDecoration: 'none' }}>
            Çıkış yap
          </Link>
        </nav>

        {/* Content */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 24px',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 480 }}>
            {/* Icon */}
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: 'rgba(127,119,221,0.12)',
              border: '0.5px solid rgba(127,119,221,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 32px',
              animation: 'pulse 3s ease-in-out infinite',
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={purple} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>

            <div style={{
              fontSize: '10px', fontWeight: '700', letterSpacing: '.16em',
              textTransform: 'uppercase', color: purpleDim, marginBottom: 16,
            }}>
              Side Quest
            </div>

            <h1 style={{
              fontSize: 'clamp(28px, 5vw, 40px)',
              fontWeight: '700', letterSpacing: '-0.5px',
              color: text, marginBottom: 12, lineHeight: 1.2,
            }}>
              Hoş geldin, {name}!
            </h1>

            <p style={{
              fontSize: '16px', color: textMuted,
              lineHeight: 1.7, marginBottom: 40,
            }}>
              Onboarding yakında burada olacak.
              <br />
              Quest'in hazırlanıyor.
            </p>

            {/* Coming soon badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(127,119,221,0.08)',
              border: '0.5px solid rgba(127,119,221,0.25)',
              color: purple,
              fontSize: '12px', fontWeight: '600',
              padding: '8px 18px', borderRadius: 20,
              letterSpacing: '.04em',
              marginBottom: 32,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: purple, animation: 'pulse 2s ease-in-out infinite' }} />
              Yakında
            </div>

            <div>
              <Link href="/" style={{
                fontSize: '14px', color: textDim, textDecoration: 'none',
                borderBottom: `0.5px solid ${textDim}`, paddingBottom: 1,
              }}>
                Ana sayfaya dön →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
