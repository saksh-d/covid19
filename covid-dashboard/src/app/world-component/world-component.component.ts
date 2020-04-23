import { Component, OnInit } from '@angular/core';

import { WorldApiService } from '../_services/worldApi.service';
import { WorldData } from '../classes/worldClass';
import { Chart } from 'angular-highcharts';
import { first } from 'rxjs/operators';
import { Options } from 'highcharts';
import * as _ from 'lodash';
import  * as Highcharts from 'highcharts';

@Component({
  selector: 'app-world-component',
  templateUrl: './world-component.component.html',
  styleUrls: ['./world-component.component.css']
})
export class WorldComponentComponent implements OnInit {

  constructor(private _WorldApiService: WorldApiService) { }

  world:WorldData[];
  loading = true;
  Highcharts: any;
  chartOptions: any;

  ngOnInit() {
    this._WorldApiService.getWorldData()
    .subscribe
    (
      worldData=>
      {
        this.world=worldData;
        
      }
    )
  }
    
  }
