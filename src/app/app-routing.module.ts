import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {WrongRouteComponent} from './wrong-route/wrong-route.component';
import {FeedbackEditComponent} from './feedback/feedback-edit/feedback-edit.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {FeedbacksResolver} from "./resolvers/feedbacks.resolver";
import {ProfessorProfileComponent} from "./professor-profile-page/professor-profile/professor-profile.component";
import {ProfessorResolver} from "./resolvers/professor.resolver";
import {FeedbackAddComponent} from "./feedback/feedback-add/feedback-add.component";
import {MessagingPageComponent} from "./messaging-page/messaging-page.component";
import {MessageResolver} from "./resolvers/message.resolver";
import {NotificationComponent} from "./notification/notification.component"
import {NotificationResolver} from "./resolvers/notification.resolver"
import {FeedbackComponent} from "./feedback/feedback/feedback.component";
import {FeedbackResolver} from "./resolvers/feedback.resolver";
import {SearchComponent} from "./search/search.component";
import {SupportPageComponent} from "./support-page/support-page.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'support-page', component: SupportPageComponent},
  {path: 'search', component: SearchComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'notifications', component: NotificationComponent, resolve: {notifications: NotificationResolver}},
  {
    path: 'messages',
    children:[
      {
        path:':usertwo',
        component:MessagingPageComponent,
      }
    ]
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
        resolve: {
          'feedbacks' : FeedbacksResolver,
        },
        children:[
          {
            path: '',
            component: FeedbackComponent
          },
          {
            path: ':feedbackId',
            component: FeedbackEditComponent,
            resolve: {
              'feedback': FeedbackResolver,
            }
          }
        ]
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
