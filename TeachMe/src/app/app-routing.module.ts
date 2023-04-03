import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'profile', component:ProfilePageComponent},

//Rute idu iznad ovog komentara

  {path:'**', pathMatch:'full', component:WrongRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
