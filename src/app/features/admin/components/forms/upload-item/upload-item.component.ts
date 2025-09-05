import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouteConfigLoadEnd } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-upload-item',
  templateUrl: './upload-item.component.html',
  styleUrl: './upload-item.component.scss', 
  standalone: false
})
export class UploadItemComponent {
  constructor(
    private adminService: AdminService
  ){ 

  }
  itemUploadForm = new FormGroup({
    ItemName: new FormControl(""), 
    ItemDiscount: new FormControl(""), 
    ItemPrice: new FormControl(""), 
    ItemDescription: new FormControl(""), 
    ItemCategory: new FormControl("")
  }); 
// {
//   "name": "Biryani",
//   "description": "Biryani is famous for it's deligious",
//   "price": 450,
//   "discount": 0,
//   "category": "Desi Food"
// }
  onSubmit = (event: Event) => { 
    event.preventDefault(); 
    debugger; 
    console.log(this.itemUploadForm); 
    const payload = {
    name: this.itemUploadForm.value.ItemName,
    description: this.itemUploadForm.value.ItemDescription,
    price: Number(this.itemUploadForm.value.ItemPrice),
    discount: Number(this.itemUploadForm.value.ItemDiscount),
    category: this.itemUploadForm.value.ItemCategory
  };
    this.adminService.addItem(payload).subscribe({
      next:(result) => { 
        console.log(result); 
      }, 
      error: (err)=> { 
        console.log(err); 
      }
    }); 
  }
}
