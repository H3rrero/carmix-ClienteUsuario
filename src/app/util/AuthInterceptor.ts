import {HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpHandler} from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";
import {HttpInterceptor} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookies: CookieService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = this.cookies.get("token");
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ` + token
      },
    });

    return next.handle(req);
  }
}
