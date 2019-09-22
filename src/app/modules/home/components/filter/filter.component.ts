import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterType: string;

  constructor() { }

  ngOnInit() {
  }

  showSecondFilter(filterType: string) {
    this.filterType = filterType;
  }

}
