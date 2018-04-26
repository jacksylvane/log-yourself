import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FilterPipe } from '../../../../pipes/search.pipe';
import { LogsService } from '../../../../services/logs.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  logs = [];
  showResult = false;
  searchText: string;
  constructor(private _logsService: LogsService) {
    this.getAllLogs();
   }


  getAllLogs() {
    this._logsService.getAllLogs({ 'userId': '72315f' })
      .subscribe((res) => {
        // console.log(res);
        this.logs = res;
      });
  }
  isTextAreaEmpty() {
    this.searchText !== '' ? this.showResult = true : this.showResult = false;
  }
  ngOnInit() {
  }

}
