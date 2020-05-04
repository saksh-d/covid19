import { Component, OnInit } from '@angular/core';
import { IndiaDailyApiService } from '../_services/indiaDailyApi.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-india-trend',
  templateUrl: './india-trend.component.html',
  styleUrls: ['./india-trend.component.css']
})
export class IndiaTrendComponent implements OnInit {

  latIndiaCovidData;
  highchartsy = Highcharts;
  series = [];
  chartOptionsy;
  date = [];
  cases = [];
  
  constructor(private apiService: IndiaDailyApiService){}
  
  ngOnInit(){
  this.plotGrpahForLatestIndiaData();
    
  }
  plotGrpahForLatestIndiaData() {
  this.apiService.getDailyIndiaData().subscribe((res:any) =>{
    this.latIndiaCovidData = res
    this.showGraph(this.latIndiaCovidData);
  });
  }
  
  private showGraph(dailyCases){
  let regionsData = dailyCases['data']
  for(let index in regionsData){
    this.date.push(regionsData[index].day);
    this.cases.push(regionsData[index].summary.total);
    
  }
  console.log(this.date)
  
  this.chartOptionsy = {
    chart: {
      type: 'column',
      height:"600px",
      width: 1200,
      spacingLeft:1,
      spacingRight:1,
      zoomType: 'x',
      panning: 'true',
      panKey: 'shift',
      // scrollablePlotArea: {
      //     minWidth: 5000,
      //     scrollPositionX: 0
      //   },
        resetZoomButton: {
          position: {
               align: 'left',
              // verticalAlign: 'top', // by default
              x: 0,
              y: -30
          }
      }
      // plotBackgroundColor: '#0e3342',
    
      //plotBackgroundImage:'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/news/2020/01_2020/coronavirus_1/1800x1200_coronavirus_1.jpg?resize=*:350px'
  },
  title: {
      text: 'Total cases (Time series)'
  },
  subtitle: {
      text: 'Click and drag to zoom in. Hold down shift key to pan.'
  },
  xAxis: {
      categories: this.date,
      crosshair: true,
      
  },
  yAxis: {
      
      min: -70,
        startOnTick: false,
      title: {
          text: 'Count'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y} patients</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: 'Total cases',
      // dataSorting: {
      //     enabled: true,
      //     matchByName: true
      // },
      data: this.cases,
      color:'blue'
  } , 
  
  ]
  };
  }}
