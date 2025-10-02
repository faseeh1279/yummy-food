import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: false
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;
  @Input() icon?: string;
  @Output() clicked = new EventEmitter<void>();
  @Input() customStyle?: any; 

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
