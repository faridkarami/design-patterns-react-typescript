import { useState } from 'react';
import NumberCollection from './pattern/number-collection';

const NumberList: React.FC = () => {
  const [numbers] = useState([1, 2, 3, 4, 5]);
  const collection = new NumberCollection(numbers);
  const iterator = collection.createIterator();

  const renderedNumbers: JSX.Element[] = [];
  while (iterator.hasNext()) {
    const item = iterator.next();
    renderedNumbers.push(<li key={item}>{item}</li>);
  }

  return (
    <div>
      <ul>{renderedNumbers}</ul>
    </div>
  );
};

export default NumberList;
