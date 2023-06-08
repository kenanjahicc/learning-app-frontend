import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {WrongRouteComponent} from './wrong-route/wrong-route.component';
import {FeedbackEditComponent} from './feedback/feedback-edit/feedback-edit.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {FeedbackResolver} from "./resolvers/feedback.resolver";
import {ProfessorProfileComponent} from "./professor-profile-page/professor-profile/professor-profile.component";
import {ProfessorResolver} from "./resolvers/professor.resolver";
import {FeedbackAddComponent} from "./feedback/feedback-add/feedback-add.component";
import {MessagingPageComponent} from "./messaging-page/messaging-page.component";
import {MessageResolver} from "./resolvers/message.resolver";
import {NotificationComponent} from "./notification/notification.component"
import {NotificationResolver} from "./resolvers/notification.resolver"
import {FeedbackComponent} from "./feedback/feedback/feedback.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'notifications', component: NotificationComponent, resolve: {notifications: NotificationResolver}},
  {
    path: 'messages',
    component: MessagingPageComponent,
    resolve: {messages: MessageResolver}
  },
  {
    path: ':Professorid',
    resolve: {
      'professor': ProfessorResolver,
    },
    children: [
      {
        path: '',
        component: ProfessorProfileComponent,
      },
      {
        path: 'feedback',
        component: FeedbackAddComponent
      },
      {
        path:'feedbacks',
        component: FeedbackComponent,
        resolve: {
          'feedbacks' : FeedbackResolver,
        }
      }
    ]
  },
  {
    path: ':professorPageId/feedback',
    component: FeedbackAddComponent,
  },
  {
    path: 'feedback/:feedbackId',
    component: FeedbackEditComponent,
    resolve: {
      'feedback': FeedbackResolver
    }
  },

//Rute idu iznad ovog komentara
  {path: '**', pathMatch: 'full', component: WrongRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
