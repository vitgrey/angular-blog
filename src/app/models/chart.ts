export class ChartModel {
  chartType: string;
  chartDatasets: { data: number[]; label: string }[];
  chartLabels: string[];
  chartColors: {
    backgroundColor: string[],
    hoverBackgroundColor: string[],
    borderWidth: number
  }[];
}