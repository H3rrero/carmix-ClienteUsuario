import {Component, OnInit} from '@angular/core';
import {Viaje} from "../model/Viaje";
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private cookieService: CookieService) {
  }

  private viajes: Viaje[];

  ngOnInit() {
    this.viajes = [];
    var id = this.cookieService.get('user');
    var token = this.cookieService.get('token');
    this.userService.getViajesUsuario(id, token).subscribe(viajes => {
      this.viajes = viajes;
    });
  }

}
