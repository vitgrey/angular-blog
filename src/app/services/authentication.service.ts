import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { UserModel } from 'src/app/models/user';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public api = API
  private currentUserSubject: BehaviorSubject<UserModel>
  public currentUser: Observable<UserModel>

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
  ) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(
      //JSON.parse(localStorage.getItem('currentUser')))
      JSON.parse(this.cookie.get("currentUser")));
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.api.apiUrl}/login`, { email, password })
      .pipe(map(user => {
        console.log(user)
        if (user && user.token) {
          this.cookie.set("currentUser", JSON.stringify(user))
          // localStorage.setItem('currentUser', JSON.stringify(user))
          this.currentUserSubject.next(user)
        }
        return user
      }))
  }
  logout() {
    // localStorage.removeItem('currentUser');
    this.cookie.delete("currentUser");
    this.currentUserSubject.next(null)
  }
}
