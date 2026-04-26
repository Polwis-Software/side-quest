'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { createClient } from '@/app/lib/supabase/client'
import { i18n, type Lang } from '@/app/lib/i18n'
import type { User } from '@supabase/supabase-js'

const purple = '#7f77dd'
const textDim = '#6a6080'
const textFaint = '#5a5070'
const divider = '#1e1a2e'
const bg = '#0b0916'

export default function NavBar({
  lang,
  onLangToggle,
}: {
  lang: Lang
  onLangToggle: () => void
}) {
  const [user, setUser] = useState<User | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [profile, setProfile] = useState<{ name: string | null } | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const t = i18n[lang]

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(async ({ data }) => {
      setUser(data.user)
      if (data.user) {
        const { data: p } = await supabase
          .from('profiles')
          .select('name')
          .eq('id', data.user.id)
          .single()
        setProfile(p)
      }
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_, session) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        const { data: p } = await supabase
          .from('profiles')
          .select('name')
          .eq('id', session.user.id)
          .single()
        setProfile(p)
      } else {
        setProfile(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const displayName = profile?.name ?? user?.email?.split('@')[0] ?? 'Quester'

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .nav-auth-btn {
          background: linear-gradient(135deg, #7f77dd 0%, #6356c7 100%);
          color: #fff;
          border: none;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: box-shadow .2s;
          white-space: nowrap;
        }
        .nav-auth-btn:hover { box-shadow: 0 0 16px 4px rgba(127,119,221,0.4); }
        .nav-signin-link {
          font-size: 13px;
          color: ${textDim};
          text-decoration: none;
          transition: color .15s;
        }
        .nav-signin-link:hover { color: ${purple}; }
        .nav-user-btn {
          background: rgba(127,119,221,0.1);
          border: 0.5px solid rgba(127,119,221,0.3);
          color: ${purple};
          padding: 7px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background .15s;
        }
        .nav-user-btn:hover { background: rgba(127,119,221,0.18); }
        .nav-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: rgba(15,12,28,0.98);
          border: 0.5px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          backdrop-filter: blur(20px);
          min-width: 160px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0,0,0,0.5);
          z-index: 300;
        }
        .nav-dropdown a {
          display: block;
          padding: 11px 16px;
          font-size: 13px;
          color: ${textDim};
          text-decoration: none;
          transition: background .15s, color .15s;
        }
        .nav-dropdown a:hover { background: rgba(127,119,221,0.08); color: ${purple}; }
        .nav-dropdown-divider { height: 0.5px; background: ${divider}; }
        .lang-btn {
          background: rgba(127,119,221,0.1);
          border: 0.5px solid rgba(127,119,221,0.35);
          color: ${purple};
          font-size: 11px;
          font-weight: 700;
          padding: 5px 13px;
          border-radius: 20px;
          cursor: pointer;
          letter-spacing: .08em;
          transition: background .15s;
        }
        .lang-btn:hover { background: rgba(127,119,221,0.18); }
        .early-badge {
          background: rgba(127,119,221,0.08);
          border: 0.5px solid rgba(127,119,221,0.3);
          color: ${purple};
          font-size: 11px;
          padding: 5px 13px;
          border-radius: 20px;
          letter-spacing: .02em;
        }
        @media (max-width: 500px) {
          .nav-auth-btn { padding: 7px 14px; font-size: 12px; }
          .nav-early-badge { display: none; }
        }
      ` }} />

      <nav style={{
        position: 'sticky', top: 0, zIndex: 200,
        backgroundColor: 'rgba(11,9,22,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: `0.5px solid ${divider}`,
      }}>
        <div className="section-inner" style={{
          maxWidth: 900, margin: '0 auto',
          padding: '17px 40px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          {/* Logo */}
          <Link href="/" style={{
            fontSize: '19px', fontWeight: '700', color: purple,
            textDecoration: 'none', letterSpacing: '-0.3px',
          }}>
            Side Quest
          </Link>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button className="lang-btn" onClick={onLangToggle}>
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>

            <div className="early-badge nav-early-badge">{t.nav.earlyAccess}</div>

            {user ? (
              /* Logged in: user name + dropdown */
              <div ref={dropdownRef} style={{ position: 'relative' }}>
                <button
                  className="nav-user-btn"
                  onClick={() => setShowDropdown(d => !d)}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M20 20c0-4-3.58-7-8-7s-8 3-8 7"/>
                  </svg>
                  {displayName}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: showDropdown ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>

                {showDropdown && (
                  <div className="nav-dropdown">
                    <Link href={`/profil/${user.id}`} onClick={() => setShowDropdown(false)}>
                      {t.nav.profile}
                    </Link>
                    <div className="nav-dropdown-divider" />
                    <Link href={lang === 'tr' ? '/cikis' : '/signout'} onClick={() => setShowDropdown(false)}>
                      {t.nav.signOut}
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              /* Logged out: Sign in + Sign up */
              <>
                <Link href={lang === 'tr' ? '/giris' : '/signin'} className="nav-signin-link">
                  {t.nav.signIn}
                </Link>
                <Link href={lang === 'tr' ? '/kayit' : '/signup'} className="nav-auth-btn">
                  {t.nav.signUp}
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
