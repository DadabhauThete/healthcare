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

  constructor() {}

  ngOnInit(): void {}
}
