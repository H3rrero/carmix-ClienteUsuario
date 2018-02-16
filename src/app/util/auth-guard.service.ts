import {Injectable}     from '@angular/core';
import {CanActivate, Router}    from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private cookieService: CookieService) {
  }

  canActivate(): boolean {
    // return true;
    var token = this.cookieService.get("token");
    if (token != null && token != "") {
      return true;
    }
    else {
      this.router.navigate(['/logIn']);
      return false;
    }
  }
}
