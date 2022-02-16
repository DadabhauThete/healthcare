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
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
interface Patient {
  firstname: string;
  lastname: string;
  country: string;
  email: string;
}

const PATIENTS: Patient[] = [
  {
    firstname: 'Ramesh',
    lastname: 'Kahre',
    country: 'India',
    email: 'rameshkahre@gmail.com',
  },
  {
    firstname: 'Sachin',
    lastname: 'Kute',
    country: 'India',
    email: 'sachinkute@gmail.com',
  },
  {
    firstname: 'Rahul',
    lastname: 'Deshmukh',
    country: 'India',
    email: 'rahuldeshmukh@gmail.com',
  },
  {
    firstname: 'Mahesh',
    lastname: 'Sonavane',
    country: 'India',
    email: 'maheshsonavane@gmail.com',
  },
];
@Component({
  selector: 'app-searchpatient',
  templateUrl: './searchpatient.component.html',
  styleUrls: ['./searchpatient.component.scss'],
})
export class SearchpatientComponent implements OnInit {
  model: NgbDateStruct;
  patients = PATIENTS;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}
  searchPatientForm = this.formBuilder.group({
    accountNumer: [''],
    firstName: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
      ],
    ],
    middleName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    contactNo: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]+$'),
      ],
    ],
  });
  ngOnInit(): void {}

  // Submit Registration Form
  onSubmit() {
    this.submitted = true;
    console.log(this.searchPatientForm.value);
    if (!this.searchPatientForm.valid) {
      alert('Please fill all the required fields');
    } else {
      console.log(this.searchPatientForm.value);
    }
  }

  // Getter method to access formcontrols
  get myForm() {
    return this.searchPatientForm.controls;
  }
}
