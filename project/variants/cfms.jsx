// CrossFit Medical Society — light editorial register (contrast to Visionairy)

function CfmsV1() {
  // Full-bleed light editorial, big serif
  return (
    <SkFrame pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#f3ede3'}}>
      <div style={{padding:'14px 18px', display:'flex', justifyContent:'space-between', fontFamily:SK.mono, fontSize:11, color:'#555', borderBottom:'1px solid #c8b89a'}}>
        <span>02 / CROSSFIT MEDICAL SOCIETY</span><span>HEALTH · COMMUNITY · MULTI-PAGE</span>
      </div>
      <div style={{padding:'40px 28px 24px'}}>
        <SkH1 size={46} style={{fontFamily:'"Caveat", serif', letterSpacing:-1}}>An organization as<br/>ambitious as its mission.</SkH1>
      </div>
      <div style={{padding:'0 24px'}}>
        <SkRect label="editorial spread (light)" style={{height:200}}/>
      </div>
      <div style={{padding:'14px 28px', display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
        <div style={{fontFamily:SK.body, fontSize:13, color:'#444', maxWidth:360, lineHeight:1.3}}>
          Full editorial system serving three distinct audiences without losing clarity.
        </div>
        <SkBtn size="sm">View live →</SkBtn>
      </div>
      <SkAnnot style={{top:20, right:-160, color:SK.blue}} rotate={3}>
        hard tonal flip from<br/>Visionairy = range!
      </SkAnnot>
    </SkFrame>
  );
}

function CfmsV2() {
  // Magazine-style: image left, text column right with serif
  return (
    <SkFrame pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#faf6ee'}}>
      <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', height:'100%'}}>
        <div style={{padding:18}}>
          <SkRect label="full-bleed image" style={{height:'100%', minHeight:0}}/>
        </div>
        <div style={{padding:'40px 30px 30px 0', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <div style={{fontFamily:SK.mono, fontSize:11, color:'#666'}}>PROJECT 02</div>
          <div>
            <SkH1 size={38} style={{letterSpacing:-1, marginBottom:14}}>CrossFit<br/>Medical<br/>Society</SkH1>
            <div style={{fontFamily:SK.body, fontSize:13, color:'#555', lineHeight:1.4, marginBottom:16}}>
              Where medicine meets fitness. Three audiences, one editorial system, zero compromises on clarity.
            </div>
          </div>
          <SkBtn primary size="sm">crossfitmedicalsociety.com →</SkBtn>
        </div>
      </div>
      <SkAnnot style={{bottom:10, right:-140, color:SK.yellow}} rotate={-3}>
        feels like<br/>"turning a page"
      </SkAnnot>
    </SkFrame>
  );
}

function CfmsV3() {
  // 3-column editorial grid — shows "3 audiences"
  return (
    <SkFrame pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#f5f0e6'}}>
      <div style={{padding:'24px 28px 12px'}}>
        <div style={{fontFamily:SK.mono, fontSize:11, color:'#666', marginBottom:10}}>02 — CROSSFIT MEDICAL SOCIETY</div>
        <SkH1 size={36} style={{marginBottom:10}}>Three audiences.<br/>One editorial system.</SkH1>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, padding:'0 24px'}}>
        <div>
          <SkRect label="Athletes" style={{height:140}}/>
          <div style={{fontFamily:SK.body, fontSize:11, marginTop:6, color:'#666'}}>Performance-first audience</div>
        </div>
        <div>
          <SkRect label="Clinicians" style={{height:140}}/>
          <div style={{fontFamily:SK.body, fontSize:11, marginTop:6, color:'#666'}}>Research & practice</div>
        </div>
        <div>
          <SkRect label="Community" style={{height:140}}/>
          <div style={{fontFamily:SK.body, fontSize:11, marginTop:6, color:'#666'}}>Events & membership</div>
        </div>
      </div>
      <div style={{padding:'20px 28px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontFamily:SK.body, fontSize:12, color:'#555', maxWidth:380, lineHeight:1.3}}>
          A site as ambitious as the mission. Editorial clarity without the cost of audience specificity.
        </div>
        <SkBtn size="sm">View live →</SkBtn>
      </div>
      <SkAnnot style={{top:80, right:-140, color:SK.blue}} rotate={3}>
        structure mirrors the<br/>project's IA
      </SkAnnot>
    </SkFrame>
  );
}

function CfmsV4() {
  // Horizontal scroll frames — device-like progression
  return (
    <SkFrame pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#f3ede3'}}>
      <div style={{padding:'22px 28px 16px', display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
        <div>
          <div style={{fontFamily:SK.mono, fontSize:11, color:'#666'}}>02 — CROSSFIT MEDICAL SOCIETY</div>
          <SkH1 size={30} style={{marginTop:6}}>Editorial at scale.</SkH1>
        </div>
        <SkBtn size="sm">Live →</SkBtn>
      </div>
      <div style={{display:'flex', gap:10, padding:'10px 28px', overflow:'hidden'}}>
        <SkRect label="home" style={{width:170, height:240, flexShrink:0}}/>
        <SkRect label="article" style={{width:170, height:240, flexShrink:0}}/>
        <SkRect label="membership" style={{width:170, height:240, flexShrink:0}}/>
        <SkRect label="event" style={{width:170, height:240, flexShrink:0}}/>
      </div>
      <div style={{padding:'14px 28px', fontFamily:SK.body, fontSize:12, color:'#555'}}>
        Multi-page system. Horizontal scroll reveals the breadth.
      </div>
      <SkAnnot style={{top:50, right:-140, color:SK.yellow}} rotate={-2}>
        horizontal scroll —<br/>shows it's multi-page
      </SkAnnot>
    </SkFrame>
  );
}

window.CfmsVariants = { CfmsV1, CfmsV2, CfmsV3, CfmsV4 };
