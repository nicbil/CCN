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

export interface UserData {
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'app-view-protocol-with-acute-myocardial-infarction',
  templateUrl: './view-protocol-with-acute-myocardial-infarction.component.html',
  styleUrls: ['./view-protocol-with-acute-myocardial-infarction.component.sass'],
  providers: [HttpService]
})
export class ViewProtocolWithAcuteMyocardialInfarctionComponent implements OnInit {
  public pageLength: any = 100;
  public pageIndex: any = 0;
  public pageSize: any = 5;
  public pageSizeOptions: any = [5, 10, 25, 100];

  constructor(private httpService: HttpService, private translate: TranslateService) { }
  displayedColumns = ['first_name', 'last_name', 'patronymic', 'birthday_date', 'gender', 'fv'];
  lineTranslationOfTable = ['man'];
  dataSource: ExampleDataSource | null;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.showTable({'pagination': {'pageSize': this.pageSize}});
  }

  showTable(data) {
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
        this._viewProtocolWithAcuteMyocardialInfarctionComponent.showTable({
          'pagination': {
            'pageSize': this._paginator.pageSize,
            'pageIndex': this._paginator.pageIndex
          },
          'sort': {
            'active': this._sort.active,
            'direction': this._sort.direction
          }
        });
      }
      this.firstRenderingOfTable = true;
      return this.data;
    });
  }
  disconnect() {}
}