import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Anecdote } from './../models/anecdote.model';
import { Information } from './../models/information.model';

// URL for api
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getInformations(): Observable<Information[]>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Information[]>(API_URL + '/informations',{ headers }).pipe( catchError(this.handleError) );
  }

  getAnecdotes(): Observable<Anecdote[]>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Anecdote[]>(API_URL + '/anecdotes',{ headers }).pipe( catchError(this.handleError) );
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
