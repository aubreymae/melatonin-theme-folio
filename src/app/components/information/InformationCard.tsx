import styles from "./InformationCard.module.css";

type InformationCardProps = {
  label: string;
  body: string;
};

export default function InformationCard({ label, body }: InformationCardProps) {
  return (
    <li className={`${styles["info-card-list"]}`}>
      <p className={`${styles["info-card-label"]}`}>{label}</p>
      <p className={`${styles["info-card-body"]}`}>{body}</p>
    </li>
  );
}
