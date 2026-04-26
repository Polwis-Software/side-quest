'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { signUp, type AuthState } from '@/app/actions/auth'
import { AuthLayout, GoogleIcon, authTokens } from './AuthLayout'
import { createClient } from '@/app/lib/supabase/client'
import type { Lang } from '@/app/lib/i18n'
import { i18n } from '@/app/lib/i18n'

const { textDim, textFaint } = authTokens

export default function SignUpForm({ lang }: { lang: Lang }) {
  const t = i18n[lang].auth.signUp
  const [state, action, pending] = useActionState<AuthState, FormData>(signUp, null)

  async function handleGoogle() {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
  }

  return (
    <AuthLayout lang={lang} title={t.title} subtitle={t.subtitle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* Google */}
        <button type="button" className="auth-btn-google" onClick={handleGoogle}>
          <GoogleIcon />
          {t.googleLabel}
        </button>

        <div className="auth-divider">{t.or}</div>

        {/* Form */}
        <form action={action} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={{ fontSize: '12px', color: textDim, marginBottom: 6, display: 'block' }}>
              {t.nameLabel}
            </label>
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={lang === 'tr' ? 'İsmin' : 'Your name'}
              className="auth-input"
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', color: textDim, marginBottom: 6, display: 'block' }}>
              {t.emailLabel}
            </label>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="quester@email.com"
              className="auth-input"
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', color: textDim, marginBottom: 6, display: 'block' }}>
              {t.passwordLabel}
            </label>
            <input
              name="password"
              type="password"
              required
              autoComplete="new-password"
              placeholder="••••••••"
              className="auth-input"
            />
          </div>

          {state?.error && (
            <div className="auth-error">{state.error}</div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="auth-btn-primary"
            style={{ marginTop: 4 }}
          >
            {pending ? '...' : t.submitLabel}
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '13px', color: textFaint, marginTop: 8 }}>
          {t.hasAccount}{' '}
          <Link
            href={lang === 'tr' ? '/giris' : '/signin'}
            className="auth-link"
          >
            {t.signInLink}
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
