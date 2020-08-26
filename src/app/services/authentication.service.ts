import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public users = [];
  public user1: string;

  constructor() {
    this.users = [
      {
        username: 'Naman',
        password: 'Password1'
      },
      {
        username: 'Jain',
        password: 'Password2'
      }
    ];
  }

  authenticate(user): any {
    let token;
    const foundUser = this.users.find(u =>
      u.username === user.username
      && u.password === user.password
    );
    if (foundUser) {
      token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    return token;
  }

  storeToken(token): any{
    localStorage.setItem('token', token);
  }

  getToken(): any{
    return localStorage.getItem('token');
  }

  isAuthenticated(): any{
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }
}
