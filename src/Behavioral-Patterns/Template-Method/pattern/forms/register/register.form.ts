import FormTemplate from '../form-template';
import Register from './register.interface';

export default class RegisterForm extends FormTemplate<Register> {
  protected validate(data: Register): void {
    if (
      !data.username ||
      !data.email ||
      !data.password ||
      !data.confirmPassword
    ) {
      throw new Error(
        'Validation failed: Username, Email, Password, and Confirm Password are required.'
      );
    }
    if (data.password !== data.confirmPassword) {
      throw new Error('Passwords do not match.');
    }
    console.log('Validation passed for RegisterForm.');
  }

  protected async request(data: Register): Promise<void> {
    console.log('Call register API', data);
  }

  protected saveData(data: Record<string, any>): void {
    console.log('Saving register data:', data);
  }

  protected onSuccess(): void {
    console.log('Register successful!');
  }
}
