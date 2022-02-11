import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.scss'],
})
export class PatientregistrationComponent implements OnInit {
  model: NgbDateStruct;
  constructor() {}

  ngOnInit(): void {}
}
