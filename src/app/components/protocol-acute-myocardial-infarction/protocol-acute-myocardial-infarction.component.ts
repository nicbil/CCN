import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpService } from '../../shared/http.service';
import { DataService } from "../../shared/data.service";
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {split} from "ts-node/dist";
import {number} from "ng2-validation/dist/number";

@Component({
  selector: 'app-protocol-acute-myocardial-infarction',
  templateUrl: './protocol-acute-myocardial-infarction.component.html',
  styleUrls: ['./protocol-acute-myocardial-infarction.component.sass'],
  providers: [DataService, DatePipe, HttpService]
})

export class ProtocolAcuteMyocardialInfarctionComponent implements OnInit {
  transformToStringify: any[] = ['thrombolysis', 'ecg', 'time_intervals', 'lka', 'pka', 'lvg', 'additionally', 'type_interventions', 'ad', 'cd'];
  tables: object = {
    'time_intervals_vertical_count': ['onsetOfSymptoms', 'firstMedicalContact', 'ecg', 'enteringTheHospital',
      'ecgInTheHospital', 'fibrinolysisOrThrombolysis', 'arrivalInAngiography', 'restoringBloodFlow'],
    'lkaHorizontalCount': ['', 'lang_88', 'lang_89', 'lang_81', 'lang_82', 'lang_83', 'lang_86', 'lang_81', 'lang_82', '', '', ''],
    'lkaVerticalCount': ['percent', 'b', 'cm', 'cl', 'cb', 'timiAfter', 'timiBefore'],
    'pkaHorizontalCount': ['lang_9', 'lang_81', 'lang_82', 'lang_83', 'lang_84', 'lang_85', 'lang_86', 'lang_87'],
    'pkaVerticalCount': ['percent', 'b', 'cm', 'cl', 'cb', 'timiAfter', 'timiBefore'],
    'lvgHorizontalCount': ['lang_76', 'lang_77', 'lang_78', 'lang_79', 'lang_80'],
  };
  protocol: object = {
    date_and_time_of_arrival: this.datePipe.transform(new Date(), 'H:mm')+' '+this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
    first_name: '',
    last_name: '',
    patronymic: '',
    birthday_date: '11-08-1989',
    gender: 'man',
    delivered: '',
    killip_type: '',
    effect_of_thrombolysis: 'no',
    thrombolysis: {
      type: 'no',
      data: {}
    },
    ecg: '',
    time_intervals: {
      date: {},
      time: {},
      not_determined: {}
    },
    continuing_pain: 'no',
    increase_segment_st: 'no',
    thrombaspiration: 'thrombus_not_received',
    blood_timi_before: '0',
    blood_timi_after: '0',
    stenosis_diameter_ica_before_chkv: '',
    stenosis_diameter_ica_after_chkv: '',
    additionally: {},
    type_interventions: '',
    lka: {
      percent: [],
      b: [],
      cm: [],
      cl: [],
      cb: [],
      timiAfter: [],
      timiBefore: []
    },
    pka: {
      percent: [],
      b: [],
      cm: [],
      cl: [],
      cb: [],
      timiAfter: [],
      timiBefore: []
    },
    lvg: {},
    cause_of_death: '',
    operator: '',
    date_and_time_of_death: '12:50 13-10-2099',
    fv: '',
    address: '',
    phone: '',
    cd: {
      offOn: 'no',
      type: ''
    },
    ad: {
      c_before: '',
      d_before: '',
      c_after: '',
      d_after: '',
    },
    autocompleteCheckboxShow: false,
    autocompleteParent: false,
    update: ''
  };
  filteredOptionsAutocomplete: Observable<string[]>;
  autocompleteControl: FormControl = new FormControl();
  responseAfterSave: object = {};
  progressSpinnerActive: boolean = false;

  @Input() updateId = new EventEmitter<number>();

  constructor(private datePipe: DatePipe, private httpService: HttpService, private dataService: DataService) {}
  ngOnInit() {
    this.filteredOptionsAutocomplete = this.autocompleteControl.valueChanges
      .debounceTime(400)
      .startWith(null)
      .distinctUntilChanged()
      .switchMap(searchLine => this.searchAutocomplete(searchLine));

    if (typeof(this.updateId) === 'number') {
      this.update(this.updateId);
    }
  }

  spinner(active) {
    this.progressSpinnerActive = active;
  }

  update(id) {
    this.spinner(true);
    return this.httpService.Http({'id': id}, 'get_protocol_infarction_st').subscribe(protocol => {
      this.applyAutocomplete(protocol[0], false);
      this.spinner(false);
      this.protocol['update'] = id;
    });
  }

  searchAutocomplete(searchLine) {
    if (searchLine) {
      return this.httpService.Http(this.protocol, 'auto_complete_protocol_infarction_st').map(protocols => {
        return protocols['rows'];
      });
    }
    return [];
  }

  applyAutocomplete(data, autocompleteCheckboxShow) {
    this.protocol = Object.assign({}, data);
    this.protocol['birthday_date'] = this.transformDate(this.protocol['birthday_date'], true);
    this.protocol['date_and_time_of_arrival'] = this.transformDate(this.protocol['date_and_time_of_arrival'], false);
    this.protocol['date_and_time_of_death'] = this.transformDate(this.protocol['date_and_time_of_death'], false);
    this.protocol['autocompleteCheckboxShow'] = autocompleteCheckboxShow;

    this.transformToStringify.forEach((item) => {
      this.protocol[item] = JSON.parse(this.protocol[item]);
    });
  }

  transformDate(date, onlyDate) {
    if (date) {
      if (onlyDate) {
        return this.datePipe.transform(date, 'dd-MM-yyyy');
      } else {
        const date_and_time = date.split(' ');
        const time = date_and_time[1].split(':');
        return `${time[0]}:${time[1]} ${this.datePipe.transform(date_and_time[0], 'dd-MM-yyyy')}`;
      }
    }
  }

  saveForm(form) {
    this.responseAfterSave = {};
    if (form.valid) {
      this.spinner(true);
      const dataProtocol = Object.assign({}, this.protocol);
      this.transformToStringify.forEach((item) => {
        dataProtocol[item] = JSON.stringify(dataProtocol[item]);
      });

      this.httpService.Http(dataProtocol, 'create_protocol_infarction_st')
        .subscribe(res => {
          if (res.success) {
            this.responseAfterSave = {'success': true};
            this.cancel(form);

            if (this.protocol['update']) {
              location.href = '/';
            }
          } else {
            this.responseAfterSave = {'error': true};
          }
          this.spinner(false);
        });
    } else {
      this.responseAfterSave = {'error': true};
    }
  }

  cancel(form) {
    let that = this;
    form.reset();
    this.autocompleteControl.reset();

    let defaultValuesOfForm = function() {
      that.protocol['date_and_time_of_arrival'] = that.datePipe.transform(new Date(), 'H:mm')+' '+that.datePipe.transform(new Date(), 'dd-MM-yyyy');
      that.protocol['birthday_date'] = '11-08-1989';
      that.protocol['gender'] = 'man';
      that.protocol['effect_of_thrombolysis'] = 'no';
      that.protocol['thrombolysis']['type'] = 'no';
      that.protocol['continuing_pain'] = 'no';
      that.protocol['increase_segment_st'] = 'no';
      that.protocol['thrombaspiration'] = 'thrombus_not_received';
      that.protocol['blood_timi_before'] = '0';
      that.protocol['blood_timi_after'] = '0';
      that.protocol['date_and_time_of_death'] = '12:50 13-10-2099';
      that.protocol['autocompleteCheckboxShow'] = false;
      that.protocol['autocompleteParent'] = false;
    }

    setTimeout(function() {
      defaultValuesOfForm();
    }, 100);
  }
}