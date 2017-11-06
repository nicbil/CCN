export class DataService {
  public maskDate: any[] = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskTime: any[] = [/\d/, /\d/, ':', /\d/, /\d/];
  public maskDateTime: any[] = [/\d/, /\d/, ':', /\d/, /\d/, ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskPercentage: any[] = [/\d/, /\d/, /\d/];

  public patternPercentage = /^[0-9]|[0-2][0-9]|3[0-6]$/;
  public patternDate: any = /^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/;
  public patternTime: any = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))/;
  public patternTimeDate: any = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00)) (0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/;

  public spinner: any = {
    'color': 'primary',
    'mode': 'indeterminate',
    'value': 50
  }
}