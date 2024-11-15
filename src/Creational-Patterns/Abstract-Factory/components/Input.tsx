export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const DarkInput: React.FC<InputProps> = ({ placeholder, value, onChange }) => (
  <input
    style={{ backgroundColor: "black", color: "white", border: "1px solid white" }}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export const LightInput: React.FC<InputProps> = ({ placeholder, value, onChange }) => (
  <input
    style={{ backgroundColor: "white", color: "black", border: "1px solid black" }}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);
