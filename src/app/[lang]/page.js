'use client';

import { useDictionary } from '../context/dictionaryContext';

export default function HomePage() {
  const dictionary = useDictionary();
  return (
    <main>
      <h1>{dictionary.home.title}</h1>
    </main>
  );
}