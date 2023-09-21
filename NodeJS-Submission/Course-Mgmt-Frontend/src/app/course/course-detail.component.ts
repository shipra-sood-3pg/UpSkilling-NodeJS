import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './course.service';
import { ICourse } from './course';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Course Detail';
  course!: ICourse;
  sub!: Subscription;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) {  }

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');

    this.sub = this.courseService.getCourseById(courseId)
              .subscribe({
                  next: course => {
                      this.course = course;
                  },
                  error: err => this.errorMessage = err 
              });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addCourseButtonClick(): void {
    this.course = {} as ICourse;
    this.course.id = '00000000-0000-0000-0000-000000000000';
  }

  saveCourseButtonClick(): void {
    if(this.course.id === '00000000-0000-0000-0000-000000000000') {
      this.sub = this.courseService.saveCourseDetails(this.course)
      .subscribe({
          next: course => {
              this.course = course;
          },
          error: err => this.errorMessage = err 
      });
    }
    else {
      this.sub = this.courseService.updateCourseDetails(this.course)
      .subscribe({
          next: course => {
              this.course = course;
          },
          error: err => this.errorMessage = err 
      });
    }
  }

  resetCourseDetailsButtonClick(): void {
    console.log('reset course details');
  }

  onBackButtonClick(): void {
    this.router.navigate(['/courses']);
  }
}
