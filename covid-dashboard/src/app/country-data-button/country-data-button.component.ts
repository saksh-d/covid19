import { Component, OnInit } from '@angular/core';

import { WorldCountryApiService } from '../_services/worldCountry.service';

import { CountryData } from '../classes/countryClass';
import { CountryName } from '../classes/countryName';



@Component({
  selector: 'app-country-data-button',
  templateUrl: './country-data-button.component.html',
  styleUrls: ['./country-data-button.component.css']
})
export class CountryDataButtonComponent implements OnInit {

  constructor(private apiService: WorldCountryApiService) { }

  innfo: CountryData[];
  

  ngOnInit() {
    this.apiService.getWorldData()
    .subscribe
    (
      data=>
      {
        this.innfo = data;
      }
    )
  }

  }


