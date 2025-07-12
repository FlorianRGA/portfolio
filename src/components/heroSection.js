import styles from "@/components/heroSection.module.css";
export default function HeroSection({ dictionary }) {
  return (
    <section aria-labelledby="hero-title">
      <h1 id="hero-title">
        <span>{dictionary.first_name}</span>
        <span>{dictionary.last_name}</span>
        <br />
        <span>{dictionary.hero_section.hero_title}</span>
      </h1>
    </section>
  );
}
