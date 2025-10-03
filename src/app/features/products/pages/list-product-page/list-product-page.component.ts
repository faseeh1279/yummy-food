import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { TableColumn, TableData } from '../../../shared/components/models/shared.model';
import { Product } from '../../models/product.model';
import { Dialog } from "@angular/cdk/dialog";
import { UpdateProductFormComponent } from '../../components/forms/update-product-form/update-product-form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product-page',
  templateUrl: './list-product-page.component.html',
  styleUrl: './list-product-page.component.scss',
  standalone: false
})
export class ListProductPageComponent implements OnChanges, OnInit {
  modalState: boolean = false;
  modalTitle: string = '';
  selectedProduct!: Product;

  tableheaders: TableColumn[] = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Product ID' },
    { field: 'price', header: 'Price' },
    { field: 'discount', header: 'Discount' },
    { field: 'final_price', header: 'Final Price' },
  ]

  tabledatas: TableData[] = [];

  products!: Product[];

  constructor(
    private _productService: ProductService,
  ) { }

  ngOnInit(): void {

    this._productService.fetchItems().subscribe({
      next: (response) => {
        this.products = response as Product[];
        this.products.forEach(product => {
          if (product.finalPriceWithDiscount === undefined || product.finalPriceWithDiscount === null) {
            product.finalPriceWithDiscount = product.price - (product.price * product.discount / 100);
          }
        });
        this.populateRow(this.products).then(res => {
          this.tabledatas = res;
        });
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  populateRow = (products: Product[]): Promise<any> => {
    return new Promise((resolve) => {
      const data: TableData[] = [];
      let no = 1;
      products.forEach((p) => {
        const row: TableData =
        {
          rowID: p.id,
          data: [
            { key: 'id', value: no.toString() },
            { key: 'name', value: p.name },
            { key: 'category', value: p.category },
            { key: 'price', value: p.price.toString() },
            { key: 'discount', value: p.discount.toString() },
            { key: 'final_price', value: p.finalPriceWithDiscount.toString() },
          ]
        }

        data.push(row);
        no++;
      })

      resolve(data);
    })
  }

  fetchProductDetail() {
    this._productService.fetchItems().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updateProduct(row: any) {
    this.modalTitle = "Update Product";
    this.modalState = true;
  }

  viewProduct(row: any) {
    this.modalTitle = "View Product";
    this.selectedProduct = this.products.find(p => p.id === row.rowID)!;
    this.modalState = true;
  }

  deleteProduct(row: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._productService.deleteProduct('asdf').subscribe({
          next: (res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          },
          error: (err) => {
            console.log(err); 
            Swal.fire({
              title: "Error!",
              text: "Some error occured.",
              icon: "error"
            });
          }
        })

      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
}
