import { Component, OnInit } from '@angular/core';
import { LIST } from './list-data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list = LIST;
  constructor() { }

  ngOnInit() {
  }

}
