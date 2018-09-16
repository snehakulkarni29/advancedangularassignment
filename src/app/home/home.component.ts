import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'My World';
  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor() { }

  ngOnInit() {
  }

}
