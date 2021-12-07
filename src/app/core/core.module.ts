import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { JwtService } from './services/jwt/jwt.service';
import { TeacherService } from './services/teacher-service/teacher-service.service';
import { LoginService } from './services/login-service/login-service.service';
import { AlertsCustomService } from './services/alerts-custom/alerts-custom.service';

const tokenGetter = () => {
  return sessionStorage.getItem('token');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.api],
      }
    })
  ],
  providers: [
    JwtService,
    TeacherService,
    LoginService,
    AlertsCustomService
  ]
})
export class CoreModule { }
