"use client";

import { useDictionary } from "@/context/dictionaryContext";
import Header from "@/components/header";
export default function HomePage() {
  const dictionary = useDictionary();
  return (
    <main>
      <Header dictionary={dictionary} />
    </main>
  );
}
