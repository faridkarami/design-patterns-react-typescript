export default interface StateProps<T> {
  data?: T;
  retry?: () => void;
}