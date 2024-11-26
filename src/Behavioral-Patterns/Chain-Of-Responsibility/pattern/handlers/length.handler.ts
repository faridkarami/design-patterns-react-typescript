import Handler from '../handler.interface';

export default class LengthHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  validate(value: string): string | null {
    const len = 11;
    if (value.length !== len) {
      return `It must be ${len} digits.`;
    }
    return this.nextHandler ? this.nextHandler.validate(value) : null;
  }
}
