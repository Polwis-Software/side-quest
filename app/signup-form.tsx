'use client'

import { useActionState } from 'react'
import { submitEmail, type EmailActionState } from './actions'

export default function SignupForm({
  label = 'Join the quest',
  glassy = false,
}: {
  label?: string
  glassy?: boolean
}) {
  const [state, action, pending] = useActionState<EmailActionState, FormData>(submitEmail, null)

  if (state?.success) {
    return (
      <p style={{ fontSize: '14px', color: '#7f77dd', textAlign: 'center', padding: '12px 0' }}>
        Harika! Seni bekliyoruz. 🚀
      </p>
    )
  }

  const inputStyle: React.CSSProperties = glassy
    ? {
        flex: 1,
        background: 'transparent',
        border: 'none',
        color: '#e8e2ff',
        padding: '12px 16px',
        fontSize: '14px',
        outline: 'none',
      }
    : {
        flex: 1,
        background: '#1a1428',
        border: '0.5px solid #3a2f5a',
        color: '#e8e2ff',
        padding: '12px 16px',
        borderRadius: '10px',
        fontSize: '14px',
        outline: 'none',
      }

  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #7f77dd 0%, #6356c7 100%)',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: glassy ? '10px' : '10px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    boxShadow: '0 0 0 0 rgba(127,119,221,0)',
    transition: 'box-shadow .2s, opacity .15s',
  }

  return (
    <form action={action}>
      <div style={{ display: 'flex', gap: glassy ? '6px' : '10px', alignItems: 'center' }}>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          style={inputStyle}
        />
        <button
          type="submit"
          disabled={pending}
          style={{ ...buttonStyle, opacity: pending ? 0.7 : 1 }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px 4px rgba(127,119,221,0.45)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 0 rgba(127,119,221,0)' }}
        >
          {pending ? '...' : label}
        </button>
      </div>
      {state?.error && (
        <p style={{ fontSize: '12px', color: '#e07070', marginTop: '8px', textAlign: 'left', paddingLeft: '4px' }}>
          {state.error}
        </p>
      )}
    </form>
  )
}
