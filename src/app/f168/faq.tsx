'use client'
import { useState } from 'react'
import styles from './f168.module.css'

type QA = { q: string; a: string }

const faqs: QA[] = [
  { q: 'How can I get the promo code?', a: 'You can get at the promo code section from above...' },
  { q: 'How do I claim a promo code?', a: 'Online casinos have become a popular form of entertainment…' },
  { q: 'What is your pricing structure for home cleaning services?', a: 'Online casinos have become a popular form of entertainment…' },
  { q: 'How often should I schedule home cleaning services?', a: 'Online casinos have become a popular form of entertainment…' },
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
