import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, output, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnChanges {
  @Input() tableData:any[]=[];
  @Input() columnArray:any[]=[];
  @Input() isActionTable:boolean=false;

  @Output() onEdit= new EventEmitter<any>();
  @Output() onDelete= new EventEmitter<any>();

  searchedText:string='';
  filteredData:any[]=[];

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
  onSearchChange(searchVal:string){
    console.log('trigger', searchVal);
    this.filteredData = this.tableData.filter((searchData: any) => {
      const values = Object.values(searchData);
      return values.some((val: any) => val.toString().toLowerCase().indexOf(searchVal.toLowerCase()) > -1);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.filteredData=this.tableData;
  }
}
