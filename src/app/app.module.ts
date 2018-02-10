import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViajesComponent } from './viajes/viajes.component';
import { AppRoutingModule } from './util/app-routing.module';
import { ViajeService } from './service/viaje.service';
import { HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ViajesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    ViajeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
