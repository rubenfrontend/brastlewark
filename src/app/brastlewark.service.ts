import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrastlewarkService { 
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
    });
  }
  
  public getJSON(): Observable<any> {
    const apiUrl = '../assets/data/data.json';
    return this.http.get(apiUrl);
  }
}



