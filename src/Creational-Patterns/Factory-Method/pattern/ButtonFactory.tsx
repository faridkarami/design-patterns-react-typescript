import { PrimaryButton } from "./Button";
import { SecondaryButton } from "./Button";
import { ButtonProps } from "./Button.props";

type ButtonType = "primary" | "secondary";

export function createButton(type: ButtonType): React.FC<ButtonProps> {
  switch (type) {
    case "primary":
      return PrimaryButton;
    case "secondary":
      return SecondaryButton;
    default:
      throw new Error(`Unknown button type: ${type}`);
  }
}
