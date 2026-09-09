import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`${styles["about-section"]} grid btm-margin`}>
      <div className={`${styles["about-intro"]} grid-col-4 flex`}>
        <h1 className={`${styles["about-title"]} archivo`}>
          I build and design products.
        </h1>
        <p className={`${styles["about-desc"]}`}>
          I’m Aubrey Garcia, a developer with equal parts creative and technical
          instinct. At Docebo, I redefine the experience of our learning
          platform for consultants who implement it and the customers who live
          in it.
        </p>
        <p className={`${styles["about-desc"]}`}>
          Outside of work, I’m pursuing a Master of Science in Computer Science
          focused on Computing Systems. When I’m not coding, you’ll find me
          playing video games, learning guitar, or painting landscapes.
        </p>
      </div>
      <div className={`${styles["about-details"]} grid-col-3 flex`}>
        <ul>
          <li className={`${styles["about-detail-item"]} flex`}>
            <p className="ibm-plex-mono uppercase-text">Currently</p>
            <p className="archivo">Solution Designer @ Docebo</p>
          </li>
          <li className={`${styles["about-detail-item"]} flex`}>
            <p className="ibm-plex-mono uppercase-text">Education</p>
            <p className="archivo">MSCS @ Georgia Tech</p>
          </li>
          <li className={`${styles["about-detail-item"]} flex`}>
            <p className="ibm-plex-mono uppercase-text">Based in</p>
            <p className="archivo">Toronto, Canada</p>
          </li>
          <li className={`${styles["about-detail-item"]} flex`}>
            <p className="ibm-plex-mono uppercase-text">Open to</p>
            <p className="archivo">Design & product engineering work</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
