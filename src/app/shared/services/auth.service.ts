import { Injectable } from '@angular/core';
import { User } from '../interfaces';
import { Response } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {}




getUserByEmail (email: string) {
   return this.http.get(`http://localhost:3000/users?email=${email}`)
   .pipe(map((user: User[]) => user[0] ? user[0] : undefined));
}

regist (user: User) {
    return this.http.post('http://localhost:3000/users', user)
    .pipe(map(res => res));
}

}

