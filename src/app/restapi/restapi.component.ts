import { Component, Input, OnInit  } from '@angular/core';

import { ApiService } from './../api/api.service';
import { Information } from './../models/information.model';
import { Anecdote } from './../models/anecdote.model';
import { User } from './../models/user.model';
import { LoginServiceService } from '../loginService/login-service.service'


@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit {

  constructor(private api:ApiService,public loginService:LoginServiceService) { }

  ngOnInit(): void {
    this.getInformations();
    this.getAnecdotes();
    // this.getUsers();
  }
  
 @Input() wordSearched: string = '';

  isAuthInComponentRestApi: boolean = false;

  onClickSearchWord() {
    console.log("Word searched : '" + this.wordSearched + "'");
    this.getAnecdotesByDescriptionContent(this.wordSearched);
    console.log("User : " + this.loginService.connexionId);
    console.log("Is authenticated : " + this.loginService.isAuth);
    this.isAuthInComponentRestApi = this.loginService.isAuth;
    console.log("Adresse mail : "+ this.loginService.email);
  }
 
  _informations: Information[] = [];

  _anecdotes: Anecdote[] = [];

  _anecdotesByPreferences: Anecdote[] = [];

  _users: User[] = [];

  getInformations() {
    this.api.getInformations()
        .subscribe(
          (data) => { this._informations = data }
        );
  }

  getAnecdotes() {
    this.api.getAnecdotes()
        .subscribe(
          (data) => { this._anecdotes = data }
        );
  }

  getAnecdotesByDescriptionContent(descriptionContent: string) {
    this.api.getAnecdotesByDescriptionContent(descriptionContent)
        .subscribe(
          (data) => { this._anecdotes = data}
        );
  }

  getUsers() {
    this.api.getUsers()
      .subscribe(
        (data) => {this._users = data}
      );
  }

  getUserById(id: string) {
    this.api.getUserById(id)
        .subscribe(
          (data) => { this._users = data}
        );
  }

}



// ==================================================================================================================================================
// Cours Angular :                                                                                                                                  |
// https://openclassrooms.com/fr/courses/4668271-developpez-des-applications-web-avec-angular/5088271-gerez-des-donnees-dynamiques#/id/r-5141363    |
// ==================================================================================================================================================
