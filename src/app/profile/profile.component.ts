import { Component, OnInit } from '@angular/core';
import { BrastlewarkService } from '../brastlewark.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id;
  info = [];
  constructor(private brastlewarkService: BrastlewarkService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.getRouteParam();
    this.getJSON();
  }

  getRouteParam() {
    // obtain Id of url
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  getJSON() {
    this.brastlewarkService.getJSON().subscribe(data => {
      for (const i in data) {
          this.info.push(data[i][this.id]);
      }
    });
  }

}
