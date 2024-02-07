// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { StartComponent } from './components/start/start.component';
import { AuthService } from './services/auth.service'; // Import des AuthService
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SubhobbyComponent } from './components/subhobby/subhobby.component';
import { EntryComponent } from './components/entry/entry.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    NavbarComponent,
    RegisterComponent,
    StartComponent,
    SubhobbyComponent,
    EntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // Hinzufügen des ReactiveForms-Moduls
    AppRoutingModule,
    MatProgressBarModule
  ],
  providers: [AuthService], // Hinzufügen des AuthService zu den Anbietern
  bootstrap: [AppComponent],
})
export class AppModule {}
