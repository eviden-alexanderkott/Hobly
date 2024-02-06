// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  errorMessage: string = ''; // Fügen Sie diese Zeile hinzu

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.loading = true;

    const isAuthenticated = this.authService.authenticateUser(this.username, this.password);

    if (isAuthenticated) {
      console.log('Erfolgreich angemeldet:', this.username);
      setTimeout(() => {
        this.router.navigate(['/start'], { state: { message: 'Erfolgreich angemeldet' } });
        this.loading = false;
      }, 3000);
    } else {
      console.error('Anmeldung fehlgeschlagen');
      this.loading = false;
    }
  }
}
