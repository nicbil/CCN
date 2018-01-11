import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../translate';
import { DataService } from '../../shared/data.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  providers: [DatePipe, DataService]
})
export class IndexComponent implements OnInit {
  progressSpinnerActive: boolean = false;
  constructor(private translate: TranslateService, private dataService: DataService) { }
  ngOnInit() {}

  spinner(active) {
    this.progressSpinnerActive = active;
  }
}
