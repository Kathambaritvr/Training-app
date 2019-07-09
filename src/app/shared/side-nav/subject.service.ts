import { Injectable } from '@angular/core';

import { Course } from './model/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIConstants } from '../model/api-constants';
import { Subject } from './model/subject';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getSubjectsByCourseId(id:string){
    let headers = new HttpHeaders()
                        .set('Accept', 'application/json');
    let url = APIConstants.subjectsUrl + "course/"+id;
    return this.http.get<Subject[]>(url, { headers});
  };

}
