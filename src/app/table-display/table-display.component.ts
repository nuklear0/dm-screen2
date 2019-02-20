import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableDisplayComponent implements OnInit {

  src: string;
  selected: string;
  externalUrl: string;
  internalUrl: string;

  constructor() {
  }

  ngOnInit() {
    this.selected = 'combat';
    this.externalUrl = '/dm-screen2/assets/images/';
    this.internalUrl = '/assets/images/';
    this.src = this.internalUrl + this.selected + '.jpg';
  }

  getImageGH() {
       this.src = this.externalUrl + this.selected + '.jpg';
  }

}
