import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpDto } from 'src/app/commons/sign-up-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get(this.baseUrl + '/movies');
  }

  getMovieById(id: number) {
    return this.http.get(this.baseUrl + '/movies/' + id);
  }

  saveUser(signUpDto: SignUpDto) {
    return this.http.post<any>(this.baseUrl + '/user', signUpDto);
  }
}
