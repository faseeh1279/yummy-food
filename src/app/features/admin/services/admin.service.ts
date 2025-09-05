import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    
    private addItemURL = `${environment.apiUrl}/Admin/AddItem`; 
    private getItemsURL = `${environment.apiUrl}/Admin/Get-All-Items`; 


    constructor(
      public httpClient: HttpClient  
    ){}


    addItem = (data:any):Observable<any> => { 
        return this.httpClient.post(this.addItemURL, data); 
    }

    fetchItems = (): Observable<any> => { 
        return this.httpClient.get(this.getItemsURL); 
    }
}