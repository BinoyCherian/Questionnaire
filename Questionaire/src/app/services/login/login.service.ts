import {Login} from '../../datamodel/login';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class LoginService {
  authenticationUrl = 'http://localhost:8080/restified/login/checklogin';  // URL to web api

  constructor(public http: HttpClient) {
    console.log('Data service connected');
  }

  checkLogin(login: Login) {
    return this.http.post<boolean>(this.authenticationUrl, {login}).shareReplay();
  }

  authenticateUser(login: Login): Observable<Login> {
    return this.http.post<Login>(this.authenticationUrl, login, httpOptions)
      .pipe(
      // catchError(this.handleError('addHero', hero))
      );
  }

}
