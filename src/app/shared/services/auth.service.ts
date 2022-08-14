import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  //isUserLoggedIn: boolean;

  constructor(private http: HttpClient) {}

  login() {
    return this.http.get<any>(this.baseUrl + '/user');
  }

  getToken() {
    return !!localStorage.getItem('sessionUser');
  }
}
