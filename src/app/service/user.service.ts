import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Viaje } from '../model/Viaje';
import { Config } from '../util/Config';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  

}
