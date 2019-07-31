import { Component, OnInit } from '@angular/core';
import { StoreDetailService } from '../store-detail.service';
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  storeDetailsURL = "http://testapi.halanx.com/stores/";
  storeHoursURL = "http://testapi.halanx.com/places/place/1/openinghours/";
  storeVisitURL = "http://testapi.halanx.com/stores/dashboard/plots/?visits=true";

  generated: boolean = true;
  private storeDetails = [];
  private hourDetails = [];
  private visitDetails = [];
  
  constructor(private httpClient: StoreDetailService) { }

  ngOnInit() {
    this.fetchStoreDetails();
    this.showHours();
  }

  fetchStoreDetails(this: any) {
    this.httpClient
      .storeDetails(this.storeDetailsURL).subscribe(
        data => {
          this.storeDetails = data;
        },
        error => {
          console.log("Fetching data failed...", error);
          this.generated = false;
          // this.errorMsg = error.statusText
        }
      );
  }

  showHours(this: any) {
    this.httpClient
      .storeHoursDetails(this.storeHoursURL).subscribe(
        data => {
          this.hourDetails = data;
        },
        error => {
          console.log("Fetching data failed...", error);
          this.generated = false;
        }
      );
  }

  submitDate(this: any, formData: any) {

    const params = new HttpParams().set('from_date', formData.from_date).set('to_date', formData.to_date);

    this.httpClient
      .showVisits(this.storeVisitURL, { params }).subscribe(
        data => {
          this.visitDetails = data.visits;
        },
        error => {
          console.log("Fetching data failed...", error);
          this.generated = false;
        }
      );
  }

}
