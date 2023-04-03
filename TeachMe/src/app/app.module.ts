import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { StudentProfilePageComponent } from './student-profile-page/student-profile-page.component';
import { ProfessorProfilePageComponent } from './professor-profile-page/professor-profile-page.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackComponent,
    NavigationComponent,
    FooterComponent,
    ProfilePageComponent,
    StudentProfilePageComponent,
    ProfessorProfilePageComponent,
    WrongRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
