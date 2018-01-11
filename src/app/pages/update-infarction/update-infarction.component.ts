import {Component, OnInit} from '@angular/core';
import {ParseUrlQueryService} from "../../shared/parse-url-query.service";

@Component({
  selector: 'app-update-infarction',
  templateUrl: './update-infarction.component.html',
  styleUrls: ['./update-infarction.component.sass'],
  providers: [ParseUrlQueryService]
})
export class UpdateInfarctionComponent implements OnInit {
  id: number = 0;
  constructor(private parseUrlQueryService: ParseUrlQueryService) {}

  ngOnInit() {
    this.id = parseInt(this.parseUrlQueryService.parseUrlQuery()['id']);
  }
}