import styles from "@/components/ui/toggleVersionButton.module.css";
export default function toggleVersionButton() {
  return (
    <button className={styles.button}>
      <div>
        <div className={styles.layer1}>
          <span>A</span>
        </div>
        <div>
          <span>A</span>
        </div>
        <div>
          <span>A</span>
        </div>
        <div>
          <span>A</span>
        </div>
      </div>
      <div>
        <div className={styles.layer2}>
          <span>A</span>
        </div>
        <div>
          <span>A</span>
        </div>
        <div>
          <span>A</span>
        </div>
        <div>
          <span>A</span>
        </div>
      </div>
      <div>
        <div className={styles.layer3}>
          <span>A</span>
        </div>
        <div>
          <span>A</span>
        </div>
        <div>
          <span>A</span>
        </div>
        <div>
          <span>A</span>
        </div>
      </div>
    </button>
  );
}
