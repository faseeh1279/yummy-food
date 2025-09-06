import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: "", 
        redirectTo: "dashboard/dashboard-page",
        pathMatch: "full" 
    },
    { 
        path: "dashboard", 
        loadChildren: () => import("./features/dashboard/dashboard.module").then(m => m.DashboardModule)
    },
    {
        path: "products", 
        loadChildren: () => import("./features/products/products.module").then(m => m.ProductsModule)
    },
    {
        path: "categories",
        loadChildren: () => import("./features/categories/categories.module").then(m => m.CategoriesModule)
    },
    {
        path: "orders",
        loadChildren: () => import("./features/orders/orders.module").then(m => m.OrdersModule)
    },
    {
        path: "customers", 
        loadChildren: () => import("./features/customers/customers.module").then(m => m.CustomersModule)
    },
    {
        path: "riders", 
        loadChildren: () => import("./features/riders/riders.module").then(m => m.RidersModule)
    },
    {
        path: "complaints", 
        loadChildren: () => import("./features/complaint/complaint.module").then(m => m.ComplaintModule)    
    },
    {
        path: "analytics", 
        loadChildren: () => import("./features/analytics/analytics.module").then(m => m.AnalyticsModule)        
    },
    {
        path: "settings", 
        loadChildren: () => import("./features/settings/settings.module").then(m => m.SettingsModule)        
    }
];
