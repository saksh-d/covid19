import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable() 
    export class DistrictApiService {

        constructor(private httpclient: HttpClient) {}

        getDistrictData(): Observable<any>{
            return this.httpclient.get("https://api.covid19india.org/v2/state_district_wise.json")
        }

    }