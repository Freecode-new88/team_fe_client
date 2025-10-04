'use client'
import styles from '../f168.module.css'

type Games = { img: string; title: string; }

const games: Games[] = [
    {img: "/images/1.jpg", title: "Dice Rolling"},
    {img: "/images/2.jpg", title: "Blackjack"},
    {img: "/images/3.jpg", title: "Roulette"},
    {img: "/images/4.jpg", title: "Spin"},
    {img: "/images/5.jpg", title: "Poker"},
    {img: "/images/6.jpg", title: "Spin"},
    {img: "/images/1.jpg", title: "Dice Rolling"},
    {img: "/images/2.jpg", title: "Blackjack"},
]


export default function Game() {
  return (
    <section className={styles.game}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.gradientFont}>Awesome Games</h2>
        </div>

        <div className={styles.gameGrid}>
            {games.map((item, i) => {
                return (
                    <div key={i} className={styles.gameItem}>
                    <div className={styles.gameImg}>
                        <img src={item.img} alt="blackjack" />
                    </div>
                    <div className={styles.gameInfo}>
                        <h3>{item.title}</h3>
                        <a href="#0" className={styles.customBtn}>play now</a>
                    </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}