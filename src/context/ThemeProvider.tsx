import { createContext, PropsWithChildren, useState } from "react";
type SwitchThemeType = {
  theme: boolean;
  themeHandler: () => void;
};
export const ThemeContext = createContext<SwitchThemeType | undefined>(
  undefined
);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState(true);

  const themeHandler = () => setTheme((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
