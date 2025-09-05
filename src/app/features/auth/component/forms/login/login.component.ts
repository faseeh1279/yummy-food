import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss', 
  standalone: false
})
export class LoginComponent {
  itemUploadForm = new FormGroup({
    ItemName: new FormControl(""), 
    ItemDiscount: new FormControl(""), 
    ItemPrice: new FormControl(""), 
    ItemDescription: new FormControl(""), 
  }); 

  onSubmit = () => { 
    // console.log(this.itemUploadForm); 
  }
}
