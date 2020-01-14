import { Component, OnInit } from '@angular/core';
import { UserModelLogin } from 'src/app/models/user-login.model';
import { UserFormLogin } from 'src/app/models/user-login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private model: UserModelLogin;
  public form: UserFormLogin;
  
  constructor() {
    this.model = new UserModelLogin();
    this.form = new UserFormLogin(this.model)
  }

  ngOnInit() {
  }

}
