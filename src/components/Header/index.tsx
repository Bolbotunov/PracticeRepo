import ThemeProvider, { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";
import Button from "../Button";
import Navigation from "../Navigation";
import styles from "./styles.module.scss";

function Header() {
  const themeApp = useContext(ThemeContext);
  if (!themeApp) throw new Error("no Theme Provider");
  const { theme, themeHandler } = themeApp;
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Navigation />
        <Button handler={themeHandler} size={"small"}>
          Theme
        </Button>
        <div>{theme ? "light" : " dark"}</div>
      </div>
    </header>
  );
}

export default Header;
