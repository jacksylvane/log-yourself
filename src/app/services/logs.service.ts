import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LogsService {

  result: any;
  deletedCount: number;
  constructor(private _http: Http) { }

  getAllLogs() {
    return this._http.get('/api/logs')
      .map(result => this.result = result.json().data);
  }
  getWorkLogs() {
    return this._http.get('/api/logs/work')
      .map(result => this.result = result.json().data);
  }
  getPersonalLogs() {
    return this._http.get('/api/logs/personal')
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
// Should switch do DELETE request? Post asks two parameters?
  deleteLog(id) {
    return new Promise((resolve, reject) => {
      this._http.post('/api/delete/' + id , id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
