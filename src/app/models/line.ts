export class LineModel {
  chartType: string;
  chartDatasets: { data: number[]; label: string }[];
  chartLabels: string[];
  chartColors: {
    backgroundColor: string,
    borderColor: string,
    borderWidth: number
  }[];
}
