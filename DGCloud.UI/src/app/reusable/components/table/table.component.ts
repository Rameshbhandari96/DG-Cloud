import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() tableData:any[]=[];
  @Input() columnArray:any[]=[];
  @Input() isActionTable:boolean=false;

  @Output() onEdit= new EventEmitter<any>();
  @Output() onDelete= new EventEmitter<any>();


  columnKeys:string[]=[];

  constructor(){
    //this.columnKeys=Object.keys(this.tableData[0]);
  }
  onEditRecord(item:any){
    this.onEdit.emit(item);
  }
  onDeleteRecord(item:any){
    this.onDelete.emit(item);
  }
}
