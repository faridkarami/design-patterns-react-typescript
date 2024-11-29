import Colleague from "./colleague.interface";

export default interface Mediator {
  sendMessage(message: string, sender: Colleague): void;
}