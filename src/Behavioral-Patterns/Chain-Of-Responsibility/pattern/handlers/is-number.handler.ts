import Handler from '../handler.interface';

export default class IsNumberHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  validate(value: string): string | null {
    if (!/^\d+$/.test(value)) {
      return 'Only numbers are allowed.';
    }
    return this.nextHandler ? this.nextHandler.validate(value) : null;
  }
}
