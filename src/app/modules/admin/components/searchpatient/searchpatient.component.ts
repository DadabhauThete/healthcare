import {
  Component,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
  OnInit,
} from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PatientSearch } from './../../../../services/patientsearch.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from './../../../../services/patients';

@Component({
  selector: 'app-searchpatient',
  templateUrl: './searchpatient.component.html',
  styleUrls: ['./searchpatient.component.scss'],
})
export class SearchpatientComponent implements OnInit {
  model: NgbDateStruct;
  submitted = false;
  isInvalid= false;
  show = false;
  respondata: any;
  errordata: any;
  patientdata: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private patientSearch: PatientSearch
  ) {}
  searchPatientForm = this.formBuilder.group({
    patientId: ['', [Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    firstName: [
      '',
      [
        // Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
      ],
    ],
    middleName: [''],
    lastname: [''],
    dateOfBirth: [''],
    age: 0,
    contactNo: [
      '',
      [
        // Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]+$'),
      ],
    ],
  });
  get patientId() {
    return this.searchPatientForm.get(['patientId']);
  }
  get firstName() {
    return this.searchPatientForm.get(['firstName']);
  }
  get middleName() {
    return this.searchPatientForm.get(['middleName']);
  }
  get lastname() {
    return this.searchPatientForm.get(['lastname']);
  }
  get dateOfBirth() {
    return this.searchPatientForm.get(['dateOfBirth']);
  }
  get contactNo() {
    return this.searchPatientForm.get(['contactNo']);
  }
  ngOnInit(): void {}

  close(){
    this.isInvalid = false;
  }

  // Submit Registration Form
  onSubmit() {
    console.log('response data',this.searchPatientForm.controls['patientId'].value, 
    this.searchPatientForm.controls['middleName'].value,
    this.searchPatientForm.controls['lastname'].value,
    this.searchPatientForm.controls['dateOfBirth'].value,
    this.searchPatientForm.controls['contactNo'].value);

    if(this.searchPatientForm.controls['patientId'].value === '' && 
    this.searchPatientForm.controls['middleName'].value === ''&&
    this.searchPatientForm.controls['lastname'].value === '' &&
    this.searchPatientForm.controls['dateOfBirth'].value === undefined &&
    this.searchPatientForm.controls['contactNo'].value === ''){
      this.isInvalid = true
    } else {
      this.submitted = true;

    let ngbDate = this.searchPatientForm.controls['dateOfBirth'].value;
    let myDate = new Date(ngbDate.year, ngbDate.month, ngbDate.day);
    let formValues = this.searchPatientForm.value;
    formValues['dateOfBirth'] = myDate;
    console.log(formValues);

    if (this.searchPatientForm.valid) {
      
      this.patientSearch.getPatientsList(formValues).subscribe(
        (result) => {
          this.respondata = result;
        },
        (err) => {
          this.errordata = err;
          console.log(this.errordata.error);
        }
      );
      this.searchPatientForm.reset();
    }
    }
  }
}
