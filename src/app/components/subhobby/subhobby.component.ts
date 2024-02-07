import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StartComponent } from '../start/start.component';

@Component({
  selector: 'app-subhobby',
  templateUrl: './subhobby.component.html',
  styleUrl: './subhobby.component.scss'
})
export class SubhobbyComponent {
  message: string | undefined;
  newHobby: string = '';
  hobbies: string[] = ['mache deinen ersten Eintrag'];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.message = (navigation.extras.state as { message: string }).message;
    }
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
  ngOnInit() {
  }
  navigateToEntry() {
    this.router.navigate(['./entry']);
  }

}
