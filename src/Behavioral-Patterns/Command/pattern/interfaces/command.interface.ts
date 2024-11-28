export default interface Command {
  execute(): void;
  undo(): void;
}