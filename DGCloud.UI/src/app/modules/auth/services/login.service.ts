import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/Login';


@Injectable({
  providedIn: 'root'
})
export class LoginService  {
  constructor(
    private http:HttpClient
  ) { }
  onLogin(loginObj:Login){
    debugger;
    return this.http.post("https://localhost:7173/auth-gate/Authentication/Login",loginObj);
  }
  getUsers(){
    return this.http.get("https://localhost:7173/auth-gate/Users");
  }
  
}
