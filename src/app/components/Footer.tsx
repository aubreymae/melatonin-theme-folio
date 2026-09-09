import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["outer-footer"]}>
      <div className={`${styles["footer"]} container flex uppercase-text`}>
        <p>Built with NextJS</p>
        <p>Theme by yours truly</p>
      </div>
    </footer>
  );
}
