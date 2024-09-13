import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { Login } from '../../models/Login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword:boolean=false;
  showPasswordCheckBox : boolean=false;
  loginObj:Login = new Login();
  
  constructor (private loginService:LoginService){}



  loginSubscription : Subscription []=[];



  togglePassword(event:any): void {
    this.showPassword = event.target.checked;
    this.updateIcon();
  }
  private updateIcon(){
    debugger;
    const icon = document.getElementById('toggleeye');
    if (icon) {
      if (this.showPassword) {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      }
    }
  }
  onSignIn(){
    this.loginService.onLogin(this.loginObj).subscribe((res:any)=>{
      debugger;
      console.log(res);
      localStorage.setItem("token",res);
    });
  }
  getUsers(){
    this.loginService.getUsers().subscribe((res:any)=>{
      console.log(res);
    });
  }
  

}
