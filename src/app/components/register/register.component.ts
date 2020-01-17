import { Component, OnInit } from '@angular/core';
import { UserModelRegister } from 'src/app/models/user-register';
import { UserFormRegister } from 'src/app/forms/user-register.form';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private model: UserModelRegister;
  public form: UserFormRegister;

  loading = false;

  constructor(
    private router: Router,
    private authenticationservice: AuthenticationService,
    private userservice: UserService
  ) {
    this.model = new UserModelRegister();
    this.form = new UserFormRegister(this.model);

    if (this.authenticationservice.currentUserValue) {
      this.router.navigate(['/'])
    }
  }

  get formGetter() {
    return this.form.formGroup.controls;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true
    this.userservice.register(this.form.formGroup.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
        }
      )
  }

}
