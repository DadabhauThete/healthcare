import { Component, OnInit } from '@angular/core';
import {
  NgbDateStruct,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { PatientRegistrationService } from './../../../../services/patientRegistration.service';
@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.scss'],
})
export class PatientregistrationComponent implements OnInit {
  model: NgbDateStruct;
  registerForm: FormGroup;
  submitted = false;
  respondata: any;
  errordata: any;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: PatientRegistrationService,
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      personal: this.formBuilder.group({
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
          ],
        ],
        middleName: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
        age: ['', [Validators.required, Validators.maxLength(2)]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        contactNo: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern('^[0-9]+$'),
          ],
        ],
      }),
      address: this.formBuilder.group({
        address1: ['', [Validators.required]],
        address2: ['', [Validators.required]],
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
      }),
    });
  }

  // convenience getter for easy access to form fields

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  get firstName() {
    return this.registerForm.get(['personal', 'firstName']);
  }

  get middleName() {
    return this.registerForm.get(['personal', 'middleName']);
  }
  get lastname() {
    return this.registerForm.get(['personal', 'lastname']);
  }
  get dateOfBirth() {
    return this.registerForm.get(['personal', 'dateOfBirth']);
  }
  get email() {
    return this.registerForm.get(['personal', 'email']);
  }
  get contactNo() {
    return this.registerForm.get(['personal', 'contactNo']);
  }
  get address1() {
    return this.registerForm.get(['address', 'address1']);
  }
  get address2() {
    return this.registerForm.get(['address', 'address2']);
  }
  get country() {
    return this.registerForm.get(['address', 'country']);
  }
  get state() {
    return this.registerForm.get(['address', 'state']);
  }
  get city() {
    return this.registerForm.get(['address', 'city']);
  }
  get zipCode() {
    return this.registerForm.get(['address', 'zipCode']);
  }

  compareDates() {
    let startDate = Date.parse(
      this.registerForm.get(['personal', 'dateOfBirth'])?.value
    );
    console.log(startDate);
    let today = new Date();
    if (!isNaN(startDate) && startDate > today.getTime()) {
      alert('The first date is after the second date!');
    }
  }

  onSubmit() {
    this.submitted = true;
    let ngbDate = this.registerForm.get(['personal', 'dateOfBirth'])?.value;
    let myDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    let formValues = this.registerForm.value;
    formValues.personal.dateOfBirth = myDate;
    //console.log(formValues.personal.dateOfBirth);
    if (this.registerForm.valid) {
      this.registerService.registerUser(formValues).subscribe(
        (result) => {
          this.respondata = result;
          // display form values on success
          alert(
            'SUCCESS!! :-)\n\n' +
              JSON.stringify(this.registerForm.value, null, 4)
          );
        },
        (err) => {
          this.errordata = err;
          console.log(this.errordata.error);
        }
      );
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
