import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div>Hello world!</div>
      <Script src="https://unpkg.com/@ruffle-rs/ruffle"></Script>
    </>
  );
}
