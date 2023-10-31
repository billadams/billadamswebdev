import React from 'react';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import '@/styles/reset.css';
import '@/styles/layout.css';
import '@/styles/typography.css';
import { Roboto_Flex } from 'next/font/google';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang='en' className={roboto.className}>
      <body>
        <div className='page-wrapper'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
