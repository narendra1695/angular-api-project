import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginURL = "http://testapi.halanx.com/rest-auth/login/";
  errorMsg = "";

  constructor(private httpClient: UserAuthService) { }

  ngOnInit() {
  }

  loginFuntion(this: any, formData: any) {
    // console.log(formData.name, formData.password);
    this.httpClient
      .loginUser(this.loginURL, {
        username: formData.name,
        password: formData.password
      })
      .subscribe(
        data => {
          // console.log("Authentication Successful", data.key);
          localStorage.setItem("key", data.key); // storing the access_token in the local storage for authentication

          // navigate user to /game location after successful authentication
          // this.route.navigate(["game"]);

        },
        error => {
          // console.log("Authentication Failed", error);
          this.errorMsg = error.statusText
        }
      );
  }

}
