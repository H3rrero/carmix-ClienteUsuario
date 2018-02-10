import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ViajesComponent } from '../viajes/viajes.component';
import { AuthGuard } from './auth-guard.service';

const routes = [
    {
        /*{
         path: '',
         redirectTo: 'home',
         pathMatch: 'full'
         },
         */
        path: '',
        component: ViajesComponent,
        children: [
            // {
            //     path: 'companies',
            //     canActivate: [AuthGuard],
            //     children: [
            //         {
            //             path: '',
            //             component: ListCompaniesComponent
            //         },
            //         {
            //             path: 'newCompany',
            //             component: NewCompanyComponent
            //         },
            //         {
            //             path: 'company/:id',
            //             component: CompanyComponent
            //         },
            //         {
            //             path: 'edit/:id',
            //             component: EditCompanyComponent
            //         }
            //     ]
            // },
        ]

    },
    // {
    //     path: 'logIn',
    //     component: LoginComponent
    // }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}