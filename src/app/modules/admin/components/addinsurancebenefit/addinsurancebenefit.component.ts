import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addinsurancebenefit',
  templateUrl: './addinsurancebenefit.component.html',
  styleUrls: ['./addinsurancebenefit.component.scss'],
})
export class AddinsurancebenefitComponent implements OnInit {
  model: NgbDateStruct;
  constructor() {}

  ngOnInit(): void {}
}
