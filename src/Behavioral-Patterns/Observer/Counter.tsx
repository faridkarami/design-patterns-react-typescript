import { useState, useEffect } from 'react';
import { counterObservable } from './pattern/counter.observable';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(counterObservable.getState());

  useEffect(() => {
    const updateState = () => setCounter(counterObservable.getState());
    counterObservable.subscribe(updateState);

    return () => {
      counterObservable.unsubscribe(updateState);
    };
  }, []);

  const increment = () => {
    counterObservable.setState(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      &nbsp;
      <span>Counter: {counter}</span>
    </div>
  );
};

export default Counter;