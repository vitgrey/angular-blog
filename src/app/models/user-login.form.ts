import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModelLogin } from './user-login.model';

export class UserFormLogin {
  private formBuilder: FormBuilder;
  private formGroup: FormGroup;
  public model: UserModelLogin;

  constructor(model: UserModelLogin) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm()
  }

  public createForm() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(this.model.email, [Validators.required, Validators.email]),
      password: new FormControl(this.model.password, Validators.required),
    })
  }
}