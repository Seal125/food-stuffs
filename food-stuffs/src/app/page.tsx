import styles from "./page.module.css";
import Script from "next/script";
import Navbar from "components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className={styles.header}>Welcome!</h1>
        <Script src="https://unpkg.com/@ruffle-rs/ruffle"></Script>
      </main>
    </>
  );
}
