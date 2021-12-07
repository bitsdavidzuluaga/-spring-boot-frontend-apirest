import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../../models/base-service/base-http.services';
import { Course } from '../../models/course/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseHttpService<Course> {

  constructor(protected http: HttpClient) {
    super(http, environment.api);
  }
}
