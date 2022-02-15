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
      emailId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  loginUser() {
    //const val: any = this.loginForm.value;
    if (this.loginForm.valid) {
      //this.stringifiedData = JSON.stringify(this.loginForm.valid);
      this.authService.login(this.loginForm.value).subscribe((result) => {
        if (result != null) {
          this.respondata = result;
          localStorage.setItem('token', this.respondata.token);
          this.router.navigate(['admin']);
          console.log(this.respondata);
        } else {
          alert(result);
        }
      });
    }
  }
}
