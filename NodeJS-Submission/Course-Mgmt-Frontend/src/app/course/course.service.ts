import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ICourse } from "./course";

@Injectable({
    providedIn: 'root' //When a service is registered at root level and is available throughout the application
})
export class CourseService{

    private courseServiceUrl = 'http://localhost:5095/api/courses/';

    //private courseServiceUrl = "assets/courses.json";
    constructor(private http: HttpClient) { }

    getCourses(): Observable<ICourse[]> {
        return this.http
            .get<ICourse[]>(this.courseServiceUrl)
            .pipe( 
                tap(data => console.log('All', JSON.stringify(data))), 
                catchError(this.handleError)
            );
    }

    getCourseById(id: any): Observable<ICourse>{
        return this.http
            .get<ICourse>(this.courseServiceUrl + id)
            .pipe( 
                tap(data => console.log('current record', JSON.stringify(data))), 
                catchError(this.handleError)
            );
    }

    saveCourseDetails(course: ICourse): Observable<any> {
        return this.http    
            .post<ICourse>(this.courseServiceUrl, course)
            .pipe(
                tap(response => console.log(response)), 
                catchError(this.handleError)
            );
    }

    updateCourseDetails(course: ICourse): Observable<any> {
        // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        // const httpOptions = {
        //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        //   };
        return this.http    
            .put<ICourse>(this.courseServiceUrl + course.id, course)
            .pipe(
                tap(response => console.log(response)), 
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            //A client side or network error 
            errorMessage = `An error Occured : ${err.error.message}`;
        }
        else {
            //A backend function errored out
            errorMessage = `Server Error, Code: ${err.status}, error message is ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}