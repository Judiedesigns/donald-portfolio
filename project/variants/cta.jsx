// CTA / Close — light background (tonal flip from dark)

function CtaV1() {
  // Huge centered statement, light bg
  return (
    <SkFrame pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#f3ede3'}}>
      <div style={{padding:'14px 18px', fontFamily:SK.mono, fontSize:11, color:'#666'}}>— NEXT</div>
      <div style={{padding:'50px 40px', height:'calc(100% - 42px)', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <SkH1 size={56} style={{lineHeight:0.95}}>
          Let's build<br/>something worth<br/>showing.
        </SkH1>
        <div>
          <div style={{fontFamily:SK.body, fontSize:15, color:'#444', maxWidth:420, lineHeight:1.4, marginBottom:22}}>
            Whether you're launching something new or finally fixing something that never worked — we're ready.
          </div>
          <div style={{display:'flex', gap:10}}>
            <SkBtn primary>Book a call →</SkBtn>
            <SkBtn>hello@brimstudios.com</SkBtn>
          </div>
        </div>
      </div>
      <SkAnnot style={{top:80, right:-140, color:SK.blue}} rotate={3}>
        tonal flip: dark → light.<br/>feels like arrival.
      </SkAnnot>
    </SkFrame>
  );
}

function CtaV2() {
  // Split: big type left, incidental photo right
  return (
    <SkFrame pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#faf6ee'}}>
      <div style={{display:'grid', gridTemplateColumns:'1.3fr 1fr', height:'100%'}}>
        <div style={{padding:'40px 30px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <div style={{fontFamily:SK.mono, fontSize:11, color:'#666'}}>— LET'S TALK</div>
          <SkH1 size={46} style={{lineHeight:0.95}}>Let's build<br/>something<br/>worth showing.</SkH1>
          <div>
            <SkBtn primary>Book a call →</SkBtn>
            <div style={{fontFamily:SK.body, fontSize:13, color:'#666', marginTop:10}}>or hello@brimstudios.com</div>
          </div>
        </div>
        <div style={{padding:'30px 20px', display:'flex', alignItems:'center'}}>
          <SkRect label="founder (warmer)" style={{height:320, width:'100%', minHeight:0}}/>
        </div>
      </div>
      <SkAnnot style={{bottom:10, right:-140, color:SK.yellow}} rotate={-3}>
        face before decision —<br/>humanizes the click
      </SkAnnot>
    </SkFrame>
  );
}

function CtaV3() {
  // Domain as the statement — minimal, restrained
  return (
    <SkFrame pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#f8f3ea'}}>
      <div style={{padding:'40px', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <div style={{fontFamily:SK.mono, fontSize:11, color:'#666'}}>08 — CLOSE</div>
        <div style={{textAlign:'center'}}>
          <SkH1 size={72} style={{letterSpacing:-2}}>tothebrim.studio</SkH1>
          <div style={{marginTop:10, display:'flex', justifyContent:'center'}}>
            <SkUnderline width={260} color={SK.blue}/>
          </div>
          <div style={{fontFamily:SK.body, fontSize:15, color:'#444', marginTop:24, maxWidth:400, marginLeft:'auto', marginRight:'auto'}}>
            Two clean paths. No forms.
          </div>
          <div style={{marginTop:20, display:'flex', gap:10, justifyContent:'center'}}>
            <SkBtn primary>Book a call</SkBtn>
            <SkBtn>hello@brimstudios.com</SkBtn>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', fontFamily:SK.mono, fontSize:10, color:'#888'}}>
          <span>BRIM STUDIOS © 2026</span>
          <span>INSTAGRAM / TWITTER</span>
        </div>
      </div>
      <SkAnnot style={{top:80, right:-140, color:SK.blue}} rotate={3}>
        domain = the payoff.<br/>ends where it began.
      </SkAnnot>
    </SkFrame>
  );
}

window.CtaVariants = { CtaV1, CtaV2, CtaV3 };
