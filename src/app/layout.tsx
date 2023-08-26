import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { getCurrentYear } from '../lib/dates';

import '@/styles/reset.css';
import '@/styles/layout.css';
import '@/styles/typography.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang='en'>
      <body>
        <div className='page'>
          {children}
          {/* <footer>Copyright &copy; {getCurrentYear()}</footer> */}
        </div>
      </body>
    </html>
  );
}
