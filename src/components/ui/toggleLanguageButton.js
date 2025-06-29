import styles from "@/components/ui/toggleLanguageButton.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ToggleLanguageButton({ dictionary }) {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <svg
        className={styles.svgWorld}
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="languageIconTitle"
        strokeWidth="1"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        color="#000000"
      >
        <title id="languageIconTitle">Language</title>
        <circle cx="12" cy="12" r="10" />
        <path
          strokeLinecap="round"
          d="M12,22 C14.6667,19.5758 16,16.2424 16,12 
         C16,7.7576 14.6667,4.4242 12,2 
         C9.3333,4.4242 8,7.7576 8,12 
         C8,16.2424 9.3333,19.5758 12,22 Z"
        />
        <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />
      </svg>

      <Link
        className={
          pathname === "/fr" ? styles.activeLanguage : styles.InactiveLanguage
        }
        href={"/fr"}
        aria-label={dictionary.aria_label.languageFR}
      >
        FR
      </Link>
      <span>|</span>
      <Link
        href={"/en"}
        className={
          pathname === "/en" ? styles.activeLanguage : styles.InactiveLanguage
        }
        aria-label={dictionary.aria_label.languageEN}
      >
        EN
      </Link>
    </div>
  );
}
