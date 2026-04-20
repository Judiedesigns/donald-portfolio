// TESTIMONIALS — 3 approaches

function TestV1() {
  // Single featured big pull quote, small list below
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0c0c0c'}}>
      <div style={{padding:'14px 18px', fontFamily:SK.mono, fontSize:11, color:'#666'}}>— TESTIMONIALS</div>
      <div style={{padding:'34px 40px'}}>
        <SkH1 dark size={28} style={{lineHeight:1.2, marginBottom:20}}>
          "Donald has been an excellent Framer developer,<br/>
          consistently delivering high-quality work<br/>
          with professionalism and attention to detail."
        </SkH1>
        <div style={{fontFamily:SK.body, fontSize:13, color:'#888'}}>Hakeem Framer  ·  Studio Duo</div>
      </div>
      <div style={{padding:'0 40px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, borderTop:'1px solid #222', paddingTop:20}}>
        <div>
          <div style={{fontFamily:SK.body, fontSize:12, color:'#aaa', lineHeight:1.4, marginBottom:8}}>"...brought an idea to life with great detail and speed. Very capable with Framer."</div>
          <div style={{fontFamily:SK.mono, fontSize:10, color:'#666'}}>ZAC CARTER · BRAVEBRAND</div>
        </div>
        <div>
          <div style={{fontFamily:SK.body, fontSize:12, color:'#aaa', lineHeight:1.4, marginBottom:8}}>"Exceptional teamwork. Organized. Deadlines consistently met."</div>
          <div style={{fontFamily:SK.mono, fontSize:10, color:'#666'}}>LASE AKINLOLU · KREGENE</div>
        </div>
      </div>
      <SkAnnot style={{top:50, right:-140, color:SK.blue}} rotate={3}>
        hero quote + supporting —<br/>lets strongest one breathe
      </SkAnnot>
    </SkFrame>
  );
}

function TestV2() {
  // 3 equal columns, quiet
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0c0c0c'}}>
      <div style={{padding:'20px 28px 14px'}}>
        <div style={{fontFamily:SK.mono, fontSize:11, color:'#666'}}>— TESTIMONIALS</div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:16, padding:'0 28px', height:300}}>
        {[
          ['"Excellent Framer developer. Reliable, quick, always collaborative."', 'Hakeem Framer', 'Studio Duo'],
          ['"Brought an idea to life with great detail and speed. Client was very happy."', 'Zac Carter', 'BraveBrand'],
          ['"Exceptional teamwork. Organized. Deadlines met."', 'Lase Akinlolu', 'Kregene'],
        ].map(([q,n,s])=>(
          <div key={n} style={{border:'1px solid #222', padding:20, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <div style={{fontFamily:SK.body, fontSize:14, color:'#ddd', lineHeight:1.4}}>{q}</div>
            <div>
              <div style={{fontFamily:SK.body, fontSize:13, color:'#fff'}}>{n}</div>
              <div style={{fontFamily:SK.mono, fontSize:10, color:'#666', marginTop:2}}>{s.toUpperCase()}</div>
            </div>
          </div>
        ))}
      </div>
      <SkAnnot style={{bottom:10, right:-140, color:SK.yellow}} rotate={-2}>
        equal weight —<br/>if none are clearly stronger
      </SkAnnot>
    </SkFrame>
  );
}

function TestV3() {
  // Stacked editorial list — typographic, no cards
  return (
    <SkFrame dark pad={0} style={{width:640, height:460, overflow:'hidden', position:'relative', background:'#0c0c0c'}}>
      <div style={{padding:'22px 40px 10px', display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
        <div style={{fontFamily:SK.mono, fontSize:11, color:'#666'}}>— WHAT OTHERS SAY</div>
        <div style={{fontFamily:SK.mono, fontSize:11, color:'#666'}}>01 / 02 / 03</div>
      </div>
      <div style={{padding:'0 40px'}}>
        {[
          ['Hakeem Framer', 'STUDIO DUO', 'Reliable, quick to grasp requirements, always collaborative.'],
          ['Zac Carter', 'BRAVEBRAND', 'Very capable with Framer — and the client was very happy.'],
          ['Lase Akinlolu', 'KREGENE', 'Exceptional teamwork. Stayed organized. Hit every deadline.'],
        ].map(([n,s,q], i)=>(
          <div key={n} style={{padding:'20px 0', borderTop: i>0 ? '1px solid #222' : 'none', display:'grid', gridTemplateColumns:'1fr 2fr', gap:20, alignItems:'baseline'}}>
            <div>
              <SkH1 dark size={22}>{n}</SkH1>
              <div style={{fontFamily:SK.mono, fontSize:10, color:'#666', marginTop:4}}>{s}</div>
            </div>
            <div style={{fontFamily:SK.body, fontSize:15, color:'#ccc', lineHeight:1.4}}>"{q}"</div>
          </div>
        ))}
      </div>
      <SkAnnot style={{top:100, right:-140, color:SK.blue}} rotate={3}>
        name first, quote second.<br/>feels like an index.
      </SkAnnot>
    </SkFrame>
  );
}

window.TestVariants = { TestV1, TestV2, TestV3 };
