import { Component, OnInit } from '@angular/core';
import {DemoService} from '../demo.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  mensaje:String;
  invalidLogin = false

  constructor(private router: Router,private loginservice: AuthenticationService){
    this.mensaje="";
  }

  ngOnInit(){
  }

  checkLogin(username,password) {
    if (this.loginservice.authenticate(username, password)
    ) {
      this.router.navigate(['home'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
      this.mensaje='Contraseña incorrecta'
  }
}