import {Component, OnInit} from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../service/user.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {Categoria} from "../model/Categoria";
import {ViajeService} from "../service/viaje.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User;
  private newUser: User;
  private cats: Categoria[];

  constructor(private router: Router,
              private userService: UserService,
              private viajeService: ViajeService,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.user = new User();
    this.newUser = new User();
    this.cats = [];

    this.viajeService.getCategorias("").subscribe(cats =>{
      cats.forEach(cat => {
        cat.value = cat.id;
        cat.label = cat.name;
      });
      this.cats = cats;
      this.newUser.generoMusical = cats[0].value;
    });
  }

  logIn() {
    this.userService.logIn("", this.user).subscribe(user => {
      this.cookieService.set("user", user.id + "");
      this.cookieService.set("token", user.token);
      if (user.token && user.token != "") {
        this.router.navigate(['/']);
      }
    });
  }

  register(){
    this.userService.register("", this.newUser).subscribe(user => {
      this.cookieService.set("user", user.id + "");
      this.cookieService.set("token", user.token);
      if (user.token && user.token != "") {
        this.router.navigate(['/']);
      }
    });
  }

}
