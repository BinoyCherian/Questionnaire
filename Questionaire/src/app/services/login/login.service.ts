import {ResponseEdo} from '../../datamodel/ResponseEdo';
import {Login} from '../../datamodel/login';
import {Question} from '../../datamodel/question';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class LoginService {
  authenticationUrl = 'http://localhost:8080/restified/login/checklogin';  // URL to web API
  getQuestionsUrl = 'http://localhost:8080/restified/question/questions';

  constructor(public http: HttpClient) {
    console.log('Data service connected');
  }

  checkLogin(login: Login) {

    return this.http
      .post<ResponseEdo>(this.authenticationUrl, login, httpOptions);
  }

}
