import { Component, OnInit } from '@angular/core';
import { BrastlewarkService } from '../brastlewark.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  info = [];
  constructor(private brastlewarkService: BrastlewarkService) { }

  ngOnInit() {
    this.getJSON();
  }

  getJSON() {
    this.brastlewarkService.getJSON().subscribe(data => {
      for (const i in data) {
        for (const j in data[i]) {
          this.info.push(data[i][j]);
        }
      }
    });
  }
}
