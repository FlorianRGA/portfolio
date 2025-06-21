import '@/styles/globals.css';
import { getDictionary } from '@/lib/getDictionaries';
import ClientDictionaryProvider from '@/provider/clientDictionaryProvider';
import React from 'react';

export default async function RootLayout({ children, params }) {
  const locale = await params;
  const lang = locale.lang;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
          <ClientDictionaryProvider dictionary={dictionary}>
          {children}
        </ClientDictionaryProvider>
      </body>
    </html>
  );
}
