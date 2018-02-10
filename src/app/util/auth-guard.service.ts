import { Injectable }     from '@angular/core';
import {CanActivate, Router}    from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate():boolean {
        return true;
        // var token = this.cookieService.get("token");
        // if(token != null){
        //     return true;
        // }
        // else{
        //     this.router.navigate(['/logIn']);
        //     return false;
        // }
    }
}