// contact.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor() {}

  submitForm(): void {
    // Hier können Sie die Logik für den Formularversand oder die Verarbeitung implementieren
    console.log('Formular gesendet:', this.name, this.email, this.message);
    // Setzen Sie die Formularfelder zurück
    this.name = '';
    this.email = '';
    this.message = '';
  }
}