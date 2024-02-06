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
    
    return true;  
  }

  addHobby(): void {
    if (this.newHobby.trim() !== '') {
      this.hobbies.push(this.newHobby);
      this.newHobby = ''; 
    }
  }

  removeHobby(index: number): void {
    this.hobbies.splice(index, 1);
  }
}
