import { Component, OnInit } from '@angular/core';

import { ApiService } from './../api/api.service';
import { Information } from './../models/information.model';
import { Anecdote } from './../models/anecdote.model';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getInformations();
    this.getAnecdotes();
  }

  _informations : Information[] = [];

  _anecdotes : Anecdote[] = [];

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

}
