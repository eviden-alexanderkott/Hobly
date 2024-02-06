// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registeredUsers: { username: string; password: string }[] = [];
  private isAuthenticatedFlag: boolean = false;

  constructor() {}

  registerUser(username: string, password: string): { success: boolean; error?: string } {
    const userExists = this.registeredUsers.some((user) => user.username === username);

    if (!userExists) {
      this.registeredUsers.push({ username, password });
      console.log('Benutzer erfolgreich registriert:', username);
      return { success: true };
    } else {
      console.error('Benutzer existiert bereits:', username);
      return { success: false, error: 'Benutzer existiert bereits' };
    }
  }
  
  authenticateUser(username: string, password: string): boolean {
    const user = this.registeredUsers.find(
      (u) => u.username === username && u.password === password
    );
    return !!user;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedFlag;
  }

  // Beispiel-Methode zum Einloggen. Du musst dies an deine eigene Logik anpassen.
  login(username: string, password: string): boolean {
    const isAuthenticated = this.authenticateUser(username, password);

    if (isAuthenticated) {
      this.isAuthenticatedFlag = true;
    }

    return isAuthenticated;
  }

  // Beispiel-Methode zum Ausloggen. Du musst dies an deine eigene Logik anpassen.
  logout(): void {
    this.isAuthenticatedFlag = false;
  }
}