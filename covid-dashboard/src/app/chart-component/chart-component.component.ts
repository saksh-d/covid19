import { Component, OnInit, NgModuleFactory, Compiler, SimpleChanges, NO_ERRORS_SCHEMA} from '@angular/core';
import * as Highcharts from 'highcharts';
import { interval, Subscription } from 'rxjs';

import { IndiaApiService } from '../_services/indiaApi.service';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})

export class ChartComponentComponent implements OnInit{
//   latIndiaCovidData;

  
// //   subscription: Subscription;
// //   constructor(private _IndiaApiService: IndiaApiService) {
// //     //var data = [{"key":"Math","value":98},{"key":"Physics","value":78},{"key":"Biology","value":70},{"key":"Chemistry","value":90},{"key":"Literature","value":79}];
// //     this._IndiaApiService.getIndiaData().subscribe(data => {
// //         this.options = {
// //           title : { text : 'India Statewise Data' },
// //           xAxis: {
// //               type: 'State'
// //           },
// //           series: [{
// //               data: data.map(function (point) {
// //                 return [point.data.regional.loc, point.data.regional.confirmedCasesIndian]
// //               }),
// //           }]
// //         };
// //     })
// // }
// // options: Object;

// constructor(private apiService: IndiaApiService){}

// ngOnInit(){
//   this.plotGrpahForLatestIndiaData();
    
// }
// plotGrpahForLatestIndiaData(){
//   this.latIndiaCovidData = this.apiService.getLatestIndiaData()
 
// }

// highcharts1 = Highcharts;

//   chartOptions1 = {
//     chart: {
//       type: 'column'
//   },
//   title: {
//       text: 'Monthly Average Rainfall'
//   },
//   subtitle: {
//       text: 'Source: WorldClimate.com'
//   },
//   xAxis: {
//       categories: [
//           'Jan',
//           'Feb',
//           'Mar',
//           'Apr',
//           'May',
//           'Jun',
//           'Jul',
//           'Aug',
//           'Sep',
//           'Oct',
//           'Nov',
//           'Dec'
//       ],
//       crosshair: true
//   },
//   yAxis: {
//       min: 0,
//       title: {
//           text: 'Count'
//       }
//   },
//   tooltip: {
//       headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//       pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//           '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//       footerFormat: '</table>',
//       shared: true,
//       useHTML: true
//   },
//   plotOptions: {
//       column: {
//           pointPadding: 0.2,
//           borderWidth: 0
//       }
//   },
//   series: [{
//       name: 'Tokyo',
//       data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

//   }, {
//       name: 'New York',
//       data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

//   }, {
//       name: 'London',
//       data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

//   }, {
//       name: 'Berlin',
//       data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

//   }]

//   };
// }


latIndiaCovidData;
  locations = [];
  highcharts = Highcharts;
  series = [];
  chartOptions;
  dischargedPatients = [];
  deathPatients = [];
  totalConfirmedPatients = [];
  totalConfirmesIndians = [];
  totalConfirmedForeigns = []

constructor(private apiService: IndiaApiService){}

ngOnInit(){
  this.plotGrpahForLatestIndiaData();
    
}
plotGrpahForLatestIndiaData() {
  this.apiService.getLatestIndiaData().subscribe((res:any) =>{
    this.latIndiaCovidData = res
    this.showGraph(this.latIndiaCovidData);
  });
}

private showGraph(covidData){
  let regionsData = covidData['data'].regional
  for(let index in regionsData){
    this.locations.push(regionsData[index]['loc']);
    this.dischargedPatients.push(regionsData[index]['discharged']);
    this.deathPatients.push(regionsData[index]['deaths']);
    this.totalConfirmedPatients.push(regionsData[index]['totalConfirmed']);
    this.totalConfirmesIndians.push(regionsData[index]['confirmedCasesIndian']);
    this.totalConfirmedForeigns.push(regionsData[index]['confirmedCasesForeign']);
  }
  console.log(this.locations)

  this.chartOptions = {
    chart: {
      type: 'column',
      height:"600px",
      width: 1600,
      spacingLeft:1,
      spacingRight:1,
      
      zoomType: 'x',
      panning: 'true',
      panKey: 'shift',
      resetZoomButton: {
        position: {
             align: 'left',
            // verticalAlign: 'top', // by default
            x: 0,
            y: -30
        }
      }
      // backgroundColor: '#515469',
      

    
      // plotBackgroundImage:'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/news/2020/01_2020/coronavirus_1/1800x1200_coronavirus_1.jpg?resize=*:350px'
  },
  title: {
      text: 'Cases in India (State-wise)',
      style: {
        fontFamily: 'monospace',
        color: "#f00"
    }
  },
//   subtitle: {
//       text: 'Source: api.rootnet.in'
//   },
subtitle: {
  text: 'Click and drag to zoom in. Hold down shift key to pan.'},
  xAxis: {
      categories: this.locations,
      crosshair: true,
      labels: {
        style: {
           color: '#F00',
           font: '11px Trebuchet MS, Verdana, sans-serif'
        }
    },
    min: 'Afghanistan',
    max: 'Germany'
  },
  yAxis: {
      
      min: -70,
        startOnTick: false,
      title: {
          text: 'Count'
      },
      labels: {
        style: {
           color: '#F00',
           font: '11px Trebuchet MS, Verdana, sans-serif'
        }
    }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y} </b></td></tr>',
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
    name: 'Total Confirmed',
    dataSorting: {
      enabled: true
  },
    data: this.totalConfirmedPatients,
    color:'blue'

  }, {
    name: 'Recovered',
    data: this.dischargedPatients,
    color:'green'},
    {
      
        name: 'Deaths',
        data: this.deathPatients,
        color:'red'}, 
  
  

]
  }
}
}

