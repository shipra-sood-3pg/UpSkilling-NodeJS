import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ICourse } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'list-courses',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
    //providers: [CourseService] -- When Registering service for specific component and is available in that component and it's child components
})
export class CourseListComponent implements OnInit, OnDestroy{

    constructor(private courseService: CourseService) {}

    pageTitle = 'Courses';

    filteredCourses: ICourse[] = [];
    courses: ICourse[] = [];
    errorMessage = '';

    sub!: Subscription;

    private _filterCriteria = '';
    get filterCriteria(): string{
        return this._filterCriteria;
    }
    set filterCriteria(filterBy: string){
        this._filterCriteria = filterBy;
        this.filteredCourses = this.filterOutCourses(filterBy);
    }

    isDataFiltered(): boolean {
        return this.filterCriteria !== '' ? true : false;
    };

    filterOutCourses(filterBy: string): ICourse[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.courses.filter((course: ICourse) => 
                course.courseName.toLocaleLowerCase().includes(filterBy)
        );
    }

    ngOnInit(): void {
        this.filterCriteria = '';
        this.sub = this.courseService.getCourses()
                        .subscribe({
                            next: courses => {
                                this.courses = courses;
                                this.filteredCourses = this.courses;
                            },
                            error: err => this.errorMessage = err 
                        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onComplexityClicked(message: string): void{
        console.log(`InParentContainer ${message}`);
    }
}