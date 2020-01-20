import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModelLogin } from 'src/app/models/user-login';

export class UserFormLogin {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: UserModelLogin;

  constructor(model: UserModelLogin) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(this.model.email, [Validators.required, Validators.email]),
      password: new FormControl(this.model.password, [Validators.required, Validators.minLength(8)]),
    });
  }
}
