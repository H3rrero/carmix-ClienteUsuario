import {Component, OnInit} from '@angular/core';
import {Viaje} from "../model/Viaje";
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {UserService} from "../service/user.service";
import {ViajeService} from "../service/viaje.service";
import {Provincia} from "../model/Provincia";
import {Location} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private viajeService: ViajeService,
              private cookieService: CookieService) {
  }

  private viajes: Viaje[];
  private provincias: Provincia[];
  private origen:string = "";
  private destino:string = "";

  private viaje:Viaje;

  ngOnInit() {
    this.viajes = [];
    this.viaje = new Viaje();
    var id = this.cookieService.get('user');
    var token = this.cookieService.get('token');
    this.userService.getViajesUsuario(id, token).subscribe(viajes => {
      this.viajes = viajes;
    });

    this.viajeService.getProvincias(token).subscribe(provincias => {
      this.provincias = [];
      for(var i = 0; i < provincias.length ; i++){
        var p = new Provincia();
        p.label = provincias[i];
        p.value = provincias[i];
        this.provincias.push(p);
      }
      this.viaje.origen = this.provincias[0].value;
      this.viaje.destino = this.provincias[0].value;
    })
  }

  search(v:Viaje){
    this.router.navigate(['viajes', v.id]);
  }

  crear(){
    var creador = this.cookieService.get("user");
    var token = this.cookieService.get("token");
    this.viaje.creador = Number(creador);
    this.viajeService.crear(this.viaje, token).subscribe(viaje => {
      if(viaje != null) {
        // this.viajes.push(viaje);
        this.viajes = [...this.viajes, viaje];
      }
    });
  }

  eliminar(v:Viaje){
    var token = this.cookieService.get("token");
    this.viajeService.eliminarViaje(v, token).subscribe(() => {
      var index = this.viajes.indexOf(v);
      this.viajes.splice(index, 1);
      this.viajes = [...this.viajes];

    });
  }
}
