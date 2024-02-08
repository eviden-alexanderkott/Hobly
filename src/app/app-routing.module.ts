// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { StartComponent } from './components/start/start.component';
import { SubhobbyComponent } from './components/subhobby/subhobby.component';
import { EntryComponent } from './components/entry/entry.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'start', component: StartComponent },
  {path:'subhobby', component: SubhobbyComponent},
  {path:'entry', component:EntryComponent},
  {path:'content', component: ContentComponent},
  { path: '**', redirectTo: 'start' }, // Fallback für alle nicht übereinstimmenden Pfade
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
