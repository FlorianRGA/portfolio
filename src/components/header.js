import styles from "@/components/header.module.css";
import ToggleLanguageButton from "@/components/ui/toggleLanguageButton";
import ToggleThemeButton from "@/components/ui/toggleThemeButton";
export default function Header({ dictionary }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <div className={styles.links}>
            <li>
              <a href="#>"> {dictionary.home.navlinks.home} </a>
            </li>
            <li>
              <a href="#>"> {dictionary.home.navlinks.about} </a>
            </li>
            <li>
              <a href="#>"> {dictionary.home.navlinks.projects} </a>
            </li>
            <li>
              <a href="#>"> {dictionary.home.navlinks.skills} </a>
            </li>
            <li>
              <a href="#>"> {dictionary.home.navlinks.contact} </a>
            </li>
          </div>
          <div className={styles.navButtons}>
            <li>
              <ToggleLanguageButton dictionary={dictionary} />
            </li>
            <li>
              <ToggleThemeButton dictionary={dictionary} />
            </li>
          </div>
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
