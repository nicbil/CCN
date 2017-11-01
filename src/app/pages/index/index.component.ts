import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../translate';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
})
export class IndexComponent implements OnInit {
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56],
    [28, 48, 40, 19, 86],
    [1, 50, 19, 10, 100],
  ];
  public lineChartLabels:Array<any> = [this.translate.instant('lang_76'), this.translate.instant('lang_77'), this.translate.instant('lang_78'), this.translate.instant('lang_79'), this.translate.instant('lang_80')];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';

  // Pie
  public pieChartLabels:string[] = [this.translate.instant('normakinez'), this.translate.instant('gipokinez'), this.translate.instant('akinez')];
  public pieChartData:number[] = [300, 500, 100];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  constructor(private translate: TranslateService) { }

  ngOnInit() {}


}
