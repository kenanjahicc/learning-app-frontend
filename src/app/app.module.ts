import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {StudentProfilePageComponent} from './student-profile-page/student-profile-page.component';
import {ProfessorProfileComponent} from './professor-profile-page/professor-profile/professor-profile.component';
import {WrongRouteComponent} from './wrong-route/wrong-route.component';
import {FeedbackEditComponent} from './feedback/feedback-edit/feedback-edit.component';
import {MatInputModule} from '@angular/material/input';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FeedbackResolver} from "./resolvers/feedback.resolver";
import {ProfessorResolver} from "./resolvers/professor.resolver";
import {FeedbackService} from "./services/feedback.service";
import {MessageService} from "./services/message.service";
import {ProfessorService} from "./services/professor.service";
import {HttpClientModule} from '@angular/common/http';
import {FeedbackAddComponent} from "./feedback/feedback-add/feedback-add.component";
import {MessageBoxComponent} from "./message-box/message-box.component";
import {MessagingPageComponent} from "./messaging-page/messaging-page.component";
import {NotificationComponent} from "./notification/notification.component"
import {NotificationService} from "./services/notification.service"
import {NotificationResolver} from "./resolvers/notification.resolver"
import {AngularMaterialModule} from "./angular-material.module";
import {BugReportService} from "./services/bugReport.service";
import {FeedbackComponent} from "./feedback/feedback/feedback.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackEditComponent,
    NavigationComponent,
    FooterComponent,
    ProfilePageComponent,
    StudentProfilePageComponent,
    ProfessorProfileComponent,
    WrongRouteComponent,
    LoginComponent,
    RegisterComponent,
    FeedbackAddComponent,
    MessageBoxComponent,
    MessagingPageComponent,
    NotificationComponent,
    FeedbackComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularMaterialModule,
    ],
  providers: [
    FeedbackResolver,
    ProfessorResolver,
    FeedbackService,
    ProfessorService,
    MessageService,
    NotificationService,
    NotificationResolver,
    BugReportService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
