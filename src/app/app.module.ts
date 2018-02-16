import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViajesComponent } from './viajes/viajes.component';
import { AppRoutingModule } from './util/app-routing.module';
import { ViajeService } from './service/viaje.service';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {CookieService} from "ngx-cookie-service";
import {AuthGuard} from "./util/auth-guard.service";
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "./service/user.service";
import { ViajeComponent } from './viaje/viaje.component';


@NgModule({
  declarations: [
    AppComponent,
    ViajesComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    ViajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,

    CookieService,
    AuthGuard,

    UserService,
    ViajeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
