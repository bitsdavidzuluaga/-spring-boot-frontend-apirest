import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private readonly jwt: JwtService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = sessionStorage.getItem('token');
    let result = token ? !this.jwt.getTokenExpired(token) : false;
    // if (token) {
    //   console.log(this.jwt.getTokenPayload(token), this.jwt.getTokenExpired(token), this.jwt.getTokenExpirationDate(token));
    // }
    result = token ? true : false;
    if (!result) {
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
    return true;
  }
}
