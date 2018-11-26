import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../../shared/interfaces';
import { Users } from '../../models/user.model';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  loading = false;
  submitted = false;
  registForm: FormGroup;

  ngOnInit() {

    this.registForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
    });

  }

  onSubmit() {

   const {email, password} = this.registForm.value;
   const user = new Users(email, password);

    this.auth.regist(user).subscribe( date => {
      this.router.navigate(['/login']);
      console.log(date);

   });


  }

  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth.getUserByEmail(control.value)
      .subscribe((user: User) => {
        if (user) {
          resolve({forbiddenEmail: true});
        } else {
          resolve(null);
        }
      });
    });
  }

}
