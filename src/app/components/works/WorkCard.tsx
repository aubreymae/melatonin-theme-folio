import Link from "next/link";
import styles from "./WorkCard.module.css";

// look into turning this into a shared type
type WorkCardProps = {
  slug: string;
  title: string;
  release_status: string;
  short_description: string;
  languages: string[];
  image: string;
};

export default function WorkCard({
  slug,
  title,
  release_status,
  short_description,
  languages,
  image,
}: WorkCardProps) {
  return (
    <article className={`${styles["work-card"]}`}>
      <img src={image} alt="" />
      <div className={`${styles["work-card__content"]}`}>
        <h4>{title}</h4>
        <p className="ibm-plex-mono uppercase-text">{release_status}</p>
        <p>{short_description}</p>
        <div className="lang-tags"></div>
        <Link href={`/works/${slug}`} className="btn dark-bg light-text">
          See details
        </Link>
      </div>
    </article>
  );
}
