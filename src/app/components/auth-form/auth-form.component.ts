import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../../shared/interfaces';
import { Auth2Service } from '../../shared/services/auth_2.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private auth2: Auth2Service
  ) { }

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  message_password = true;
  message_email = true;

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
        'email': new FormControl(null,  [Validators.required, Validators.email] ),
        'password': new FormControl(null, [Validators.required, Validators.minLength(5)] ),
    });

  }

  onSubmit() {


    const formData = this.loginForm.value;

    this.auth.getUserByEmail(formData.email)
      .subscribe((user: User) => {
         if (user) {
            if (user.password === formData.password) {
                window.localStorage.setItem('user', JSON.stringify(user) );

                this.router.navigate(['/todo']);

            } else {
              this.message_password = false;
              window.setTimeout( () => this.message_password = true, 3000);
            }
         } else {
           this.message_email = false;
           window.setTimeout( () => this.message_email = true, 3000);
         }
      });

    // this.submitted = true;

    // if (this.loginForm.invalid) {
    //     return;
    // }

    // this.loading = true;
    // this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.router.navigate(['/todo']);
    //             this.auth.getAll().subscribe(( user: User ) => {
    //               console.log(user);
    //             })

    //         },
    //         error => {
    //             console.error(error);
    //             this.loading = false;
    //         });
}






}
