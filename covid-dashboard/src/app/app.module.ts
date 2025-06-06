import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WorldComponentComponent } from './world-component/world-component.component';
import { MapComponentComponent } from './world-map/map-component.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { IndiaComponentComponent } from './india-component/india-component.component';
import { HelpPageComponent } from './help-page/help-page.component';

import { RouterModule } from '@angular/router';
import {appRoutes} from './routerConfig';

import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service';
import { MapIndiaComponent } from './map-india/map-india.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

 import { HttpClientModule } from '@angular/common/http';
 import { IndiaApiService } from './_services/indiaApi.service';
import { IndiaDailyComponent } from './india-daily/india-daily.component';
import { IndiaDailyApiService } from './_services/indiaDailyApi.service';
import { WorldApiService } from './_services/worldApi.service';
import { WorldCountryApiService } from './_services/worldCountry.service';
import { HighchartsChartComponent } from 'highcharts-angular';
import { WorldChartComponent } from './world-chart/world-chart.component';
import { CountryDataButtonComponent } from './country-data-button/country-data-button.component';
import { FilterPipe } from './pipe';
import { MainPipe } from './filter-pipe.module';
import { IndiaTrendComponent } from './india-trend/india-trend.component';
import { DistrictTableComponent } from './district-table/district-table.component';
import { DistrictApiService } from './_services/disctrictData.service';
import { WorldTrendComponent } from './world-trend/world-trend.component';
import { WorldTrendApiService } from './_services/worldTrend.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorldComponentComponent,
    MapComponentComponent,
    ChartComponentComponent,
    IndiaComponentComponent,
    HelpPageComponent,
    MapIndiaComponent,
    IndiaDailyComponent,
    HighchartsChartComponent,
    WorldChartComponent,
    CountryDataButtonComponent,
    IndiaTrendComponent,
    DistrictTableComponent,
    WorldTrendComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    MainPipe
  ],
  providers: [IndiaApiService, IndiaDailyApiService, WorldApiService, WorldCountryApiService, DistrictApiService, WorldTrendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
