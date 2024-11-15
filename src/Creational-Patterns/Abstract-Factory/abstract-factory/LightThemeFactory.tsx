import { IThemeFactory } from "./ThemeFactory.interface";

export class LightThemeFactory implements IThemeFactory {
  createButton(): React.ReactNode {
    return <button style={{ backgroundColor: "white", color: "black" }}>Light Button</button>;
  }

  createInput(): React.ReactNode {
    return <input style={{ backgroundColor: "white", color: "black", border: "1px solid black" }} />;
  }
}