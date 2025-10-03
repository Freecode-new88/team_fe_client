import styles from "./mk8.module.css";
import Faq from './faq'

interface PromoCode {
  code: string;
  status: "Used" | "Available";
  web : string;
  date: string;
}

const promoCodes: PromoCode[] = [
  { code: "CODE1", status: "Used", web: "F168", date: "2025-10-01" },
  { code: "CODE2", status: "Available",web: "MK8", date: "2025-10-02" },
  { code: "CODE3", status: "Used",web: "MK8", date: "2025-09-30" },
  { code: "CODE4", status: "Used",web: "F168", date: "2025-09-30" },
  { code: "CODE5", status: "Used",web: "MK8", date: "2025-09-30" },
];

export default function MK8Page() {
  return (
    <div className={styles.container}>
      {/*{Top Section}*/}
      <section>
        <div className={styles.topSection}>
          <h1 className={styles.promoTitle}>MK8 Promotion</h1>
          <div className={styles.banner}>
              <div className={styles.leftBox}>
                <input
                  id="promoCode"
                  type="text"
                  placeholder="Enter promo code"
                  className={styles.input}
                  aria-label="Promo code"
                />
                <div className={styles.actions}>
                <select id="siteSelect" name="site" className={styles.select}>
                  <option value="Select">Select Site</option>
                  <option value="F168">F168</option>
                  <option value="MK8">MK8</option>
                </select>
                </div>
                <div className={styles.actions}>
                  <button className={styles.button}>Check Now</button>
                </div>
              </div>
              <div className={styles.rightBox}>
                  <table className={styles.table}>
                    <colgroup>
                      <col style={{ width: "28%" }} /> {/* Code */}
                      <col style={{ width: "22%" }} /> {/* Available */}
                      <col style={{ width: "20%" }} /> {/* Web */}
                      <col style={{ width: "30%" }} /> {/* Date */}
                    </colgroup>
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th>Available</th>
                        <th>Web</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {promoCodes.map((promo, i) => (
                        <tr key={i}>
                          <td>{promo.code}</td>
                          <td
                            className={
                              promo.status === "Available"
                                ? styles.available
                                : styles.used
                            }
                          >
                            {promo.status}
                          </td>
                          <td>{promo.web}</td>
                          <td>{promo.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
          </div>
        </div>
      </section>
      
      {/*{Awesome Casino Games}*/}
      <section className={styles.game}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.gradientFont}>Awesome Games</h2>
        </div>

        <div className={styles.gameGrid}>
          {[
            {img: "/images/1.jpg", title: "Dice Rolling"},
            {img: "/images/2.jpg", title: "Blackjack"},
            {img: "/images/3.jpg", title: "Roulette"},
            {img: "/images/4.jpg", title: "Spin"},
            {img: "/images/5.jpg", title: "Poker"},
            {img: "/images/6.jpg", title: "Spin"},
            {img: "/images/1.jpg", title: "Dice Rolling"},
            {img: "/images/2.jpg", title: "Blackjack"},
          ].map((g, i) => (
            <div key={i} className={styles.gameItem}>
              <div className={styles.gameImg}>
                <img src={g.img} alt="blackjack" />
              </div>
              <div className={styles.gameInfo}>
                <h3>{g.title}</h3>
                <a href="#0" className={styles.customBtn}>play now</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*{Steps to start the game section}*/}
      <section className={styles.process}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.gradientFont}>Steps to Enjoy The Promotion</h2>
        </div>

        <div className={styles.processGrid}>
          {[
            {step: "01", title: "Get The Code From the Box", text: "At the code box, You can get the available codes"},
            {step: "02", title: "Put In code and check availity", text: "Click the Check Now button and solve the captcha"},
            {step: "03", title: "Your Account Name", text: "After successfully solve the captcha, Put in your account"},
            {step: "04", title: "Wait a while and Enjou the promotion", text: "After wait a while, You can enjoy our promotion"},
          ].map((it, i) => (
            <div key={i} className={styles.processItem}>
              <div className={styles.processIconWrap}>
                <div className={styles.processIcon}><span>{it.step}</span></div>
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/*{Frequently Asked Questions section}*/}
      <Faq />
    </div>
  );
}
