import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <div className={`${styles["footer-wrapper"]} container`}>
        <p>Built with Next.JS & vanilla CSS</p>
        <p>Aubrey Garcia © All rights reserved</p>
      </div>
    </footer>
  );
}
