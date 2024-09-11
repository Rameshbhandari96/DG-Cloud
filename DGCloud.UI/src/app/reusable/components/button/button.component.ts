import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() btnClass :string ='';
  @Input() btnText : string ='';

  @Output() onBtnClick=new EventEmitter<any>();
  onClick(){
    this.onBtnClick.emit();
  }
}
