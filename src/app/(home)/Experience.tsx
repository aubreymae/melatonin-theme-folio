import Link from "next/link";
import InformationCard from "../components/information/InformationCard";
import styles from "./Experience.module.css";
import { resume } from "../data/resume";

export default function Experience() {
  return (
    <section className="general-layout">
      <div className="general-layout__left">
        <h2>
          I’ve collaborated with companies like Skillable and CMA CGM to improve
          the design of their employee and customer enablement portals.
        </h2>
      </div>
      <div className="general-layout__right">
        <div className="simple-card">
          <InformationCard
            label={resume[0].company}
            body={resume[0].title}
            dates={resume[0].time}
          />
          <InformationCard
            label={resume[1].company}
            body={resume[1].title}
            dates={resume[1].time}
          />
        </div>
        <Link href="/resume" className="text-link">
          See full resume
        </Link>
      </div>
    </section>
  );
}
