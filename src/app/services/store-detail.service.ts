import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { storeDetails } from '../helper/storeDetail';

@Injectable({
  providedIn: 'root'
})

export class StoreDetailService {

  constructor(private httpClient: HttpClient) { }

  storeDetails(baseURL: string): Observable<storeDetails[]> {
    return this.httpClient.get<storeDetails[]>(baseURL)
      .pipe(catchError(this.errorHandler));
  }

  storeHoursDetails(baseURL: string) {
    return this.httpClient.get(baseURL)
      .pipe(catchError(this.errorHandler));
  }

  showVisits(baseURL: string, params: object) {
    return this.httpClient.get(baseURL, params)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
