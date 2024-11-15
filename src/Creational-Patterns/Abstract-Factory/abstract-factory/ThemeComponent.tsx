import { IThemeFactory } from "./ThemeFactory.interface";
import { LightThemeFactory } from "./LightThemeFactory";
import { DarkThemeFactory } from "./DarkThemeFactory";

type ThemeType = "light" | "dark";

interface ThemeComponentProps {
  theme: ThemeType;
}

const ThemeComponent: React.FC<ThemeComponentProps> = ({ theme }) => {
  let factory: IThemeFactory;

  if (theme === "light") {
    factory = new LightThemeFactory();
  } else {
    factory = new DarkThemeFactory();
  }

  return (
    <div>
      {factory.createButton()}
      {factory.createInput()}
    </div>
  );
};

export default ThemeComponent;
