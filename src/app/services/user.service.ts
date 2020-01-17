import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from './api';
import { UserModel } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public api = API
  constructor(private http: HttpClient) { }

  register(user: UserModel) {
    return this.http.post(`${this.api.apiUrl}/users/register`, user)
  }
}
