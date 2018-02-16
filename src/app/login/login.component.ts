import {Component, OnInit} from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../service/user.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User;

  constructor(private router: Router,
              private userService: UserService,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.user = new User();
  }

  logIn() {
    this.userService.logIn("", this.user).subscribe(user => {
      this.cookieService.set("user", user.id + "");
      this.cookieService.set("token", user.token);
      if(user.token && user.token != "") {
        this.router.navigate(['/']);
      }
    });


  }

}
