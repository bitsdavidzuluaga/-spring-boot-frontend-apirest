import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../../models/base-service/base-http.services';
import { Login } from '../../models/login/login';
// import { Login } from '../../models/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseHttpService<Login> {

  constructor(protected http: HttpClient) {
    super(http, environment.api);
  }
}
