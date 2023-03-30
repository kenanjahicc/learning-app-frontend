import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {PreviewComponent} from './features/preview/preview.component';
import {LogsComponent} from './features/logs/logs.component';
import {MilestonesComponent} from './features/milestones/milestones/milestones.component';
import {MilestonesAddComponent} from './features/milestones/milestones-add/milestones-add.component';
import {MilestonesEditComponent} from './features/milestones/milestones-edit/milestones-edit.component';
import {HabitResolver} from './resolvers/habit.resolver';
import {LogsResolver} from './resolvers/logs.resolver';
import {MilestonesResolver} from './resolvers/milestones.resolver';
import {ResolverProperty} from './constants/resolver-property.enum';
import {AboutComponent} from './features/about/about.component';
import {ContactComponent} from './features/contact/contact.component';
import {Route} from './constants/route.enum';
import {HabitIdResolver} from './resolvers/habit-id.resolver';
import {MilestoneResolver} from './resolvers/milestone.resolver';
import {MainComponent} from './features/common/main/main.component';

const routes: Routes = [
      {
        path: Route.EMPTY,
        component: MainComponent,
        children: [
            {
              path: Route.EMPTY,
              component: HomeComponent,
            },
            {
              path: Route.PROFILE_PAGE,
              component: AboutComponent,
            },
            {
              path: Route.AUTHENTICATION,
              component: ContactComponent,
            },
        ],
      },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
