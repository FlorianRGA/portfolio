import styles from "@/components/ui/toggleLanguageButton.module.css";
import Link from "next/link";

export default function ToggleLanguageButton({ dictionary }) {
  return (
    // <Link
    //   href={"/en"}
    //   aria-label={dictionary.aria_label.language}
    //   className={styles.toggleLanguageButton}
    // >
    //   <svg
    //     viewBox="0 0 24 24"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //     className={styles.svgWorld}
    //   >
    //     <g strokeWidth="0"></g>
    //     <g strokeLinecap="round" strokeLinejoin="round"></g>
    //     <g id="SVGRepo_iconCarrier">
    //       <path
    //         d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
    //         stroke="#fff"
    //         strokeWidth="1.5"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999C16 17.9999 13 21.9506 13 21.9506"
    //         stroke="#fff"
    //         strokeWidth="1.5"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932"
    //         stroke="#fff"
    //         strokeWidth="1.5"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M2.62964 15.5H21.3704"
    //         stroke="#fff"
    //         strokeWidth="1.5"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M2.62964 8.5H21.3704"
    //         stroke="#fff"
    //         strokeWidth="1.5"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //     </g>
    //   </svg>
    //   FR
    // </Link>
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
        className={styles.activeLanguage}
        href={"/fr"}
        aria-label={dictionary.aria_label.languageFR}
      >
        FR
      </Link>
      <span>|</span>
      <Link
        href={"/en"}
        className={styles.InactiveLanguage}
        aria-label={dictionary.aria_label.languageEN}
      >
        EN
      </Link>
    </div>
  );
}
