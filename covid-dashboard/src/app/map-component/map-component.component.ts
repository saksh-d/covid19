import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent implements OnInit{
  name = 'Angular';
  map:any;

  ngOnInit() {
    this.map = L.map('map').setView([26.51, -.01], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    // Makerを配置
    // L.marker([0, 0]).bindPopup('<b>Hello!!</b>').addTo(this.map);

    // antPolyline = L.polyline.antPath(latlngs, options);
    // antPolyline.addTo(map);
  
    // https://github.com/rubenspgcavalcante/leaflet-ant-path
  }
}
