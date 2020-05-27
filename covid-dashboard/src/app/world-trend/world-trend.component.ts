import { Component, OnInit } from '@angular/core';
import { WorldTrendApiService } from '../_services/worldTrend.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-world-trend',
  templateUrl: './world-trend.component.html',
  styleUrls: ['./world-trend.component.css']
})
export class WorldTrendComponent implements OnInit {

  latWorldTrendData;
  highchartsz = Highcharts;
  series = [];
  chartOptionsz;
  date = [];
  cases = [];
  deaths = [];
  recovered = [];

  constructor(private apiService: WorldTrendApiService) { }

  ngOnInit() {
    this.plotWorldTrend();
  }

  plotWorldTrend(){
    this.apiService.getWorldTrend().subscribe((resz: any) => {
      this.latWorldTrendData = resz
      this.showGraph(this.latWorldTrendData);
    });
  }

  private showGraph(worldTrend){
    let trend = worldTrend['data']
    for (let index in trend) {
      this.date.push(trend[index].Date);
      this.cases.push(trend[index].Confirmed);
      this.deaths.push(trend[index].Deaths);
      this.recovered.push(trend[index].Recovered);
    }

    console.log(this.date)


    this.chartOptionsz = {
      chart: {
        type: 'line',
        height:"600px",
        zoomType: 'x',
        panning: 'true',
        panKey: 'shift',
        width: 1650,
        spacingLeft: 1,
        spacingRight: 1,
         backgroundColor: '#333',
        scrollablePlotArea: {
          minWidth: 7500,
          scrollPositionX: 0
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
    //   function(chart){
    //     chart.xAxis[0].setExtremes(0,0);
    // },
      title: {
        text: 'Cases in World (Time series)',
        style: {
          fontFamily: 'monospace',
          color: "#f00"
        }
      },
        subtitle: {
            text: 'Click and drag to zoom in. Hold down shift key to pan.',
            style: {
              color: '#FFF',}
        },
        legend: {
          color: '#FF0000',
          backgroundColor: '#FCFFC5'
      },
      xAxis: {
        categories: this.date,
        crosshair: true,
        labels: {
          overflow: 'justify',
          style: {
            color: '#FFF',
            font: '11px Trebuchet MS, Verdana, sans-serif'
          }
        },
        scrollbar: {
         
            barBackgroundColor: 'gray',
            barBorderRadius: 7,
            barBorderWidth: 0,
            buttonBackgroundColor: 'gray',
            buttonBorderWidth: 0,
            buttonBorderRadius: 7,
            trackBackgroundColor: 'none',
            trackBorderWidth: 1,
            trackBorderRadius: 8,
            trackBorderColor: '#CCC',
        
          enabled: false
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
            color: '#FFF',
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
        useHTML: true,
        backgroundColor: '#FCFFC5'
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Total Confirmed',
        data: this.cases,
      //   dataSorting: {
      //     enabled: true
      // },
        color: '#6CECDD'
        

      }, {
        name: 'Recovered',
        data: this.recovered,
    //     dataSorting: {
    //     enabled: true
    // },
        color: 'green'
      },
      {

        name: 'Deaths',
        data: this.deaths,
      //   dataSorting: {
      //     enabled: true
      // },
        color: 'red'
      },



      ]
    };

  }
}
