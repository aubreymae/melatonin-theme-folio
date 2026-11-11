import styles from "./InformationCard.module.css";

type InformationCardProps = {
  label: string;
  body: string;
  dates: string;
};

export default function InformationCard({
  label,
  body,
  dates,
}: InformationCardProps) {
  return (
    <li className={`${styles["info-card-list"]}`}>
      <div className={styles["info-card-header"]}>
        <p className={`${styles["info-card-label"]}`}>{label}</p>
        <p className={`${styles["info-card-dates"]}`}>{dates}</p>
      </div>
      <p className={`${styles["info-card-body"]}`}>{body}</p>
    </li>
  );
}
