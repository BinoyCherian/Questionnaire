import {Login} from '../../datamodel/login';
import {LoginService} from '../../services/login/login.service';
import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.login = new Login('', '');
  }

  validate() {
    console.log('Email: ' + this.login.emailId);
    console.log('password: ' + this.login.password);

    this.loginService.checkLogin(this.login)
      .subscribe(() => console.log('Login success'), console.error);

    this.loginService.authenticateUser(this.login).subscribe(() => console.log('Login success'), console.error);
  }
}
