'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Page error:', error)
  }, [error])

  return (
    <main style={{
      backgroundColor: '#0b0916',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
      color: '#e8e2ff',
      padding: '40px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '13px', color: '#534ab7', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
        Side Quest
      </div>
      <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '12px' }}>
        Bir şeyler ters gitti
      </h2>
      <p style={{ fontSize: '14px', color: '#6a6080', marginBottom: '28px', maxWidth: '360px', lineHeight: 1.6 }}>
        Sayfa yüklenirken hata oluştu.
        {error?.digest && (
          <span style={{ display: 'block', marginTop: '8px', fontSize: '11px', color: '#3a3050', fontFamily: 'monospace' }}>
            digest: {error.digest}
          </span>
        )}
      </p>
      <button
        onClick={reset}
        style={{
          background: '#7f77dd',
          color: '#fff',
          border: 'none',
          padding: '10px 24px',
          borderRadius: '10px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
        }}
      >
        Tekrar dene
      </button>
    </main>
  )
}
