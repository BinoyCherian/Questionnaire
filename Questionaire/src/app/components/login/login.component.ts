import {ResponseEdo} from '../../datamodel/ResponseEdo';
import {Login} from '../../datamodel/login';
import {LoginService} from '../../services/login/login.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;
  error: boolean;

  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit() {
    this.login = new Login('', '');
  }



  validate() {

    this.error = false;
    var responseEdo: ResponseEdo;

    console.log('Email: ' + this.login.email);
    console.log('password: ' + this.login.password);

    this.loginService.checkLogin(this.login).
      subscribe(
      data => {
        responseEdo = new ResponseEdo(data.response);

        if (true) {
          this.router.navigate(['dashboard']);
          console.log('successfully nav to dashboard');
        }
//        else {
//          this.error = true;
//        }

      }
      );
  }
}
