import { Component, OnInit } from '@angular/core';
import { BrastlewarkService } from '../brastlewark.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public info = [];
  searchText = '';
  constructor(private brastlewarkService: BrastlewarkService) { 
  }

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
