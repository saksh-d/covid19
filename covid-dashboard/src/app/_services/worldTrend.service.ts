import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable() 
    export class WorldTrendApiService {

        constructor(private httpclient: HttpClient) {}

        getWorldTrend(): Observable<any>{
            // return this.httpclient.get("https://covid2019-api.herokuapp.com/v2/timeseries/global")
            return this.httpclient.get("https://pkgstore.datahub.io/core/covid-19/worldwide-aggregated_json/data/f536fd2a9fe5fb4b658d339d974114ab/worldwide-aggregated_json.json")

        }

    }