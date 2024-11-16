import { CardViewProps } from "./CardView.props";

const CardView: React.FC<CardViewProps> = ({
  title,
  content,
  button,
  style,
}) => (
  <div
    style={{
      border: "1px solid #ccc",
      padding: "1rem",
      borderRadius: "5px",
      ...style,
    }}
  >
    {title && <h3>{title}</h3>}
    {content && <p>{content}</p>}
    {button && (
      <button style={{ marginTop: "1rem", color: "#666" }}>Button</button>
    )}
  </div>
);

export default CardView;
