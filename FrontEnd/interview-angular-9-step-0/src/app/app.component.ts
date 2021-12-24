import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'zi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading: boolean;

  constructor() {}

  ngOnInit() {
  }
}
