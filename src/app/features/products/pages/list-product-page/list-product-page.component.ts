import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { TableColumn, TableData } from '../../../shared/components/models/shared.model';
import { Product } from '../../models/product.model';
import { Dialog } from "@angular/cdk/dialog"; 
import { UpdateProductFormComponent } from '../../components/forms/update-product-form/update-product-form.component';

@Component({
  selector: 'app-list-product-page',
  templateUrl: './list-product-page.component.html',
  styleUrl: './list-product-page.component.scss',
  standalone: false
})
export class ListProductPageComponent implements OnChanges, OnInit {
 
  private _dialog = inject(Dialog); 
  
  modalState: boolean = false;
  mdoalTitle!: string;
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
            { key: 'final_price', value: p.finalPrieWithDiscount.toString() },
          ]
        }

        data.push(row);
        no++;
      })

      debugger;
      resolve(data);
    })
  }
  updateProduct(event: boolean) {
    // console.log(event + 'Update is clicked');
    this._dialog.open(UpdateProductFormComponent); 
    console.log(event);

  }
  deleteProduct(event: boolean) {
    console.log(event);
    // console.log(event + 'Delete is clicked');
  }
  viewProduct(event: boolean) {
    console.log(event);
    // console.log(event + 'View is clicked');
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
