import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list.component';
import { CourseDetailComponent } from './course/course-detail.component';
import { HomeComponent } from './common/home.component';
import { ModuleInDevelopmentComponent } from './common/module-in-development.component';

import { StarComponent } from './shared/star.component';

import { ReplaceByCharacterPipe } from './shared/replace-by-character.pipe';

import { CourseService } from './course/course.service';



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ReplaceByCharacterPipe,
    StarComponent,
    CourseDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'courses',
        component: CourseListComponent
      }, 
      {
        path: 'courses/:id',
        component: CourseDetailComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path:'**',
        component: ModuleInDevelopmentComponent
      }
    ])
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
