import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["outer-footer"]}>
      <div className={`${styles["footer"]} container flex`}>
        <p>Aubrey Garcia</p>
      </div>
    </footer>
  );
}
