import Link from "next/link";
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
  const allLanguages = languages.map((lang) => (
    <span key={lang} className="language-tags">
      {lang}
    </span>
  ));

  return (
    <article className={`${styles["main-work-card"]} flex`}>
      <img src={image} alt="" />
      <div className={`${styles["main-work-card__content"]}`}>
        <p className="text-label">{release_status}</p>
        <h3>{title}</h3>
        <p>{short_description}</p>
        <div className={styles["main-work-card__languages"]}>
          {allLanguages}
        </div>
        <Link href={`/works/${slug}`} className="btn btn--primary">
          See details
        </Link>
      </div>
    </article>
  );
}
