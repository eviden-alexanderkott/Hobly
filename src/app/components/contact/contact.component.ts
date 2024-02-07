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
  errorMessage: string = '';
  successMessage: string = '';

  constructor() {}

  submitForm(): void {
    if (!this.name || !this.email || !this.message) {
      this.errorMessage = 'Bitte füllen Sie alle Felder aus.';
      this.successMessage = ''; // Reset success message
      return; // Don't proceed if any field is empty
    }

    // Hier könnten weitere Validierungen durchgeführt werden, bevor das Formular gesendet wird

    // Hier könnte die Logik für den Formularversand oder die Verarbeitung implementiert werden
    console.log('Formular gesendet:', this.name, this.email, this.message);
    
    // Erfolgsmeldung setzen
    this.successMessage = 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.';
    
    // Fehlermeldung zurücksetzen
    this.errorMessage = '';

    // Setzen Sie die Formularfelder zurück
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
