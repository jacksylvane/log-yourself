import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LogsService {
  private logs: BehaviorSubject<any>;
  result: any;
  deletedCount: number;
  constructor(private _http: Http) {
    this.logs = new BehaviorSubject([]);
  }

  getBS(): BehaviorSubject<any> {
    console.log(this.logs);
    return this.logs;
  }
  getAllLogs(id) {
    return this._http.post('/api/logs', id)
      .map(result => this.result = result.json().data);
  }
  getWorkLogs(id) {
    return this._http.post('/api/logs/work', id)
      .map(result => this.result = result.json().data);
  }
  getPersonalLogs(id) {
    return this._http.post('/api/logs/personal', id)
      .map(result => this.result = result.json().data);
  }

  insertLog(data) {
    return new Promise((resolve, reject) => {
      this._http.post('/api/log', data)
        .map(res => res.json())
        .subscribe(res => {
          this.add(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  add(log: any) {
    this.logs.next(log);
  }
  deleteLog(id) {
    return new Promise((resolve, reject) => {
      this._http.post('/api/delete/' + id , id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateLog(logToUpdate) {
    return new Promise((resolve, reject) => {
      this._http.put('/api/update/' + logToUpdate._id, logToUpdate)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
