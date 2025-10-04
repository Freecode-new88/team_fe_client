'use client'
import styles from '../f168.module.css'

type PROCESS = { step: string; title: string; text: string }

const procs: PROCESS[] = [
    {step: "01", title: "Get The Code From the Box", text: "At the code box, You can get the available codes"},
    {step: "02", title: "Put In code and check availity", text: "Click the Check Now button and solve the captcha"},
    {step: "03", title: "Your Account Name", text: "After successfully solve the captcha, Put in your account"},
    {step: "04", title: "Wait a while and Enjou the promotion", text: "After wait a while, You can enjoy our promotion"},
]

export default function Process() {
  return (
    <section className={styles.process}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.gradientFont}>Steps to Enjoy The Promotion</h2>
        </div>

        <div className={styles.processGrid}>
            {procs.map((item, i) => {
                return (
                <div key={i} className={styles.processItem}>
                <div className={styles.processIconWrap}>
                <div className={styles.processIcon}><span>{item.step}</span></div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                </div>
                )
            })}
        </div>
      </section>
  )
}
