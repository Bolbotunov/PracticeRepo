import Navigation from "../Navigation";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
