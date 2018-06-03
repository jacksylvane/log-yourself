import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LogsService } from './services/logs.service';
import { ReactiveFormsModule } from '@angular/forms';
import { WeekPipe } from './pipes/week.pipe';
import { FilterPipe } from './pipes/search.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AddLogComponent } from './components/dashboard/add-log/add-log.component';
import { NotificationService } from './services/notification.service';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LogsContainerComponent } from './components/dashboard/logs-container/logs-container.component';
import { SearchComponent } from './components/dashboard/logs-container/search/search.component';
// import { NgRedux, NgReduxModule } from '@angular-redux/store';
// import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WeekPipe,
    NavbarComponent,
    AddLogComponent,
    NotificationsComponent,
    LogsContainerComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // NgReduxModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [LogsService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(ngRedux: NgRedux<IAppState>) {
  //   ngRedux.configureStore(rootReducer, INITIAL_STATE);
  // }
}
