import About from "./(home)/About";
import SelectedWorks from "./(home)/SelectedWorks";
import Experience from "./(home)/Experience";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="general-page-layout container">
      <About />
      <SelectedWorks />
      <Experience />
    </main>
  );
}
