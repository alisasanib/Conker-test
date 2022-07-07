import React from 'react';
import styles from './Divider.module.css';

const Divider = () => {
  return (
    <div className={styles.dividerContainer}>
      <div className={styles.dividerBullet}></div>
      <div className={styles.dividerLine}></div>
    </div>
  );
};

export default Divider;
