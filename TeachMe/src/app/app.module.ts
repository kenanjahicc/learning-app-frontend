import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { StudentProfilePageComponent } from './student-profile-page/student-profile-page.component';
import { ProfessorProfilePageComponent } from './professor-profile-page/professor-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    StudentProfilePageComponent,
    ProfessorProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
