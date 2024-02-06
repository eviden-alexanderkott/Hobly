// app.component.ts

import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return (this.authService as any).isAuthenticated();  
  }
  title: string = 'hobly'; // Seitentitel

  logout(): void {
    this.authService.logout();
  }
}