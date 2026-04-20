// CONFIDENTIAL (Crypto/Web3) — typographic only, restrained, redacted feel

function ConfV1() {
  // Pure typographic. Redacted bars.
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0c0c0c'}}>
      <div style={{padding:'14px 18px', display:'flex', justifyContent:'space-between', fontFamily:SK.mono, fontSize:11, color:'#666', borderBottom:'1px solid #222'}}>
        <span>03 / ████████████</span><span>CRYPTO · WEB3 · EVENT PLATFORM</span>
      </div>
      <div style={{padding:'60px 40px', display:'flex', flexDirection:'column', justifyContent:'center', height:'calc(100% - 42px)'}}>
        <SkH1 dark size={56} style={{marginBottom:20}}>Confidential.</SkH1>
        <div style={{display:'flex', gap:6, marginBottom:22}}>
          <div style={{height:14, width:180, background:'#333'}}/>
          <div style={{height:14, width:90, background:'#333'}}/>
          <div style={{height:14, width:140, background:'#333'}}/>
        </div>
        <div style={{color:'#aaa', fontFamily:SK.body, fontSize:14, maxWidth:440, lineHeight:1.4, marginBottom:22}}>
          Official web experience for the largest cryptocurrency conference in Asia. Details available on request.
        </div>
        <SkBtn dark size="sm">Available on request</SkBtn>
      </div>
      <SkAnnot style={{top:80, right:-140, color:SK.blue}} rotate={3}>
        hover → redaction<br/>de-blurs slightly
      </SkAnnot>
    </SkFrame>
  );
}

function ConfV2() {
  // Big number + NDA stamp feel
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0a0a0a'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', height:'100%'}}>
        <div style={{padding:'40px 30px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRight:'1px solid #222'}}>
          <div style={{fontFamily:SK.mono, fontSize:11, color:'#666'}}>PROJECT 03</div>
          <SkH1 dark size={180} style={{lineHeight:0.85, color:'#1a1a1a'}}>03</SkH1>
          <div style={{fontFamily:SK.mono, fontSize:11, color:'#666'}}>UNDER NDA</div>
        </div>
        <div style={{padding:'40px 30px', display:'flex', flexDirection:'column', justifyContent:'center', gap:14}}>
          <div style={{fontFamily:SK.mono, fontSize:11, color:'#888', letterSpacing:1}}>CLIENT: ███████████</div>
          <div style={{fontFamily:SK.mono, fontSize:11, color:'#888', letterSpacing:1}}>SECTOR: CRYPTO · WEB3</div>
          <div style={{fontFamily:SK.mono, fontSize:11, color:'#888', letterSpacing:1}}>SCOPE: EVENT PLATFORM</div>
          <div style={{height:1, background:'#333', margin:'8px 0'}}/>
          <div style={{color:'#bbb', fontFamily:SK.body, fontSize:13, lineHeight:1.4}}>
            Official site for the largest cryptocurrency conference in Asia.
          </div>
          <div style={{marginTop:12}}>
            <SkBtn dark size="sm">Request details →</SkBtn>
          </div>
        </div>
      </div>
      <SkAnnot style={{bottom:10, right:-140, color:SK.yellow}} rotate={-3}>
        "dossier" feel —<br/>restraint = significance
      </SkAnnot>
    </SkFrame>
  );
}

function ConfV3() {
  // Blurred preview — actual work behind heavy blur
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0c0c0c'}}>
      <div style={{padding:'14px 18px', fontFamily:SK.mono, fontSize:11, color:'#666'}}>03 — CONFIDENTIAL</div>
      <div style={{position:'relative', height:300, margin:'0 24px'}}>
        <div style={{position:'absolute', inset:0, background:'linear-gradient(135deg, #1a2a4a, #2d4078 40%, #0a1533)', filter:'blur(16px)', opacity:0.6}}/>
        <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
          <SkH1 dark size={48} style={{letterSpacing:2}}>[REDACTED]</SkH1>
        </div>
        <div style={{position:'absolute', top:12, left:12, fontFamily:SK.mono, fontSize:10, color:'#fff', opacity:0.8, letterSpacing:1}}>
          ████ ██████ · 2025
        </div>
      </div>
      <div style={{padding:'20px 24px', display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
        <div style={{color:'#aaa', fontFamily:SK.body, fontSize:13, maxWidth:360, lineHeight:1.3}}>
          Largest crypto conference in Asia. Details on request.
        </div>
        <SkBtn dark size="sm">Request →</SkBtn>
      </div>
      <SkAnnot style={{top:90, right:-140, color:SK.blue}} rotate={3}>
        image IS there,<br/>just blurred. hover clarifies slightly.
      </SkAnnot>
    </SkFrame>
  );
}

function ConfV4() {
  // Minimalist text-only case file
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0c0c0c'}}>
      <div style={{padding:'40px 40px', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <div style={{fontFamily:SK.mono, fontSize:11, color:'#666', letterSpacing:2}}>03 / 03 — ON FILE</div>
        <div>
          <div style={{fontFamily:SK.body, fontSize:13, color:'#888', marginBottom:8, letterSpacing:1}}>A PROJECT</div>
          <SkH1 dark size={64} style={{marginBottom:16}}>we can't show<br/><span style={{color:'#555'}}>(yet).</span></SkH1>
          <div style={{color:'#aaa', fontFamily:SK.body, fontSize:15, maxWidth:460, lineHeight:1.4}}>
            The official web experience for the largest cryptocurrency conference in Asia.
            The NDA is strict. The work is better than you'd guess.
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{fontFamily:SK.mono, fontSize:11, color:'#666'}}>CRYPTO · WEB3 · EVENT</div>
          <SkBtn dark size="sm">Available on request →</SkBtn>
        </div>
      </div>
      <SkAnnot style={{top:120, right:-150, color:SK.yellow}} rotate={-3}>
        tone: dry + confident.<br/>no visual trickery.
      </SkAnnot>
    </SkFrame>
  );
}

window.ConfVariants = { ConfV1, ConfV2, ConfV3, ConfV4 };
