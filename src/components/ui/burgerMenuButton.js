import styles from "@/components/ui/burgerMenuButton.module.css";
import { useState } from "react";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import useIsMobile from "@/hooks/useIsMobile";

export default function BurgerMenuButton({
  asideTopItems,
  menuItems,
  extraItems,
  closedMiddleTopItems,
  openMiddleTopItems,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  useBodyScrollLock(isOpen, isMobile);
  return (
    <div className={styles.menuBurger}>
      <div className={styles.topItems}>
        {asideTopItems}
        {isOpen ? openMiddleTopItems : closedMiddleTopItems}
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
      </div>
      <div className={isOpen ? styles.openMenu : styles.closedMenu}>
        <ul className={styles.menuItems}>{menuItems}</ul>
        <ul className={styles.extraItems}>{extraItems}</ul>
      </div>
    </div>
  );
}
// Nav bar disapear on scroll down but come back when scrolling up ? Todo maybe ?
