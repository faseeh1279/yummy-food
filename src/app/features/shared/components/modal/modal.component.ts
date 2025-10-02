import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  standalone: false
})
export class ModalComponent {
  @Input() title!: string;
  @Output() show = new EventEmitter<boolean>(); 
  state: boolean = false 

  modalState = () => { 
    this.show.emit(!this.state); 
  }
}
