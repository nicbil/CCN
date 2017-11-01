import {Component, OnInit, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { HttpService } from '../../shared/http.service';
import { TranslateService } from '../../translate';
import { DataService } from "../../shared/data.service";

export interface UserData {
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'app-view-protocol-with-acute-myocardial-infarction',
  templateUrl: './view-protocol-with-acute-myocardial-infarction.component.html',
  styleUrls: ['./view-protocol-with-acute-myocardial-infarction.component.sass'],
  providers: [HttpService, DataService]
})
export class ViewProtocolWithAcuteMyocardialInfarctionComponent implements OnInit {
  public pageLength: any = 100;
  public pageIndex: any = 0;
  public pageSize: any = 5;
  public pageSizeOptions: any = [5, 10, 25, 100];
  public active: any = '';
  public direction: any = '';

  public filter: object = {
    'date_and_time_of_arrival_from': '',
    'date_and_time_of_arrival_before': ''
  }

  /*start chart*/
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
  /*end*/
  constructor(private dataService: DataService, private httpService: HttpService, private translate: TranslateService) { }
  displayedColumns = ['first_name', 'last_name', 'patronymic', 'birthday_date', 'gender', 'fv', 'date_and_time_of_arrival'];
  lineTranslationOfTable = ['man'];
  dataSource: ExampleDataSource | null;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.showTable();
  }

  showTable() {
    const data = {
      'fields': this.filter,
      'pagination': {
        'pageSize': this.pageSize,
        'pageIndex': this.pageIndex,
      },
      'sort': {
        'active': this.active,
        'direction': this.direction
      }
    };

    console.log(data);
    this.httpService.Http(JSON.stringify(data), 'get_protocol_infarction_st')
    .subscribe(res => {
      console.log(res);
      this.pageLength = res.pageLength;
      this.dataSource = new ExampleDataSource(res.rows, this.paginator, this, this.translate, this.sort);
    });
  }

  tableRow(row, field) {
    if (this.lineTranslationOfTable.indexOf(row[field]) !== -1) {
      return this.translate.instant(row[field]);
    }
    return row[field];
  }
}

export class ExampleDataSource extends DataSource<any> {
  public firstRenderingOfTable = false;
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor(
    private _exampleDatabase: any,
    private _paginator: MatPaginator,
    private _viewProtocolWithAcuteMyocardialInfarctionComponent: ViewProtocolWithAcuteMyocardialInfarctionComponent,
    private translate: TranslateService,
    private _sort: MatSort) {
    super();
  }

  connect(): Observable<UserData[]> {
    this.dataChange.next(this._exampleDatabase);

    const displayDataChanges = [
      this.dataChange,
      this._paginator.page,
      this._sort.sortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      ['itemsPerPageLabel', 'nextPageLabel', 'previousPageLabel'].forEach((item, index) => {
        this._paginator._intl[item] = this.translate.instant(item);
      });

      if (this.firstRenderingOfTable) {
        this._viewProtocolWithAcuteMyocardialInfarctionComponent.pageSize = this._paginator.pageSize;
        this._viewProtocolWithAcuteMyocardialInfarctionComponent.pageIndex = this._paginator.pageIndex;
        this._viewProtocolWithAcuteMyocardialInfarctionComponent.active = this._sort.active;
        this._viewProtocolWithAcuteMyocardialInfarctionComponent.direction = this._sort.direction;
        this._viewProtocolWithAcuteMyocardialInfarctionComponent.showTable();
      }
      this.firstRenderingOfTable = true;
      return this.data;
    });
  }
  disconnect() {}
}