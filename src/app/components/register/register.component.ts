import { Component, OnInit } from '@angular/core';
import { UserModelRegister } from 'src/app/models/user-register.model';
import { UserFormRegister } from 'src/app/forms/user-register.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private model: UserModelRegister;
  public form: UserFormRegister;

  constructor() {
    this.model = new UserModelRegister();
    this.form = new UserFormRegister(this.model);
  }

  ngOnInit() {
  }

}
