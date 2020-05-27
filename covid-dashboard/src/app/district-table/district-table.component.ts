import { Component, OnInit } from '@angular/core';
import { DistrictApiService } from '../_services/disctrictData.service';
import { DistrictData } from '../classes/districtClass';

@Component({
  selector: 'app-district-table',
  templateUrl: './district-table.component.html',
  styleUrls: ['./district-table.component.css']
})
export class DistrictTableComponent implements OnInit {

  constructor(private apiService: DistrictApiService) { }

  districts: DistrictData[];

  ngOnInit() {
    this.apiService.getDistrictData()
    .subscribe
    (
      data => {
        this.districts = data;
      }
    )

  }

  // fetchDistrictData(){
  //   this.obj = {LocationName:'abc', Stock:'cdf'};
  //   this.godowns = [];
  //   this.godowns.push(this.obj);
  // }
  }

  // onKey(event: any) {
  //   var input1, filter1, table1, tr, td, i;
  //   input1 = document.getElementById("myInput");
  //   filter1 = input1.value.toUpperCase();
  //   table1 = document.getElementById("myTable");
  //   tr = table1.getElementsByTagName("tr");
  //   for (i = 0; i < tr.length; i++) {
  //     td = tr[i].getElementsByTagName("td")[0];
  //     if (td) {
  //       if (td.innerHTML.toUpperCase().indexOf(filter1) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }
  //   }
  // }


