'use client'
import { useState } from 'react'
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
  return (
    <section className={styles.fqa}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.gradientFont}>Frequently Asked Questions</h2>
      </div>

      <div className={styles.faqWrap}>
        {faqs.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={i} className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
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
