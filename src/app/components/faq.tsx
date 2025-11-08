'use client';
import { useEffect, useRef, useState } from "react";
import styles from "../f168.module.css";

// ✅ FAQ content
type QA = { q: string; a: string | string[] };
const faqs: QA[] = [
  {
    q: "📜 เงื่อนไขการใช้งานโปรโมชั่น",
    a: [
      "1️⃣ 1 ยูสเซอร์ รับสิทธิ์เพียงครั้งเดียว",
      "2️⃣ ต้องทำตามเงื่อนไขที่กำหนดจึงจะถอนได้",
      "3️⃣ ต้องทำเทิร์นอย่างน้อย 3 เท่า ก่อนทำการถอนเงิน",
      "4️⃣ ทีมงานขอสงวนสิทธิ์ในการเปลี่ยนแปลงโดยไม่ต้องแจ้งล่วงหน้า",
      "กรุณาอ่านรายละเอียดก่อนใช้งานทุกครั้ง ✅",
    ],
  },
  {
    q: "จะรับโค้ดโปรโมชันได้อย่างไร?",
    a: "เลื่อนขึ้นไปยังส่วน “กล่องโค้ดโปรโมชั่น” แล้วเลือกโค้ดที่ยังว่าง จากนั้นคัดลอกไปใช้งานได้ทันที",
  },
  {
    q: "วิธีเคลมโค้ดทำอย่างไร?",
    a: "ใส่โค้ดในช่องกรอกโค้ด กด “ตรวจสอบเลย” แล้วทำตามขั้นตอนยืนยันแคปชา จากนั้นกดรับสิทธิ์เพื่อรับโบนัสทันที",
  },
  {
    q: "เคลมโค้ดได้กี่ครั้ง?",
    a: "แต่ละโปรโมชั่นสามารถเคลมได้เพียง 1 ครั้งต่อบัญชีเท่านั้น เว้นแต่จะมีการระบุเงื่อนไขพิเศษเพิ่มเติม",
  },
  {
    q: "เป็นผู้ใช้ใหม่ เคลมได้ไหม?",
    a: "ได้แน่นอน! ผู้ใช้ใหม่สามารถเข้าร่วมและรับโบนัสพิเศษได้ตามเงื่อนไขที่ระบุไว้ในโปรโมชัน",
  },
  {
    q: "โปรโมชันมีวันหมดอายุไหม?",
    a: "มี โปรโมชันจะหมดอายุตามเวลาที่กำหนด หากหมดเวลาแล้วจะไม่สามารถรับสิทธิ์ได้ โปรดรีบเคลมก่อนหมดอายุ",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // ✅ Lazy animation
  useEffect(() => {
    const nodes = wrapRef.current?.querySelectorAll<HTMLElement>("[data-faq-item]");
    if (!nodes) return;

    const io = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.faqVisible);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "60px" }
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      className={`${styles.fqa} mb-[50px] md:mb-0`}
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* ✅ Heading */}
      <div className={styles.sectionHeading}>
        <h2 id="faq-heading" className={styles.gradientFont}>
          คำถามที่พบบ่อย 💬
        </h2>
        <p className="text-gray-700 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          รวมคำถามยอดนิยมจากผู้ใช้เกี่ยวกับการรับโค้ดโปรโมชั่น การเคลมโบนัส และเงื่อนไขต่าง ๆ
          เพื่อช่วยให้คุณเข้าใจและใช้งานระบบได้อย่างมั่นใจ
        </p>
      </div>

      {/* ✅ FAQ List */}
      <div ref={(el) => void (wrapRef.current = el)} className={styles.faqWrap}>
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <article
              key={i}
              className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
              data-faq-item
              itemScope
              itemType="https://schema.org/Question"
            >
              <meta itemProp="name" content={item.q} />
              <button
                type="button"
                className={`${styles.faqButton} ${!isOpen ? styles.collapsed : ""} focus-visible:ring-2 focus-visible:ring-cyan-400`}
                aria-expanded={isOpen}
                aria-controls={`faq-body-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {item.q}
              </button>

              <div
                id={`faq-body-${i}`}
                className={styles.faqBody}
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <meta itemProp="text" content={Array.isArray(item.a) ? item.a.join(" ") : item.a} />
                {Array.isArray(item.a) ? (
                  <ul className={styles.faqList}>
                    {item.a.map((line, idx) => (
                      <li key={idx} className="text-black leading-relaxed">
                        {line}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed text-black">{item.a}</p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
