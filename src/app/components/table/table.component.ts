import { Component } from '@angular/core';
import { HEADERS } from './table-data';
import { PEOPLES } from './table-data';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public headers = HEADERS
  public peoples = PEOPLES

  constructor() { }

}
