import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModelLogin } from 'src/app/models/user-login';
import { UserFormLogin } from 'src/app/forms/user-login.form';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private model: UserModelLogin;
  public form: UserFormLogin;

  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationservice: AuthenticationService
  ) {
    this.model = new UserModelLogin();
    this.form = new UserFormLogin(this.model);

    if (this.authenticationservice.currentUserValue) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  //get return url from route parameters or default tj '/'
  get formGetter() {
    return this.form.formGroup.controls;
  }

  onSubmit() {
    this.loading = true
    this.authenticationservice.login(this.formGetter.email.value, this.formGetter.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
        }
      )
  }
}
