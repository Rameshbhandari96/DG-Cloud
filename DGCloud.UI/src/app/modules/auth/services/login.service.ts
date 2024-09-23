import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/Login';
import { MasterServiceService } from '../../../core/masterService/master-service.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService  {
  constructor(
    private masterService:MasterServiceService
  ) { }
  onLogin(loginObj:Login){
    debugger;
    return this.masterService.post<any>("https://localhost:7173/auth-gate/Authentication/Login",loginObj);
  }
  getUsers(){
    return this.masterService.get<any>("https://localhost:7173/auth-gate/Users");
  }
  
}
