import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";
import {  AddProductDTO, AddProductImage, Product, ProductImage } from "../models/product.model";
import { BehaviorSubject, Observable, tap } from "rxjs";
import Swal from "sweetalert2";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    private GetAllItemsURL = `${environment.apiUrl}/Admin/Get-All-Items`;
    private DeleteItemURL = `${environment.apiUrl}/Admin/Delete-Item/`;
    private AddItemURL = `${environment.apiUrl}/Admin/AddItem`;
    private GetAllCategoriesURL = `${environment.apiUrl}/Admin/Get-All-Categories`;
    private UpdateItemURL = `${environment.apiUrl}/Admin/Update-Item?itemID=`;
    private AddItemImageURL = `${environment.apiUrl}/Admin/Upload-ItemImage`;
    constructor(
        private _httpClient: HttpClient
    ) {

    }
    deleteProduct(productID: string){ 
        return this._httpClient.delete(this.DeleteItemURL+productID); 
    }
    addProduct(payload: AddProductDTO) { 
        return this._httpClient.post(this.AddItemURL, payload); 
    }

    fetchCategories() { 
        return this._httpClient.get(this.GetAllCategoriesURL); 
    }
    fetchItems(){ 
        return this._httpClient.get(this.GetAllItemsURL); 
    }
    
}