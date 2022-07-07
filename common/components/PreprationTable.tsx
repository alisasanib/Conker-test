import React from 'react';
import Image from 'next/image';
import styles from './PreparationTable.module.css';

const PreparationTable = ({
  prep_time_min,
  cook_time_min,
  servings,
}: {
  prep_time_min: number | undefined;
  cook_time_min: number | undefined;
  servings: number;
}) => {
  return (
    <div className={styles.prepTableContainer}>
      <div className={styles.clock}>
        <Image src="/clock.svg" alt="Vercel Logo" width={27} height={27} />
      </div>
      <div style={{ marginTop: '-30px' }}>
        {prep_time_min && (
          <div className={styles.prepTableRow}>
            <span className={styles.prepRowTile}>Prep: </span> {prep_time_min}{' '}
            mins
          </div>
        )}
        {cook_time_min && (
          <div className={styles.prepTableRow}>
            <span className={styles.prepRowTile}>Cook:</span> {cook_time_min}{' '}
            mins
          </div>
        )}
        {prep_time_min && cook_time_min && (
          <div className={styles.prepTableRow}>
            <span className={styles.prepRowTile}>Total:</span>{' '}
            {prep_time_min + cook_time_min} mins
          </div>
        )}
        {servings && (
          <div className={styles.prepTableRow}>
            <span className={styles.prepRowTile}>Servings:</span> {servings}
          </div>
        )}
      </div>
    </div>
  );
};

export default PreparationTable;
