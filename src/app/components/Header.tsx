import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles["header-container"]}>
      <div className={`${styles["header-wrapper"]} container`}>
        <div className={styles["amg-logo"]}>amg</div>
        <nav className={styles["header-nav"]}>
          <ul className={styles["header-nav-items"]}>
            <li>
              <Link href="/" className="btn btn--primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/works" className="btn btn--primary">
                Works
              </Link>
            </li>
            <li>
              <Link href="/resume" className="btn btn--primary">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/contact" className="btn btn--primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
