import styles from "@/components/heroSection.module.css";
import FaceIcon from "@/components/ui/icons/faceIcon";
import Button from "@/components/ui/button";
import ArrowIcon from "@/components/ui/icons/arrowIcon";
export default function HeroSection({ dictionary }) {
  return (
    <section aria-labelledby="hero-title" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h1 id="hero-title" className={styles.title}>
            <span>{dictionary.first_name} </span>
            <span>{dictionary.last_name}</span>
            <br />
            <span className={styles.subH1}>
              {dictionary.hero_section.hero_title}
            </span>
          </h1>
          <p>{dictionary.hero_section.hero_subtitle}</p>
        </div>
        <div className={styles.rightSection}>
          <FaceIcon className={styles.faceIcon} />
        </div>
      </div>
      <p className={styles.description}>
        {dictionary.hero_section.hero_description}
      </p>
      <div className={styles.buttonContainer}>
        <Button>
          <a className={styles.button} href="#">
            {dictionary.hero_section.hero_cta}
            <ArrowIcon className={styles.arrowIcon} />
          </a>
        </Button>
      </div>
    </section>
  );
}
