import { Component, OnInit } from '@angular/core';
import { StoreDetailService } from '../../services/store-detail.service';
import { HttpParams, HttpHeaders } from "@angular/common/http";

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
  storeDetails: any;
  hourDetails: any;
  visitDetails: any;

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

  updateHours(this: any, formData: any) {

    let value = [
      {
        "id": 1,
        "weekday": "Monday",
        "from_hour": formData.from_time_m+":00",
        "to_hour": formData.to_time_m+":00",
        "place": 1
      },
      {
        "id": 2,
        "weekday": "Tuesday",
        "from_hour": formData.from_time_t + ":00",
        "to_hour": formData.to_time_t + ":00",
        "place": 1
      },
      {
        "id": 3,
        "weekday": "Wednesday",
        "from_hour": formData.from_time_w + ":00",
        "to_hour": formData.to_time_w + ":00",
        "place": 1
      },
      {
        "id": 4,
        "weekday": "Thursday",
        "from_hour": formData.from_time_th + ":00",
        "to_hour": formData.to_time_th + ":00",
        "place": 1
      },
      {
        "id": 5,
        "weekday": "Friday",
        "from_hour": formData.from_time_f + ":00",
        "to_hour": formData.to_time_f + ":00",
        "place": 1
      },
      {
        "id": 6,
        "weekday": "Saturday",
        "from_hour": formData.from_time_sa + ":00",
        "to_hour": formData.to_time_sa + ":00",
        "place": 1
      },
      {
        "id": 7,
        "weekday": "Sunday",
        "from_hour": formData.from_time_su + ":00",
        "to_hour": formData.to_time_su + ":00",
        "place": 1
      }
    ]

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    this.httpClient.updateStoreHours(this.storeHoursURL, value , { options }).subscribe(
      data => {
        this.ngOnInit();
      }, error => {
        console.log(error);
      }
    )
  }

  submitDate(this: any, visitTill: any) {

    const params = new HttpParams().set('to_date', visitTill);

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
