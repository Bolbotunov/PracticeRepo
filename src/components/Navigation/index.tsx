import styles from "./styles.module.scss";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Dairy</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
