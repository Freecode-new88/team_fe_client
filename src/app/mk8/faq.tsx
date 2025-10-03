'use client'
import { useState } from 'react'
import styles from './mk8.module.css'

type QA = { q: string; a: string }

const faqs: QA[] = [
  { q: 'What types of home cleaning services do you offer?', a: 'Online casinos have become a popular form of entertainment…' },
  { q: 'Are your cleaners trained and insured?', a: 'Online casinos have become a popular form of entertainment…' },
  { q: 'What is your pricing structure for home cleaning services?', a: 'Online casinos have become a popular form of entertainment…' },
  { q: 'How often should I schedule home cleaning services?', a: 'Online casinos have become a popular form of entertainment…' },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section className={styles.fqa}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.gradientFont}>Frequently Asked Questions</h2>
        <p>Online casinos have the advantage of being accessible from anywhere at any time…</p>
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
