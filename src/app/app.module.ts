import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './features/home/home.component';
import {PreviewComponent} from './features/preview/preview.component';
import {LogsComponent} from './features/logs/logs.component';
import {MilestonesComponent} from './features/milestones/milestones/milestones.component';
import {MilestonesEditComponent} from './features/milestones/milestones-edit/milestones-edit.component';
import {MilestonesAddComponent} from './features/milestones/milestones-add/milestones-add.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HabitResolver} from './resolvers/habit.resolver';
import {HabitService} from './services/habit.service';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {LogsResolver} from './resolvers/logs.resolver';
import {LogService} from './services/log.service';
import {MilestonesResolver} from './resolvers/milestones.resolver';
import {MilestoneService} from './services/milestone.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {AboutComponent} from './features/about/about.component';
import {ContactComponent} from './features/contact/contact.component';
import {HeaderComponent} from './features/common/header/header.component';
import {HabitIdResolver} from './resolvers/habit-id.resolver';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MilestonesFormComponent} from './features/milestones/milestones-form/milestones-form.component';
import {MilestoneResolver} from './resolvers/milestone.resolver';
import {MainComponent} from './features/common/main/main.component';
import {MatDialogModule} from '@angular/material/dialog';
import {YesNoDialogComponent} from './features/common/yes-no-dialog/yes-no-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreviewComponent,
    LogsComponent,
    MilestonesComponent,
    MilestonesEditComponent,
    MilestonesAddComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    MilestonesFormComponent,
    MainComponent,
    YesNoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
  ],
  providers: [
    HabitResolver,
    HabitService,
    LogsResolver,
    LogService,
    MilestonesResolver,
    MilestoneService,
    HabitIdResolver,
    MilestoneResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
