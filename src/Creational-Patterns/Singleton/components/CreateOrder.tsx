import service from "../pattern/OrderService";

const CreateOrder = () => {
  const handleClick = () => {
    service.set({ id: 1992, qty: 1 });
  };

  return <button onClick={handleClick}>Create</button>;
};

export default CreateOrder;
