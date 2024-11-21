import Button from "./pattern/Button/Button";
import { HIGButtonTheme } from "./pattern/design-systems/hig.theme";
import { MaterialButtonTheme } from "./pattern/design-systems/material.theme";

const BridgeDesignPattern = () => {
  return (
    <div>
      <Button
        theme={HIGButtonTheme}
        label="Human Interface Guidelines Button"
      />
      <Button
        theme={MaterialButtonTheme}
        label="Material Design Button"
      />
    </div>
  );
};

export default BridgeDesignPattern;
