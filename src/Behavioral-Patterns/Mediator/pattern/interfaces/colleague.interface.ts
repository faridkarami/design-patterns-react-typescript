export default interface Colleague {
  id: string;
  receiveMessage(message: string): void;
}