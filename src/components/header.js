import styles from "@/components/header.module.css";
import ToggleLanguageButton from "@/components/ui/toggleLanguageButton";
import ToggleThemeButton from "@/components/ui/toggleThemeButton";
export default function Header({ dictionary }) {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <ToggleThemeButton dictionary={dictionary} />
          </li>
          <li>
            <ToggleLanguageButton dictionary={dictionary} />
          </li>
        </ul>
      </nav>
      <h1>
        {dictionary.firstName} {dictionary.lastName} <br />
        {dictionary.home.title}
      </h1>
      <h2>{dictionary.home.description}</h2>
    </header>
  );
}
