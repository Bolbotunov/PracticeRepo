import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Start Training
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/diary"}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            My Diary
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
