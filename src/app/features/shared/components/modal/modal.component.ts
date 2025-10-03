import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  standalone: false
})
export class ModalComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() state: boolean = false;
  @Output() stateChange = new EventEmitter<boolean>();

  closeModal() {
    this.state = false;
    this.stateChange.emit(this.state);
  }
}
