import { useState } from 'react';
import { AuthService } from './auth.service';
import { IAuthResponse } from './auth-response.interface';

const authFacade = new AuthService();

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username: string, password: string): Promise<IAuthResponse> => {
    const response = await authFacade.login(username, password);
    if (response.success && response.token) {
      localStorage.setItem('authToken', response.token);
      setIsAuthenticated(true);
    }
    return response;
  };

  const logout = async (): Promise<void> => {
    await authFacade.logout();
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  const checkAuth = async (): Promise<void> => {
    const authenticated = await authFacade.isAuthenticated();
    setIsAuthenticated(authenticated);
  };

  return { isAuthenticated, login, logout, checkAuth };
}
