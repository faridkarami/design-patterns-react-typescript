import LoginForm from './pattern/forms/login/login.form';
import RegisterForm from './pattern/forms/register/register.form';

const AuthForm: React.FC = () => {
  const handleLogin = () => {
    const loginForm = new LoginForm();
    try {
      loginForm.handleSubmit({ username: 'test', password: 'password123' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = () => {
    const registerForm = new RegisterForm();
    try {
      registerForm.handleSubmit({
        username: 'test',
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Submit Login Form</button>
      <button onClick={handleRegister}>Submit Register Form</button>
    </div>
  );
};

export default AuthForm;
