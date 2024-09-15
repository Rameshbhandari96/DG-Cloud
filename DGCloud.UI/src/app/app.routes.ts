import { Routes } from '@angular/router';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LayoutComponent } from './layout/components/layout/layout.component';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren: ()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'',
        redirectTo:'/auth/login',
        pathMatch:'full'
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                loadChildren: ()=>import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
            }
        ]
    }
];
