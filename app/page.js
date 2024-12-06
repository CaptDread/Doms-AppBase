import styles from "./page.module.css";
import DatsMyLogo from "./components/boot/brand";
import DisplayList from "./components/base/TaskList";

export default function Home() {


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <DatsMyLogo/> */}
        <DisplayList/>
      </main>
    </div>
  );
}
