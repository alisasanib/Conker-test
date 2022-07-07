import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setQuery('');
    router.push({
      pathname: '/results',
      query: { search: query },
    });
  };
  return (
    <>
      <Head>
        <title>All Recipes Conker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className={styles.navbarContainer}>
        <Link href="/">
          <h1 className={styles.logo}>All Recipes Conker Edition</h1>
        </Link>
        <form style={{ margin: 'auto' }} action="" onSubmit={handleSubmit}>
          <input
            className={styles.input}
            onChange={({ target: { value } }) => setQuery(value)}
            type="text"
            value={query}
          />
        </form>
      </nav>
    </>
  );
}
