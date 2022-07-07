import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        style={{ height: 40 }}
        href="https://www.conkergroup.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image
            src="/Conker_Group_Logo2.png"
            alt="Vercel Logo"
            width={90}
            height={27}
          />
        </span>
      </a>
    </footer>
  );
}
