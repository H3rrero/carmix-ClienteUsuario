import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {ViajeService} from "../service/viaje.service";
import {Viaje} from "../model/Viaje";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {forEach} from "@angular/router/src/utils/collection";
import {User} from "../model/User";

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {

  viaje: Viaje;
  user: number;
  registrado: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private viajeService: ViajeService,
              private cookieService: CookieService) {
    this.viaje = new Viaje();
  }

  ngOnInit() {
    var userC = this.cookieService.get('user');
    this.user = Number(userC);
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => {
        var token = this.cookieService.get("token");
        return this.viajeService.getViaje(+params['id'], this.cookieService.get("token"));
      })
      .subscribe(v => {
        this.viaje = v;
        this.viaje.usuarios.forEach(u => {
          if (u.id == this.user) {
            this.registrado = true;
          }
        });
      });
  }

  unirse() {
    var user = new User();
    user.id = this.user;
    this.viaje.usuarios.push(user);
    var token = this.cookieService.get("token");
    this.viajeService.actualizar(this.viaje, token).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  descargarPDF() {

    this.viajeService.getViajePDF(this.viaje).subscribe(res => {
      if (res) {
        var body = res;

        var binaryData = [];
        binaryData.push(body);
        var blob = new Blob(binaryData, {type: "application/pdf"});
        // let saveAs = require('file-saver');

        // saveAs(blob, this.bill.billnumber + '.pdf', true);


        var link = document.createElement('a');
        window.URL = window.URL || (window as any).webkitURL;
        link.href = window.URL.createObjectURL(blob);
        link.download = this.viaje.id + ".pdf";
        link.click();
      }
    });


  }

}
