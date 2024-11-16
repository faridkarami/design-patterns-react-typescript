import CardViewBuilder from "./pattern/CardViewBuilder";

const BuilderDesignPattern: React.FC = () => {
  const cardView1 = new CardViewBuilder()
    .setTitle("Card 1")
    .setContent("This is the content of card 1.")
    .setButton(true)
    .setStyle({ backgroundColor: "#087c7c" })
    .build();

  const cardView2 = new CardViewBuilder()
    .setTitle("Card 2")
    .setContent("This is another card.")
    .setStyle({ color: "#008bff" })
    .build();

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {cardView1}
      {cardView2}
    </div>
  );
};

export default BuilderDesignPattern;
