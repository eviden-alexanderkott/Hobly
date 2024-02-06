// start.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  message: string | undefined;
  newHobby: string = '';
  hobbies: string[] = ['Reisen', 'Kochen', 'Fotografie'];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.message = (navigation.extras.state as { message: string }).message;
    }
  }

  isLoggedIn(): boolean {
    // Implementiere die Logik zur Überprüfung der Authentifizierung
    return true;  // Beispiel: Immer als eingeloggt betrachten (ersetze durch deine Logik)
  }

  addHobby(): void {
    if (this.newHobby.trim() !== '') {
      this.hobbies.push(this.newHobby);
      this.newHobby = ''; // Setze das Eingabefeld zurück, nachdem ein Hobby hinzugefügt wurde
    }
  }

  removeHobby(index: number): void {
    this.hobbies.splice(index, 1);
  }
}
