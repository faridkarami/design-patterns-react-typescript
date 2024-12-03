import { useState, useEffect } from 'react';
import LoadingState from './pattern/states/LoadingState';
import SuccessState from './pattern/states/SuccessState';
import ErrorState from './pattern/states/ErrorState';

const DataFetcher: React.FC = () => {
  const [currentState, setCurrentState] = useState<JSX.Element>(<LoadingState />);

  const fetchData = async () => {
    setCurrentState(<LoadingState />);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setCurrentState(<SuccessState data={result} />);
    } catch (error) {
      setCurrentState(<ErrorState retry={fetchData} />);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {currentState}
    </div>
  );
};

export default DataFetcher;
