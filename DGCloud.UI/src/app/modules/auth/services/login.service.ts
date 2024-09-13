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
    return this.http.post("https://localhost:7152/api/Authentication/Login",loginObj);
  }
  getUsers(){
    return this.http.get("https://localhost:7152/api/Users");
  }
  
}
