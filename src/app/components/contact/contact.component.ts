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
    // LOGIK FEHLT
    console.log('Formular gesendet:', this.name, this.email, this.message);
    // zurücksetzen voererst
    this.name = '';
    this.email = '';
    this.message = '';
  }
}