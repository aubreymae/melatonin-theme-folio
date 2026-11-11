import WorkCard from "../components/works/WorkCard";
import { works } from "../data/works";

export default function Works() {
  const featuredWorks = works.filter((work) => work.featured);

  return (
    <main className="container">
      <div className="general-section-layout">
        <h1>All Works</h1>
        <div className="general-section-layout--works-list">
          {featuredWorks.map((work) => (
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
      </div>
    </main>
  );
}
