import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.sass']
})
export class BaseLayoutComponent implements OnInit {

  leftSidenavOpen = true;
  selectedProperty: string;

  constructor() {
    this.selectedProperty = '10000';
  }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.leftSidenavOpen = !this.leftSidenavOpen;
  }

}
