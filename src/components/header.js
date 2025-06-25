import styles from "@/components/header.module.css";
import ToggleLanguageButton from "@/components/ui/toggleLanguageButton";
import ToggleThemeButton from "@/components/ui/toggleThemeButton";
export default function Header({ dictionary }) {
  return (
    <header className={styles.header}>
      <h1>{dictionary.firstName} {dictionary.lastName} <br /> {dictionary.home.title}</h1>
      <h2>{dictionary.home.description}</h2>
      <ToggleLanguageButton dictionary={dictionary} />
      <ToggleThemeButton dictionary={dictionary} />
    </header>
  );
}