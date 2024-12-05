import Image from "next/image";
import styles from "./page.module.css";
import DatsMyLogo from "./scenes/boot/brand";
import GameBoot from "./scenes/boot/intro";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <DatsMyLogo/> */}
        <GameBoot/>
      </main>
    </div>
  );
}
