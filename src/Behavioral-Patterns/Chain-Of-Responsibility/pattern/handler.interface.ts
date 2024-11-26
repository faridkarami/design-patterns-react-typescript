export default interface Handler {
  setNext(handler: Handler): Handler;
  validate(value: string): string | null;
}
