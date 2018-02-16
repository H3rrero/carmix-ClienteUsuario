import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {ViajeService} from "../service/viaje.service";
import {Viaje} from "../model/Viaje";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {

  viaje: Viaje;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private viajeService: ViajeService,
              private cookieService: CookieService) {
    this.viaje = new Viaje();
  }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => {
        var token = this.cookieService.get("token");
        return this.viajeService.getViaje(+params['id'], this.cookieService.get("token"));
      })
      .subscribe(v => {
        this.viaje = v
      });
  }

}
