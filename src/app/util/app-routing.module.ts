import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViajesComponent} from '../viajes/viajes.component';
import {AuthGuard} from './auth-guard.service';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {LoginComponent} from "../login/login.component";
import {HomeComponent} from "../home/home.component";
import {ViajeComponent} from "../viaje/viaje.component";

const routes = [
  {
    /*{
     path: '',
     redirectTo: 'dashboard',
     pathMatch: 'full'
     },
     */
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children:[
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: '',
            component: DashboardComponent
          },
          {
            path: 'viajes',
            children: [
              {
                path: '',
                component: ViajesComponent
              },
              {
                path: ':id',
                component: ViajeComponent
              }
            ]
          }
        ]
      },
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
  {
      path: 'logIn',
      component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
