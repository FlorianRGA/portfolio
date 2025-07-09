import styles from "@/components/ui/toggleThemeButton.module.css";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import MoonIcon from "@/components/ui/icons/moonIcon";
import SunIcon from "@/components/ui/icons/sunIcon";
import useToggleTimeOut from "@/hooks/useToggleTimeOut";
export default function ToggleThemeButton({ dictionary }) {
  const { theme, toggleTheme, isMounted } = useTheme();
  const { isTrigger, start } = useToggleTimeOut(200);
  const [animate, setAnimate] = useState(false);
  if (!isMounted) return null;

  const handleClick = () => {
    setAnimate(true);
    start();
    setTimeout(toggleTheme, 200);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <button
      onClick={handleClick}
      className={styles.toggleThemeButton}
      aria-label={dictionary.aria_label.theme}
    >
      {theme === "dark" ? (
        <SunIcon
          className={`${styles.activeTheme} ${
            animate ? styles.activeThemeAnimate : ""
          }`}
        />
      ) : (
        <MoonIcon
          className={`${styles.activeTheme} ${
            animate ? styles.activeThemeAnimate : ""
          }`}
        />
      )}
    </button>
  );
}
