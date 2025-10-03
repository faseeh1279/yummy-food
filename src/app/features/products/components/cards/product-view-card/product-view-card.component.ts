import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-view-card',
  templateUrl: './product-view-card.component.html',
  styleUrl: './product-view-card.component.scss', 
  standalone: false
})
export class ProductViewCardComponent {
  @Input() productDetail?: Product;
}
