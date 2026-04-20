// Sketch primitives — hand-drawn low-fi wireframe feel.
// Black + white + one punctuation blue accent (Brim blue).

const SK = {
  ink: '#1a1a1a',
  inkSoft: '#444',
  inkGhost: '#999',
  paper: '#fafaf7',
  paperDark: '#111214',
  blue: '#2d6bff',      // brim punctuation blue
  yellow: '#f5d94e',
  hand: '"Caveat", "Kalam", "Gloria Hallelujah", cursive',
  handTight: '"Kalam", "Caveat", cursive',
  body: '"Patrick Hand", "Kalam", cursive',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

// Jittery stroke helper — adds slight rough edge via filter
const scribbleFilter = `url(#sk-rough)`;

// Shared SVG defs — inject once
function SketchDefs() {
  return (
    <svg width="0" height="0" style={{position:'absolute'}}>
      <defs>
        <filter id="sk-rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="3"/>
          <feDisplacementMap in="SourceGraphic" scale="1.2"/>
        </filter>
        <filter id="sk-rougher">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="7"/>
          <feDisplacementMap in="SourceGraphic" scale="2.5"/>
        </filter>
      </defs>
    </svg>
  );
}

// A frame with rough sketchy border
function SkFrame({ children, dark = false, style = {}, pad = 20, flex }) {
  return (
    <div style={{
      position: 'relative',
      background: dark ? SK.paperDark : SK.paper,
      color: dark ? '#eee' : SK.ink,
      border: `1.5px solid ${dark ? '#eee' : SK.ink}`,
      borderRadius: 3,
      padding: pad,
      fontFamily: SK.body,
      filter: scribbleFilter,
      ...(flex ? {display:'flex', flexDirection:'column'} : {}),
      ...style,
    }}>
      {children}
    </div>
  );
}

// Hand-drawn rectangle as image placeholder
function SkRect({ label, dark=false, style = {}, tall=false, children }) {
  return (
    <div style={{
      position: 'relative',
      border: `1.5px solid ${dark ? '#aaa' : SK.ink}`,
      background: dark ? '#222' : 'rgba(0,0,0,0.02)',
      color: dark ? '#aaa' : SK.inkSoft,
      minHeight: tall ? 160 : 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: SK.hand,
      fontSize: 16,
      overflow: 'hidden',
      ...style,
    }}>
      {/* diagonal slashes for image marker */}
      <svg style={{position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.35}} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke={dark?'#666':SK.inkGhost} strokeWidth="1"/>
        <line x1="100%" y1="0" x2="0" y2="100%" stroke={dark?'#666':SK.inkGhost} strokeWidth="1"/>
      </svg>
      <span style={{position:'relative', background: dark?'#222':SK.paper, padding:'2px 8px'}}>
        {label}
      </span>
      {children}
    </div>
  );
}

// Hand-lettered heading
function SkH1({ children, size=48, dark=false, style={} }) {
  return (
    <div style={{
      fontFamily: SK.hand,
      fontSize: size,
      fontWeight: 700,
      lineHeight: 0.95,
      color: dark ? '#fff' : SK.ink,
      letterSpacing: -0.5,
      ...style,
    }}>{children}</div>
  );
}

// Text lines — simulate paragraphs with squiggly lines
function SkLines({ count=3, width='100%', dark=false, gap=6, lineHeight=8 }) {
  const lines = Array.from({length: count});
  return (
    <div style={{display:'flex', flexDirection:'column', gap}}>
      {lines.map((_, i) => {
        const w = i === count-1 ? '60%' : (i % 2 === 0 ? '95%' : '88%');
        return (
          <div key={i} style={{
            width: typeof width==='string' ? w : width,
            height: lineHeight,
            background: dark ? '#555' : '#c8c8c0',
            borderRadius: 2,
          }}/>
        );
      })}
    </div>
  );
}

// Pill / button
function SkBtn({ children, primary=false, dark=false, size='md', style={} }) {
  const pad = size === 'sm' ? '6px 12px' : '10px 18px';
  const fs = size === 'sm' ? 13 : 15;
  const bg = primary ? SK.blue : 'transparent';
  const fg = primary ? '#fff' : (dark ? '#fff' : SK.ink);
  const bd = primary ? SK.blue : (dark ? '#eee' : SK.ink);
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:6,
      padding: pad,
      border: `1.5px solid ${bd}`,
      background: bg,
      color: fg,
      fontFamily: SK.hand,
      fontSize: fs,
      borderRadius: 999,
      whiteSpace:'nowrap',
      ...style,
    }}>{children}</span>
  );
}

// Scribble arrow / squiggle annotations
function SkArrow({ d, stroke=SK.ink, width=200, height=80, style={}, strokeWidth=1.8 }) {
  return (
    <svg width={width} height={height} style={{overflow:'visible', filter:scribbleFilter, ...style}}>
      <path d={d} stroke={stroke} strokeWidth={strokeWidth} fill="none" strokeLinecap="round"/>
    </svg>
  );
}

// Annotation callout with leader line
function SkAnnot({ children, style={}, color=SK.blue, rotate=-3 }) {
  return (
    <div style={{
      position:'absolute',
      fontFamily: SK.hand,
      fontSize: 14,
      color,
      transform: `rotate(${rotate}deg)`,
      maxWidth: 180,
      lineHeight: 1.15,
      ...style,
    }}>{children}</div>
  );
}

// Wiggly underline
function SkUnderline({ width=100, color=SK.blue, style={} }) {
  return (
    <svg width={width} height="6" style={{display:'block', ...style}}>
      <path
        d={`M 2 3 Q ${width*0.25} 1 ${width*0.5} 3 T ${width-2} 3`}
        stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"
      />
    </svg>
  );
}

// Sticky note
function SkSticky({ children, color='#fef4a8', rotate=-2, style={} }) {
  return (
    <div style={{
      background: color,
      padding: '10px 14px',
      fontFamily: SK.hand,
      fontSize: 14,
      lineHeight: 1.3,
      color: '#3a2f0f',
      boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
      transform: `rotate(${rotate}deg)`,
      maxWidth: 220,
      ...style,
    }}>{children}</div>
  );
}

// Nav bar placeholder
function SkNav({ dark=false, style={} }) {
  return (
    <div style={{
      display:'flex', justifyContent:'space-between', alignItems:'center',
      padding: '10px 14px',
      borderBottom: `1.5px solid ${dark ? '#555' : SK.ink}`,
      fontFamily: SK.hand, fontSize: 14,
      color: dark ? '#eee' : SK.ink,
      ...style,
    }}>
      <span style={{fontWeight:700}}>Brim*</span>
      <span style={{display:'flex', gap:18, opacity:0.8}}>
        <span>Work</span><span>Studio</span><span>Contact</span>
      </span>
    </div>
  );
}

Object.assign(window, {
  SK, SketchDefs, SkFrame, SkRect, SkH1, SkLines, SkBtn, SkArrow, SkAnnot, SkUnderline, SkSticky, SkNav,
});
