import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'profile', component:ProfilePageComponent},
  {path:'feedback', component:FeedbackComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
//Rute idu iznad ovog komentara

  {path:'**', pathMatch:'full', component:WrongRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
