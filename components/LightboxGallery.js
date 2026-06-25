'use client'

import { useEffect, useState } from 'react'

export default function LightboxGallery({ images, title }) {
  const [active, setActive] = useState(null)

  const close = () => setActive(null)
  const prev = () => setActive((active + images.length - 1) % images.length)
  const next = () => setActive((active + 1) % images.length)

  useEffect(() => {
    if (active === null) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [active, images.length])

  return (
    <>
      <div className="shell gallery-grid">
        {images.map((src, i) => (
          <button
            className="gallery-item"
            key={`${src}-${i}`}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`放大查看 ${title} 图片 ${i + 1}`}
          >
            <img src={src} alt={`${title} ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} 图片预览`}>
          <button className="lightbox-bg" type="button" onClick={close} aria-label="关闭预览" />
          <button className="lightbox-close" type="button" onClick={close} aria-label="关闭">×</button>

          {images.length > 1 && (
            <button className="lightbox-arrow lightbox-prev" type="button" onClick={prev} aria-label="上一张">‹</button>
          )}

          <figure className="lightbox-stage">
            <img src={images[active]} alt={`${title} ${active + 1}`} />
            <figcaption>{active + 1} / {images.length}</figcaption>
          </figure>

          {images.length > 1 && (
            <button className="lightbox-arrow lightbox-next" type="button" onClick={next} aria-label="下一张">›</button>
          )}
        </div>
      )}
    </>
  )
}
