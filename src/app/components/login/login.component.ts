import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModelLogin } from 'src/app/models/user-login.model';
import { UserFormLogin } from 'src/app/forms/user-login.form';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private model: UserModelLogin;
  public form: UserFormLogin;

  public returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.model = new UserModelLogin();
    this.form = new UserFormLogin(this.model);

    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // get return url from route parameters or default '/'
  public get formGetter(): any {
    return this.form.formGroup.controls;
  }

  public onSubmit(): void {
    this.authenticationService.login(this.formGetter.email.value, this.formGetter.password.value)
      .pipe(first())
      .subscribe(data => this.router.navigate([this.returnUrl])
      );
  }
}
