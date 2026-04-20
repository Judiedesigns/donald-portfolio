// STUDIO section — founder + pull quote
// Services also here — 3 numbered blocks

function StudioV1() {
  // Photo left, pull quote right
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0c0c0c'}}>
      <div style={{padding:'14px 18px', fontFamily:SK.mono, fontSize:11, color:'#666'}}>— THE STUDIO</div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:24, padding:'20px 28px', height:'calc(100% - 42px)'}}>
        <div>
          <SkRect dark label="founder photo" style={{height:320, minHeight:0}}/>
          <div style={{fontFamily:SK.mono, fontSize:10, color:'#666', marginTop:10}}>DONALD — STUDIO DIRECTOR</div>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <SkH1 dark size={42} style={{lineHeight:1.0}}>
            "We go all<br/>the way in."
          </SkH1>
          <div style={{color:'#aaa', fontFamily:SK.body, fontSize:13, lineHeight:1.4}}>
            Brim Studios is a design and Framer development studio.
            Bespoke websites for startups that use design to compete,
            and agencies that need a partner who delivers without supervision.
          </div>
        </div>
      </div>
      <SkAnnot style={{top:70, right:-140, color:SK.blue}} rotate={3}>
        pull quote = most expressive<br/>type moment outside hero
      </SkAnnot>
    </SkFrame>
  );
}

function StudioV2() {
  // Full-bleed pull quote, photo small/incidental
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0c0c0c'}}>
      <div style={{padding:'40px 40px', height:'100%', position:'relative'}}>
        <div style={{fontFamily:SK.mono, fontSize:11, color:'#666', marginBottom:20}}>THE STUDIO</div>
        <SkH1 dark size={64} style={{lineHeight:0.95}}>
          We go all<br/>the way in.<br/>
          <span style={{color:SK.blue}}>The name means<br/>what it says.</span>
        </SkH1>
        <div style={{position:'absolute', bottom:40, right:40, display:'flex', alignItems:'center', gap:14}}>
          <SkRect dark label="D." style={{width:80, height:80, minHeight:0, borderRadius:999}}/>
          <div>
            <div style={{fontFamily:SK.body, fontSize:13, color:'#bbb'}}>Donald</div>
            <div style={{fontFamily:SK.mono, fontSize:10, color:'#666'}}>STUDIO DIRECTOR</div>
          </div>
        </div>
      </div>
      <SkAnnot style={{top:100, right:-150, color:SK.yellow}} rotate={-3}>
        pure typographic<br/>manifesto. photo subordinate.
      </SkAnnot>
    </SkFrame>
  );
}

function StudioV3() {
  // Photo as background, copy overlaid
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0c0c0c'}}>
      <SkRect dark label="founder photo (large, b&w)" style={{position:'absolute', inset:0, opacity:0.45, borderRadius:0, border:'none', minHeight:0}}/>
      <div style={{position:'relative', padding:'40px', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <div style={{fontFamily:SK.mono, fontSize:11, color:'#aaa'}}>— THE STUDIO</div>
        <div>
          <SkH1 dark size={58} style={{marginBottom:18}}>We go all<br/>the way in.</SkH1>
          <div style={{color:'#ddd', fontFamily:SK.body, fontSize:14, maxWidth:440, lineHeight:1.4, textShadow:'0 1px 8px #000'}}>
            Brim Studios is a design + Framer development studio.
            We build bespoke websites for startups that compete on design
            and agencies that need a partner who delivers without supervision.
          </div>
        </div>
        <div style={{fontFamily:SK.body, fontSize:13, color:'#ccc'}}>— Donald</div>
      </div>
      <SkAnnot style={{top:60, right:-140, color:SK.blue}} rotate={3}>
        photo + type<br/>= atmospheric
      </SkAnnot>
    </SkFrame>
  );
}

function ServicesV1() {
  // Editorial numbered blocks stacked
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0c0c0c'}}>
      <div style={{padding:'14px 18px', fontFamily:SK.mono, fontSize:11, color:'#666'}}>— SERVICES</div>
      <div style={{padding:'10px 28px'}}>
        {[
          ['01', 'Website Design', 'First principles. No templates.'],
          ['02', 'Framer Development', 'If it was designed, we build it.'],
          ['03', 'Agency Partnership', 'Extension of your team.'],
        ].map(([n,t,d])=>(
          <div key={n} style={{display:'grid', gridTemplateColumns:'60px 180px 1fr', gap:16, padding:'22px 0', borderTop:'1px solid #222', alignItems:'baseline'}}>
            <div style={{fontFamily:SK.mono, fontSize:14, color:SK.blue}}>{n}</div>
            <SkH1 dark size={24}>{t}</SkH1>
            <div style={{fontFamily:SK.body, fontSize:13, color:'#aaa', lineHeight:1.4}}>{d}</div>
          </div>
        ))}
        <div style={{borderTop:'1px solid #222'}}/>
      </div>
      <SkAnnot style={{top:100, right:-140, color:SK.yellow}} rotate={-3}>
        editorial list — quiet,<br/>scannable in &lt;30s
      </SkAnnot>
    </SkFrame>
  );
}

function ServicesV2() {
  // 3-column with details
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0c0c0c'}}>
      <div style={{padding:'20px 28px 10px'}}>
        <div style={{fontFamily:SK.mono, fontSize:11, color:'#666'}}>— SERVICES</div>
        <SkH1 dark size={36} style={{marginTop:6}}>What we do.</SkH1>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:14, padding:'14px 28px'}}>
        {[
          ['01', 'Website Design', 'First principles. Systems thinking. Final pixel.'],
          ['02', 'Framer Development', 'Custom components, advanced interactions, CMS, animations.'],
          ['03', 'Agency Partner', 'Plug into your workflow. Respect your client. No hand-holding.'],
        ].map(([n,t,d])=>(
          <div key={n} style={{border:'1px solid #333', padding:'18px', minHeight:200}}>
            <div style={{fontFamily:SK.mono, fontSize:12, color:SK.blue, marginBottom:10}}>{n}</div>
            <SkH1 dark size={20} style={{marginBottom:12, lineHeight:1.1}}>{t}</SkH1>
            <div style={{fontFamily:SK.body, fontSize:12, color:'#aaa', lineHeight:1.4}}>{d}</div>
          </div>
        ))}
      </div>
      <SkAnnot style={{top:80, right:-140, color:SK.blue}} rotate={3}>
        cards — more visual,<br/>each offering = its own object
      </SkAnnot>
    </SkFrame>
  );
}

window.StudioVariants = { StudioV1, StudioV2, StudioV3, ServicesV1, ServicesV2 };
