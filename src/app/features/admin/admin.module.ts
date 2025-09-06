import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UploadItemComponent } from './components/forms/upload-item/upload-item.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ItemDetailsComponent } from "./components/tables/item-details/item-details.component";
// import { ChartsModule } from 'ng2-charts';
const routes: Routes = [
  {
    path: "", 
    redirectTo: "admin-dashboard",
    pathMatch: "full"
  },
  { 
    path: "admin-dashboard", 
    component: AdminDashboardComponent, 
    data: { showLayout: true }, // Hide layout for all auth routes
  }
];

@NgModule({
  declarations: [
    AdminDashboardComponent, 
    UploadItemComponent, 
    ItemDetailsComponent
  ],
  providers: [
    provideHttpClient()
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
], 
  exports: [ 
    RouterModule
  ]
})
export class AdminModule { }
