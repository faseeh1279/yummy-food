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

    addProduct(payload: AddProductDTO) { 
        return this._httpClient.post(this.AddItemURL, payload); 
    }

    fetchCategories() { 
        return this._httpClient.get(this.GetAllCategoriesURL); 
    }
    fetchItems(){ 
        return this._httpClient.get(this.GetAllItemsURL); 
    }
    // addItemImage(ItemId: string, ItemImage: File) {
    //     let payload = {
    //         ItemId: ItemId,
    //         File: ItemImage
    //     }
    //     return this._httpClient.post(this.AddItemImageURL, payload);
    // }


    // loadAllItems() {
    //     return this._httpClient.get<Product[]>(this.GetAllItemsURL).subscribe({
    //         next: (response) => {
    //             this.productItems$.next(response);
    //         }
    //     })
    // }

    // addProduct(payload: AddProductDTO) {
    //     return this._httpClient.post<Product>(this.AddItemURL, payload).subscribe({
    //         next: (response) => {
    //             Swal.fire({
    //                 icon: "success", 
    //                 title: "Success", 
    //                 text: `${response.category}`
    //             })
    //             const current = this.productItems$.value;
    //             debugger; 
    //             this.productItems$.next([...current, response]);
    //         },
    //         error: (error) => {
    //             Swal.fire({
    //                 icon: "error",
    //                 title: "Oops...",
    //                 text: `${error.error.text}`
    //             });
    //         }
    //     })
    // }

    // updateProduct(payload: AddProductDTO) {
    //     return this._httpClient.put<Product>(this.UpdateItemURL, payload);
    // }

    // deleteProduct(productId: string) {
    //     return this._httpClient.delete(this.DeleteItemURL + productId).subscribe({
    //         next: () => {
    //             const current = this.productItems$.value;
    //             const updated = current.filter(r => r.id !== productId); 
    //             this.productItems$.next(updated);
    //         },
    //         error: (error) => {
    //             Swal.fire({
    //                 icon: "error",
    //                 title: "Oops...",
    //                 text: `${error.error.text}`
    //             });
    //         }
    //     });
    // }

    // addProductImage(payload: AddProductImage) {
    //     return this._httpClient.post<ProductImage>(this.AddItemImageURL, payload);
    // }


    // getAllCategories() {
    //     return this._httpClient.get(this.GetAllCategoriesURL);
    // }

    // deleteItem(id: string): Observable<void> {
    //     return this._httpClient.delete<void>(`${this.DeleteItemURL}${id}`);
    // }

}