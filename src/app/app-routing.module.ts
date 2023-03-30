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
        path: Route.ABOUT,
        component: AboutComponent,
      },
      {
        path: Route.CONTACT,
        component: ContactComponent,
      },
      {
        path: Route.VARIABLE + Route.HABIT_ID,
        resolve: {
          [ResolverProperty.HABIT_ID]: HabitIdResolver
        },
        children: [
          {
            path: Route.EMPTY,
            component: PreviewComponent,
            resolve: {
              [ResolverProperty.HABIT]: HabitResolver
            },
          },
          {
            path: Route.LOGS,
            component: LogsComponent,
            resolve: {
              [ResolverProperty.LOGS]: LogsResolver,
            },
          },
          {
            path: Route.MILESTONES,
            component: MilestonesComponent,
            resolve: {
              [ResolverProperty.MILESTONES]: MilestonesResolver,
            },
          },
          {
            path: Route.MILESTONES + '/' + Route.ADD,
            component: MilestonesAddComponent,
          },
          {
            path: Route.MILESTONES + '/' + Route.VARIABLE + Route.MILESTONE_ID,
            component: MilestonesEditComponent,
            resolve: {
              [ResolverProperty.MILESTONE]: MilestoneResolver,
            }
          },
        ],
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
