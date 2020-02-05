import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModelRegister } from 'src/app/models/user-register.model';

export class UserFormRegister {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: UserModelRegister;

  constructor(model: UserModelRegister) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm(): void {
    this.formGroup = this.formBuilder.group({
      firstName: new FormControl(this.model.firstName, [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl(this.model.lastName, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(this.model.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.model.phone, [Validators.required, Validators.pattern('[0-9]{10}')]),
      password: new FormControl(this.model.password, [Validators.required, Validators.pattern('[0-9]{8}')])
    });
  }
}
