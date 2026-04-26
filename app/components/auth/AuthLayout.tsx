'use client'

import Link from 'next/link'
import type { Lang } from '@/app/lib/i18n'

const bg = '#0b0916'
const purple = '#7f77dd'
const purpleDim = '#534ab7'
const text = '#e8e2ff'
const textMuted = '#c4b8f5'
const textDim = '#6a6080'
const textFaint = '#5a5070'
const divider = '#1e1a2e'
const gold = '#d4a843'

export const authTokens = { bg, purple, purpleDim, text, textMuted, textDim, textFaint, divider, gold }

export function AuthLayout({
  lang,
  title,
  subtitle,
  children,
}: {
  lang: Lang
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          @keyframes orb1 {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(30px,-25px) scale(1.06); }
          }
          @keyframes orb2 {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(-25px,20px) scale(0.94); }
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
            letter-spacing: .01em;
          }
          .auth-btn-primary:hover { box-shadow: 0 0 22px 4px rgba(127,119,221,0.4); }
          .auth-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
          .auth-btn-google {
            width: 100%;
            background: rgba(255,255,255,0.04);
            border: 0.5px solid rgba(255,255,255,0.12);
            border-radius: 10px;
            color: ${textMuted};
            padding: 13px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: border-color .2s, background .2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          .auth-btn-google:hover {
            border-color: rgba(127,119,221,0.3);
            background: rgba(255,255,255,0.07);
          }
          .auth-link {
            color: ${purple};
            text-decoration: none;
            font-weight: 500;
            transition: opacity .15s;
          }
          .auth-link:hover { opacity: 0.8; }
          .auth-error {
            color: ${gold};
            font-size: 13px;
            padding: 10px 14px;
            background: rgba(212,168,67,0.08);
            border: 0.5px solid rgba(212,168,67,0.25);
            border-radius: 8px;
          }
          .auth-success {
            color: #34c785;
            font-size: 13px;
            padding: 10px 14px;
            background: rgba(52,199,133,0.08);
            border: 0.5px solid rgba(52,199,133,0.25);
            border-radius: 8px;
          }
          .auth-divider {
            display: flex;
            align-items: center;
            gap: 12px;
            color: ${textFaint};
            font-size: 12px;
          }
          .auth-divider::before, .auth-divider::after {
            content: '';
            flex: 1;
            height: 0.5px;
            background: ${divider};
          }
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
          }
          .auth-select:focus { border-color: rgba(127,119,221,0.5); }
          .auth-select option { background: #130f22; }
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
        {/* Navbar */}
        <nav style={{
          borderBottom: `0.5px solid ${divider}`,
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Link href="/" style={{
            fontSize: '19px',
            fontWeight: '700',
            color: purple,
            textDecoration: 'none',
            letterSpacing: '-0.3px',
          }}>
            Side Quest
          </Link>
          <div style={{ fontSize: '11px', color: textFaint, letterSpacing: '.08em' }}>
            {lang === 'tr' ? 'erken erişim' : 'early access'}
          </div>
        </nav>

        {/* Orb background */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '-10%', left: '-5%',
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(127,119,221,0.18) 0%, transparent 70%)',
            filter: 'blur(70px)', animation: 'orb1 20s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', bottom: '-5%', right: '-5%',
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(83,74,183,0.14) 0%, transparent 70%)',
            filter: 'blur(70px)', animation: 'orb2 24s ease-in-out infinite',
          }} />
        </div>

        {/* Card */}
        <div style={{
          position: 'relative', zIndex: 1,
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '40px 20px',
        }}>
          <div style={{
            width: '100%', maxWidth: 420,
            background: 'rgba(255,255,255,0.03)',
            border: '0.5px solid rgba(255,255,255,0.08)',
            borderRadius: 20,
            backdropFilter: 'blur(20px)',
            padding: '40px 36px',
          }}>
            {/* Logo mark */}
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
              {title}
            </h1>
            <p style={{
              fontSize: '14px', color: textDim,
              marginBottom: 32, lineHeight: 1.5,
            }}>
              {subtitle}
            </p>

            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}
