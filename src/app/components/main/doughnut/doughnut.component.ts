import { Component } from '@angular/core';
import { DoughnutModelData } from './doughnut-data';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
})
export class DoughnutComponent {

  public doughnut = new DoughnutModelData();

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
