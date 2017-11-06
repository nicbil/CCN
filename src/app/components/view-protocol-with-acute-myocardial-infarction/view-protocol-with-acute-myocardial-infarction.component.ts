import {Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
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
  public pageSize: any = 100;
  public pageSizeOptions: any = [5, 10, 25, 100, 250, 500, 1000];
  public active: any = '';
  public direction: any = '';
  public filter: object = {
    'date_and_time_of_arrival_from': '',
    'date_and_time_of_arrival_before': '',
    'birthday_date_from': '',
    'birthday_date_before': '',
    'gender': {},
    'effect_of_thrombolysis': {},
    'fv': []
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartData:any[] = [
    {data: [0, 0, 0, 0, 0], label: this.translate.instant('normakinez')},
    {data: [0, 0, 0, 0, 0], label: this.translate.instant('gipokinez')},
    {data: [0, 0, 0, 0, 0], label: this.translate.instant('akinez')},
    {data: [0, 0, 0, 0, 0], label: this.translate.instant('diskinez')}
  ];

  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartLabels:string[] = [this.translate.instant('lang_76'), this.translate.instant('lang_77'), this.translate.instant('lang_78'), this.translate.instant('lang_79'), this.translate.instant('lang_80')];

  constructor(private dataService: DataService, private httpService: HttpService, private translate: TranslateService) { }
  displayedColumns = ['first_name', 'last_name', 'patronymic', 'birthday_date', 'gender', 'fv', 'date_and_time_of_arrival'];
  lineTranslationOfTable = ['man'];
  dataSource: ExampleDataSource | null;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() spinner = new EventEmitter<boolean>();

  ngOnInit() {
    this.showTable();
  }

  showTable() {
    this.spinner.emit(true);
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

    this.httpService.Http(JSON.stringify(data), 'get_protocol_infarction_st')
      .subscribe(res => {
        if (res.pageLength) {
          this.pageLength = res.pageLength;
          this.renderLVGChart(res);
          this.dataSource = new ExampleDataSource(res.rows, this.paginator, this, this.translate, this.sort);
        }
        this.spinner.emit(false);
      });
  }

  resetFilter(filterForm) {
    filterForm.reset();
  }

  renderLVGChart(data) {
    this.barChartData = [
      {data: [0, 0, 0, 0, 0], label: this.translate.instant('normakinez')},
      {data: [0, 0, 0, 0, 0], label: this.translate.instant('gipokinez')},
      {data: [0, 0, 0, 0, 0], label: this.translate.instant('akinez')},
      {data: [0, 0, 0, 0, 0], label: this.translate.instant('diskinez')}
    ];

    data.rows.forEach((item, index) => {
      const lvg = JSON.parse(item.lvg);
      if (Object.keys(lvg).length) {
        for (let index in lvg) {
          this.barChartData[lvg[index]-1]['data'][index] += 1;
        }
      }
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