function Nav(){return <nav className="nav"><div className="shell nav-inner"><a className="brand wordmark-only" href="/"><span className="brand-word">LIGHTFIELD</span><span className="brand-cn">光域</span></a><div className="links"><a href="/works">Works</a><a href="/about">About</a><a href="/#contact">Contact</a></div></div></nav>}
function Footer(){return <footer className="footer"><div className="shell">© LIGHTFIELD｜看见未被看见　　Email: oneface@foxmail.com</div></footer>}


export default function About(){
 return <><Nav/><main>
  <section className="hero" style={{minHeight:'72vh'}}><div className="shell hero-content"><div className="eyebrow">ABOUT LIGHTFIELD</div><div className="hero-brandline"><h1>LIGHTFIELD</h1></div><div className="cn-mark">光域</div><div className="hero-line">价值因被感知而存在<small>Discover · Connect · Reveal</small></div></div></section>
  <section className="approach"><div className="shell approach-grid"><div className="approach-title">Method</div><div className="method-card"><b>01</b><h3>DISCOVER</h3><span>发现</span><p>发现未被看见的价值。</p></div><div className="method-card"><b>02</b><h3>CONNECT</h3><span>连接</span><p>连接价值与语境。</p></div><div className="method-card"><b>03</b><h3>REVEAL</h3><span>显现</span><p>让价值被感知。</p></div></div></section>
  <section className="about-band"><div className="shell about-layout"><div><div className="eyebrow">Lightfield</div><h2>光域</h2></div><p>Lightfield 不是为了制造新的概念，而是通过发现、连接与显现，让那些原本存在却尚未被感知的价值真正被看见。</p><div className="signature">Lightfield</div></div></section><section className="about-band"><div className="shell about-layout"><div><div className="eyebrow">Founder</div><h2>徐涛</h2></div><p>20余年品牌与视觉设计经验，长期专注于品牌、活动、IP与传播设计。Lightfield 的工作，不是创造价值，而是发现价值、连接价值、显现价值。</p><div className="signature">Lightfield</div></div></section>
  <section className="contact" id="contact"><div className="shell contact-row"><h2>SEE THE<br/>UNSEEN.</h2><div><small>邮箱 Email</small><p>oneface@foxmail.com</p></div><div><small>微信 WeChat</small><p>lightfield.xu</p></div><div><small>所在地 Location</small><p>China</p></div><img className="qr" src="/contact/wechat-qr.png" alt="微信二维码"/></div></section>
 </main><Footer/></>
}
