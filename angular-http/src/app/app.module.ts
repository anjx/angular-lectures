import { MatCardModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './components/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { MinutesToTimePipe } from './pipes/minutes-to-time.pipe';
import { CreationDateStatusDirective } from './directives/creation-date-status.directive';
import { CourseService } from './services/courses.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MinutesToTimePipe,
    CreationDateStatusDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
