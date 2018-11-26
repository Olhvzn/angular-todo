import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Auth2Service {

private isAuthenticated = false;

login() {
  this.isAuthenticated = true;
}

logout() {
  this.isAuthenticated = false;
}

isLoggedIn(): boolean {
  window.localStorage.clear();
  return this.isAuthenticated;


}

}

