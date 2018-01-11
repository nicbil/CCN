import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class DataService {
  constructor(private datePipe: DatePipe) {}
  public maskDate: any[] = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskTime: any[] = [/\d/, /\d/, ':', /\d/, /\d/];
  public maskDateTime: any[] = [/\d/, /\d/, ':', /\d/, /\d/, ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskPercentage: any[] = [/\d/, /\d/, /\d/];
  public maskPhone: any[] = ['+', '3', /\d/, /\d/, ' ', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  public maskLVG_1_4 = [/[1-4]/];

  public patternDate: any = /^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/;
  public patternTime: any = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))/;
  public patternTimeDate: any = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00)) (0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/;

  public spinner: any = {
    'color': 'primary',
    'mode': 'indeterminate',
    'value': 50
  };

  public protocol: object = {
    admission_time_to_hospital:
      this.datePipe.transform(new Date(), 'hh:mm')+' '+this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
    first_name: 'Биленко',
    last_name: 'Николай',
    patronymic: 'Николаевич',
    birthday: '11-08-1989',
    gender: 'man',
    delivered: '',
    polyclinic: '',
    killip_type: '1',
    effect_of_thrombolysis: '1',
    thrombolysis: {
        type: '1',
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
    lvg_active: '',
    lvg: {},
    cause_of_death: '',
    operator: '',
    date_and_time_of_death: '12:50 13-10-2099',
    fv: '',
    address: '',
    phone: '',
    cd: {
        active: '1',
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
    general_blood_analysis: {},
    biochemistry: {},
    test_substance: {},
    update: ''
  };
}
