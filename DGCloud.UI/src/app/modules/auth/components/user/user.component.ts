import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { TableComponent } from '../../../../reusable/components/table/table.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,TableComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  userArray:any[]=[];
  constructor(private http:HttpClient){  }
  loginService = inject(LoginService);

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.loginService.getUsers().subscribe((res:any)=>{
      this.userArray=res;
      if(res.success){
        this.userArray=res.data;
      }
    });
  }
  editUser(data:any){
    console.log('edit');
    console.log(data);

  }
  deleteUser(data:any){
    console.log('delete');
    console.log(data);
  }

}
