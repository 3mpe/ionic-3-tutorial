import { Injectable } from '@angular/core';
import { ApiProvider } from './../api/api';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  constructor(public http: Http, public api: ApiProvider) {

  }

  ionViewWillEnter() {
    console.log("Her sayfa startlandıgında calısır.");
  }
  
  public data: any;
  getPosts() {
    return this.api
        .get('posts')
        .map(this.extractData)
        .catch(this.catchError);

  }

 private catchError(error: Response | any) { 
   console.log('error'); 
   return Observable.throw(error.json().error || "Server Error"); 
 }
 private extractData(res: Response) { return res.json(); }
}
