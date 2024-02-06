// app.component.ts

import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';  // Passe den Pfad entsprechend an

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return (this.authService as any).isAuthenticated();  // Ignoriere den Typ für dieses Beispiel
  }
  title: string = 'hobly'; // Füge diese Zeile hinzu

  logout(): void {
    this.authService.logout();
  }
}