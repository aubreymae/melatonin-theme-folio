import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["outer-footer"]}>
      <div className={`${styles["footer"]} container flex uppercase-text`}>
        <p>Built with Next.JS & vanilla CSS</p>
        <p>Aubrey Garcia © All rights reserved</p>
      </div>
    </footer>
  );
}
