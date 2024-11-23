import { useState } from 'react';
import { useAuth } from './pattern/useAuth.hook';

const LoginForm: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const response = await login(username, password);
    if (!response.success) {
      setError(response.message || 'An error occurred');
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type='submit'>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default LoginForm;