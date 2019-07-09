import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { CoursesService } from './courses.service';
import { Course } from './model/course';
import { SubjectService } from './subject.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
 
  courses: Course[];

  constructor(private coursesService: CoursesService,
              private subjectService: SubjectService ){

  }

  ngOnInit() {
    this.getCourses();
  }


    getCourses(): void {
      this.coursesService.getCourses()
        .subscribe(courses => 
          {
            console.log("course:"+JSON.stringify(courses));
            this.courses = courses
          });
    }
}
