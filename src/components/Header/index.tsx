import styles from "./styles.module.scss"
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Header(){
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR });
  return(
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você sempre</p>
      <span>{currentDate}</span>
    </header>
  );
}