import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  // Variablen zum Speichern des Eintrags
  wert: string = '';
  einheit: string= '';
  notiz: string ='';

  // Liste möglicher Einheiten
  einheiten: string[] = ['kg', 'm', 'l', '°C', '€'];
  message: string | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.message = (navigation.extras.state as { message: string }).message;
    }
  }

  ngOnInit(): void {
  }


  OnSubmit(): void {
    
    console.log('Eintrag erstellt:', this.wert, this.einheit, this.notiz);

 
    this.wert = '';
    this.einheit = '';
    this.notiz = '';
    this.router.navigate(['./entry']);

  }
}
