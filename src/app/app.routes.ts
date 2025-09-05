import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: "", 
        redirectTo: "admin",
        pathMatch: "full" 
    },
    {
        path: "auth",
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule), 
        data: { showLayout: false }, 
    }, 
    {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule), 
    }, 
    { 
        path: 'customer',
        loadChildren: () => import('./features/customer/customer.module').then(m => m.CustomerModule), 
        data: { showLayout: true }, // Hide layout for all auth routes
    }
];
