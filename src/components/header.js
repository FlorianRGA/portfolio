export default function HomePage() {
  const dictionary = useDictionary();
  return (
    <main>
      <h1>{dictionary.home.title}</h1>
      <h2>{dictionary.home.description}</h2>
    </main>
  );
}