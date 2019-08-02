import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './layouts/login-form/login-form.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { StoreDetailComponent } from './layouts/store-detail/store-detail.component';
import { CustomInterceptor } from './helper/custom-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PageNotFoundComponent,
    DashboardComponent,
    StoreDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
