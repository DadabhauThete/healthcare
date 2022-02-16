import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/services/auth/user';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm: FormGroup;
  stringifiedData: any;
  respondata: any;
  errordata: any;
  errorApi = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loginForm = new FormGroup({
      emailId: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get email() {
    return this.loginForm.get('emailId');
  }
  get password() {
    return this.loginForm.get('password');
  }
  loginUser() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (result) => {
          if (result != null) {
            this.respondata = result;
            localStorage.setItem('token', this.respondata.token);
            this.router.navigate(['admin']);
            console.log(this.respondata);
          } else {
            alert(result);
          }
        },
        (err) => {
          this.errordata = err;
          this.errorApi = true;
          console.log(this.errordata.error);
        }
      );
    }
  }
}
