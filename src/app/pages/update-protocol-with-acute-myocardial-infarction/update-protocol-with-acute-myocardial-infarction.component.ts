import {Component, OnInit} from '@angular/core';
import {ParseUrlQueryService} from "../../shared/parse-url-query.service";

@Component({
  selector: 'app-update-protocol-with-acute-myocardial-infarction',
  templateUrl: './update-protocol-with-acute-myocardial-infarction.component.html',
  styleUrls: ['./update-protocol-with-acute-myocardial-infarction.component.sass'],
  providers: [ParseUrlQueryService]
})
export class UpdateProtocolWithAcuteMyocardialInfarctionComponent implements OnInit {
  id: number = 0;
  constructor(private parseUrlQueryService: ParseUrlQueryService) {}

  ngOnInit() {
    this.id = parseInt(this.parseUrlQueryService.parseUrlQuery()['id']);
  }
}