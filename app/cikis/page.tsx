'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/app/lib/supabase/client'

const bg = '#0b0916'
const purple = '#7f77dd'
const textDim = '#6a6080'

export default function CikisPage() {
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.signOut().then(() => {
      router.push('/')
      router.refresh()
    })
  }, [router])

  return (
    <main style={{
      backgroundColor: bg,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui,sans-serif',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '19px', fontWeight: '700', color: purple, marginBottom: 16 }}>
          Side Quest
        </div>
        <p style={{ fontSize: '14px', color: textDim }}>Çıkış yapılıyor...</p>
      </div>
    </main>
  )
}
