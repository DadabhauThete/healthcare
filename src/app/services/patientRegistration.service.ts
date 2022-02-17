import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../modules/admin/components/patientregistration/patient.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PatientRegistrationService {
  constructor(private router: Router, private http: HttpClient) {}
  user: User;
  registerUser(user: User) {
    return this.http.post(
      `${environment.baseUrl}Patient/Enrole`,
      user,
      httpOptions
    );
    console.log('I am Server');
  }
}
