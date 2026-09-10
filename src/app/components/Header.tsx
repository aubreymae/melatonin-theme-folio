import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${styles["outer-header"]} btm-margin`}>
      <div className={`${styles["header"]} container flex`}>
        <div className={styles["amg-logo"]}>amg</div>
        <nav>
          <ul className={`${styles["nav-menu-items"]} flex ibm-plex-mono`}>
            <li>Work</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
