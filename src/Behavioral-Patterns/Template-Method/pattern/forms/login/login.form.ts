import FormTemplate from '../form-template';
import Login from './login.interface';

export default class LoginForm extends FormTemplate<Login> {
  protected validate(data: Login): void {
    if (!data.username || !data.password) {
      throw new Error('Validation failed: Username and Password are required.');
    }
    console.log('Validation passed for LoginForm.');
  }

  protected async request(data: Login): Promise<void> {
    console.log('Call login API', data);
  }

  protected saveData(data: Login): void {
    console.log('Saving login data:', data);
  }
}
