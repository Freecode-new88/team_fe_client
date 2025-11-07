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
      "4️⃣ บอทขอสงวนสิทธิ์ในการเปลี่ยนแปลงโดยไม่ต้องแจ้งล่วงหน้า",
      "โปรดตรวจสอบรายละเอียดก่อนใช้งาน ✅",
    ],
  },
  {
    q: "จะรับโค้ดโปรโมชันได้อย่างไร?",
    a: "เลื่อนขึ้นไปที่ส่วน “กล่องโค้ด” แล้วเลือกโค้ดที่ยังว่างเพื่อคัดลอกใช้งาน",
  },
  {
    q: "วิธีเคลมโค้ดทำอย่างไร?",
    a: "นำโค้ดวางในช่องใส่โค้ด กด “ตรวจสอบเลย” และยืนยันแคปชา จากนั้นกดรับสิทธิ์",
  },
  {
    q: "เคลมโค้ดได้กี่ครั้ง?",
    a: "ส่วนใหญ่โปรโมชันอนุญาต 1 ครั้งต่อบัญชี โปรดอ่านเงื่อนไขในแต่ละโปร",
  },
  {
    q: "เป็นผู้ใช้ใหม่ เคลมได้ไหม?",
    a: "ได้แน่นอน ผู้ใช้ใหม่สามารถเคลมโปรและรับโบนัสแต้มพิเศษได้ตามเงื่อนไข",
  },
  {
    q: "โปรโมชันมีวันหมดอายุไหม?",
    a: "มี โปรจะหมดอายุตามเวลาที่กำหนด หากเกินเวลาจะไม่สามารถรับสิทธิ์ได้ โปรดเคลมให้ทันเวลา",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // ✅ Lazy reveal animation (lightweight, non-blocking)
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

  // ✅ Structured data for Google (defer with requestIdleCallback)
  useEffect(() => {
    requestIdleCallback?.(() => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: Array.isArray(f.a) ? f.a.join("<br>") : f.a,
          },
        })),
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => void document.head.removeChild(script);
    });
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
              <h3 className="sr-only">{item.q}</h3>

              {/* ✅ Touch-friendly button */}
              <button
                type="button"
                className={`${styles.faqButton} ${!isOpen ? styles.collapsed : ""} focus-visible:ring-2 focus-visible:ring-cyan-400`}
                aria-expanded={isOpen}
                aria-controls={`faq-body-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{
                  minHeight: 48,
                  touchAction: "manipulation",
                }}
              >
                {item.q}
              </button>

              {/* ✅ Answer area */}
              <div
                id={`faq-body-${i}`}
                className={styles.faqBody}
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                {Array.isArray(item.a) ? (
                  <ul className={styles.faqList}>
                    {item.a.map((line, idx) => (
                      <li key={idx}  className="text-black leading-relaxed" >{line}</li>
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
