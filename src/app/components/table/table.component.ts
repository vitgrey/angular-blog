import { Component } from '@angular/core';
import { TableModelData } from './table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  public headers = new TableModelData();
  public peoples = new TableModelData();

  constructor() { }

}
