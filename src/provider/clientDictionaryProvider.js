'use client';

import React from 'react';
import { DictionaryContext } from '@/context/dictionaryContext';

export default function ClientDictionaryProvider({ dictionary, children }) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}