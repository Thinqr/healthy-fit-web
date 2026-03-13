import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Healthy&Fit — AI-powered calorie tracker';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#111827',
          color: '#FFFFFF',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#F97316',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 900,
              color: '#FFFFFF',
            }}
          >
            H
          </div>
          <span style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Healthy&Fit
          </span>
        </div>

        <div
          style={{
            fontSize: '64px',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
          }}
        >
          Track your calories
          <br />
          with just a photo.
        </div>

        <div style={{ fontSize: '24px', color: '#9CA3AF', lineHeight: 1.5 }}>
          AI-powered calorie tracker. Snap a photo, scan a barcode,
          <br />
          or read a label. Instant macros and Health Score.
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '40px',
            fontSize: '18px',
            color: '#F97316',
          }}
        >
          <span>★★★★★</span>
          <span style={{ color: '#9CA3AF' }}>4.8 rating · 10,000+ users</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
