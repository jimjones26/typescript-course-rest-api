import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CourseDetail } from '../../../../shared/model/course-detail';
import { Observable } from 'rxjs';

@Injectable()
export class CoursesService {

  constructor(private http: Http) { }

  loadCourseDetail(courseId: number): Observable<CourseDetail> {
    return this.http.get(`/api/courses/${courseId}`)
      .map(res => res.json());
  }

}
