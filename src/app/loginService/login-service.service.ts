import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  isAuth: boolean = false;
  id: string = "" ;
  connexionId: string = "";
  password: string = "";
  lastName: string = "";
  firstName: string = "";
  email: string = "";
  preferences: string[] = [];

}
