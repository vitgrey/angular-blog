import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModelRegister } from 'src/app/models/user-register';

export class UserFormRegister {
  private formBuilder: FormBuilder;
  private formGroup: FormGroup;
  public model: UserModelRegister;

  constructor(model: UserModelRegister) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }


  public createForm() {
    this.formGroup = this.formBuilder.group({
      firstName: new FormControl(this.model.firstName, Validators.required),
      lastName: new FormControl(this.model.lastName, Validators.required),
      email: new FormControl(this.model.email, [Validators.required, Validators.email]),
      password: new FormControl(this.model.password, Validators.required),
    });
  }
}
