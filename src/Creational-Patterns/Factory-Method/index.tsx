import { createButton } from "./pattern/ButtonFactory";

const FactoryMethodDesignPattern: React.FC = () => {
  const PrimaryButton = createButton("primary");
  const SecondaryButton = createButton("secondary");

  return (
    <div>
      <PrimaryButton
        label="Click Me"
        onClick={() => alert("Primary Button Clicked")}
      />
      <SecondaryButton
        label="Cancel"
        onClick={() => alert("Secondary Button Clicked")}
      />
    </div>
  );
};

export default FactoryMethodDesignPattern;
