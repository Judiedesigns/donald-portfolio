// HERO variants — 4 distinct layouts for Section 01
// Brief: "Websites built to capacity." / Immediate authority / video behind

const HERO_W = 640;
const HERO_H = 460;

// V1 — Classic centered hero with video bg
function HeroV1() {
  return (
    <SkFrame dark pad={0} style={{width:HERO_W, height:HERO_H, overflow:'hidden', position:'relative'}}>
      <SkNav dark />
      <div style={{position:'relative', padding:'50px 40px 40px'}}>
        <SkRect dark label="amb. video reel (detail loop)" style={{position:'absolute', inset:'10px 20px', opacity:0.5, minHeight:0}}/>
        <div style={{position:'relative'}}>
          <SkH1 dark size={54}>Websites built<br/>to capacity.</SkH1>
          <div style={{marginTop:20, color:'#bbb', fontFamily:SK.body, fontSize:15, maxWidth:380, lineHeight:1.3}}>
            Bespoke design & expert Framer dev<br/>for brands that compete on quality.
          </div>
          <div style={{marginTop:28, display:'flex', gap:10}}>
            <SkBtn primary>Book a call →</SkBtn>
            <SkBtn dark>hello@brimstudios.com</SkBtn>
          </div>
        </div>
      </div>
      <SkAnnot style={{bottom:14, right:14, color:SK.yellow}} rotate={2}>
        video @ ~20% opacity behind type
      </SkAnnot>
    </SkFrame>
  );
}

// V2 — Split: copy left, work sample right
function HeroV2() {
  return (
    <SkFrame dark pad={0} style={{width:HERO_W, height:HERO_H, overflow:'hidden', position:'relative'}}>
      <SkNav dark />
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', height:HERO_H-42}}>
        <div style={{padding:'40px 30px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <div>
            <div style={{fontFamily:SK.mono, fontSize:11, color:'#888', marginBottom:14}}>BRIM STUDIOS — EST. 2026</div>
            <SkH1 dark size={44}>Websites<br/>built to<br/>capacity.</SkH1>
          </div>
          <div>
            <div style={{color:'#aaa', fontSize:14, fontFamily:SK.body, marginBottom:16, lineHeight:1.3}}>
              Bespoke design & expert<br/>Framer development.
            </div>
            <SkBtn primary>Book a call</SkBtn>
          </div>
        </div>
        <div style={{padding:'20px', background:'#0a0a0a'}}>
          <SkRect dark label="featured work loop" style={{height:'100%', minHeight:0}}/>
        </div>
      </div>
      <SkAnnot style={{top:60, right:-140, color:SK.blue}} rotate={4}>
        work visible on<br/>first frame →
      </SkAnnot>
    </SkFrame>
  );
}

// V3 — Huge oversized wordmark / domain as hero
function HeroV3() {
  return (
    <SkFrame dark pad={0} style={{width:HERO_W, height:HERO_H, overflow:'hidden', position:'relative'}}>
      <SkNav dark />
      <div style={{padding:'60px 30px 30px', height:HERO_H-42, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <div>
          <SkH1 dark size={62} style={{lineHeight:0.92}}>Websites built<br/>to capacity.</SkH1>
          <div style={{marginTop:14}}>
            <SkUnderline width={220} color={SK.blue}/>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
          <div style={{color:'#bbb', fontSize:14, fontFamily:SK.body, maxWidth:280, lineHeight:1.3}}>
            Bespoke design & expert Framer<br/>development, under one roof.
          </div>
          <div style={{display:'flex', gap:8}}>
            <SkBtn dark size="sm">Work</SkBtn>
            <SkBtn primary size="sm">Book a call</SkBtn>
          </div>
        </div>
      </div>
      <SkAnnot style={{top:60, right:-160, color:SK.blue}} rotate={3}>
        headline + subtitle<br/>own the viewport —<br/>no visual, pure statement
      </SkAnnot>
    </SkFrame>
  );
}

// V4 — One-viewport, work scrolls THROUGH hero (horizontal marquee)
function HeroV4() {
  return (
    <SkFrame dark pad={0} style={{width:HERO_W, height:HERO_H, overflow:'hidden', position:'relative'}}>
      <SkNav dark />
      <div style={{padding:'34px 30px 0', position:'relative'}}>
        <SkH1 dark size={42}>Websites built to capacity.</SkH1>
        <div style={{color:'#aaa', fontSize:13, fontFamily:SK.body, marginTop:10, maxWidth:360, lineHeight:1.3}}>
          Bespoke design + expert Framer development.
        </div>
      </div>
      {/* horizontal scrolling work strip */}
      <div style={{position:'absolute', bottom:56, left:0, right:0, display:'flex', gap:14, padding:'0 30px'}}>
        <SkRect dark label="Visionairy" style={{width:200, height:130, flexShrink:0}}/>
        <SkRect dark label="CFMS" style={{width:200, height:130, flexShrink:0}}/>
        <SkRect dark label="Confidential" style={{width:200, height:130, flexShrink:0}}/>
        <SkRect dark label="→" style={{width:60, height:130, flexShrink:0}}/>
      </div>
      <div style={{position:'absolute', bottom:14, left:30, right:30, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontFamily:SK.mono, fontSize:11, color:'#888'}}>← drag / scroll</div>
        <SkBtn primary size="sm">Book a call</SkBtn>
      </div>
      <SkAnnot style={{top:30, right:-140, color:SK.yellow}} rotate={-3}>
        marquee: work auto-drifts,<br/>drag to browse
      </SkAnnot>
    </SkFrame>
  );
}

// V5 — Domain wordmark + video strip below (answers "how would video look here?")
function HeroV5() {
  return (
    <SkFrame dark pad={0} style={{width:HERO_W, height:HERO_H, overflow:'hidden', position:'relative'}}>
      <SkNav dark />
      <div style={{padding:'34px 30px 14px'}}>
        <SkH1 dark size={72} style={{lineHeight:0.88}}>tothebrim<br/>.studio</SkH1>
        <div style={{marginTop:10}}>
          <SkUnderline width={180} color={SK.blue}/>
        </div>
      </div>
      <div style={{padding:'0 30px'}}>
        <SkRect dark label="detail reel — plays silently, loops" style={{height:170}}/>
      </div>
      <div style={{padding:'12px 30px 0', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{color:'#bbb', fontSize:13, fontFamily:SK.body, maxWidth:300, lineHeight:1.3}}>
          Websites built to capacity — design + Framer, under one roof.
        </div>
        <div style={{display:'flex', gap:8}}>
          <SkBtn dark size="sm">Work</SkBtn>
          <SkBtn primary size="sm">Book a call</SkBtn>
        </div>
      </div>
      <SkAnnot style={{top:40, right:-150, color:SK.blue}} rotate={3}>
        wordmark owns top third.<br/>video sits <i>under</i> it —<br/>type leads, motion proves.
      </SkAnnot>
      <SkAnnot style={{bottom:-4, right:-140, color:SK.yellow}} rotate={-2}>
        video is contained (not<br/>full-bleed) so type stays<br/>the hero, not the reel.
      </SkAnnot>
    </SkFrame>
  );
}

window.HeroVariants = { HeroV1, HeroV2, HeroV3, HeroV4, HeroV5 };
