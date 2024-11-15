export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const DarkButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button style={{ backgroundColor: "black", color: "white" }} onClick={onClick}>
    {label}
  </button>
);

export const LightButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button style={{ backgroundColor: "white", color: "black" }} onClick={onClick}>
    {label}
  </button>
);
