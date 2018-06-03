
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import {BehaviorSubject} from 'rxjs';
// import { NgRedux, select } from '@angular-redux/store';
// import { IAppState } from '../store';
// import { INCREMENT, FETCH_ALL_LOGS_ERROR, FETCH_ALL_LOGS_SUCCESS } from '../actions';

@Injectable()
export class LogsService {
  logs: BehaviorSubject<any>;
  result: any;
  deletedCount: number;
  constructor(private _http: HttpClient) {
    this.logs = new BehaviorSubject([]);
  }

  getBS(): BehaviorSubject<any> {
    console.log(this.logs);
    return this.logs;
  }
  // getAllLogs(id) {
  //   this._http.post<any>('/api/logs', id).subscribe((res) => {
  //     this.ngRedux.dispatch({ type: 'FETCH_ALL_LOGS_SUCCESS', logs: res.data });
  //     }, err => {
  //       this.ngRedux.dispatch({ type: 'FETCH_ALL_LOGS_ERROR' });
  //     });
  // }
  getAllLogs(id) {
    return this._http.post<any>('/api/logs', id).pipe(
      map(result => this.result = result.data));
  }
  getWorkLogs(id) {
    return this._http.post<any>('/api/logs/work', id).pipe(
      map(result => this.result = result.data));
  }
  getPersonalLogs(id) {
    return this._http.post<any>('/api/logs/personal', id).pipe(
      map(result => this.result = result.data));
  }

  insertLog(data) {
    return new Promise((resolve, reject) => {
      this._http.post('/api/log', data)
        // .map(res => res.json())
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
        // .map(res => res.json())
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
        // .map(res => res.json())
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
