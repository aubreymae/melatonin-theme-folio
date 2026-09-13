import styles from "./MainWorkCard.module.css";
import general_styles from "./WorkCard.module.css";

// look into turning this into a shared type
type MainWorkCardProps = {
  slug: string;
  title: string;
  release_status: string;
  short_description: string;
  languages: string[];
  image: string;
};

export default function MainWorkCard({
  slug,
  title,
  release_status,
  short_description,
  languages,
  image,
}: MainWorkCardProps) {
  return (
    <article className={`${styles["main-work-card"]} flex`}>
      <img src={image} alt="" />
      <div className={`${general_styles["work-card-content"]} flex`}>
        <p className="ibm-plex-mono uppercase-text">{release_status}</p>
        <h3>{title}</h3>
        <p>{short_description}</p>
        <div className="lang-tags">{languages}</div>
        <button className="dark-bg light-text">See details</button>
      </div>
    </article>
  );
}
