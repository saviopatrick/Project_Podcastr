import Header from "@/components/Header";
import styles from '../styles/app.module.scss'
import Player from "@/components/Player";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
      </main>
      <Player/>
    </div>
  );
}
