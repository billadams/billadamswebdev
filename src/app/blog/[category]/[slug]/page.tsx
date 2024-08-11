import React from 'react';
import { Metadata } from 'next';

export const runtime = 'experimental-edge';

export const metadata: Metadata = {
  title: 'Bill Adams Web Dev - Blog',
};

export default function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  return (
    <main>
      <hgroup>
        <h1>Using Moment.js</h1>
        <p>Category: {params.category} | Published on: Jan 1st, 2024</p>
      </hgroup>

      <p>This is the blog page.</p>
    </main>
  );
}
