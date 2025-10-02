import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AddProductDTO, CategoryDTO, Product } from '../../models/product.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  categories!: string[]; 

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this.fetchCategories() 
  }
  fetchCategories = () => { 
    this._productService.fetchCategories().subscribe({ 
      next: (response) => {
        this.categories = (response as CategoryDTO[]).map(r => r.category);
      }, 
      error:(error) =>{ 
        Swal.fire({
          title: error.error.text,
          icon: "error",
          draggable: true
        });
      }
    })
  }
  addProduct = (addProductDTO: AddProductDTO) => {
    
    
    debugger
    this._productService.addProduct(addProductDTO).subscribe({
      next: (response) => {
        Swal.fire({
          title: '',
          icon: "success",
          text: '', 
          draggable: true
        });
      },
      error: (error) => {
        Swal.fire({
          title: error.error.text,
          icon: "error",
          text: error.error.text, 
          draggable: true
        });
      }
    })

  }
}

