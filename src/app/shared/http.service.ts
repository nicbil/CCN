import { Injectable, Renderer, ElementRef } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {
  constructor(private http: Http ) {}

  mapResponse = (res) => {
    return res.json();
  }

  Http(params: any, url: string) {
    const headers  = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8'});
    const options = new RequestOptions({headers});

    return this.http.post(('/backend/web/index.php?r=api/' + url), params, options)
      .map(this.mapResponse)
      .catch(this.handleError);
  }

  public handleError = (error: any) => {
    console.error('Erorr', error);
    return Observable.throw(error.message || error);
  }
}
