import styles from "./page.module.css";
import DatsMyLogo from "./components/boot/brand";
import GetLists from "./components/base/GroupList";
import AdStuff from "./components/base/AdContainer";


export default function Home() {
  

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <DatsMyLogo/> */}
        <GetLists/>
      </main>
      <AdStuff/>
    </div>
  );
}
