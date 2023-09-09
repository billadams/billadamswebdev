import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bill Adams Web Dev',
};

export default function Page() {
  return (
    <main>
      <h1>Bill Adams</h1>
      <p>I'm a web developer currently employed with Sandhills Global.</p>
      <p>I'm a full-stack web developer utilizing:</p>
      <ul>
        <li>.Net Core</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>MS SQL</li>
        <li>CSS</li>
      </ul>
      <p>
        View my <Link href='/resume'>resume</Link>.
      </p>
    </main>
  );
}
