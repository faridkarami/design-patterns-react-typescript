import CreateOrder from "./components/CreateOrder";
import ReadOrder from "./components/ReadOrder";

const SingletonDesignPattern = () => {
  return (
    <div>
      <CreateOrder/>
      <ReadOrder/>
    </div>
  );
};

export default SingletonDesignPattern;
