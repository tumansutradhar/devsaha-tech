import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'DevSaha Tech — Full Stack Web Development & Backend Engineering'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 70px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top: Logo text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              background: '#7C3AED',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 900,
              color: '#000',
            }}
          >
            D
          </div>
          <span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 700, letterSpacing: '-0.5px' }}>
            DevSaha Tech
          </span>
        </div>

        {/* Middle: Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1
            style={{
              color: '#ffffff',
              fontSize: '64px',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-2px',
              margin: 0,
            }}
          >
            Full Stack Web
            <br />
            Development &
            <br />
            <span style={{ color: '#7C3AED' }}>Backend Engineering</span>
          </h1>
        </div>

        {/* Bottom: Meta info */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '20px',
          }}
        >
          <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                Based In
              </span>
              <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>
                West Bengal, India
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                Focus
              </span>
              <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>
                Web Apps · APIs · Databases
              </span>
            </div>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
            devsaha.tech
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
