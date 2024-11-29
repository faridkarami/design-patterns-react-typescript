import Colleague from './interfaces/colleague.interface';
import Mediator from './interfaces/mediator.interface';

export default class ConcreteMediator implements Mediator {
  private colleagues: Colleague[] = [];

  public register(colleague: Colleague): void {
    const exists = this.colleagues.some(x => x.id === colleague.id);
    if (!exists) {
      this.colleagues.push(colleague);
    }
  }

  public sendMessage(message: string, sender: Colleague): void {
    this.colleagues.forEach(colleague => {
      if (colleague.id !== sender.id) {
        colleague.receiveMessage(message);
      }
    });
  }
}