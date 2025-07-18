import styles from "@/components/header.module.css";
import ToggleLanguageButton from "@/components/ui/toggleLanguageButton";
import ToggleThemeButton from "@/components/ui/toggleThemeButton";
import BurgerMenuButton from "@/components/ui/burgerMenuButton";
import LinkedinIcon from "@/components/ui/icons/linkedinIcon";
import GithubIcon from "@/components/ui/icons/githubIcon";
import TempLogo from "@/components/ui/icons/tempLogo";

export default function Header({ dictionary }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <BurgerMenuButton
          asideTopItems={
            <div className={styles.asideItems}>
              <ToggleThemeButton dictionary={dictionary} />
            </div>
          }
          closedMiddleTopItems={<TempLogo className={styles.socialIcons} />}
          openMiddleTopItems={<ToggleLanguageButton dictionary={dictionary} />}
          menuItems={
            <div>
              <li>
                <a href="#>"> {dictionary.header.navbar_links.home} </a>
              </li>
              <li>
                <a href="#>"> {dictionary.header.navbar_links.about} </a>
              </li>
              <li>
                <a href="#>"> {dictionary.header.navbar_links.projects} </a>
              </li>
              <li>
                <a href="#>"> {dictionary.header.navbar_links.skills} </a>
              </li>
              <li>
                <a href="#>"> {dictionary.header.navbar_links.contact} </a>
              </li>
            </div>
          }
          extraItems={
            <div>
              <li>
                <a href="#">
                  <LinkedinIcon className={styles.socialIcons} />
                </a>
              </li>
              <li>
                <a href="#">
                  <TempLogo />
                </a>
              </li>
              <li>
                <a href="#">
                  <GithubIcon className={styles.socialIcons} />
                </a>
              </li>
            </div>
          }
        />
        <ul className={styles.navList}>
          <div className={styles.links}>
            <li>
              <a href="#>"> {dictionary.header.navbar_links.home} </a>
            </li>
            <li>
              <a href="#>"> {dictionary.header.navbar_links.about} </a>
            </li>
            <li>
              <a href="#>"> {dictionary.header.navbar_links.projects} </a>
            </li>
            <li>
              <a href="#>"> {dictionary.header.navbar_links.skills} </a>
            </li>
            <li>
              <a href="#>"> {dictionary.header.navbar_links.contact} </a>
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
    </header>
  );
}
