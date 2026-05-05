import styles from '../f168.module.css'

type PROCESS = { step: string; title: string; text: string }

const procs: PROCESS[] = [
  { step: "01", title: "รับโค้ดจากกล่องโค้ด", text: "เลือกโค้ดที่ยังว่าง (Available) แล้วคัดลอกเพื่อใช้งาน" },
  { step: "02", title: "ใส่โค้ดและตรวจสอบสิทธิ์", text: "วางโค้ดลงในช่อง แล้วกด “ตรวจสอบเลย” และยืนยันแคปชา" },
  { step: "03", title: "กรอกชื่อบัญชีผู้ใช้", text: "ผ่านแคปชาแล้ว ใส่บัญชีผู้ใช้ที่ต้องการรับสิทธิ์ให้ครบถ้วน" },
  { step: "04", title: "รอระบบยืนยันและรับโปรโมชั่น", text: "รอสักครู่ ระบบจะมอบสิทธิ์ให้อัตโนมัติ จากนั้นเริ่มใช้งานโปรได้ทันที" },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "ขั้นตอนรับโปรโมชั่น",
  description: "วิธีรับโปรโมชั่นและการใช้งานโค้ดสำหรับสมาชิก Thaideal",
  step: procs.map((p) => ({
    "@type": "HowToStep",
    position: Number(p.step),
    name: p.title,
    text: p.text,
  })),
};

export default function Process() {
  return (
    <section
      className={`${styles.process} py-8 md:py-12`}
      aria-labelledby="howto-heading"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className={`${styles.sectionHeading} text-center mb-6`}>
        <h2 id="howto-heading" className={`${styles.gradientFont} text-2xl md:text-4xl font-extrabold`}>
          ขั้นตอนรับโปรโมชั่น 🪄
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-6 px-4 md:px-6 lg:px-12">
        {procs.map((item, i) => (
          <article
            key={i}
            className={`${styles.processItem} col-span-12 sm:col-span-6 lg:col-span-3 text-center p-4 md:p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm`}
            style={{ ['--i' as any]: i }}
            itemProp="step"
            itemScope
            itemType="https://schema.org/HowToStep"
          >
            <meta itemProp="position" content={item.step} />
            <div className={`${styles.processIconWrap} flex justify-center mb-4`}>
              <div
                className={`${styles.processIcon} w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-lg md:text-xl font-bold rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-white shadow-lg`}
              >
                <span>{item.step}</span>
              </div>
            </div>
            <h3
              itemProp="name"
              className="text-lg md:text-xl font-bold text-cyan-300 mb-2"
            >
              {item.title}
            </h3>
            <p
              itemProp="text"
              className="text-black/90 text-sm md:text-base leading-relaxed max-w-[90%] mx-auto"
            >
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
