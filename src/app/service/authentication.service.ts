import { Injectable } from '@angular/core';
import {DataService} from '../data.service'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private dataService:DataService) { }

  data

  authenticate(username, password) {
    this.dataService.user(username,password).subscribe((data)=>{
      this.data=data;
    });
    if (this.data.content=='true') {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
