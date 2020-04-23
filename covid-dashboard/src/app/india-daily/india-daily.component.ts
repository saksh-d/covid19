import { Component, OnInit } from '@angular/core';
import { IndiaDailyApiService } from '../_services/indiaDailyApi.service';

import { IndiaDailyClass } from '../classes/indiaDailyClass';

@Component({
  selector: 'app-india-daily',
  templateUrl: './india-daily.component.html',
  styleUrls: ['./india-daily.component.css']
})
export class IndiaDailyComponent implements OnInit {

  constructor(private _IndiaDailyApiService: IndiaDailyApiService) { }

  daily:IndiaDailyClass[];

  ngOnInit() {

    this._IndiaDailyApiService.getDailyIndiaData()
    .subscribe
    (
      dailyData=>
      {
        this.daily=dailyData;
      }
    )

  }

}
