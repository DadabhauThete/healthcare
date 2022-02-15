import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { User } from '../auth/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  constructor(private router: Router, private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // isLoggedIn() {
  //   //return this.getToken() !== null;
  //   let authToken = localStorage.getItem('access_token');
  //   return authToken !== null ? true : false;
  // }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // Login
  login(data: any) {
    return this.http.post(`${baseUrl}Account/login`, data, httpOptions);
    console.log('I am Server');
  }
  // login(user: User) {
  //   return this.http
  //     .post<any>(`${baseUrl}Account/login`, user)
  //     .subscribe((res: any) => {
  //       localStorage.setItem('access_token', res.token);
  //       this.router.navigate(['/admin']);
  //     });
  // }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
