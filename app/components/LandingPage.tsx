'use client'

import { useState } from 'react'
import { i18n, type Lang } from '@/app/lib/i18n'
import SignupForm from '@/app/signup-form'

/* ─── design tokens ─────────────────────────────────────────── */
const bg       = '#0b0916'
const card     = 'rgba(255,255,255,0.04)'
const cardBorder = 'rgba(255,255,255,0.08)'
const purple   = '#7f77dd'
const purpleDim = '#534ab7'
const text     = '#e8e2ff'
const textSub  = '#c4b8f5'
const textMuted = '#8a82a8'
const textDim  = '#6a6080'
const textFaint = '#5a5070'
const divider  = '#1e1a2e'

/* ─── global CSS ─────────────────────────────────────────────── */
const globalCSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  @keyframes orb1 {
    0%,100% { transform: translate(0,0) scale(1); }
    33%     { transform: translate(40px,-35px) scale(1.07); }
    66%     { transform: translate(-28px,22px) scale(0.93); }
  }
  @keyframes orb2 {
    0%,100% { transform: translate(0,0) scale(1); }
    40%     { transform: translate(-38px,28px) scale(1.05); }
    80%     { transform: translate(32px,-18px) scale(0.95); }
  }
  @keyframes orb3 {
    0%,100% { transform: translate(0,0) scale(0.96); }
    50%     { transform: translate(22px,32px) scale(1.08); }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes sparkle {
    0%,100% { opacity:0.6; transform:scale(1) rotate(0deg); }
    50%     { opacity:1;   transform:scale(1.3) rotate(20deg); }
  }

  .fu  { animation: fadeUp .65s ease both; }
  .fu2 { animation: fadeUp .65s .12s ease both; }
  .fu3 { animation: fadeUp .65s .22s ease both; }
  .fu4 { animation: fadeUp .65s .32s ease both; }

  .persona-card {
    background: rgba(255,255,255,0.03);
    border: 0.5px solid rgba(255,255,255,0.08);
    border-radius: 18px;
    padding: 32px 26px;
    backdrop-filter: blur(20px);
    transition: transform .25s ease, border-color .2s ease, box-shadow .25s ease;
  }
  .persona-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(0,0,0,0.4);
  }
  .faq-item {
    background: rgba(255,255,255,0.03);
    border: 0.5px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    overflow: hidden;
    backdrop-filter: blur(12px);
    transition: border-color .2s;
    margin-bottom: 6px;
  }
  .faq-item.open { border-color: rgba(127,119,221,0.5); }
  .faq-btn {
    width:100%; background:transparent; border:none;
    padding:20px 24px;
    display:flex; justify-content:space-between; align-items:center;
    cursor:pointer; gap:16px;
    transition: background .2s;
    text-align:left;
  }
  .faq-btn:hover { background: rgba(127,119,221,0.06); }
  .faq-chevron { transition: transform .3s cubic-bezier(.4,0,.2,1); }
  .faq-chevron.open { transform: rotate(180deg); }
  .faq-answer {
    padding: 0 24px 20px;
    font-size:14px; line-height:1.75;
    color:${textDim};
  }
  .social-btn {
    width:36px; height:36px;
    background:rgba(255,255,255,0.04);
    border:0.5px solid rgba(255,255,255,0.08);
    border-radius:9px;
    display:flex; align-items:center; justify-content:center;
    color:${textDim}; text-decoration:none;
    transition: border-color .2s, color .2s, background .2s;
  }
  .social-btn:hover {
    border-color:${purple};
    color:${purple};
    background:rgba(127,119,221,0.08);
  }
  .footer-link {
    font-size:13px; color:${textDim}; text-decoration:none;
    transition:color .15s;
  }
  .footer-link:hover { color:${textSub}; }
  .lang-btn {
    background:rgba(127,119,221,0.1);
    border:0.5px solid rgba(127,119,221,0.35);
    color:${purple};
    font-size:11px; font-weight:700;
    padding:5px 13px; border-radius:20px;
    cursor:pointer; letter-spacing:.08em;
    transition:background .15s;
  }
  .lang-btn:hover { background:rgba(127,119,221,0.18); }
  .early-badge {
    background:rgba(127,119,221,0.08);
    border:0.5px solid rgba(127,119,221,0.3);
    color:${purple};
    font-size:11px; padding:5px 13px;
    border-radius:20px; letter-spacing:.02em;
  }

  @media (max-width: 768px) {
    .hero-h1 { font-size: 40px !important; }
    .grid-3  { grid-template-columns: 1fr !important; }
    .footer-cols { grid-template-columns: 1fr !important; gap:32px !important; }
    .section-inner { padding-left:20px !important; padding-right:20px !important; }
    .manifesto-inner { padding-left:20px !important; padding-right:20px !important; }
  }
  @media (max-width: 480px) {
    .stats-row { gap:24px !important; flex-wrap:wrap; }
  }
`

/* ─── small reusable pieces ──────────────────────────────────── */
function SectionBadge({ label }: { label: string }) {
  return (
    <div style={{
      display:'inline-flex', alignItems:'center', gap:'8px',
      fontSize:'10px', fontWeight:'700', letterSpacing:'.14em',
      textTransform:'uppercase', color:purple,
      marginBottom:'22px',
    }}>
      <span style={{ width:'18px', height:'1px', background:purple, opacity:.6, display:'inline-block' }} />
      {label}
      <span style={{ width:'18px', height:'1px', background:purple, opacity:.6, display:'inline-block' }} />
    </div>
  )
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      background:'linear-gradient(135deg,#a78bfa 0%,#f472b6 100%)',
      WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
      backgroundClip:'text',
    }}>
      {children}
    </span>
  )
}

function Sparkle({ style }: { style: React.CSSProperties }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
      style={{ position:'absolute', animation:'sparkle 3s ease-in-out infinite', ...style }}>
      <path d="M7 0L8.2 5.8L14 7L8.2 8.2L7 14L5.8 8.2L0 7L5.8 5.8Z"
        fill="#a78bfa" opacity=".7"/>
    </svg>
  )
}

/* ─── SVG browser mockups ────────────────────────────────────── */
function BrowserFrame({ children, height = 190 }: { children: React.ReactNode; height?: number }) {
  return (
    <div style={{
      background:'rgba(10,8,20,0.9)',
      border:'0.5px solid rgba(255,255,255,0.1)',
      borderRadius:'12px', overflow:'hidden',
      marginBottom:'24px',
    }}>
      {/* chrome bar */}
      <div style={{
        background:'rgba(255,255,255,0.04)',
        borderBottom:'0.5px solid rgba(255,255,255,0.07)',
        padding:'9px 14px',
        display:'flex', alignItems:'center', gap:'8px',
      }}>
        <span style={{ width:8, height:8, borderRadius:'50%', background:'#ff5f5780', display:'inline-block' }} />
        <span style={{ width:8, height:8, borderRadius:'50%', background:'#febc2e80', display:'inline-block' }} />
        <span style={{ width:8, height:8, borderRadius:'50%', background:'#28c84080', display:'inline-block' }} />
        <div style={{
          flex:1, height:10, background:'rgba(255,255,255,0.05)',
          borderRadius:6, marginLeft:6,
        }} />
      </div>
      {/* content */}
      <div style={{ padding:'14px', height }}>
        {children}
      </div>
    </div>
  )
}

function QuestFeedMockup() {
  const posts = [
    { color:'#7f77dd', w1:80,  w2:130, react:'rgba(127,119,221,0.25)' },
    { color:'#d4a843', w1:100, w2:110, react:'rgba(212,168,67,0.25)' },
    { color:'#34c785', w1:70,  w2:120, react:'rgba(52,199,133,0.25)' },
  ]
  return (
    <BrowserFrame height={170}>
      <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
        {posts.map((p, i) => (
          <div key={i} style={{
            background:'rgba(255,255,255,0.04)',
            border:`0.5px solid rgba(255,255,255,0.07)`,
            borderRadius:'8px', padding:'10px 12px',
            display:'flex', alignItems:'flex-start', gap:'10px',
          }}>
            <div style={{ width:22, height:22, borderRadius:'50%', background:p.color, opacity:.75, flexShrink:0 }} />
            <div style={{ flex:1 }}>
              <div style={{ height:5, width:p.w1, background:'rgba(255,255,255,0.18)', borderRadius:3, marginBottom:6 }} />
              <div style={{ height:3, width:p.w2, background:'rgba(255,255,255,0.08)', borderRadius:2, marginBottom:8 }} />
              <div style={{ display:'flex', gap:8 }}>
                <div style={{ height:3, width:28, background:p.react, borderRadius:2 }} />
                <div style={{ height:3, width:22, background:'rgba(255,255,255,0.06)', borderRadius:2 }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  )
}

function LinkUpMockup() {
  const nodes = [
    { x:130, y:88,  r:20, fill:'#7f77dd', opacity:0.85, main:true },
    { x:55,  y:55,  r:13, fill:'#a78bfa', opacity:0.5, main:false },
    { x:205, y:50,  r:13, fill:'#a78bfa', opacity:0.5, main:false },
    { x:48,  y:138, r:13, fill:'#a78bfa', opacity:0.5, main:false },
    { x:210, y:138, r:13, fill:'#a78bfa', opacity:0.5, main:false },
    { x:130, y:32,  r:9,  fill:'#a78bfa', opacity:0.35, main:false },
  ]
  const lines = [
    [130,88,55,55],[130,88,205,50],[130,88,48,138],
    [130,88,210,138],[130,88,130,32],
  ]
  return (
    <BrowserFrame height={170}>
      <svg viewBox="0 0 260 170" fill="none" style={{ width:'100%', height:'100%' }}>
        {lines.map(([x1,y1,x2,y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#534ab7" strokeWidth="0.8" strokeOpacity="0.45"
            strokeDasharray="3 3"/>
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            {n.main && <circle cx={n.x} cy={n.y} r={n.r+6} fill={n.fill} opacity={0.12}/>}
            <circle cx={n.x} cy={n.y} r={n.r} fill={n.fill} opacity={n.opacity}/>
            {!n.main && (
              <rect x={n.x-7} y={n.y-4} width={14} height={3} rx={1.5}
                fill="rgba(255,255,255,0.3)"/>
            )}
          </g>
        ))}
        <text x="130" y="93" textAnchor="middle" fontSize="9" fill="white" opacity="0.9" fontWeight="600">you</text>
      </svg>
    </BrowserFrame>
  )
}

function QuestGroupsMockup() {
  const members = [
    { x:20,  color:'#7f77dd' },
    { x:38,  color:'#d4a843' },
    { x:56,  color:'#34c785' },
    { x:74,  color:'#a78bfa' },
    { x:92,  color:'#f472b6' },
  ]
  return (
    <BrowserFrame height={170}>
      <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
        {/* Group header */}
        <div style={{
          background:'rgba(127,119,221,0.08)',
          border:'0.5px solid rgba(127,119,221,0.2)',
          borderRadius:'8px', padding:'10px 12px',
          display:'flex', alignItems:'center', justifyContent:'space-between',
        }}>
          <div>
            <div style={{ height:4, width:80, background:'rgba(255,255,255,0.2)', borderRadius:2, marginBottom:5 }} />
            <div style={{ display:'flex', alignItems:'center' }}>
              {members.map((m,i) => (
                <div key={i} style={{
                  width:16, height:16, borderRadius:'50%', background:m.color,
                  border:'1.5px solid #0b0916',
                  marginLeft: i > 0 ? -5 : 0, opacity:.8,
                }}/>
              ))}
              <div style={{ fontSize:9, color:textFaint, marginLeft:6 }}>+3</div>
            </div>
          </div>
          <div style={{ height:18, width:40, background:'rgba(127,119,221,0.3)', borderRadius:6 }} />
        </div>
        {/* Activity items */}
        {[
          { c:'#7f77dd', w:100 },
          { c:'#34c785', w:85 },
          { c:'#d4a843', w:115 },
        ].map((r,i) => (
          <div key={i} style={{
            display:'flex', alignItems:'center', gap:8,
            padding:'7px 10px',
            background:'rgba(255,255,255,0.03)',
            border:'0.5px solid rgba(255,255,255,0.06)',
            borderRadius:'7px',
          }}>
            <div style={{ width:14, height:14, borderRadius:'50%', background:r.c, opacity:.65, flexShrink:0 }} />
            <div>
              <div style={{ height:3, width:r.w, background:'rgba(255,255,255,0.12)', borderRadius:2, marginBottom:4 }} />
              <div style={{ height:2, width:r.w*0.7, background:'rgba(255,255,255,0.06)', borderRadius:1 }} />
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  )
}

const featureMockups = [QuestFeedMockup, LinkUpMockup, QuestGroupsMockup]
const featureAccents = ['rgba(127,119,221,0.08)', 'rgba(83,74,183,0.08)', 'rgba(52,199,133,0.06)']
const featureAccentBorders = ['rgba(127,119,221,0.2)', 'rgba(83,74,183,0.2)', 'rgba(52,199,133,0.2)']

/* ─── icons ──────────────────────────────────────────────────── */
function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  )
}
function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  )
}
function InstaIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.127 2.063 2.063 0 0 1 0 4.127zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

/* ─── main component ─────────────────────────────────────────── */
export default function LandingPage({ signupCount }: { signupCount: number }) {
  const [lang, setLang] = useState<Lang>('tr')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = i18n[lang]

  const stats: [string, string][] = [
    [String(signupCount), t.stats.questers],
    ['91', t.stats.ideas],
    ['47', t.stats.collabs],
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalCSS }} />

      <main style={{ backgroundColor: bg, minHeight:'100vh', fontFamily:'system-ui,sans-serif', color:text, overflowX:'hidden' }}>

        {/* ── NAV ── */}
        <nav style={{
          position:'sticky', top:0, zIndex:200,
          backgroundColor:'rgba(11,9,22,0.85)',
          backdropFilter:'blur(20px)',
          borderBottom:`0.5px solid ${divider}`,
        }}>
          <div className="section-inner" style={{ maxWidth:900, margin:'0 auto', padding:'17px 40px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div style={{ fontSize:'19px', fontWeight:'700', color:purple, letterSpacing:'-0.3px' }}>Side Quest</div>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <button className="lang-btn" onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}>
                {lang === 'tr' ? 'EN' : 'TR'}
              </button>
              <div className="early-badge">{t.nav.earlyAccess}</div>
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{ position:'relative', overflow:'hidden', padding:'120px 40px 100px', textAlign:'center' }}>
          {/* animated orbs */}
          <div style={{
            position:'absolute', top:'-15%', left:'-8%',
            width:600, height:600, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(127,119,221,0.28) 0%, transparent 70%)',
            filter:'blur(70px)', animation:'orb1 18s ease-in-out infinite', zIndex:0,
          }} />
          <div style={{
            position:'absolute', top:'-10%', right:'-10%',
            width:480, height:480, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(99,80,200,0.22) 0%, transparent 70%)',
            filter:'blur(70px)', animation:'orb2 22s ease-in-out infinite', zIndex:0,
          }} />
          <div style={{
            position:'absolute', bottom:'0%', left:'30%',
            width:420, height:420, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)',
            filter:'blur(80px)', animation:'orb3 26s ease-in-out infinite', zIndex:0,
          }} />

          <div style={{ position:'relative', zIndex:1, maxWidth:700, margin:'0 auto' }}>
            {/* badge */}
            <div className="fu" style={{
              display:'inline-flex', alignItems:'center', gap:6,
              background:'rgba(127,119,221,0.1)',
              border:'0.5px solid rgba(127,119,221,0.35)',
              color:purple, fontSize:'11px', fontWeight:'700',
              letterSpacing:'.1em', padding:'6px 16px',
              borderRadius:20, marginBottom:32,
            }}>
              <span style={{ width:5, height:5, borderRadius:'50%', background:purple, display:'inline-block', animation:'sparkle 2s ease-in-out infinite' }} />
              {t.hero.badge}
            </div>

            {/* headline */}
            <div style={{ position:'relative', display:'inline-block', marginBottom:24 }}>
              <Sparkle style={{ top:-8, left:-20, animationDelay:'0s' }} />
              <Sparkle style={{ top:-12, right:60, animationDelay:'1.2s' }} />
              <Sparkle style={{ bottom:20, right:-18, animationDelay:'0.6s' }} />
              <h1 className="fu2 hero-h1" style={{
                fontSize:'clamp(44px,7vw,72px)',
                fontWeight:'700', lineHeight:1.1, letterSpacing:'-2px',
              }}>
                {t.hero.headline1}<br />
                <GradientText>{t.hero.headline2}</GradientText>
              </h1>
            </div>

            <p className="fu3" style={{
              fontSize:'17px', color:textMuted, lineHeight:1.75,
              maxWidth:500, margin:'0 auto 42px',
            }}>
              {t.hero.sub}
            </p>

            {/* email form */}
            <div className="fu4" style={{
              maxWidth:440, margin:'0 auto 14px',
              background:'rgba(255,255,255,0.04)',
              backdropFilter:'blur(16px)',
              border:'0.5px solid rgba(127,119,221,0.25)',
              borderRadius:14, padding:6,
            }}>
              <SignupForm label={t.hero.ctaLabel} glassy />
            </div>
            <p style={{ fontSize:'12px', color:textFaint }}>{t.hero.ctaNote}</p>
          </div>
        </section>

        {/* ── STATS ── */}
        <div style={{ borderTop:`0.5px solid ${divider}`, borderBottom:`0.5px solid ${divider}` }}>
          <div className="section-inner stats-row" style={{
            maxWidth:900, margin:'0 auto', padding:'32px 40px',
            display:'flex', justifyContent:'center', gap:64, flexWrap:'wrap',
          }}>
            {stats.map(([num, label]) => (
              <div key={label} style={{ textAlign:'center' }}>
                <div style={{ fontSize:'30px', fontWeight:'700', color:textSub, letterSpacing:'-0.5px' }}>{num}</div>
                <div style={{ fontSize:'12px', color:textFaint, marginTop:4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MANIFESTO ── */}
        <section id="manifesto" style={{
          background:'linear-gradient(180deg, #0b0916 0%, #130f22 50%, #0b0916 100%)',
          borderBottom:`0.5px solid ${divider}`,
        }}>
          <div className="manifesto-inner" style={{ maxWidth:660, margin:'0 auto', padding:'110px 40px' }}>
            <SectionBadge label={t.manifesto.badge} />
            <h2 style={{
              fontSize:'clamp(26px,3.5vw,36px)',
              fontWeight:'700', letterSpacing:'-0.5px',
              color:text, marginBottom:52, lineHeight:1.25,
            }}>
              {t.manifesto.title}
            </h2>

            {/* text block with left accent */}
            <div style={{
              borderLeft:`2px solid rgba(127,119,221,0.25)`,
              paddingLeft:28,
            }}>
              {t.manifesto.body.split('\n\n').map((para, i, arr) => {
                const isFirst  = i === 0
                const isLast   = i === arr.length - 1
                const isAlone  = para.trim() === (lang === 'tr' ? 'Yalnızdık.' : 'We were alone.')
                return (
                  <p key={i} style={{
                    fontFamily:'Georgia,"Times New Roman",serif',
                    fontSize: isFirst ? '18px' : '17px',
                    lineHeight:1.9,
                    marginBottom: i < arr.length - 1 ? 22 : 0,
                    color: isLast ? textSub : isAlone ? text : textMuted,
                    fontWeight: isAlone ? '600' : '400',
                  }}>
                    {isFirst
                      ? <><span style={{ float:'left', fontSize:'4em', lineHeight:0.8, marginRight:6, marginTop:4, color:purple, fontFamily:'Georgia,serif', opacity:.6 }}>{para[0]}</span>{para.slice(1)}</>
                      : para
                    }
                  </p>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── PERSONAS ── */}
        <section id="for-who" style={{ borderBottom:`0.5px solid ${divider}` }}>
          <div className="section-inner" style={{ maxWidth:920, margin:'0 auto', padding:'110px 40px' }}>
            <div style={{ textAlign:'center', marginBottom:52 }}>
              <SectionBadge label={t.personas.badge} />
              <h2 style={{
                fontSize:'clamp(26px,3.5vw,40px)',
                fontWeight:'700', letterSpacing:'-0.5px', color:text,
              }}>
                {t.personas.title}
              </h2>
            </div>

            <div className="grid-3" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
              {t.personas.items.map((persona) => (
                <div key={persona.num} className="persona-card"
                  style={{ borderColor: cardBorder } as React.CSSProperties}>
                  {/* number */}
                  <div style={{
                    fontSize:'42px', fontWeight:'800',
                    letterSpacing:'-2px', lineHeight:1,
                    marginBottom:20,
                    WebkitTextStroke:`1px ${persona.accent}`,
                    WebkitTextFillColor:'transparent',
                  }}>
                    {persona.num}
                  </div>
                  {/* label */}
                  <div style={{
                    fontSize:'13px', fontWeight:'700',
                    color:persona.accent, marginBottom:16,
                    letterSpacing:'.02em',
                  }}>
                    {lang === 'tr' ? persona.labelTr : persona.label}
                  </div>
                  {/* quote */}
                  <blockquote style={{
                    fontFamily:'Georgia,"Times New Roman",serif',
                    fontSize:'14px', lineHeight:1.7,
                    fontStyle:'italic', color:textSub,
                    borderLeft:`2px solid ${persona.accent}`,
                    paddingLeft:14, marginBottom:18, opacity:.9,
                  }}>
                    {persona.quote}
                  </blockquote>
                  {/* desc */}
                  <p style={{ fontSize:'13px', color:textDim, lineHeight:1.65 }}>
                    {persona.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATFORM ── */}
        <section style={{
          background:'linear-gradient(180deg, #0b0916 0%, #0f0c20 100%)',
          borderBottom:`0.5px solid ${divider}`,
        }}>
          <div className="section-inner" style={{ maxWidth:920, margin:'0 auto', padding:'110px 40px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <SectionBadge label={t.platform.badge} />
              <h2 style={{
                fontSize:'clamp(26px,3.5vw,40px)',
                fontWeight:'700', letterSpacing:'-0.5px', color:text,
              }}>
                {t.platform.title}
              </h2>
            </div>

            <div className="grid-3" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
              {t.platform.features.map((f, i) => {
                const Mockup = featureMockups[i]
                return (
                  <div key={f.name} style={{
                    background: featureAccents[i],
                    border:`0.5px solid ${featureAccentBorders[i]}`,
                    borderRadius:18, padding:'24px 22px',
                    backdropFilter:'blur(12px)',
                  }}>
                    <Mockup />
                    <h3 style={{ fontSize:'15px', fontWeight:'700', color:textSub, marginBottom:8 }}>
                      {f.name}
                    </h3>
                    <p style={{ fontSize:'13px', color:textDim, lineHeight:1.7 }}>
                      {f.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{ borderBottom:`0.5px solid ${divider}` }}>
          <div className="section-inner" style={{ maxWidth:680, margin:'0 auto', padding:'110px 40px' }}>
            <SectionBadge label={t.faq.badge} />
            <h2 style={{
              fontSize:'clamp(26px,3.5vw,38px)',
              fontWeight:'700', letterSpacing:'-0.5px',
              color:text, marginBottom:40,
            }}>
              {t.faq.title}
            </h2>

            {t.faq.items.map((item, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button
                  className="faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span style={{ fontSize:'14px', fontWeight:'500', color:textSub }}>{item.q}</span>
                  <span className={`faq-chevron${openFaq === i ? ' open' : ''}`} style={{ color:purple, flexShrink:0 }}>
                    <ChevronDown />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ position:'relative', overflow:'hidden', padding:'120px 40px', textAlign:'center' }}>
          {/* background glow */}
          <div style={{
            position:'absolute', top:'50%', left:'50%',
            transform:'translate(-50%,-50%)',
            width:600, height:400, borderRadius:'50%',
            background:'radial-gradient(ellipse, rgba(127,119,221,0.12) 0%, transparent 70%)',
            filter:'blur(40px)', zIndex:0,
          }} />

          <div style={{ position:'relative', zIndex:1, maxWidth:560, margin:'0 auto' }}>
            <div style={{
              fontSize:'10px', fontWeight:'700', letterSpacing:'.18em',
              textTransform:'uppercase', color:purpleDim, marginBottom:20,
            }}>
              Side Quest
            </div>
            <h2 style={{
              fontSize:'clamp(30px,4vw,48px)',
              fontWeight:'700', letterSpacing:'-0.5px',
              color:text, marginBottom:14, lineHeight:1.15,
            }}>
              {t.cta.title}
            </h2>
            <p style={{ fontSize:'16px', color:textDim, marginBottom:44 }}>{t.cta.sub}</p>

            <div style={{
              maxWidth:400, margin:'0 auto',
              background:'rgba(255,255,255,0.04)',
              backdropFilter:'blur(16px)',
              border:'0.5px solid rgba(127,119,221,0.25)',
              borderRadius:14, padding:6,
            }}>
              <SignupForm label={t.cta.label} glassy />
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop:`0.5px solid ${divider}`, position:'relative' }}>
          {/* thin gradient top line */}
          <div style={{
            position:'absolute', top:0, left:0, right:0, height:1,
            background:'linear-gradient(90deg, transparent, rgba(127,119,221,0.5) 50%, transparent)',
          }} />

          <div className="section-inner" style={{ maxWidth:920, margin:'0 auto', padding:'64px 40px 32px' }}>
            <div className="footer-cols" style={{
              display:'grid', gridTemplateColumns:'2fr 1fr 1fr',
              gap:48, marginBottom:56,
            }}>
              {/* brand */}
              <div>
                <div style={{ fontSize:'18px', fontWeight:'700', color:purple, marginBottom:12, letterSpacing:'-0.3px' }}>
                  Side Quest
                </div>
                <p style={{ fontSize:'13px', color:textFaint, lineHeight:1.65, maxWidth:240 }}>
                  {t.footer.tagline}
                </p>
              </div>

              {/* nav links */}
              <div>
                <div style={{ fontSize:'10px', fontWeight:'700', color:textFaint, letterSpacing:'.1em', textTransform:'uppercase', marginBottom:18 }}>
                  {t.nav.pagesLabel}
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                  {[
                    { label:t.footer.nav[0], href:'#manifesto' },
                    { label:t.footer.nav[1], href:'#for-who' },
                    { label:t.footer.nav[2], href:'#faq' },
                  ].map(l => (
                    <a key={l.href} href={l.href} className="footer-link">{l.label}</a>
                  ))}
                </div>
              </div>

              {/* socials */}
              <div>
                <div style={{ fontSize:'10px', fontWeight:'700', color:textFaint, letterSpacing:'.1em', textTransform:'uppercase', marginBottom:18 }}>
                  {t.nav.followLabel}
                </div>
                <div style={{ display:'flex', gap:8 }}>
                  {[
                    { Icon:XIcon,        label:'X / Twitter' },
                    { Icon:InstaIcon,    label:'Instagram' },
                    { Icon:LinkedInIcon, label:'LinkedIn' },
                  ].map(({ Icon, label }) => (
                    <a key={label} href="#" aria-label={label} className="social-btn">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* bottom bar */}
            <div style={{
              paddingTop:24,
              borderTop:`0.5px solid ${divider}`,
              display:'flex', justifyContent:'space-between', alignItems:'center',
              flexWrap:'wrap', gap:8,
            }}>
              <div style={{ fontSize:'12px', color:textFaint }}>{t.footer.copy}</div>
              <div style={{ fontSize:'12px', color:textFaint }}>{t.footer.madeWith}</div>
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}
