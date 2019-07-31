import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  logoutURL = "http://testapi.halanx.com/rest-auth/logout/";

  constructor(private httpClient: UserAuthService, private route: Router, ) { }

  ngOnInit() {
  }

  logoutFuntion() {
    this.httpClient
      .loginUser(this.logoutURL, localStorage.getItem("key")).subscribe(
        data => {
          // console.log("Logout Successful", data);

          localStorage.removeItem("key");

           // navigate user to "" or ROOT location
          this.route.navigate([""]);
        },
        error => {
          console.log("Authentication Failed", error);
          // this.errorMsg = error.statusText
        }
      );
  }
}
