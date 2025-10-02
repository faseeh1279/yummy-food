import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss', 
  standalone: false 
})
export class ActionButtonComponent {
  @Input() icon?: string; 
  @Input() customStyle?: any; 
  @Output() clicked = new EventEmitter<boolean>(false); 

  handleClick = () => { 
    this.clicked.emit(true); 
  }
}
