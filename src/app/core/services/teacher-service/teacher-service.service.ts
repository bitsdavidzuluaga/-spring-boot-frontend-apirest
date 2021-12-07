import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../../models/base-service/base-http.services';
import { Teacher } from '../../models/teacher/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends BaseHttpService<Teacher> {

  constructor(protected http: HttpClient) {
    super(http, environment.api);
  }
}
