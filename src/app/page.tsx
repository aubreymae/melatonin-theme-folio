import About from "./(home)/About";
import SelectedWorks from "./(home)/SelectedWorks";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className="container">
        <About />
        <SelectedWorks />
      </main>
    </>
  );
}
