import { Component } from '@angular/core';
import { UserModelRegister } from 'src/app/models/user-register.model';
import { UserFormRegister } from 'src/app/forms/user-register.form';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private model: UserModelRegister;
  public form: UserFormRegister;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.model = new UserModelRegister();
    this.form = new UserFormRegister(this.model);

    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  public get formGetter(): any {
    return this.form.formGroup.controls;
  }

  public onSubmit(): void {
    this.userService.register(this.form.formGroup.value)
      .pipe(first())
      .subscribe(data => this.router.navigate(['/login'])
      );
  }
}
