import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss'
})
export class EntryComponent {
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
      this.newHobby = ''; 
    }
  }

  removeHobby(index: number): void {
    this.hobbies.splice(index, 1);
  }
  ngOnInit() {
  }
  navigateToContent() {
    this.router.navigate(['./content']);
  }
  getBack(){
    this.router.navigate(['./subhobby']);
  }
}

