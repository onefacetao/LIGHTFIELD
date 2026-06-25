import { projects } from '../../data/projects'
function Nav(){return <nav className="nav"><div className="shell nav-inner"><a className="brand wordmark-only" href="/"><span className="brand-word">LIGHTFIELD</span><span className="brand-cn">光域</span></a><div className="links"><a href="/works">Works</a><a href="/about">About</a><a href="/#contact">Contact</a></div></div></nav>}
function Footer(){return <footer className="footer"><div className="shell">© LIGHTFIELD｜看见未被看见　　Email: oneface@foxmail.com</div></footer>}


export default function Works(){
 const featured=projects.filter(p=>p.tier==='featured')
 const selected=projects.filter(p=>p.tier==='selected')
 const archive=projects.filter(p=>p.tier==='archive')
 return <><Nav/><main><section className="page-hero"><div className="shell"><div className="eyebrow">WORKS</div><h1>作品</h1><p>从品牌到活动，从产品到传播。每一个项目，都是一次价值显现的过程。</p></div></section>
 <section className="works-list"><div className="shell"><div className="section-head"><div className="section-title">核心案例<strong>Featured Works</strong></div></div>{featured.map(p=><div className="case-stage" key={p.slug} style={{marginBottom:18}}><a href={`/works/${p.slug}`}><img src={p.cover} alt={p.title}/></a><div className="case-copy"><div className="num">{p.order}</div><h2>{p.title}</h2><div className="hook">{p.statement || p.line}</div><p>{p.intro}</p><a className="case-link" href={`/works/${p.slug}`}>VIEW PROJECT →</a></div></div>)}</div></section>
 <section className="selected"><div className="shell"><div className="section-head"><div className="section-title">More Works<strong>更多案例</strong></div></div><div className="selected-grid">{selected.map(p=><a className="small-card" href={`/works/${p.slug}`} key={p.slug}><img src={p.cover} alt={p.title}/><div className="txt"><small>{p.order} / {p.category}</small><h3>{p.title}</h3><p>{p.line}</p></div></a>)}</div></div></section>
 <section className="archive"><div className="shell"><div className="section-head"><div className="section-title">Extended Works<strong>延展案例</strong></div></div><div className="archive-grid">{archive.map(p=><a className="archive-card" href={`/works/${p.slug}`} key={p.slug}><img src={p.cover} alt={p.title}/><div className="txt"><small>{p.order} / {p.category}</small><h3>{p.title}</h3><p>{p.line}</p></div></a>)}</div></div></section>
 </main><Footer/></>
}
