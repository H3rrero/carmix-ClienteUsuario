import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ViajeService} from "../service/viaje.service";
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private viajeService: ViajeService,
              private cookieService: CookieService) {
  }

  ngOnInit() {
  }

  logOut() {
    this.cookieService.set("user", "");
    this.cookieService.set("token", "");

    this.router.navigate(['/logIn']);
  }

}
