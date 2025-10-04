'use client';

import styles from './f168.module.css';
import Promo from './components/promo';
import Game from './components/game';
import Process from './components/process';
import Faq from './components/faq';

export default function F168Page() {
  return (
    <div className={styles.container}>
      <Promo />
      <Game />
      <Process />
      <Faq />
    </div>
  );
}
