import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
import { Patient } from './patients';
@Injectable({
  providedIn: 'root',
})
export class PatientSearch {
  //patientData: Patient;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  // getPatientsList(patientData: PatientData) {
  //   return this.http.post(
  //     `${environment.baseUrl}Patient/PatientSearch`,
  //     JSON.stringify(patientData),
  //     httpOptions
  //   );
  //   console.log('I am Server');
  // }

  getPatientsList(patientData: Patient): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}Patient/PatientSearch`,
      patientData,
      httpOptions
    );
  }

  // getPatientsListById(patientData:Patient):Observable<any>{
  //   return this.http.post(
  //     `${environment.baseUrl}Patient/PatientSearch`,
  //     patientData,
  //     httpOptions
  //   );
  // }
  // getPatientsList(patientdata: PatientData[]) {
  //   return this.http
  //     .post(`${environment.baseUrl}Patient/PatientSearch`, patientdata)
  //     .pipe(
  //       map((data: any) => {
  //         return data;
  //       }),
  //       catchError((error) => {
  //         return throwError('Something went wrong!');
  //       })
  //     );
  // }
  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
