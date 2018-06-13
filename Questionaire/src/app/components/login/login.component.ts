import {Login} from '../../datamodel/login';
import {LoginService} from '../../services/login/login.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;

  login: Login;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.login = new Login('', '');
  }

  validate() {
    this.submitted = true;
    console.log('Submitting' + this.login.emailId);
  }

}
