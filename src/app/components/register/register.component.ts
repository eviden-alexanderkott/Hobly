// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  registrationStatus: { message: string; color: string } = { message: '', color: '' };

  constructor(private authService: AuthService) {}

  register(): void {
    console.log('Registrierung wird aufgerufen');
    const registrationResult = this.authService.registerUser(this.username, this.password);

    // Überprüfen Sie das Ergebnis der Registrierung und setzen Sie die Nachricht und Farbe entsprechend
    if (registrationResult.success) {
      this.registrationStatus.message = 'Registrierung erfolgreich!';
      this.registrationStatus.color = 'green';
    } else {
      this.registrationStatus.message = 'Fehler bei der Registrierung: ' + registrationResult.error;
      this.registrationStatus.color = 'red';
    }
  }
}
