import withLogger from "./withLogger";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};

const ButtonWithLogger = withLogger(Button);

export default ButtonWithLogger;
