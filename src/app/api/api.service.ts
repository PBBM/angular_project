import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Anecdote } from './../models/anecdote.model';
import { Information } from './../models/information.model';
import { User } from '../models/user.model';
import { stringify } from '@angular/compiler/src/util';

// URL for api
const API_NODEJS_URL = environment.apiNodejsUrl;
const API_SPRING_URL = environment.apiSpringUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //====   Requêtes sur API NodeJS   ============
  getInformations(): Observable<Information[]>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Information[]>(API_NODEJS_URL + '/informations',{ headers }).pipe( catchError(this.handleError) );
  }

  getAnecdotes(): Observable<Anecdote[]>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Anecdote[]>(API_NODEJS_URL + '/anecdotes',{ headers }).pipe( catchError(this.handleError) );
  }

  getAnecdotesByDescriptionContent(descriptionContent: string): Observable<Anecdote[]>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Anecdote[]>(API_NODEJS_URL + '/anecdotesByDescriptionContent/' + descriptionContent,{ headers }).pipe( catchError(this.handleError) );  
  }
  //=============================================


  //====   Requêtes sur API Spring   ============
  getUsers(): Observable<User[]>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<User[]>(API_SPRING_URL + '/map/users',{ headers }).pipe( catchError(this.handleError) );
  }
  getUserById(id: string): Observable<User[]>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<User[]>(API_SPRING_URL + '/user/' + id,{ headers }).pipe( catchError(this.handleError) );
  }

  //=============================================

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }
}