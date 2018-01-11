import { Component, OnInit, Output, Input, EventEmitter, Renderer, ViewChildren, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpService } from '../../shared/http.service';
import { DataService } from '../../shared/data.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-infarction',
  templateUrl: './infarction.component.html',
  styleUrls: ['./infarction.component.sass'],
  providers: [DatePipe, HttpService]
})

export class InfarctionComponent implements OnInit {
  transformToStringify: any[] = ['thrombolysis', 'ecg', 'time_intervals', 'lka', 'pka', 'lvg', 'additionally', 'type_interventions',
    'ad', 'cd', 'aortic_valve_or_prosthesis', 'mitral_valve_or_prosthesis', 'pulmonary_artery_valve', 'three_leaf_valve',
    'left_atrium', 'left_ventricle', 'myocardial_contractility', 'general_blood_analysis', 'biochemistry', 'test_substance'];
  tables: object = {
    'time_intervals_vertical_count': ['onsetOfSymptoms', 'firstMedicalContact', 'ecg', 'admission_time_to_hospital',
      'ecgInTheHospital', 'fibrinolysisOrThrombolysis', 'arrivalInAngiography', 'restoringBloodFlow'],
    'lkaHorizontalCount': ['', 'lang_88', 'lang_89', 'lang_81', 'lang_82', 'lang_83', 'lang_86', 'lang_81', 'lang_82', 'lang_83', '', '', '', ''],
    'lkaVerticalCount': ['percent', 'b', 'cm', 'cl', 'cb', 'timiAfter', 'timiBefore'],
    'pkaHorizontalCount': ['lang_9', 'lang_81', 'lang_82', 'lang_83', 'lang_84', 'lang_85', 'lang_86', 'lang_87', 'lang_157'],
    'pkaVerticalCount': ['percent', 'b', 'cm', 'cl', 'cb', 'timiAfter', 'timiBefore'],
    'lvgHorizontalCount': ['lang_76', 'lang_77', 'lang_78', 'lang_79', 'lang_80'],
    'leftVentricleVerticalCount': ['m_mode', 'b_mode'],
    'leftVentricleHorizontalCount': ['lang_133', 'lang_134', 'lang_135', 'lang_136', 'lang_137'],
  };
  filteredOptionsAutocomplete: Observable<string[]>;
  autocompleteControl: FormControl = new FormControl();
  responseAfterSave: object = {};
  public protocol: object =  Object.assign({}, this.dataService.protocol);
  progressSpinnerActive: boolean = false;

  /*1,2,3,7,8,9,12 - Передебоковая, переднеперегородочная*/
  /*13,14,15,16 - Верхушечная*/

  /*5,6,11 - Нижняя*/
  /*4,10 - Заднебоковая, нижнебоковая*/


  /*3,4,9,10 - Перегородочная*/
  segmentsOfMyocardialContractility: any = [
    {'top': 20, 'm_left': 141},
    {'top': 101, 'm_left': 263},
    {'top': 196, 'm_left': 258},
    {'top': 278, 'm_left': 141},
    {'top': 196, 'm_left': 25},
    {'top': 101, 'm_left': 19},
    {'top': 70, 'm_left': 141},
    {'top': 121, 'm_left': 219},
    {'top': 177, 'm_left': 215},
    {'top': 228, 'm_left': 141},
    {'top': 177, 'm_left': 67},
    {'top': 120, 'm_left': 64},
    {'top': 120, 'm_left': 167},
    {'top': 170, 'm_left': 167},
    {'top': 170, 'm_left': 116},
    {'top': 120, 'm_left': 116},
  ];

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
    this.protocol['birthday'] = this.transformDate(this.protocol['birthday'], true);
    this.protocol['admission_time_to_hospital'] = this.transformDate(this.protocol['admission_time_to_hospital'], false);
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
    form.reset();
    this.autocompleteControl.reset();
    setTimeout(() => {
        this.protocol = Object.assign({}, this.dataService.protocol);
    }, 0);
  }
}
