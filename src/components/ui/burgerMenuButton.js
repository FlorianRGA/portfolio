import styles from "@/components/ui/burgerMenuButton.module.css";
import { useState } from "react";

export default function BurgerMenuButton({
  asideItems,
  menuItems,
  extraItems,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const body = document.getElementsByTagName("body")[0];
  isOpen ? body.classList.add("open") : body.classList.remove("open");

  return (
    <div className={styles.menuBurger}>
      {asideItems}
      <button
        type="button"
        className={styles.burgerBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={isOpen ? styles.openIcons : styles.closedIcons}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className={isOpen ? styles.openMenu : styles.closedMenu}>
        <ul className={styles.menuItems}>{menuItems}</ul>
        <ul className={styles.extraItems}>{extraItems}</ul>
      </div>
    </div>
  );
}
// Nav bar disapear on scroll down but come back when scrolling up ? Todo maybe ?
