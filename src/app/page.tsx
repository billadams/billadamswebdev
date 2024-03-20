import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'Bill Adams Web Dev',
};

export default function Page() {
  return (
    <main className={`${styles.home}`}>
      <section>
        <h1>Bill Adams</h1>
        <p>Web developer from Lincoln, Nebraska.</p>
        <p>
          View my <Link href='/resume'>resume</Link>.
        </p>
      </section>
    </main>
  );
}
