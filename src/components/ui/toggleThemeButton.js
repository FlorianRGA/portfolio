import styles from "@/components/ui/toggleThemeButton.module.css";
import { useTheme } from "@/hooks/useTheme";
import MoonIcon from "@/components/ui/icons/moonIcon";
import SunIcon from "@/components/ui/icons/sunIcon";
export default function ToggleThemeButton({ dictionary }) {
  const { theme, toggleTheme, isMounted } = useTheme();
  if (!isMounted) return null;
  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleThemeButton}
      aria-label={dictionary.aria_label.theme}
    >
      {theme === "dark" ? (
        <SunIcon className={styles.activeTheme} />
      ) : (
        <MoonIcon className={styles.activeTheme} />
      )}
    </button>
  );
}
