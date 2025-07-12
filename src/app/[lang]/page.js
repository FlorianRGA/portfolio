"use client";

import { useDictionary } from "@/context/dictionaryContext";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
export default function HomePage() {
  const dictionary = useDictionary();
  return (
    <>
      <Header dictionary={dictionary} />
      <main className="container">
        <HeroSection dictionary={dictionary} />
      </main>
    </>
  );
}
