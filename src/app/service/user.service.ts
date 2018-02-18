import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../util/Config';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from "../model/User";
import {CookieService} from "ngx-cookie-service";
import {Viaje} from "../model/Viaje";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
  private cookieService: CookieService) { }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  logIn(token: string, user:User): Observable<User> {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.post<User>(Config.logIn(), user, httpOptions)
      .pipe(catchError(this.handleError<User>('logIn')));
  }


  getViajesUsuario(id: string, token: string) {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.get<Viaje[]>(Config.getViajesUsuario(id), httpOptions)
      .pipe(catchError(this.handleError<Viaje[]>('logIn')));
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  register(token: string, newUser: User) {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.post<User>(Config.registerUser(), newUser, httpOptions)
      .pipe(catchError(this.handleError<User>('logIn')));
  }
}
