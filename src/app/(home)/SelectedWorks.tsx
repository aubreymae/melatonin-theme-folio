import styles from "./SelectedWorks.module.css";
import MainWorkCard from "../components/works/MainWorkCard";
import WorkCard from "../components/works/WorkCard";
import { works } from "../data/works";

export default function SelectedWorks() {
  const featuredWorks = works.filter((work) => work.featured);

  return (
    <section className={`${styles["about-section"]} grid btm-margin`}>
      <h2>What I've worked on</h2>
      {featuredWorks.slice(0, 1).map((work) => (
        <MainWorkCard
          key={work.slug}
          slug={work.slug}
          title={work.title}
          release_status={work.release_status}
          short_description={work.short_description}
          languages={work.languages}
          image={work.image}
        />
      ))}
      <div className={`${styles["gallery-row"]} flex`}>
        {featuredWorks.slice(1).map((work) => (
          <WorkCard
            key={work.slug}
            slug={work.slug}
            title={work.title}
            release_status={work.release_status}
            short_description={work.short_description}
            languages={work.languages}
            image={work.image}
          />
        ))}
      </div>
    </section>
  );
}
