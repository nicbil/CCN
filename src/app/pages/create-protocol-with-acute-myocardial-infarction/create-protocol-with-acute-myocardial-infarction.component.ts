import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpService } from '../../shared/http.service';

@Component({
  selector: 'app-create-protocol-with-acute-myocardial-infarction',
  templateUrl: './create-protocol-with-acute-myocardial-infarction.component.html',
  styleUrls: ['./create-protocol-with-acute-myocardial-infarction.component.sass'],
  providers: [DatePipe, HttpService]
})
export class CreateProtocolWithAcuteMyocardialInfarctionComponent implements OnInit {
  transformToStringify: any[] = ['thrombolysis','ecg','time_intervals','lka','pka','lvg','additionally','type_interventions'];
  maskDate: any[] = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  maskTime: any[] = [/\d/, /\d/, ':', /\d/, /\d/];
  maskDateTime: any[] = [/\d/, /\d/, ':', /\d/, /\d/, ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  maskPercentage: any[] = [/\d/, /\d/, /\d/];

  patternPercentage = /^[0-9]|[0-2][0-9]|3[0-6]$/;
  patternDate: any = /^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/;
  patternTime: any = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))/;
  patternTimeDate: any = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00)) (0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/;

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
    fv: ''
  };
  warning_save: boolean = false;
  succes_save: boolean = false;
  constructor(private datePipe: DatePipe, private httpService: HttpService) {}

  ngOnInit() {
    console.log();
  }

  send(form) {
    this.warning_save = false;
    this.succes_save = false;
    if (form.valid) {
      const dataProtocol = Object.assign({}, this.protocol);
      this.transformToStringify.forEach((item, index) => {
        dataProtocol[item] = JSON.stringify(dataProtocol[item]);
      });

      this.httpService.Http(dataProtocol, 'create_protocol_infarction_st')
      .subscribe(res => {
        if (res.success) {
          this.succes_save = true;
        } else {
          this.warning_save = true;
        }
      });
    } else {
      this.warning_save = true;
    }
  }
}