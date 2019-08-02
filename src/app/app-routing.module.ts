import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './layouts/login-form/login-form.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthGuard } from './helper/auth.guard';


const routes: Routes = [
  {
    path: "",
    component: LoginFormComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
