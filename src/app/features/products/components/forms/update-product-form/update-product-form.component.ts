import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { AddProductDTO, Product } from '../../../models/product.model';
import { SharedModule } from "../../../../shared/shared.module";

@Component({
  selector: 'form-update-product',
  templateUrl: './update-product-form.component.html',
  styleUrl: './update-product-form.component.scss',
  standalone: false
})
export class UpdateProductFormComponent {
  @Input() ProductData!: Product[];
  @Output() payload = new EventEmitter();
  @Input() categories!: string[];
  @Output() closeModal = new EventEmitter<boolean>();

  addProductForm = new FormGroup({
    ProductName: new FormControl('', Validators.required),
    ProductCategory: new FormControl('', Validators.required),
    ProductPrice: new FormControl(0, Validators.required),
    ProductDiscount: new FormControl(0, Validators.required),
    ProductDescription: new FormControl('', Validators.required),
    ProductImage: new FormControl<File | null>(null, Validators.required),
  });
  closeModalState = () => {
    this.closeModal.emit(true);
  }
  onSubmit = () => {
    if (this.addProductForm.invalid) {
      Swal.fire({
        title: 'Form Error',
        icon: 'error',
        text: 'Field is required'
      })
    } else {
      const payload: AddProductDTO = {
        name: this.addProductForm.controls.ProductName.value ?? '',
        description: this.addProductForm.controls.ProductDescription.value ?? '',
        price: this.addProductForm.controls.ProductPrice.value ?? 0,
        discount: this.addProductForm.controls.ProductDiscount.value ?? 0,
        category: this.addProductForm.controls.ProductCategory.value ?? '',
      };
      this.payload.emit(payload);
      this.addProductForm.reset();
    }
  }
}

