import { Component, OnInit, Output, Input, EventEmitter, Renderer, ViewChildren, ViewChild } from '@angular/core';
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
import {selector} from "rxjs/operator/publish";

@Component({
  selector: 'app-protocol-acute-myocardial-infarction',
  templateUrl: './protocol-acute-myocardial-infarction.component.html',
  styleUrls: ['./protocol-acute-myocardial-infarction.component.sass'],
  providers: [DataService, DatePipe, HttpService]
})

export class ProtocolAcuteMyocardialInfarctionComponent implements OnInit {
  transformToStringify: any[] = ['thrombolysis', 'ecg', 'time_intervals', 'lka', 'pka', 'lvg', 'additionally', 'type_interventions',
    'ad', 'cd', 'aortic_valve_or_prosthesis', 'mitral_valve_or_prosthesis', 'pulmonary_artery_valve', 'three_leaf_valve',
    'left_atrium', 'left_ventricle', 'myocardial_contractility'];
  tables: object = {
    'time_intervals_vertical_count': ['onsetOfSymptoms', 'firstMedicalContact', 'ecg', 'enteringTheHospital',
      'ecgInTheHospital', 'fibrinolysisOrThrombolysis', 'arrivalInAngiography', 'restoringBloodFlow'],
    'lkaHorizontalCount': ['', 'lang_88', 'lang_89', 'lang_81', 'lang_82', 'lang_83', 'lang_86', 'lang_81', 'lang_82', '', '', ''],
    'lkaVerticalCount': ['percent', 'b', 'cm', 'cl', 'cb', 'timiAfter', 'timiBefore'],
    'pkaHorizontalCount': ['lang_9', 'lang_81', 'lang_82', 'lang_83', 'lang_84', 'lang_85', 'lang_86', 'lang_87'],
    'pkaVerticalCount': ['percent', 'b', 'cm', 'cl', 'cb', 'timiAfter', 'timiBefore'],
    'lvgHorizontalCount': ['lang_76', 'lang_77', 'lang_78', 'lang_79', 'lang_80'],
    'leftVentricleVerticalCount': ['m_mode', 'b_mode'],
    'leftVentricleHorizontalCount': ['lang_133', 'lang_134', 'lang_135', 'lang_136', 'lang_137'],
  };
  protocol: object = {
    date_and_time_of_arrival: this.datePipe.transform(new Date(), 'H:mm')+' '+this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
    first_name: 'Биленко',
    last_name: 'Николай',
    patronymic: 'Николаевич',
    birthday_date: '11-08-1989',
    gender: 'man',
    delivered: '',
    killip_type: '1',
    effect_of_thrombolysis: 'no',
    thrombolysis: {
      type: 'no',
      data: {}
    },
    ecg: 'Передний, подъем ST (V1-V4)',
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
    stenosis_diameter_ica_before_chkv: '2',
    stenosis_diameter_ica_after_chkv: '3',
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
    aortic_valve_or_prosthesis: {
      valve_or_prosthesis: '',
      max_gradient: '',
      effective_area_holes: '',
      regurgitation: '',
      features: ''
    },
    mitral_valve_or_prosthesis: {
      valve_or_prosthesis: '',
      max_gradient: '',
      effective_area_holes: '',
      regurgitation: '',
      features: ''
    },
    pulmonary_artery_valve: {
      regurgitation: '',
      features: ''
    },
    three_leaf_valve: {
      effective_area_holes: '',
      regurgitation: '',
      features: ''
    },
    aorta: '',
    left_atrium: {
      size_0: '',
      size_1: '',
      size_2: ''
    },
    left_ventricle: {
      size_diastolic: '',
      size_systolic: '',
      scope_lv: {},
      thickness_of_myocardium_diastolic: '',
      thickness_of_myocardium_systolic: '',
      mass_myocardium: '',
    },
    myocardial_contractility: {},
    autocompleteCheckboxShow: false,
    autocompleteParent: false,
    update: ''
  };
  filteredOptionsAutocomplete: Observable<string[]>;
  autocompleteControl: FormControl = new FormControl();
  responseAfterSave: object = {};
  progressSpinnerActive: boolean = false;
  segmentsOfMyocardialContractility: any = {
    0: {'top': 32, 'm_left': 93, position: 0},
    1: {'top': 32, 'm_left': 181, position: 1},
    2: {'top': 127, 'm_left': 130, position: 11},
    3: {'top': 120, 'm_left': 75, position: 15},
    4: {'top': 80, 'm_left': 112, position: 16},
    5: {'top': 100, 'm_left': 25, position: 17},
    6: {'top': 80, 'm_left': 169, position: 2},
    7: {'top': 127, 'm_left': 156, position: 10},
    8: {'top': 116, 'm_left': 204, position: 4},
    9: {'top': 100, 'm_left': 257, position: 3},
    10: {'top': 184, 'm_left': 27, position: 18},
    11: {'top': 167, 'm_left': 78, position: 13},
    12: {'top': 156, 'm_left': 129, position: 12},
    13: {'top': 200, 'm_left': 118, position: 14},
    14: {'top': 255, 'm_left': 96, position: 19},
    15: {'top': 157, 'm_left': 157, position: 9},
    16: {'top': 200, 'm_left': 168, position: 8},
    17: {'top': 255, 'm_left': 189, position: 7},
    18: {'top': 167, 'm_left': 203, position: 5},
    19: {'top': 185, 'm_left': 256, position: 6}
  };

  dataCircle = [
    {'title': 'lang_149', 'color': '#7cf17c'},
    {'title': 'lang_150', 'color': '#7c6beb'},
    {'title': 'lang_151', 'color': '#903030'},
    {'title': 'lang_152', 'color': '#f12f59'},
  ];

  @Input() updateId = new EventEmitter<number>();

  @ViewChild('segments')
    public segments;

  constructor(private datePipe: DatePipe,
              private httpService: HttpService,
              private dataService: DataService,
              private _renderer: Renderer) {}
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

  setColor(sector, position) {
    --sector;
    this._renderer.setElementStyle(this.segments.nativeElement.children[position], 'fill',
      (this.dataCircle[sector] && this.dataCircle[sector]['color']) ? this.dataCircle[sector]['color'] : '#fd9fb3');
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