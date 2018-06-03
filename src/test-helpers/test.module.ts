import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from '../app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { LogsService } from '../app/services/logs.service';
import { WeekPipe } from '../app/pipes/week.pipe';
import { FilterPipe } from '../app/pipes/search.pipe';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { AddLogComponent } from '../app/components/dashboard/add-log/add-log.component';
import { LogsContainerComponent } from '../app/components/dashboard/logs-container/logs-container.component';
import { SearchComponent } from '../app/components/dashboard/logs-container/search/search.component';
import { NotificationsComponent } from '../app/components/notifications/notifications.component';
import { NotFoundComponent } from '../app/components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    WeekPipe,
    FilterPipe,
    NavbarComponent,
    DashboardComponent,
    NotificationsComponent,
    AddLogComponent,
    LogsContainerComponent,
    SearchComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [LogsService],
  bootstrap: [AppComponent],
  exports: [BrowserModule,
    WeekPipe,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class TestModule { }
