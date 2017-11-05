import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http, @Inject("CONFIG") private Config) {

  }

  get(query, data?: any) {
  	let body = Object.assign({}, data);
  	return this.http
  		.get(this.Config.Api.url + '/' + query, body);
  }

  post(query, data?: any, queryparams?: any){
  	let body = Object.assign({}, data);

  	return this.http
  		.post(this.Config.Api.url + '/' + query, body, queryparams);
  }

  put(query, data?: any, queryparams?: any){
  	let body = Object.assign({}, data);

  	return this.http
  		.put(this.Config.Api.url + '/' + query, body, queryparams);
  }
  delete(query, data?: any){
  	let body = Object.assign({}, data);

  	return this.http
  		.delete(this.Config.Api.url + '/' + query, body);
  }
}
