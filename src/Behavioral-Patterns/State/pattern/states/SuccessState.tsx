import Post from '../post.interface';
import StateProps from '../state.props';

const SuccessState: React.FC<StateProps<Post>> = ({ data }) => {
  return (
    <div>
      <dl>
        <dt>UserIs</dt>
        <dd>{data?.userId}</dd>
        <dt>Id</dt>
        <dd>{data?.id}</dd>
        <dt>Title</dt>
        <dd>{data?.title}</dd>
        <dt>Body</dt>
        <dd>{data?.body}</dd>
      </dl>
      <p>Data loaded successfully!</p>
    </div>
  );
};

export default SuccessState;
