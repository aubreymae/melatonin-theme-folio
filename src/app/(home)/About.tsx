import InformationCard from "../components/information/InformationCard";
import styles from "./About.module.css";
import { personal } from "../data/personal";

export default function About() {
  return (
    <section className="general-layout">
      <div className="general-layout__left">
        <h1>I build and design products.</h1>
        <p>
          I’m Aubrey Garcia, a developer with equal parts creative and technical
          instinct. At Docebo, I redefine the experience of our learning
          platform for consultants who implement it and the customers who live
          in it.
        </p>
        <p>
          Outside of work, I’m pursuing a Master of Science in Computer Science
          focused on Computing Systems. When I’m not coding, you’ll find me
          playing video games, learning guitar, or painting landscapes.
        </p>
      </div>
      <div className="general-layout__right">
        <div className="simple-card">
          <InformationCard
            label={"Currently"}
            body={personal.current}
            dates={""}
          />
          <InformationCard
            label={"Education"}
            body={personal.education}
            dates={""}
          />
          <InformationCard
            label={"Based in"}
            body={personal.based_in}
            dates={""}
          />
          <InformationCard
            label={"Open to"}
            body={personal.open_to}
            dates={""}
          />
        </div>
      </div>
    </section>
  );
}
