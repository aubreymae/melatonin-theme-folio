import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={`${styles["exp-section"]} grid btm-margin`}>
      <div className={`${styles["exp-intro"]} grid-col-4 flex`}>
        <h2>
          I’ve collaborated with Skillable, CMA CGM, Databricks, Milwaukee, and
          Align Technology to improve the design of their employee and customer
          enablement portals.
        </h2>
      </div>
      <div className={`${styles["exp-details"]} grid-col-3 flex`}>
        <ul>
          <li className={`${styles["exp-detail-item"]} flex`}>
            <div className={`${styles["exp-detail-item__company"]} flex`}>
              <p className="ibm-plex-mono uppercase-text">Independent</p>
              <p className="ibm-plex-mono uppercase-text">2026 - now</p>
            </div>
            <p className="archivo">Developer</p>
          </li>
          <li className={`${styles["exp-detail-item"]} flex`}>
            <div className={`${styles["exp-detail-item__company"]} flex`}>
              <p className="ibm-plex-mono uppercase-text">Docebo</p>
              <p className="ibm-plex-mono uppercase-text">2025 - now</p>
            </div>
            <p className="archivo">Solution Designer</p>
          </li>
          <li className={`${styles["exp-detail-item"]} flex`}>
            <p className="ibm-plex-mono uppercase-text">York University</p>
            <p className="archivo">Web Designer</p>
          </li>
        </ul>
        <a className="ibm-plex-mono uppercase-text">See full resume</a>
      </div>
    </section>
  );
}
