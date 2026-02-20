import styles from './f168.module.css';
import Promo from './components/promo';
import Promotions from './components/Promotions';
import Process from './components/process';
import Faq from './components/faq';
import GameTabs from './components/GameTabs';

export default function F168Page() {
  return (
    <div className={styles.container}>
      <Promo />
      <Promotions />
      <GameTabs />
      <Process />
      <Faq />
    </div>
  );
}
