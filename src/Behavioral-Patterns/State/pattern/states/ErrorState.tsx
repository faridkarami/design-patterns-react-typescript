import StateProps from '../state.props';

const ErrorState: React.FC<StateProps<never>> = ({ retry }) => {
  return (
    <div>
      Something went wrong. <button onClick={retry}>Retry</button>
    </div>
  );
};

export default ErrorState;