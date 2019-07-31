import { Component, OnInit } from '@angular/core';
import { StoreDetailService } from '../store-detail.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  storeDetailsURL = "http://testapi.halanx.com/stores/";
  private storeDetails = [];
  generated: boolean = true;
  
  constructor(private httpClient: StoreDetailService) { }

  ngOnInit() {
    this.fetchStoreDetails();
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

}
