import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { Login } from '../../models/Login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  showPassword:boolean=false;
  showPasswordCheckBox : boolean=false;
  loginObj:Login = new Login();

  router=inject(Router);
  
  constructor (private loginService:LoginService){}



  loginSubscription : Subscription []=[];

  ngOnInit(): void {
  }



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
    if (localStorage.getItem("token") != null) {
      debugger;
      localStorage.removeItem('token');
  }
  this.loginService.onLogin(this.loginObj).subscribe({
      next: (res: any) => {
        if(res.success){
          localStorage.setItem("token", res.data);
          this.router.navigateByUrl('auth/user');
        }else{
          alert(res.message);
        }
      },
      error: (err: any) => {
          console.error('Login error:', err);
      }
  });
  }
  getUsers(){
    this.loginService.getUsers().subscribe((res:any)=>{
      console.log(res);
    });
  }
  

}
