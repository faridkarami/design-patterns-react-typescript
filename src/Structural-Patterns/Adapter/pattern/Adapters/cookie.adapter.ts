import { IMemoryAdapter } from "./memory-adapter.interface";

export class CookieAdapter<T> implements IMemoryAdapter<T> {
  private cookieKey: string;
  private expirationDays: number;

  constructor(cookieKey: string, expirationDays: number) {
    this.cookieKey = cookieKey;
    this.expirationDays = expirationDays;
  }

  private setCookie(name: string, value: string, days: number): void {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  private getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [key, val] = cookie.split('=');
      acc[key] = decodeURIComponent(val);
      return acc;
    }, {} as Record<string, string>);
    return cookies[name] || null;
  }

  load(): T[] {
    const data = this.getCookie(this.cookieKey);
    return data ? (JSON.parse(data) as T[]) : [];
  }

  save(items: T[]): void {
    this.setCookie(this.cookieKey, JSON.stringify(items), this.expirationDays);
  }
}
