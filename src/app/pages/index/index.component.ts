import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../translate';
import { DataService } from "../../shared/data.service";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  providers: [DataService]
})
export class IndexComponent implements OnInit {
  progressSpinnerActive: boolean = false;
  constructor(private translate: TranslateService, private dataService: DataService) { }
  ngOnInit() {}

  spinner(active) {
    this.progressSpinnerActive = active;
  }
}
