import Handler from '../handler.interface';

export default class PrefixHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  validate(value: string): string | null {
    const prefix = '09';
    if (!value.startsWith(prefix)) {
      return `It must start with ${prefix}.`;
    }
    return this.nextHandler ? this.nextHandler.validate(value) : null;
  }
}
