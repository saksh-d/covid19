import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-india',
  templateUrl: './map-india.component.html',
  styleUrls: ['./map-india.component.css']
})
export class MapIndiaComponent implements OnInit {

  name = 'IndiaMap';
  map:any;

  ngOnInit() {
    this.map = L.map('map').setView([25.698, 82.749], 4.5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

}
