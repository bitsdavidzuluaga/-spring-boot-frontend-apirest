import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/models/login/login';
import { AlertsCustomService } from 'src/app/core/services/alerts-custom/alerts-custom.service';
import { LoginService } from 'src/app/core/services/login-service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public formGroup: FormGroup = this.fb.group({
    email: new FormControl(null, [ Validators.required, Validators.email ]),
    password: new FormControl(null, [ Validators.required ])
  });;

  constructor(private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private alertCustom: AlertsCustomService) { }

  ngOnInit(): void {

    // this.formGroup = this.fb.group({
    //   email: new FormControl(null, [ Validators.required, Validators.email ]),
    //   password: new FormControl(null, [ Validators.required ])
    // });
  }

  public clickLogin() {
    if (this.formGroup?.valid) {
      const login: Login = {
        email: this.formGroup?.get('email')?.value,
        password: this.formGroup?.get('password')?.value
      };
      console.log('hola');
      this.loginService.post(`/login`, login).subscribe((login: Login) => {
        if (login.token) {
          console.log(login);
          sessionStorage.setItem('token', login.token);
          // localStorage.setItem('user', JSON.stringify(login.user));
          this.router.navigate(['/dashboard']);
        }
      }, error => {
        this.alertCustom.AlertCustom({ title: 'Alerta', message: error.error, type: 'alert' });
      });
    } else {
      this.alertCustom.AlertCustom({ title: 'Alerta', message: 'Por favor diligencia todos los datos correctamente', type: 'alert' });
    }
  }

}
