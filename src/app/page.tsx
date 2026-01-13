'use client';

import styles from './f168.module.css';
import Promo from './components/promo';
import Promotions from './components/Promotions';
import Process from './components/process';
import Faq from './components/faq';
import GameTabs from './components/GameTabs';
import MaintenancePopup from './components/MaintenancePopup';
import { useState } from 'react';

export default function F168Page() {
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const closePopUp = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.container}>
      <MaintenancePopup 
        show={showPopup}
        onClose={closePopUp}
      />
      <Promo />
      <Promotions />
      <GameTabs />
      <Process />
      <Faq />
    </div>
  );
}
