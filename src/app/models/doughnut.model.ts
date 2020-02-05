export class DoughnutModel {
  chartType: string;
  chartDatasets: { data: number[]; label: string }[];
  chartLabels: string[];
  chartColors: {
    backgroundColor: string[],
    hoverBackgroundColor: string[],
    borderWidth: number
  }[];
}
