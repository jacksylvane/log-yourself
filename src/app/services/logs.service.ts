import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LogsService {

  result: any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get('/api/logs')
      .map(result => this.result = result.json().data);
  }

  insertLog(data) {
    return new Promise((resolve, reject) => {
      this._http.post('/api/log', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  deleteLog(id) {
    return new Promise((resolve, reject) => {
      this._http.post('/api/delete', id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
