import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
  standalone: false
})
export class LoadingSpinnerComponent {
  @Output() endSpinner = new EventEmitter<any>();

  sendMessage() {
    this.endSpinner.emit(false);
  }
}
