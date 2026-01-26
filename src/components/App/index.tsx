import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";
import ContentLayout from "../ContentLayout";
import Header from "../Header";

export default function App() {
  const themeApp = useContext(ThemeContext);
  if (!themeApp) throw new Error("no Theme Provider");
  const { theme } = themeApp;
  return (
    <>
      <div className={`appContainer ${theme ? "light" : "dark"}`}>
        <Header />
        <ContentLayout />
      </div>
    </>
  );
}
