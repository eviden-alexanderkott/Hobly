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
import { ContentComponent } from './components/content/content.component';


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
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    MatProgressBarModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
