import { Component, OnInit } from '@angular/core';
import { IndiaApiService } from '../_services/indiaApi.service';

import { IndiaClass } from '../classes/indiaClass';

@Component({
  selector: 'app-india-component',
  templateUrl: './india-component.component.html',
  styleUrls: ['./india-component.component.css']
})

 export class IndiaComponentComponent implements OnInit {
  
  constructor(private _IndiaApiService: IndiaApiService) { }

  info:IndiaClass[]

  
  ngOnInit() {
    this._IndiaApiService.getIndiaData()
    .subscribe
    (
      data=>
      {
        this.info = data;
      }
    )
  }


  
 }