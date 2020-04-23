import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable() 
    export class WorldCountryApiService {

        constructor(private httpclient: HttpClient) {}

        getWorldData(): Observable<any>{
            // return this.httpclient.get("https://covid2019-api.herokuapp.com/v2/timeseries/global")
            return this.httpclient.get("https://corona-api.com/countries")

        }

    }