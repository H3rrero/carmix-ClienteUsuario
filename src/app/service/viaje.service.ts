import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Viaje } from '../model/Viaje';
import { Config } from '../util/Config';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ViajeService {

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });



  getViajes(token: string): Observable<Viaje[]> {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.get<Viaje[]>(Config.findViajes(), httpOptions).pipe(catchError(this.handleError('getViajes', [])));
  }

  getViaje(viaje:number, token: string): Observable<Viaje[]> {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.get<Viaje[]>(Config.findViaje(viaje), httpOptions).pipe(catchError(this.handleError('getViaje', [])));
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

}
