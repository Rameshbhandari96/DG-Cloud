import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../../reusable/components/table/table.component';

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

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userArray=res;
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
