import styles from "@/components/ui/toggleThemeButton.module.css";

export default function ToggleThemeButton({ dictionary }) {
    return (
        <button aria-label={dictionary.aria_label.theme} className={styles.toggleThemeButton}></button>
    );
}