import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Healthy&Fit, AI-powered calorie tracker';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadNunito() {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Nunito:wght@900',
      { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1' } }
    ).then(r => r.text());
    const url = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then(r => r.arrayBuffer());
  } catch {
    return null;
  }
}

async function loadLogo() {
  try {
    const data = await fetch(new URL('../../public/logo-white.png', import.meta.url)).then(r => r.arrayBuffer());
    const bytes = new Uint8Array(data);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return `data:image/png;base64,${btoa(binary)}`;
  } catch {
    return null;
  }
}

const star = (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.28 5.23 15.72l.91-5.33L2.27 6.62l5.34-.78L10 1z" fill="#F59E0B" />
  </svg>
);

export default async function OGImage() {
  const [fontData, logoSrc] = await Promise.all([loadNunito(), loadLogo()]);

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
          fontFamily: fontData ? 'Nunito' : 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#F97316',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {logoSrc ? (
              <img src={logoSrc} width="28" height="28" />
            ) : (
              <span style={{ fontSize: '24px', fontWeight: 900 }}>H</span>
            )}
          </div>
          <span style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Healthy&Fit
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
          <span style={{ fontSize: '64px', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em' }}>
            Track your calories
          </span>
          <span style={{ fontSize: '64px', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em' }}>
            with just a photo.
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '24px', color: '#9CA3AF', lineHeight: 1.5 }}>
            AI-powered calorie tracker. Snap a photo, scan a barcode,
          </span>
          <span style={{ fontSize: '24px', color: '#9CA3AF', lineHeight: 1.5 }}>
            or read a label. Instant macros and Health Score.
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '40px' }}>
          {star}{star}{star}{star}{star}
          <span style={{ fontSize: '18px', color: '#9CA3AF', marginLeft: '8px' }}>
            4.8 rating · 10,000+ users
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? { fonts: [{ name: 'Nunito', data: fontData, weight: 900 as const, style: 'normal' as const }] }
        : {}),
    },
  );
}
