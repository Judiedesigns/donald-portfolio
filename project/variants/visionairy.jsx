// VISIONAIRY project section — 4 layouts
// Intent: bleeds into section. Dark register. Scroll/parallax on visual.

const PROJ_W = 640;
const PROJ_H = 460;

function VisV1() {
  // Full-bleed hero with caption overlay
  return (
    <SkFrame dark pad={0} style={{width:PROJ_W, height:PROJ_H, overflow:'hidden', position:'relative'}}>
      <div style={{padding:'14px 18px', display:'flex', justifyContent:'space-between', fontFamily:SK.mono, fontSize:11, color:'#888', borderBottom:'1px solid #333'}}>
        <span>01 / VISIONAIRY</span><span>AI · EYE CARE · SAAS</span>
      </div>
      <div style={{position:'relative', flex:1}}>
        <SkRect dark label="scroll-recording loop of Visionairy" style={{height:320, borderRadius:0, borderLeft:'none', borderRight:'none'}}/>
        <div style={{padding:'20px 24px', display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:20}}>
          <div style={{maxWidth:380}}>
            <SkH1 dark size={28} style={{marginBottom:10}}>A clinical product that feels inevitable.</SkH1>
            <div style={{color:'#aaa', fontSize:13, fontFamily:SK.body, lineHeight:1.3}}>
              Scroll-driven experience making complex AI functionality approachable.
            </div>
          </div>
          <SkBtn dark size="sm">View live →</SkBtn>
        </div>
      </div>
      <SkAnnot style={{top:100, right:-150, color:SK.blue}} rotate={3}>
        video plays,<br/>parallax drift as you scroll
      </SkAnnot>
    </SkFrame>
  );
}

function VisV2() {
  // Copy left, tall browser mock right
  return (
    <SkFrame dark pad={0} style={{width:PROJ_W, height:PROJ_H, overflow:'hidden', position:'relative'}}>
      <div style={{display:'grid', gridTemplateColumns:'5fr 7fr', height:'100%'}}>
        <div style={{padding:'40px 28px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <div style={{fontFamily:SK.mono, fontSize:11, color:'#888'}}>PROJECT 01</div>
          <div>
            <SkH1 dark size={38} style={{marginBottom:14}}>Visionairy</SkH1>
            <div style={{color:'#888', fontSize:12, fontFamily:SK.mono, marginBottom:14}}>AI-POWERED EYE CARE</div>
            <div style={{color:'#bbb', fontSize:13, fontFamily:SK.body, lineHeight:1.4}}>
              A clinical product that needed to feel intelligent and approachable.
              We built a scroll-driven experience that makes complex AI functionality feel inevitable.
            </div>
          </div>
          <div>
            <SkBtn primary size="sm">View live site →</SkBtn>
          </div>
        </div>
        <div style={{padding:'30px 20px 30px 0', position:'relative'}}>
          <SkRect dark label="browser frame" style={{height:'100%', minHeight:0}}/>
        </div>
      </div>
      <SkAnnot style={{bottom:10, right:-140, color:SK.yellow}} rotate={-3}>
        browser frame drifts<br/>up as user scrolls
      </SkAnnot>
    </SkFrame>
  );
}

function VisV3() {
  // Typographic takeover — huge project name, visual below
  return (
    <SkFrame dark pad={0} style={{width:PROJ_W, height:PROJ_H, overflow:'hidden', position:'relative'}}>
      <div style={{padding:'30px 24px 0'}}>
        <div style={{display:'flex', justifyContent:'space-between', fontFamily:SK.mono, fontSize:11, color:'#888', marginBottom:16}}>
          <span>01 — VISIONAIRY</span>
          <span>SAAS / 2025</span>
        </div>
        <SkH1 dark size={92} style={{lineHeight:0.86, letterSpacing:-2}}>Visionairy</SkH1>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginTop:14}}>
          <div style={{color:'#aaa', fontSize:13, fontFamily:SK.body, maxWidth:300, lineHeight:1.3}}>
            Scroll-driven experience making complex AI functionality feel inevitable.
          </div>
          <SkBtn dark size="sm">→ getvisionairy.com</SkBtn>
        </div>
      </div>
      <div style={{padding:'20px 24px'}}>
        <SkRect dark label="wide screen recording" style={{height:140}}/>
      </div>
      <SkAnnot style={{top:30, right:-140, color:SK.blue}} rotate={4}>
        name dominates.<br/>visual supports.
      </SkAnnot>
    </SkFrame>
  );
}

function VisV4() {
  // Multi-frame: device + detail crops (grid)
  return (
    <SkFrame dark pad={0} style={{width:PROJ_W, height:PROJ_H, overflow:'hidden', position:'relative'}}>
      <div style={{padding:'20px 24px 14px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <SkH1 dark size={30}>Visionairy</SkH1>
          <div style={{color:'#888', fontFamily:SK.mono, fontSize:11, marginTop:4}}>01 · AI · SAAS</div>
        </div>
        <SkBtn dark size="sm">View live →</SkBtn>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:8, padding:'0 24px', height:260}}>
        <SkRect dark label="hero frame" style={{height:'100%', minHeight:0}}/>
        <div style={{display:'grid', gridTemplateRows:'1fr 1fr', gap:8}}>
          <SkRect dark label="detail" style={{minHeight:0}}/>
          <SkRect dark label="detail" style={{minHeight:0}}/>
        </div>
        <div style={{display:'grid', gridTemplateRows:'1fr 1fr', gap:8}}>
          <SkRect dark label="detail" style={{minHeight:0}}/>
          <SkRect dark label="mobile" style={{minHeight:0}}/>
        </div>
      </div>
      <div style={{padding:'14px 24px', color:'#aaa', fontSize:13, fontFamily:SK.body, lineHeight:1.3}}>
        Scroll-driven AI product. Intelligent, approachable, inevitable.
      </div>
      <SkAnnot style={{top:100, right:-150, color:SK.yellow}} rotate={-3}>
        show range of<br/>craft in one section
      </SkAnnot>
    </SkFrame>
  );
}

window.VisionairyVariants = { VisV1, VisV2, VisV3, VisV4 };
