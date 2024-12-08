import styles from "./page.module.css";
import DatsMyLogo from "./components/boot/brand";
import DisplayList from "./components/base/TaskList";
import GetLists from "./components/base/GroupList";


export default function Home() {
  

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <DatsMyLogo/> */}
        {/* <DisplayList/> */}
        <GetLists/>
      </main>
    </div>
  );
}
