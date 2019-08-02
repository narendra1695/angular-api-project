import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { UserAuthService } from "../services/user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private httpClient: UserAuthService, private route: Router) { }

  canActivate(): boolean {
    if (this.httpClient.loggedIn()) {
      return true;
    } else {
      this.route.navigate([""]);
      return false;
    }
  }
}
