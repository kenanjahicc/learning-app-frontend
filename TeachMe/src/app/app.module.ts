import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfessorPageComponent } from './professor-profile-page/professor-page.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    ProfessorPageComponent
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
