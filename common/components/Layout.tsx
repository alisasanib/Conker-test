import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../../styles/Home.module.css';

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
