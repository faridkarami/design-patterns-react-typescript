export default abstract class FormTemplate<T> {
  public handleSubmit(data: T): void {
    this.validate(data);
    this.request(data);
    this.saveData(data);
    this.onSuccess();
  }

  protected abstract validate(data: T): void;
  protected abstract request(data: T): Promise<void>;
  protected abstract saveData(data: T): void;

  protected onSuccess(): void {
    console.log('Form submitted successfully!');
  }
}
