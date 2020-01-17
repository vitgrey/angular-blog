import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserModel } from 'src/app/models/user';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public api = API
  private currentUserSubject: BehaviorSubject<UserModel>
  public currentUser: Observable<UserModel>

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.api.apiUrl}/users/authenticate`, { email, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user))
          this.currentUserSubject.next(user)
        }
        return user
      }))
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null)
  }
}
