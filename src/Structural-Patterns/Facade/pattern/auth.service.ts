import { IAuthResponse } from './auth-response.interface';

export class AuthService {
  async login(username: string, password: string): Promise<IAuthResponse> {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      return { success: true, token: data.token };
    } catch (error) {
      let message = 'An unknown error occurred';
      if (error instanceof Error) {
        message = error.message;
      }
      return { success: false, message: message };
    }
  }

  async logout(): Promise<void> {
    // Clear session or make an API call
    console.log('User logged out');
  }

  async isAuthenticated(): Promise<boolean> {
    // Check local storage or make an API call
    const token = localStorage.getItem('authToken');
    return !!token;
  }
}
