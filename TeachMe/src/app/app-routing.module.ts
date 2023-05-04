import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {WrongRouteComponent} from './wrong-route/wrong-route.component';
import {FeedbackEditComponent} from './feedback/feedback-edit/feedback-edit.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {FeedbackResolver} from "./resolvers/feedback.resolver";
import {ProfessorProfilePageComponent} from "./professor-profile-page/professor-profile/professor-profile-page.component";
import {ProfessorResolver} from "./resolvers/professor.resolver";
import {FeedbackComponent} from "./feedback/feedback/feedback.component";
import {ProfessorsComponent} from "./professor-profile-page/Professors/professors.component";
import {NotificationComponent} from "./notification/notification.component"
import {NotificationResolver} from "./resolvers/notification.resolver"

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'notifications', component:NotificationComponent, resolve:{notifications:NotificationResolver}},
  {
    path: 'professorPage',
    component: ProfessorsComponent,
    children: [
      {
        path: ':professorPageId',
        component: ProfessorProfilePageComponent,
        resolve: {
          'professor': ProfessorResolver,
        }
      },
      {
        path: ':professorPageId/feedback',
        component: FeedbackComponent,
      },
      {
        path: 'feedback/:feedbackId',
        component: FeedbackEditComponent,
        resolve: {
          'feedback': FeedbackResolver
        }
      }
    ]
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
