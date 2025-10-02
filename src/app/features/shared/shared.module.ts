import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { TableComponent } from './components/table/table.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { InputSelectComponent } from './components/input/input-select/input-select.component';
import { ActionButtonComponent } from './components/button/action-button/action-button.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent, 
    TableComponent, 
    ButtonComponent,
    CardComponent, 
    InputComponent, 
    InputSelectComponent, 
    ActionButtonComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
], 
  exports: [ 
    LoadingSpinnerComponent,
    TableComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
    InputSelectComponent,
    ActionButtonComponent,
    ModalComponent
  ]
})
export class SharedModule { }
