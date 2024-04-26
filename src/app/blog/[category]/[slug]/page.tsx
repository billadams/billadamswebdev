import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bill Adams Web Dev - Blog',
};

export default function Page() {
  return (
    <main>
      <h1>Blog</h1>
      <p>This is the blog page.</p>
    </main>
  );
}
