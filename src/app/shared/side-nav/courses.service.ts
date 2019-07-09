import { Injectable } from '@angular/core';

import { Course } from './model/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIConstants } from '../model/api-constants';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(){

    let headers = new HttpHeaders()
                        .set('Accept', 'application/json');
    let params = {
        "name": ''
    };
    return this.http.get<Course[]>(APIConstants.coursesUrl, {params, headers});
  };

}
