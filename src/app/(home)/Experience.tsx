import Link from "next/link";
import InformationCard from "../components/information/InformationCard";
import styles from "./Experience.module.css";
import { resume } from "../data/resume";

export default function Experience() {
  return (
    <section className="general-layout">
      <div className="general-layout__left">
        <h2>
          I’ve collaborated with Skillable, CMA CGM, Databricks, Milwaukee, and
          Align Technology to improve the design of their employee and customer
          enablement portals.
        </h2>
      </div>
      <div className="general-layout__right">
        <div className="simple-card">
          <InformationCard label={resume[0].company} body={resume[0].title} />
          <InformationCard label={resume[1].company} body={resume[1].title} />
          <InformationCard label={resume[2].company} body={resume[2].title} />
        </div>
        <Link href="/resume" className="ibm-plex-mono uppercase-text">
          See full resume
        </Link>
      </div>
    </section>
  );
}
