import { Component } from '@angular/core';
import { LoginService } from './login.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  showLogin = true;

  constructor(private loginService:LoginService){

  }

  passwordAlert = false;


login(event:any) {
  const inputString = event.value.username;
  const match = inputString.match(/^\d+/);

if (match) {
  const numbersPart = match[0];
  const remainingPart = inputString.slice(numbersPart.length);

  if (event.value.password.length >= 8 && remainingPart === '@frc.utn.edu.ar'){
    this.loginService.onLogin(event.value.username,event.value.password)
    console.log(remainingPart)
  }
  else{
    this.passwordAlert = true;
    console.log(remainingPart)
  }
}
 }
}
