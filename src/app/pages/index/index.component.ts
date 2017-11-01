import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../translate';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
})
export class IndexComponent implements OnInit {
  constructor(private translate: TranslateService) { }
  ngOnInit() {}
}
