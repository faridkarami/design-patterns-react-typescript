import { ButtonProps } from "./Button.props";

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button style={{ backgroundColor: "blue", color: "white" }} onClick={onClick}>
    {label}
  </button>
);

export const SecondaryButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button style={{ backgroundColor: "gray", color: "black" }} onClick={onClick}>
    {label}
  </button>
);
