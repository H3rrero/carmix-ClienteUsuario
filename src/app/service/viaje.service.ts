import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Viaje } from '../model/Viaje';
import { Config } from '../util/Config';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {Provincia} from "../model/Provincia";
import {Categoria} from "../model/Categoria";
import {ResponseContentType} from "@angular/http";
import {headersToString} from "selenium-webdriver/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ViajeService {

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

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

  getViajes(token: string): Observable<Viaje[]> {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.get<Viaje[]>(Config.findViajes(), httpOptions).pipe(catchError(this.handleError('getViajes', [])));
  }

  getViaje(viaje:number, token: string): Observable<Viaje> {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.get<Viaje>(Config.findViaje(viaje), httpOptions).pipe(catchError(this.handleError('getViaje/'+viaje, null)));
  }


  getProvincias(token: string): Observable<string[]> {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.get<string[]>(Config.getProvincias(), httpOptions).pipe(catchError(this.handleError('provincias/', [])));

  }

  crear(viaje: Viaje, token: string): Observable<Viaje>  {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.post<Viaje>(Config.crearViaje(), viaje, httpOptions).pipe(catchError(this.handleError('crearviaje/', null)));
  }

  actualizar(viaje: Viaje, token: string) {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.put(Config.actualizarViaje(), viaje, httpOptions).pipe(catchError(this.handleError('actualizarviaje/', null)));
  }

  getCategorias(token: string): Observable<Categoria[]> {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.get<Categoria[]>(Config.getCategrias(), httpOptions).pipe(catchError(this.handleError('cat/', [])));
  }

  eliminarViaje(v: Viaje, token: string) {
    var header = this.headers;
    header.set("Authorization", "Bearer " + token);
    return this.http.delete(Config.deleteViaje(v.id), httpOptions).pipe(catchError(this.handleError('deleteViaje')));
  }

  getViajePDF(v: Viaje): Observable<Object> {
    return this.http.get(Config.findViajePDF(v.id), {responseType: 'blob'}).pipe(catchError(this.handleError('getViajePDF/', null)));
  }
}
