import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private _translate: TranslateService) {}

  ngOnInit() {
    this._translate.use('ru');
  }
}