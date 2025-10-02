import { Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss', 
  standalone: false 
})
export class InputSelectComponent {
  @Input() options!: string[]; 
  @Input() error!: string; 
  @Input() control!: FormControl<any>; 
  @Input() forlabel!: string; 
  @Input() label!: string; 
  @Input() customStyle?: any; 
}
