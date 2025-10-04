'use client'
import { useEffect, useRef, useState } from 'react'   // ← add useEffect/useRef
import styles from '../f168.module.css'

type QA = { q: string; a: string }

const faqs: QA[] = [
  { q: 'How can I get the promo code?', a: 'You can get at the promo code section from above...' },
  { q: 'How do I claim a promo code?', a: 'You can get available promo codes at the top, Add the code into promo Code box and solve the captcha and claim...' },
  { q: 'How many times I can claim a promo code?', a: 'For the most of the promotions, you can only claim one time…' },
  { q: 'I am new user. Can I claim the promo?', a: 'Welcome.. Sure, you can claim the promo and enjoy the extra point bonus…' },
  { q: 'Is the promotion have expire?', a: 'Yes.. Promotion have expire time. If exceed this time, you cannot get it anymore. Claim fast and Enjoy!!…' },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // ↓↓↓ NEW: ref + intersection observer for staggered reveal
  const wrapRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const nodes = wrapRef.current?.querySelectorAll<HTMLElement>('[data-faq-item]')
    if (!nodes || nodes.length === 0) return

    nodes.forEach((el, i) => el.style.setProperty('--i', String(i)))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.faqVisible)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    nodes.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  // ↑↑↑ NEW

  return (
    <section className={styles.fqa}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.gradientFont}>Frequently Asked Questions</h2>
      </div>

      {/* NEW: attach ref here */}
      <div className={styles.faqWrap} ref={(el) => { wrapRef.current = el }}>
        {faqs.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
              data-faq-item
              style={{ ['--i' as any]: i }}
            >
              <button
                className={`${styles.faqButton} ${!isOpen ? styles.collapsed : ''}`}
                aria-expanded={isOpen}
                aria-controls={`faq-body-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {item.q}
              </button>
              <div id={`faq-body-${i}`} className={styles.faqBody}>
                {item.a}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
