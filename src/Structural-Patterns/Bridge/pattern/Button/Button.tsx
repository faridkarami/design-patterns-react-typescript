import { ButtonProps } from "./Button.props";

const Button: React.FC<ButtonProps> = ({ theme, label }) => {
  return (
    <button
      style={{
        color: theme.color,
        backgroundColor: theme.background,
        borderRadius: theme.borderRadius,
        padding: theme.padding,
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};

export default Button;
