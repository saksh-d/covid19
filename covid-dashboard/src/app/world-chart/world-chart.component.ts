import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import { WorldCountryApiService } from '../_services/worldCountry.service';

@Component({
  selector: 'app-world-chart',
  templateUrl: './world-chart.component.html',
  styleUrls: ['./world-chart.component.css']
})
export class WorldChartComponent implements OnInit {

  latWorldCountryData;
  countryCode = [];
  name = [];
  highchartsx = Highcharts;
  series = [];
  chartOptionsx;
  deaths = [];
  confirmed = [];
  recovered = [];

  constructor(private apiService: WorldCountryApiService) { }

  ngOnInit() {
    this.plotGraphWorldCountryData();
  }

  plotGraphWorldCountryData() {
    this.apiService.getWorldData().subscribe((resx: any) => {
      this.latWorldCountryData = resx
      this.showGraph(this.latWorldCountryData);
    });
  }

  private showGraph(worldData) {

    let countryData = worldData['data']
    for (let index in countryData) {
      this.name.push(countryData[index].name);
      this.countryCode.push(countryData[index].code);
      this.deaths.push(countryData[index].latest_data.deaths);
      this.confirmed.push(countryData[index].latest_data.confirmed);
      this.recovered.push(countryData[index].latest_data.recovered);

    }
    // console.log(this.deaths)
    console.log(this.deaths)


    this.chartOptionsx = {
      chart: {
        type: 'column',
        height:"600px",
        zoomType: 'x',
        panning: 'true',
        panKey: 'shift',
        width: 1600,
        spacingLeft: 1,
        spacingRight: 1,
        // backgroundColor: '#515469',
        scrollablePlotArea: {
          minWidth: 500,
          scrollPositionX: 1
        },
        resetZoomButton: {
          position: {
               align: 'left',
              // verticalAlign: 'top', // by default
              x: 0,
              y: -30
          }
      }



        // plotBackgroundImage:'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/news/2020/01_2020/coronavirus_1/1800x1200_coronavirus_1.jpg?resize=*:350px'
      },
      function(chart){
        chart.xAxis[0].setExtremes(0,0);
    },
      title: {
        text: 'Cases in World (Country-wise)',
        style: {
          fontFamily: 'monospace',
          color: "#f00"
        }
      },
        subtitle: {
            text: 'Click and drag to zoom in. Hold down shift key to pan.'
        },
      xAxis: {
        categories: this.name,
        crosshair: true,
        labels: {
          overflow: 'justify',
          style: {
            color: '#F00',
            font: '11px Trebuchet MS, Verdana, sans-serif'
          }
        },
        scrollbar: {
          enabled: true
        },
        startOnTick: false,
        endOnTick: false,
        
    // max: 'Germany',

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
        },
        scrollbar: {
          enabled: true
        },
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
        data: this.confirmed,
        color: 'blue'

      }, {
        name: 'Recovered',
        data: this.recovered,
        color: 'green'
      },
      {

        name: 'Deaths',
        data: this.deaths,
        color: 'red'
      },



      ]
    };

  }
}
