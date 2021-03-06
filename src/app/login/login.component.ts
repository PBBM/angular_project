import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { User } from '../models/user.model';
import { LoginServiceService } from '../loginService/login-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService, public loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

  @Input() connexionIdFilled: string = '';
  @Input() passwordFilled: string = '';
  @Input() connexionIdUpdated: string = '';
  @Input() firstNameUpdated: string = '';
  @Input() lastNameUpdated: string = '';
  @Input() passwordUpdated: string = '';
  @Input() preferencesUpdated: string = '';
  @Input() emailUpdated: string = '';

  isAuthInLoginComponent: boolean = false;

  _users: User[] = [];

  onClickModifyButton() {
    console.log(this.connexionIdUpdated);
    console.log(this.firstNameUpdated);
    console.log(this.lastNameUpdated);
    console.log(this.passwordUpdated);
    console.log(this.preferencesUpdated);
    console.log(this.emailUpdated);
  }

  onClickDeleteButton() {

  }

  onClickConnexion() {
    console.log("Tentative de connexion de la part de " +this.connexionIdFilled+ ", mot de passe : " +this.passwordFilled);
    this.api.getUsers()
    .subscribe(
      (data) => {this._users = data}
    );
    for (const user of this._users) {
      if (user.connexionId == this.connexionIdFilled && user.password == this.passwordFilled) {
        console.log("Connexion success !");
        console.log("User : " + user.connexionId)
        this.loginService.isAuth = true;
        this.loginService.id = user.id;
        console.log(this.loginService.id);
        this.loginService.connexionId = user.connexionId;
        console.log(this.loginService.connexionId);
        this.loginService.password = user.password;
        console.log(this.loginService.password);
        this.loginService.lastName = user.lastName;
        console.log(this.loginService.lastName);
        this.loginService.firstName = user.firstName;
        console.log(this.loginService.firstName);
        this.loginService.email = user.email;
        console.log(this.loginService.email);
        this.loginService.preferences = user.preferences;
        console.log(this.loginService.preferences);
        console.log("Is authenticated : " + this.loginService.isAuth);
        this.isAuthInLoginComponent = true;
        break;
      } else {
        console.log("Connexion failed");
        console.log("Is authenticated : " + this.loginService.isAuth);
        break;
      }
    }
  }
}
