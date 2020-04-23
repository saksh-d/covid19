import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable() 
    export class IndiaDailyApiService {

        constructor(private httpclient: HttpClient) {}

        getDailyIndiaData(): Observable<any>{
            return this.httpclient.get("https://api.rootnet.in/covid19-in/stats/history")
        }

    }
