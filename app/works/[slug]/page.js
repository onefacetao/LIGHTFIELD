import LightboxGallery from '../../../components/LightboxGallery'
import { projects } from '../../../data/projects'
function Nav(){return <nav className="nav"><div className="shell nav-inner"><a className="brand wordmark-only" href="/"><span className="brand-word">LIGHTFIELD</span><span className="brand-cn">光域</span></a><div className="links"><a href="/works">Works</a><a href="/about">About</a><a href="/#contact">Contact</a></div></div></nav>}
function Footer(){return <footer className="footer"><div className="shell">© LIGHTFIELD｜看见未被看见　　Email: oneface@foxmail.com</div></footer>}


export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export default function WorkDetail({params}){
 const p=projects.find(item=>item.slug===params.slug)
 if(!p)return <main style={{padding:80}}>Not Found</main>
 return <><Nav/><main><section className="case-detail-hero"><div className="shell"><div className="eyebrow">{p.category}</div><h1>{p.title}</h1><p className="case-statement">{p.statement}</p><p className="lead">{p.line}。{p.intro}</p><div className="case-meta"><div><strong>发现 Discover</strong><p>{p.discover}</p></div><div><strong>连接 Connect</strong><p>{p.connect}</p></div><div><strong>显现 Reveal</strong><p>{p.reveal}</p></div></div></div></section>
 <section className="gallery"><LightboxGallery images={p.images} title={p.title}/></section>
 <section className="lightfield-view"><div className="shell view-box"><div><h3>{p.hook}</h3><p>{p.line}</p></div><div><h3>Discover · Connect · Reveal</h3><p>{p.discover} {p.connect}</p></div><div><h3>Value becomes visible</h3><p>{p.reveal}</p></div></div></section>
 </main><Footer/></>
}
