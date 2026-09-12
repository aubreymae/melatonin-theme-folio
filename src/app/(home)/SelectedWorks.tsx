import styles from "./SelectedWorks.module.css";

export default function SelectedWorks() {
  return (
    <section className={`${styles["about-section"]} grid btm-margin`}>
      <h2>What I've worked on</h2>
      <article className={`${styles["main-work-card"]} flex`}>
        <img
          src="https://placehold.co/600x340"
          alt=""
          className={`${styles["work-card-img"]}`}
        />
        <div className={`${styles["work-card-content"]} flex`}>
          <p className="ibm-plex-mono uppercase-text">
            On track for 2026 release
          </p>
          <h3>Pocket Encoder</h3>
          <p>
            A lightweight web extension that offers a real-time video processing
            pipeline that turns videos into specific video formats.
          </p>
          <p>Proudly used by internal teams at Docebo.</p>
          <div className="lang-tags"></div>
          <button className="dark-bg light-text">See details</button>
        </div>
      </article>
      <div className={`${styles["gallery-row"]} flex`}>
        <article className={`${styles["work-card"]} flex`}>
          <img
            src="https://placehold.co/330x180"
            alt=""
            className={`${styles["work-card-img"]}`}
          />
          <div className={`${styles["work-card-content"]} flex`}>
            <h4>CycleSpots</h4>
            <p className="ibm-plex-mono uppercase-text">Released early 2026</p>
            <p>A bicycle directory store featuring local Toronto shops.</p>
            <div className="lang-tags"></div>
            <button className="dark-bg light-text">See details</button>
          </div>
        </article>
        <article className={`${styles["work-card"]} flex`}>
          <img
            src="https://placehold.co/330x180"
            alt=""
            className={`${styles["work-card-img"]}`}
          />
          <div className={`${styles["work-card-content"]} flex`}>
            <h4>Forum</h4>
            <p className="ibm-plex-mono uppercase-text">Releases late 2026</p>
            <p>
              Redesigning the internal employee learning and enablement platform
              of Docebo.
            </p>
            <div className="lang-tags"></div>
            <button className="dark-bg light-text">See details</button>
          </div>
        </article>
        <article className={`${styles["work-card"]} flex`}>
          <img
            src="https://placehold.co/330x180"
            alt=""
            className={`${styles["work-card-img"]}`}
          />
          <div className={`${styles["work-card-content"]} flex`}>
            <h4>Enablement Portal Gallery</h4>
            <p className="ibm-plex-mono uppercase-text">Ongoing</p>
            <p>
              Redesigning the UI and UX of key clients’ internal enablement
              platforms.
            </p>
            <div className="lang-tags"></div>
            <button className="dark-bg light-text">See details</button>
          </div>
        </article>
      </div>
    </section>
  );
}
