import { Component, OnInit } from '@angular/core';
import { StoreDetailService } from '../store-detail.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  storeDetailsURL = "http://testapi.halanx.com/stores/";
  storeHoursURL = "http://testapi.halanx.com/places/place/1/openinghours/";

  generated: boolean = true;
  private storeDetails = [];
  private hourDetails = [];
  
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
          // this.errorMsg = error.statusText
        }
      );
  }

}
