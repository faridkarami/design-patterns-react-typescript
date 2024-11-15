import { IThemeFactory } from "./ThemeFactory.interface";

export class DarkThemeFactory implements IThemeFactory {
  createButton(): React.ReactNode {
    return <button style={{ backgroundColor: "black", color: "white" }}>Dark Button</button>;
  }

  createInput(): React.ReactNode {
    return <input style={{ backgroundColor: "black", color: "white", border: "1px solid white" }} />;
  }
}