import { projects } from '../data/projects'

function Nav(){
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a className="brand wordmark-only" href="/"><span className="brand-word">LIGHTFIELD</span><span className="brand-cn">光域</span></a>
        <div className="links">
          <a href="/works">Works</a>
          <a href="/about">About</a>
          
          <a href="/#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

function Footer(){
  return (
    <footer className="footer">
      <div className="shell">© LIGHTFIELD｜看见未被看见　　Email: oneface@foxmail.com</div>
    </footer>
  )
}

function ArchiveCover({ project }){
  const imgs = (project.images && project.images.length ? project.images : [project.cover]).slice(0,4)
  while (imgs.length < 4) imgs.push(project.cover)
  return (
    <div className="archive-cover-mosaic">
      {imgs.map((src,i)=><img key={`${project.slug}-${i}`} src={src} alt={`${project.title} ${i+1}`}/>) }
    </div>
  )
}

export default function Home(){
  const featured = projects.filter(p => p.tier === 'featured')
  const selected = projects.filter(p => p.tier === 'selected')
  const archive = projects.filter(p => p.tier === 'archive')
  const lead = featured[0]

  return (
    <>
      <Nav/>
      <main>
        <section className="hero">
          <div className="shell hero-content">
            <div className="hero-mark" aria-hidden="true"><span></span></div>
            <div className="hero-brandlock" aria-label="Lightfield logo">
              <div className="lf-mark" aria-hidden="true"><span></span></div>
              <div className="hero-miniword">LIGHTFIELD</div>
            </div>
            <div className="hero-brandline">
              <h1>LIGHTFIELD</h1>
            </div>
            <div className="cn-mark">光域</div>
            <div className="hero-line">
              看见未被看见
              <small>SEE THE UNSEEN</small>
              <em>价值因被感知而存在 · Value exists when it is perceived</em>
              <small>Discover · Connect · Reveal</small>
            </div>
          </div>
          <div className="scroll-mark">SCROLL</div>
        </section>

        <section className="approach">
          <div className="shell approach-grid">
            <div className="approach-title">Our Approach</div>
            <div className="method-card">
              <b>01</b><h3>DISCOVER</h3><span>发现</span>
              <p>发现未被看见的价值，找到真实且值得关注的事物。</p>
            </div>
            <div className="method-card">
              <b>02</b><h3>CONNECT</h3><span>连接</span>
              <p>建立价值与人之间的关系，让彼此产生共鸣。</p>
            </div>
            <div className="method-card">
              <b>03</b><h3>REVEAL</h3><span>显现</span>
              <p>以恰当的方式显现价值，让影响力自然发生。</p>
            </div>
          </div>
        </section>

        {lead && (
          <section className="featured">
            <div className="shell">
              <div className="section-head">
                <div className="section-title">精选项目<strong>Selected Works</strong></div>
                <a className="view-all" href="/works">VIEW ALL WORKS →</a>
              </div>

              <div className="case-stage">
                <a href={`/works/${lead.slug}`}><img src={lead.cover} alt={lead.title}/></a>
                <div className="case-copy">
                  <div className="num">{lead.order}</div>
                  <h2>{lead.title}</h2>
                  <div className="hook">{lead.line}</div>
                  <p>{lead.intro}</p>
                  <a className="case-link" href={`/works/${lead.slug}`}>VIEW PROJECT →</a>
                </div>
              </div>

              <div className="case-strip">
                {featured.slice(1).map(p => (
                  <a href={`/works/${p.slug}`} key={p.slug}>
                    <img src={p.cover} alt={p.title}/>
                    <p>{p.title}<small>{p.category}</small></p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="selected">
          <div className="shell">
            <div className="section-head">
              <div className="section-title">更多案例<strong>Selected Works</strong></div>
            </div>
            <div className="selected-grid">
              {selected.map(p => (
                <a className="small-card" href={`/works/${p.slug}`} key={p.slug}>
                  <ArchiveCover project={p}/>
                  <div className="txt">
                    <small>{p.order} / {p.category}</small>
                    <h3>{p.title}</h3>
                    <p>{p.line}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="archive">
          <div className="shell">
            <div className="section-head">
              <div className="section-title">延展案例<strong>Selected Archive</strong></div>
            </div>
            <div className="archive-grid">
              {archive.map(p => (
                <a className="archive-card" href={`/works/${p.slug}`} key={p.slug}>
                  <ArchiveCover project={p}/>
                  <div className="txt">
                    <small>{p.order} / {p.category}</small>
                    <h3>{p.title}</h3>
                    <p>{p.line}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
<section className="about-band">
          <div className="shell about-layout">
            <div><div className="eyebrow">ABOUT LIGHTFIELD</div><h2>关于光域</h2></div>
            <p>真正有价值的设计，应该帮助品牌解决问题，创造意义，连接人心。从品牌思考、活动策划、视觉系统搭建，到最终传播落地，Lightfield 让价值被看见。</p>
            <div className="signature">Lightfield</div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="shell contact-row">
            <h2>SEE THE<br/>UNSEEN.</h2>
            <div><small>邮箱 Email</small><p>oneface@foxmail.com</p></div>
            <div><small>微信 WeChat</small><p>扫码联系</p></div>
            <div><small>所在地 Location</small><p>China</p></div>
            <img className="qr" src="/contact/wechat-qr.png" alt="微信二维码"/>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
