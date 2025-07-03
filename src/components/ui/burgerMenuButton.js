import styles from "@/components/ui/burgerMenuButton.module.css";
import { useState } from "react";

export default function BurgerMenuButton({ menuItems, extraItems }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.menuBurger}>
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
