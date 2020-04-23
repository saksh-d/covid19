import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable() 
    export class IndiaApiService {

        constructor(private httpclient: HttpClient) {}

        getIndiaData(): Observable<any>{
            return this.httpclient.get("https://api.rootnet.in/covid19-in/stats/history")
        }
        
        //priyanka added code
        getLatestIndiaData(): Observable<any>{
            return this.httpclient.get("https://api.rootnet.in/covid19-in/stats/latest")
            
        }

    }
