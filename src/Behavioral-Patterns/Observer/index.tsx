import Counter from './Counter';
import CounterDisplay from './CounterDisplay';

const ObserverDesignPattern = () => {
  return (
    <div>
      <Counter />
      <hr />
      <CounterDisplay />
    </div>
  );
};

export default ObserverDesignPattern;
