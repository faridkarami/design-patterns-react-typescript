import { useState, useEffect } from 'react';
import { counterObservable } from './pattern/counter.observable';

const CounterDisplay: React.FC = () => {
  const [counter, setCounter] = useState(counterObservable.getState());

  useEffect(() => {
    const updateState = () => setCounter(counterObservable.getState());
    counterObservable.subscribe(updateState);

    return () => counterObservable.unsubscribe(updateState);
  }, []);

  return <h1>{counter}</h1>;
};

export default CounterDisplay;
