import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserModel } from 'src/app/models/user';
import { NAVS } from './nav-data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  currentUser: UserModel;

  public navs = NAVS;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(data => this.currentUser = data);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
