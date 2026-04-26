'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { updateProfile, type AuthState } from '@/app/actions/auth'

const bg = '#0b0916'
const purple = '#7f77dd'
const purpleDim = '#534ab7'
const text = '#e8e2ff'
const textMuted = '#c4b8f5'
const textDim = '#6a6080'
const textFaint = '#5a5070'
const divider = '#1e1a2e'
const gold = '#d4a843'

type Profile = {
  id: string
  name: string | null
  story: string | null
  persona: string | null
}

const personas = ['Vizyoner', 'İnşacı', 'Destekçi']

export default function EditProfileForm({
  profile,
  userId,
}: {
  profile: Profile | null
  userId: string
}) {
  const [state, action, pending] = useActionState<AuthState, FormData>(updateProfile, null)
  const storyLen = profile?.story?.length ?? 0

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          @keyframes orb1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(25px,-20px); }
          }
          .auth-input {
            width: 100%;
            background: rgba(255,255,255,0.04);
            border: 0.5px solid rgba(255,255,255,0.12);
            border-radius: 10px;
            color: ${text};
            padding: 13px 16px;
            font-size: 14px;
            outline: none;
            transition: border-color .2s;
          }
          .auth-input:focus { border-color: rgba(127,119,221,0.5); }
          .auth-input::placeholder { color: ${textFaint}; }
          .auth-textarea {
            width: 100%;
            background: rgba(255,255,255,0.04);
            border: 0.5px solid rgba(255,255,255,0.12);
            border-radius: 10px;
            color: ${text};
            padding: 13px 16px;
            font-size: 14px;
            outline: none;
            transition: border-color .2s;
            resize: vertical;
            min-height: 120px;
            font-family: inherit;
            line-height: 1.6;
          }
          .auth-textarea:focus { border-color: rgba(127,119,221,0.5); }
          .auth-textarea::placeholder { color: ${textFaint}; }
          .auth-select {
            width: 100%;
            background: rgba(255,255,255,0.04);
            border: 0.5px solid rgba(255,255,255,0.12);
            border-radius: 10px;
            color: ${text};
            padding: 13px 16px;
            font-size: 14px;
            outline: none;
            transition: border-color .2s;
            appearance: none;
            cursor: pointer;
          }
          .auth-select:focus { border-color: rgba(127,119,221,0.5); }
          .auth-select option { background: #130f22; color: ${text}; }
          .auth-btn-primary {
            width: 100%;
            background: linear-gradient(135deg, #7f77dd 0%, #6356c7 100%);
            color: #fff;
            border: none;
            border-radius: 10px;
            padding: 14px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: opacity .15s, box-shadow .2s;
          }
          .auth-btn-primary:hover { box-shadow: 0 0 22px 4px rgba(127,119,221,0.4); }
          .auth-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
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
          <Link
            href={userId ? `/profil/${userId}` : '/'}
            style={{ fontSize: '13px', color: textDim, textDecoration: 'none' }}
          >
            Profilime dön
          </Link>
        </nav>

        {/* Orb */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: 450, height: 450, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(127,119,221,0.14) 0%, transparent 70%)',
            filter: 'blur(70px)', animation: 'orb1 22s ease-in-out infinite',
          }} />
        </div>

        {/* Form */}
        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: 520, margin: '0 auto',
          padding: '80px 24px',
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '0.5px solid rgba(255,255,255,0.08)',
            borderRadius: 20,
            backdropFilter: 'blur(20px)',
            padding: '40px 36px',
          }}>
            <div style={{
              fontSize: '10px', fontWeight: '700', letterSpacing: '.16em',
              textTransform: 'uppercase', color: purpleDim,
              marginBottom: 24,
            }}>
              Side Quest
            </div>

            <h1 style={{
              fontSize: '26px', fontWeight: '700',
              letterSpacing: '-0.4px', color: text,
              marginBottom: 6,
            }}>
              Profili Düzenle
            </h1>
            <p style={{ fontSize: '14px', color: textDim, marginBottom: 32 }}>
              Hikayeni quester topluluğuyla paylaş.
            </p>

            <form action={action} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Name */}
              <div>
                <label style={{ fontSize: '12px', color: textDim, marginBottom: 6, display: 'block' }}>
                  İsim
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  defaultValue={profile?.name ?? ''}
                  placeholder="İsmin"
                  className="auth-input"
                />
              </div>

              {/* Persona */}
              <div>
                <label style={{ fontSize: '12px', color: textDim, marginBottom: 6, display: 'block' }}>
                  Persona
                </label>
                <select name="persona" defaultValue={profile?.persona ?? ''} className="auth-select">
                  <option value="">Seç (isteğe bağlı)</option>
                  {personas.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Story */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <label style={{ fontSize: '12px', color: textDim }}>
                    Hikaye
                  </label>
                  <span style={{ fontSize: '11px', color: textFaint }}>
                    maks. 280 karakter
                  </span>
                </div>
                <textarea
                  name="story"
                  defaultValue={profile?.story ?? ''}
                  maxLength={280}
                  placeholder="Kendi yolculuğunu anlat..."
                  className="auth-textarea"
                />
              </div>

              {/* Feedback */}
              {state?.error && (
                <div style={{
                  color: gold, fontSize: '13px',
                  padding: '10px 14px',
                  background: 'rgba(212,168,67,0.08)',
                  border: '0.5px solid rgba(212,168,67,0.25)',
                  borderRadius: 8,
                }}>
                  {state.error}
                </div>
              )}
              {state?.success && (
                <div style={{
                  color: '#34c785', fontSize: '13px',
                  padding: '10px 14px',
                  background: 'rgba(52,199,133,0.08)',
                  border: '0.5px solid rgba(52,199,133,0.25)',
                  borderRadius: 8,
                }}>
                  Profil güncellendi.
                </div>
              )}

              <button
                type="submit"
                disabled={pending}
                className="auth-btn-primary"
              >
                {pending ? '...' : 'Kaydet'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
