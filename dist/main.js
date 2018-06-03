(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: easeInOut, expandCard, itemAnimTrigger, btnAnimConfirmTrigger, ngIfShowCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandCard", function() { return expandCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemAnimTrigger", function() { return itemAnimTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnAnimConfirmTrigger", function() { return btnAnimConfirmTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngIfShowCard", function() { return ngIfShowCard; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var easeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('easeInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            right: '-15rem',
            transform: 'skewX(-12deg)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            right: '0rem',
            transform: 'skewX(0)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            right: '0rem',
            transform: 'skewX(0)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            right: '-15rem',
            transform: 'skewX(-12deg)'
        }))
    ])
]);
var expandCard = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandCard', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            right: '-15rem',
            transform: 'skewX(-12deg)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            right: '0rem',
            transform: 'skewX(0)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            display: 'none',
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            display: 'none'
        }))
    ])
]);
var itemAnimTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('itemAnim', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        background: 'yellow',
        height: '10rem'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('clicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        background: 'pink',
        height: '15rem'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms 1000ms ease-in'))
]);
var btnAnimConfirmTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('btnAnimConfirm', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        backgroundColor: 'yellow',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('clicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        backgroundColor: 'pink',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default <=> clicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.8s 0.2s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ background: 'red' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ background: 'black' }),
    ])))
]);
var ngIfShowCard = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('ngIfShowCard', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scaleY(0.9)' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scaleY(1.0)' })), { optional: true }),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scaleY(1.0)' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scaleY(1.01)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scaleY(0.9)' }),
        ])), { optional: true }),
    ]),
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/' }]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-notifications></app-notifications>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_logs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/logs.service */ "./src/app/services/logs.service.ts");
/* harmony import */ var _pipes_week_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/week.pipe */ "./src/app/pipes/week.pipe.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_dashboard_add_log_add_log_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/add-log/add-log.component */ "./src/app/components/dashboard/add-log/add-log.component.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _components_dashboard_logs_container_logs_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/logs-container/logs-container.component */ "./src/app/components/dashboard/logs-container/logs-container.component.ts");
/* harmony import */ var _components_dashboard_logs_container_search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/logs-container/search/search.component */ "./src/app/components/dashboard/logs-container/search/search.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// import { NgRedux, NgReduxModule } from '@angular-redux/store';
// import { IAppState, rootReducer, INITIAL_STATE } from './store';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _pipes_week_pipe__WEBPACK_IMPORTED_MODULE_9__["WeekPipe"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_dashboard_add_log_add_log_component__WEBPACK_IMPORTED_MODULE_14__["AddLogComponent"],
                _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"],
                _components_dashboard_logs_container_logs_container_component__WEBPACK_IMPORTED_MODULE_17__["LogsContainerComponent"],
                _components_dashboard_logs_container_search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                // NgReduxModule,
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('/ngsw-worker.js', {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
                })
            ],
            providers: [_services_logs_service__WEBPACK_IMPORTED_MODULE_8__["LogsService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/add-log/add-log.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/add-log/add-log.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"addLog-header card-header\" (click)=\"onSelectStory()\" > Add entry</div>\r\n  <form *ngIf=\"showAddLog\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm)\">\r\n    <div id=\"inputsContainer\" >\r\n      <div class=\"type\">\r\n        Type:\r\n        <div class=\"checkboxThree\">\r\n          <input type=\"checkbox\" formControlName=\"type\" id=\"checkboxThreeInput\" />\r\n          <label for=\"checkboxThreeInput\">\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"date\">\r\n        <div>\r\n          <label for=\"week\">Week:</label>\r\n          <input type=\"text\" formControlName=\"week\" placeholder=\"{{today | week }}\">\r\n          <div class=\"maxValue-alert\" *ngIf=\"myForm.get('week').hasError('max')\">\r\n            There are only 52 weeks in a year.\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <label for=\"day\">Day:</label>\r\n          <input type=\"text\" formControlName=\"day\" [(ngModel)]=addLog.day>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"textInput\">\r\n      <textarea type=\"text\" formControlName=\"text\" [(ngModel)]=addLog.text></textarea>\r\n      <div class=\"fillAlert\" *ngIf=\"myForm.get('text').hasError('required') && myForm.get('text').touched\">Please fill out text area with your lovely words.</div>\r\n    </div>\r\n    <div class=\"btn-div\">\r\n      <button type=\"submit\" class=\"btn\" [disabled]=\"!myForm.valid\" [class.disabled]=\"!myForm.valid\">Submit</button>\r\n      <!-- <button type=\"button\" class=\"btn\" (click)=\"increment()\">SubmitFake</button>\r\n      <p>Counter : {{counter | async}}</p> -->\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "./src/app/components/dashboard/add-log/add-log.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/add-log/add-log.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  color: var(--black);\n  margin-top: 2rem; }\n  form #inputsContainer {\n    width: 95%;\n    margin: 0 auto; }\n  form #inputsContainer .type {\n      display: inline-flex;\n      justify-content: space-between;\n      width: 15rem;\n      align-items: center;\n      margin-bottom: 2rem; }\n  form #inputsContainer .date {\n      display: inline-flex;\n      justify-content: space-between;\n      width: 100%;\n      margin-bottom: 1rem; }\n  form #inputsContainer .date .maxValue-alert {\n        font-size: 0.8rem;\n        position: absolute;\n        margin-top: -0.4rem; }\n  form #inputsContainer .date div label {\n        margin-right: 1rem; }\n  form #inputsContainer .date div input {\n        padding: 0.5rem 0.5rem;\n        border: none;\n        width: 4rem;\n        text-align: center;\n        font-weight: 700;\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.03);\n        border-radius: 2px;\n        font-family: Open Sans;\n        color: var(--black); }\n  form #inputsContainer .date div input:focus {\n          outline: none;\n          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }\n  form #inputsContainer .date > :nth-child(2) input {\n        width: 10rem; }\n  form #inputsContainer p {\n      display: flex;\n      justify-content: space-evenly; }\n  form #inputsContainer input {\n      margin-bottom: 1rem; }\n  form .textInput {\n    display: flex;\n    flex-flow: column; }\n  form .textInput textarea {\n      width: 95%;\n      min-height: 15rem;\n      padding: 0.5rem 0.75rem;\n      line-height: 170%;\n      font-family: \"Open Sans\";\n      margin: 0 auto 2rem auto;\n      border-radius: 2px;\n      border: none;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1); }\n  form .textInput textarea:focus {\n        width: 97%;\n        outline: none;\n        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n        min-height: 15.2rem;\n        transition: all .4s ease; }\n  form .textInput .fillAlert {\n      text-align: center;\n      font-size: 0.9rem;\n      color: #e95252;\n      font-weight: 600;\n      margin-bottom: 2rem; }\n  form .btn-div {\n    display: flex;\n    justify-content: flex-end; }\n  .checkboxThree {\n  width: 180px;\n  height: 40px;\n  background: linear-gradient(#2f9173, #3e9b7f);\n  border-radius: 10px;\n  position: relative; }\n  .checkboxThree:before {\n    content: 'Personal';\n    position: absolute;\n    top: 12px;\n    left: 13px;\n    height: 2px;\n    font-size: 16px;\n    color: #ffffff; }\n  .checkboxThree:after {\n    content: 'Work';\n    position: absolute;\n    top: 12px;\n    left: 113px;\n    height: 2px;\n    color: white;\n    font-size: 16px; }\n  .checkboxThree label {\n    display: block;\n    width: 80px;\n    height: 22px;\n    border-radius: 5px;\n    transition: all .5s ease;\n    cursor: pointer;\n    position: absolute;\n    top: 9px;\n    z-index: 1;\n    left: 12px;\n    background: #fff;\n    box-shadow: 0 2px 1px 0px rgba(0, 0, 0, 0.18); }\n  .checkboxThree input[type=checkbox]:checked + label {\n    left: 87px;\n    background: #26cab1; }\n  input[type=checkbox] {\n  visibility: hidden; }\n  @media only screen and (min-width: 500px) and (max-width: 1000px) {\n  .container {\n    padding: 0 1rem;\n    grid-gap: 1rem; }\n    .container .card.logs {\n      grid-column: span 3;\n      padding: 1rem 0; }\n      .container .card.logs .logs-header {\n        width: 100%;\n        margin-left: 0rem; }\n      .container .card.logs .log {\n        width: 46%;\n        padding: 2rem 1.25rem;\n        margin: 0 0.3rem 3rem 0.3rem; }\n      .container .card.logs .giant {\n        grid-column: span 6; }\n      .container .card.logs .expand {\n        width: 100% !important; }\n    .container .addLog {\n      grid-column: span 3; } }\n  @media only screen and (max-width: 720px) {\n  .container {\n    padding: 0 0.5rem; }\n    .container .addLog #inputsContainer .type {\n      width: 90%; }\n    .container .addLog #inputsContainer .date input {\n      margin-top: 0.5rem; }\n    .container .tiny {\n      grid-column: span 1; }\n    .container .card.logs {\n      grid-column: span 6;\n      padding: 1rem 0; }\n      .container .card.logs .filterBtns {\n        margin: 2.5rem 0rem 2rem 0rem; }\n      .container .card.logs .logs-header {\n        width: 100%;\n        margin-left: 0rem; }\n      .container .card.logs .log {\n        width: 46%;\n        padding: 1.75rem 1.25rem;\n        margin: 0 0.3rem 3rem 0.3rem; }\n        .container .card.logs .log .entriesCount {\n          display: flex;\n          flex-flow: column;\n          margin-top: 1.8rem;\n          text-align: right;\n          font-size: 0.85rem; }\n          .container .card.logs .log .entriesCount span:first-child {\n            margin-bottom: .5rem; }\n        .container .card.logs .log h4 {\n          top: 2rem;\n          right: 1rem; }\n      .container .card.logs .giant {\n        grid-column: span 6; }\n      .container .card.logs .expand {\n        width: 100% !important; }\n    .container .addLog {\n      grid-column: span 6; }\n  .confirm-delete .confirmPopup {\n    padding: 4rem 2.5rem; } }\n"

/***/ }),

/***/ "./src/app/components/dashboard/add-log/add-log.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/add-log/add-log.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLogComponent", function() { return AddLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_logs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/logs.service */ "./src/app/services/logs.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _pipes_week_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/week.pipe */ "./src/app/pipes/week.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { NgRedux, select } from '@angular-redux/store';
// import { IAppState } from '../../../store';
// import { INCREMENT } from '../../../actions';
var AddLogComponent = /** @class */ (function () {
    function AddLogComponent(_logsService, _notificationService, fb, weekPipe) {
        this._logsService = _logsService;
        this._notificationService = _notificationService;
        this.fb = fb;
        this.weekPipe = weekPipe;
        // showAddLog: boolean;
        // @select() counter;
        this.formSuccesfullySubmited = false;
        this.today = Date.now();
        this.addLog = {
            text: '',
            day: ''
        };
        this.alert = '';
        this.selectStory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.callFakeLogs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // this.getAllLogs();
    }
    // increment() {
    //   this.ngRedux.dispatch({ type: INCREMENT });
    // }
    AddLogComponent.prototype.onSelectStory = function () {
        this.selectStory.emit(true);
    };
    // getAllLogs() {
    //   this._logsService.getAllLogs(this.userIdofCurrent)
    //     .subscribe((res) => {
    //       this.logs = res;
    //   });
    // }
    AddLogComponent.prototype.onSubmit = function (f) {
        var type = f.value.type ? 'personal' : 'work';
        var week = f.value.week ? parseInt(f.value.week, 10) : this.weekPipe.transform(new Date(this.today));
        // If log with this week and type exists, update it
        for (var i = 0; i < this.logs.length; i++) {
            if (parseInt(f.value.week, 10) === this.logs[i].week && type === this.logs[i].type) {
                this.updateExistingLog(f, type, week);
                this.addLog.text = '';
                this.addLog.day = '';
                this.myForm.controls['text'].markAsUntouched();
                return;
            }
        }
        // If log with this week and type doesn't exists, create it
        this.insertLog(f, type, week);
        this.addLog.text = '';
        this.addLog.day = '';
        this.myForm.controls['text'].markAsUntouched();
    };
    AddLogComponent.prototype.insertLog = function (f, type, week) {
        var _this = this;
        // If the day is not filled
        if (f.value.day !== '') {
            this.newLog = {
                week: week,
                userId: this.userIdofCurrent.userId,
                type: type,
                text: [],
                days: [{ 'day': f.value.day, 'text': f.value.text }]
            };
        }
        else {
            this.newLog = {
                week: week,
                userId: this.userIdofCurrent.userId,
                type: type,
                text: f.value.text,
                days: []
            };
        }
        console.log(this.newLog);
        this._logsService.insertLog(this.newLog)
            .then(function (res) {
            console.log(res);
            if (res.message = 'Log has been succesfully added.') {
                _this._notificationService.showNotification('Log has been added! 📃💪🎉');
                // Force change detection on logs-container component somehow
            }
            else {
                _this._notificationService.showNotification('There was a problem trying to save log.⚠️⚠️ ');
            }
        });
    };
    AddLogComponent.prototype.updateExistingLog = function (f, type, week) {
        for (var i = 0; i < this.logs.length; i++) {
            if (parseInt(f.value.week, 10) === this.logs[i].week && type === this.logs[i].type) {
                if ('days' in this.logs[i] === false) {
                    this.logs[i].days = [];
                }
                if (f.value.day !== '') {
                    var newDayToPush = { 'day': f.value.day, 'text': f.value.text };
                    this.logs[i].days.push(newDayToPush);
                    this.updateLog = {
                        _id: this.logs[i]._id,
                        week: week,
                        userId: this.logs[i].userId,
                        type: type,
                        text: this.logs[i].text,
                        days: this.logs[i].days
                    };
                    console.log('Insert 3');
                }
                else {
                    if (typeof (this.logs[i].text) === typeof (Array())) {
                        console.log(this.logs[i].text);
                        var newWeekToPush = { 'id': 1, 'text': f.value.text };
                        this.logs[i].text.push(newWeekToPush);
                        this.updateLog = {
                            _id: this.logs[i]._id,
                            week: this.logs[i].week,
                            userId: this.logs[i].userId,
                            type: type,
                            text: this.logs[i].text,
                            days: this.logs[i].days
                        };
                        console.log('Insert 4');
                    }
                    if (typeof (this.logs[i].text) === typeof (String())) {
                        var newWeekArray = [{ 'id': 0, 'text': this.logs[i].text }];
                        var newWeekToPush = { 'id': 1, 'text': f.value.text };
                        newWeekArray.push(newWeekToPush);
                        this.updateLog = {
                            _id: this.logs[i]._id,
                            userId: this.logs[i].userId,
                            week: this.logs[i].week,
                            type: type,
                            text: newWeekArray,
                            days: this.logs[i].days
                        };
                        console.log('Insert 4.2');
                    }
                }
                console.log(this.updateLog);
                this._logsService.updateLog(this.updateLog);
                this._notificationService.showNotification('Log has been updated! ✏️');
                this.logs.push(this.updateLog);
                this.callFakeLogs.emit('getFakeLogs');
                return;
            }
        }
    };
    // Make it as a service
    AddLogComponent.prototype.showAlert = function (text) {
        var _this = this;
        this.formSuccesfullySubmited = true;
        this.alert = text;
        setTimeout(function () { return _this.formSuccesfullySubmited = false; }, 3000);
    };
    AddLogComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            type: '',
            week: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(52)],
            day: '',
            text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddLogComponent.prototype, "userIdofCurrent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddLogComponent.prototype, "showAddLog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddLogComponent.prototype, "selectStory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddLogComponent.prototype, "callFakeLogs", void 0);
    AddLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-log',
            template: __webpack_require__(/*! ./add-log.component.html */ "./src/app/components/dashboard/add-log/add-log.component.html"),
            styles: [__webpack_require__(/*! ./add-log.component.sass */ "./src/app/components/dashboard/add-log/add-log.component.sass")],
            providers: [_pipes_week_pipe__WEBPACK_IMPORTED_MODULE_4__["WeekPipe"]]
        }),
        __metadata("design:paramtypes", [_services_logs_service__WEBPACK_IMPORTED_MODULE_2__["LogsService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _pipes_week_pipe__WEBPACK_IMPORTED_MODULE_4__["WeekPipe"]])
    ], AddLogComponent);
    return AddLogComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <app-add-log \r\n    class=\"addLog card\" \r\n    [class.tiny]=\"!showAddLog\"\r\n    (selectStory)=\"getStory($event)\"\r\n    (callFakeLogs)=\"callGetFakeLogs($event)\"\r\n    [showAddLog]=\"showAddLog\"\r\n    [userIdofCurrent]=\"userIdofCurrent\"\r\n  ></app-add-log>\r\n  <!-- <p>Counter : {{count | async }}</p> -->\r\n  <app-logs-container\r\n   class=\"logs-container\"\r\n   [showAddLog]=\"showAddLog\"\r\n   [class.giant]=\"!showAddLog\"\r\n   [userIdofCurrent]=\"userIdofCurrent\"\r\n  ></app-logs-container>\r\n</div>\r\n\r\n<!-- <div \r\n @easeInOut\r\n*ngIf=\"formSuccesfullySubmited\" class=\"alert\" id=\"alert\">\r\n {{alert}}\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[6];\n      grid-template-columns: repeat(6, 1fr);\n  grid-column-gap: 2.5rem;\n  padding: 0 3rem; }\n  .container .addLog {\n    padding: 1rem 1.75rem;\n    grid-column: span 2;\n    grid-row: span 1;\n    background: #F0F0F0;\n    border-radius: 3px;\n    margin: 2rem auto; }\n  .container .tiny {\n    grid-column: span 1; }\n  .container .giant {\n    grid-column: span 5; }\n  ::ng-deep .card {\n  box-shadow: 0px 2px 8px 0px rgba(162, 161, 161, 0.42);\n  min-width: 12rem; }\n  ::ng-deep .card .card-header {\n    width: calc(100% + 3.5rem);\n    background: linear-gradient(#2F9173, #3f9c80);\n    box-shadow: 0px 2px 8px 0px rgba(162, 161, 161, 0.42);\n    margin: -1rem -1.75rem;\n    padding: 1.2rem 1.35rem;\n    border-radius: 3px 3px 0 0;\n    color: #fff;\n    font-size: 1.25rem;\n    font-weight: lighter; }\n  ::ng-deep .card .addLog-header:hover {\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    background: linear-gradient(#2b8368, #35876e); }\n  ::ng-deep .card .filterBtns {\n    margin: 2.5rem 1rem 2rem 1rem;\n    text-align: center; }\n  ::ng-deep .btn {\n  border: none;\n  background: #67B29B;\n  font-weight: bold;\n  padding: .75rem 2rem;\n  border-radius: 3px;\n  border-bottom: 2px solid #549B85;\n  text-transform: uppercase;\n  color: #fff;\n  box-shadow: 0 2px 8px 0px rgba(21, 20, 20, 0.17); }\n  ::ng-deep .btn:hover {\n    cursor: pointer;\n    border-bottom: 2px solid transparent;\n    background: #49987c;\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.08);\n    transition: all .2s ease; }\n  ::ng-deep .btn.disabled {\n    cursor: not-allowed;\n    background: #bfd8d0;\n    border-bottom: 2px solid #CEE3DC;\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.08); }\n  ::ng-deep .btn:focus {\n    outline: none; }\n  .btn-delete {\n  background: #d74d4d;\n  border-bottom: 2px solid #bd4747; }\n  .btn-delete:hover {\n    background: #cb2929;\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.08);\n    transition: all .2s ease; }\n  .btn-cancel {\n  background: #94a6a1;\n  border-bottom: 2px solid #8a9793; }\n  .btn-cancel:hover {\n    background: #848b89;\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.08);\n    transition: all .2s ease; }\n  .tiny {\n  grid-column: span 1; }\n  .tiny .card-header {\n    text-align: center; }\n  .logs {\n  display: flex;\n  flex-flow: column;\n  grid-column: span 4;\n  grid-row: span 2;\n  max-width: 65rem;\n  padding: 1rem 1.75rem;\n  background: #F0F0F0;\n  border-radius: 3px;\n  margin: 2rem auto;\n  min-width: 100%; }\n  .logs .btn.active {\n    background: #065c3d;\n    border-bottom: transparent;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.53); }\n  .logs .entriesCards {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; }\n  .logs .entriesCards .log {\n      position: relative;\n      padding: 1.5rem 1.5rem 2.3rem;\n      background: #31AB85;\n      margin: 0 0.75rem 3rem 0.75rem;\n      width: 15rem;\n      border-radius: 3px;\n      box-shadow: 0 2px 8px 0 rgba(128, 128, 128, 0.31);\n      font-weight: 300;\n      transition: width .5s ease; }\n  .logs .entriesCards .log:hover {\n        cursor: pointer; }\n  .logs .entriesCards .log h3 {\n        font-size: 1.35rem;\n        margin-bottom: 0.75rem;\n        font-weight: 500; }\n  .logs .entriesCards .log h4 {\n        position: absolute;\n        top: 1.5rem;\n        right: 1.5rem;\n        font-weight: 500;\n        text-transform: uppercase;\n        width: 1rem;\n        overflow: hidden;\n        letter-spacing: 8px; }\n  .logs .entriesCards .log p {\n        font-size: 0.9rem;\n        margin-top: 0.9rem; }\n  .logs .entriesCards .log .entriesCount {\n        margin-top: 2.3rem;\n        font-size: 0.9rem;\n        display: inline-flex;\n        justify-content: space-between;\n        width: 100%; }\n  .logs .entriesCards .log .entries {\n        width: 100%;\n        margin-top: 0.5rem; }\n  .logs .entriesCards .log .entries .btn {\n          margin-right: 0.5rem;\n          margin-top: 0.5rem;\n          padding: .75rem 1rem;\n          text-transform: none; }\n  .logs .entriesCards .log .entries .active {\n          background: #065c3d;\n          border-bottom: transparent;\n          box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.53); }\n  .logs .entriesCards .log .log-title {\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 1rem;\n        margin: -1rem -1rem 1rem -1rem;\n        background: #9f2424;\n        color: white;\n        padding: 1rem; }\n  .logs .entriesCards .log .text {\n        white-space: pre-line;\n        line-height: 140%;\n        font-style: italic;\n        font-family: Roboto; }\n  .logs .entriesCards .log #deleteBtn {\n        width: -webkit-max-content;\n        width: -moz-max-content;\n        width: max-content;\n        float: right; }\n  .logs .entriesCards .expand {\n      width: 33rem;\n      transition: width .5s ease; }\n  .logs .entriesCards .expand .textWindow {\n        border-top: 1px solid #98e1be;\n        margin-top: 1rem;\n        display: flex;\n        flex-flow: column; }\n  .logs .entriesCards .expand .textWindow .text {\n          margin-bottom: 2rem; }\n  .personal {\n  background: #44b98c !important; }\n  .work {\n  background: #267e5e !important; }\n  @media only screen and (min-width: 500px) and (max-width: 1000px) {\n  .container {\n    padding: 0 1rem;\n    grid-gap: 1rem; }\n    .container .card.logs.giant {\n      grid-column: span 5; }\n    .container .card.logs {\n      grid-column: span 3;\n      padding: 1rem 0; }\n      .container .card.logs .logs-header {\n        width: 100%;\n        margin-left: 0rem; }\n      .container .card.logs .log {\n        width: 46%;\n        padding: 2rem 1.25rem;\n        margin: 0 0.3rem 3rem 0.3rem; }\n      .container .card.logs .giant {\n        grid-column: span 6; }\n      .container .card.logs .expand {\n        width: 100% !important; }\n    .container .addLog {\n      grid-column: span 3; }\n    .container .tiny {\n      grid-column: span 1; } }\n  @media only screen and (max-width: 720px) {\n  .container {\n    padding: 0 0.5rem; }\n    .container .addLog #inputsContainer .type {\n      width: 90%; }\n    .container .addLog #inputsContainer .date input {\n      margin-top: 0.5rem; }\n    .container .tiny {\n      grid-column: span 1; }\n    .container .logs-container {\n      grid-column: span 6; }\n    .container .card.logs.giant {\n      grid-column: span 6;\n      padding: 1rem 0; }\n    .container .card.logs {\n      grid-column: span 6; }\n      .container .card.logs .filterBtns {\n        margin: 2.5rem 0rem 2rem 0rem; }\n      .container .card.logs .logs-header {\n        width: 100%;\n        margin-left: 0rem; }\n      .container .card.logs .log {\n        width: 46%;\n        padding: 1.75rem 1.25rem;\n        margin: 0 0.3rem 3rem 0.3rem; }\n        .container .card.logs .log .entriesCount {\n          display: flex;\n          flex-flow: column;\n          margin-top: 1.8rem;\n          text-align: right;\n          font-size: 0.85rem; }\n          .container .card.logs .log .entriesCount span:first-child {\n            margin-bottom: .5rem; }\n        .container .card.logs .log h4 {\n          top: 2rem;\n          right: 1rem; }\n      .container .card.logs .giant {\n        grid-column: span 6; }\n      .container .card.logs .expand {\n        width: 100% !important; }\n    .container .addLog {\n      grid-column: span 6; }\n  .confirm-delete .confirmPopup {\n    padding: 4rem 2.5rem; } }\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_logs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/logs.service */ "./src/app/services/logs.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations */ "./src/app/animations.ts");
/* harmony import */ var _pipes_week_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/week.pipe */ "./src/app/pipes/week.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { NgRedux, select } from '@angular-redux/store';
// import { IAppState } from '../../store';
// import { INCREMENT, FETCH_ALL_LOGS_ERROR, FETCH_ALL_LOGS_SUCCESS } from '../../actions';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_logsService, weekPipe) {
        this._logsService = _logsService;
        this.weekPipe = weekPipe;
        // @select('counter') count;
        this.today = Date.now();
        this.userIdofCurrent = '72315f';
        this.formSuccesfullySubmited = false;
        // showConfirmDelete = false;
        this.showAddLog = false;
        // logToDeleteIndex: number;
        // logToDeleteId: number;
        this.alert = '';
    }
    DashboardComponent.prototype.getStory = function () {
        this.showAddLog = !this.showAddLog;
    };
    DashboardComponent.prototype.callGetFakeLogs = function () {
        // this.getAllLogs();
    };
    DashboardComponent.prototype.returnTrue = function () {
        return true;
    };
    // getFakeLogs() {
    //   this.currentShowbtn = 0;
    //   for (let i = 0; i < this.logs.length; i++) {
    //     this.logs[i].weekStart = this.getDateOfWeek(this.logs[i].week, 2017);
    //     this.logs[i].weekEnd = this.getEndingDateOfWeek(this.logs[i].week, 2017);
    //     this.logs[i].showText = false;
    //     if ('days' in this.logs[i]) {
    //       this.logs[i].dayEntries = this.logs[i].days.length;
    //     } else {
    //       this.logs[i].dayEntries = 0;
    //     }
    //     if (this.logs[i].text === '') {
    //       this.logs[i].weekEntries = 0;
    //     } else {
    //       this.logs[i].weekEntries = 1;
    //     }
    //     if (typeof (this.logs[i].text) === typeof (Array())) {
    //       this.logs[i].weekEntries = this.logs[i].text.length;
    //     }
    //     if (typeof (this.logs[i].text) === typeof (String())) {
    //       this.logs[i].text = [{'id': 0, 'text': this.logs[i].text}];
    //     }
    //     if (this.logs[i].text.length === 0) {
    //       this.logs[i].textToshow = this.logs[i].days[0].text;
    //     } else {
    //       this.logs[i].textToshow = this.logs[i].text[0].text;
    //     }
    //   }
    // }
    // /* Shows confirmation window and stores index od wished number */
    // initDelete(i, id) {
    //   this.showConfirmDelete = true;
    //   this.logToDeleteIndex = i;
    //   this.logToDeleteId = id;
    // }
    // /* Deletes log based on stored variable created by initDelete() */
    //   deleteLog(i, id) {
    //     this.showConfirmDelete = false;
    //     this._logsService.deleteLog(this.logToDeleteId);
    //     this.logs.splice(this.logToDeleteIndex, 1);
    //     this.showAlert('Log has been deleted! 💣🗑️' );
    //   }
    DashboardComponent.prototype.showAlert = function (text) {
        var _this = this;
        this.formSuccesfullySubmited = true;
        this.alert = text;
        setTimeout(function () { return _this.formSuccesfullySubmited = false; }, 3000);
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.sass */ "./src/app/components/dashboard/dashboard.component.sass")],
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_2__["easeInOut"],
                _animations__WEBPACK_IMPORTED_MODULE_2__["expandCard"]
            ],
            providers: [_pipes_week_pipe__WEBPACK_IMPORTED_MODULE_3__["WeekPipe"]]
        }),
        __metadata("design:paramtypes", [_services_logs_service__WEBPACK_IMPORTED_MODULE_1__["LogsService"], _pipes_week_pipe__WEBPACK_IMPORTED_MODULE_3__["WeekPipe"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/logs-container/logs-container.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/logs-container/logs-container.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card logs\">\r\n  <div class=\"logs-header card-header\"> Your weekly logs</div>\r\n  <div class=\"filterBtns\">\r\n    <button class=\"btn\" [class.active]=\"this.currentShowbtn == 0\" (click)=\"getAllLogs();\">All</button>\r\n    <button class=\"btn\" [class.active]=\"this.currentShowbtn == 1\" (click)=\"showWorkLogs()\">Work</button>\r\n    <button class=\"btn\" [class.active]=\"this.currentShowbtn == 2\" (click)=\"showPersonalLogs()\">Personal</button>\r\n  </div>\r\n  <app-search></app-search>\r\n  <div class=\"entriesCards\">\r\n    <div class=\"log\" *ngFor=\"let log of logs; let i = index\" [ngClass]=\"getClass(log)\" [class.expand]=\"this.logs[i].showText\"\r\n      (click)=\"expandCard(i, $event)\">\r\n      <h3>Week: {{log.week}}</h3>\r\n      <h4>{{log.type}}</h4>\r\n      <p>{{log.weekStart | date:'dd.MM'}} - {{log.weekEnd | date:'dd.MM'}}</p>\r\n      <div class=\"entriesCount\">\r\n        <span>{{log.weekEntries}} week entry</span>\r\n        <span>{{log.dayEntries}} daily entries</span>\r\n      </div>\r\n      <div *ngIf=\"log.showText\" class=\"textWindow\">\r\n        <div *ngIf=\"log.days\" class=\"entries\">\r\n          <div class=\"weeks-btns\">\r\n            <button *ngFor=\"let text of log.text; index as k\" class=\"btn entryBtn\" id=\"yo\" [ngClass]=\"getActiveClass(k, 'k')\" (click)=\"log.textToshow = text.text; this.current.number = k; this.current.index = 'k'\">\r\n              Entry {{[k + 1]}}.\r\n            </button>\r\n          </div>\r\n          <div class=\"days-btns\">\r\n            <button *ngFor=\"let day of log.days; index as j\" class=\"btn entryBtn\" [ngClass]=\"getActiveClass(j, 'j', log.text)\" (click)=\"log.textToshow = day.text; this.current.number = j; this.current.index = 'j'\">\r\n              {{day.day}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"text unique\" id=\"unique\" @expandCard [attr.data-index]=\"i\">\r\n          {{log.textToshow}}\r\n        </div>\r\n        <div class=\"buttonDelete\">\r\n          <button type=\"button\" class=\"btn  btn-delete\" id=\"deleteBtn\" (click)=\"initDelete(i, log._id)\">Delete</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <div *ngIf=\"showConfirmDelete\" class=\"confirm-delete\">\r\n      <div class=\"confirmPopup\">\r\n        <div class=\"text\">\r\n          Do you really want to delete this log?\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-delete\" (click)=\"deleteLog(i, id)\">DELETE</button>\r\n        <button type=\"button\" class=\"btn btn-cancel\" (click)=\"this.showConfirmDelete = false\">CANCEL</button>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/logs-container/logs-container.component.sass":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/logs-container/logs-container.component.sass ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  grid-column: span 4;\n  grid-row: span 2; }\n\n::ng-deep .card {\n  box-shadow: 0px 2px 8px 0px rgba(162, 161, 161, 0.42);\n  min-width: 12rem; }\n\n::ng-deep .card .card-header {\n    width: calc(100% + 3.5rem);\n    background: linear-gradient(#2F9173, #3f9c80);\n    box-shadow: 0px 2px 8px 0px rgba(162, 161, 161, 0.42);\n    margin: -1rem -1.75rem;\n    padding: 1.2rem 1.35rem;\n    border-radius: 3px 3px 0 0;\n    color: #fff;\n    font-size: 1.25rem;\n    font-weight: lighter; }\n\n::ng-deep .card .addLog-header:hover {\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    background: linear-gradient(#2b8368, #35876e); }\n\n::ng-deep .card .filterBtns {\n    margin: 2.5rem 1rem 2rem 1rem;\n    text-align: center; }\n\n.btn-delete {\n  background: #d74d4d;\n  border-bottom: 2px solid #bd4747; }\n\n.btn-delete:hover {\n    background: #cb2929;\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.08);\n    transition: all .2s ease; }\n\n.btn-cancel {\n  background: #94a6a1;\n  border-bottom: 2px solid #8a9793; }\n\n.btn-cancel:hover {\n    background: #848b89;\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.08);\n    transition: all .2s ease; }\n\n.tiny {\n  grid-column: span 1; }\n\n.tiny .card-header {\n    text-align: center; }\n\n.logs {\n  display: flex;\n  flex-flow: column;\n  grid-column: span 4;\n  grid-row: span 2;\n  max-width: 65rem;\n  padding: 1rem 1.75rem;\n  background: #F0F0F0;\n  border-radius: 3px;\n  margin: 2rem auto;\n  min-width: 100%; }\n\n.logs .btn.active {\n    background: #065c3d;\n    border-bottom: transparent;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.53); }\n\n.logs .entriesCards {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; }\n\n.logs .entriesCards .log {\n      position: relative;\n      padding: 1.5rem 1.5rem 2.3rem;\n      background: #31AB85;\n      margin: 0 0.75rem 3rem 0.75rem;\n      width: 15rem;\n      border-radius: 3px;\n      box-shadow: 0 2px 8px 0 rgba(128, 128, 128, 0.31);\n      font-weight: 300;\n      transition: width .5s ease; }\n\n.logs .entriesCards .log:hover {\n        cursor: pointer; }\n\n.logs .entriesCards .log h3 {\n        font-size: 1.35rem;\n        margin-bottom: 0.75rem;\n        font-weight: 500; }\n\n.logs .entriesCards .log h4 {\n        position: absolute;\n        top: 1.5rem;\n        right: 1.5rem;\n        font-weight: 500;\n        text-transform: uppercase;\n        width: 1rem;\n        overflow: hidden;\n        letter-spacing: 8px; }\n\n.logs .entriesCards .log p {\n        font-size: 0.9rem;\n        margin-top: 0.9rem; }\n\n.logs .entriesCards .log .entriesCount {\n        margin-top: 2.3rem;\n        font-size: 0.9rem;\n        display: inline-flex;\n        justify-content: space-between;\n        width: 100%; }\n\n.logs .entriesCards .log .entries {\n        width: 100%;\n        margin-top: 0.5rem; }\n\n.logs .entriesCards .log .entries .btn {\n          margin-right: 0.5rem;\n          margin-top: 0.5rem;\n          padding: .75rem 1rem;\n          text-transform: none; }\n\n.logs .entriesCards .log .entries .active {\n          background: #065c3d;\n          border-bottom: transparent;\n          box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.53); }\n\n.logs .entriesCards .log .log-title {\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 1rem;\n        margin: -1rem -1rem 1rem -1rem;\n        background: #9f2424;\n        color: white;\n        padding: 1rem; }\n\n.logs .entriesCards .log .text {\n        white-space: pre-line;\n        line-height: 140%;\n        font-style: italic;\n        font-family: Roboto; }\n\n.logs .entriesCards .log #deleteBtn {\n        width: -webkit-max-content;\n        width: -moz-max-content;\n        width: max-content;\n        float: right; }\n\n.logs .entriesCards .expand {\n      width: 33rem;\n      transition: width .5s ease; }\n\n.logs .entriesCards .expand .textWindow {\n        border-top: 1px solid #98e1be;\n        margin-top: 1rem;\n        display: flex;\n        flex-flow: column; }\n\n.logs .entriesCards .expand .textWindow .text {\n          margin-bottom: 2rem; }\n\n.personal {\n  background: #44b98c !important; }\n\n.work {\n  background: #267e5e !important; }\n\n.confirm-delete {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  color: white;\n  text-align: center;\n  padding: 5rem 0;\n  font-weight: bold;\n  z-index: 1; }\n\n.confirm-delete .confirmPopup {\n    background: white;\n    padding: 5rem;\n    color: var(--black);\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    margin: 0 auto;\n    border-radius: 3px;\n    box-shadow: 0 2px 13px 4px rgba(0, 0, 0, 0.23); }\n\n.confirm-delete .confirmPopup .text {\n      margin-bottom: 3rem; }\n\n@media only screen and (min-width: 500px) and (max-width: 1000px) {\n  .container {\n    padding: 0 1rem;\n    grid-gap: 1rem; }\n    .container .card.logs.giant {\n      grid-column: span 5; }\n    .container .card.logs {\n      grid-column: span 3;\n      padding: 1rem 0; }\n      .container .card.logs .logs-header {\n        width: 100%;\n        margin-left: 0rem; }\n      .container .card.logs .log {\n        width: 46%;\n        padding: 2rem 1.25rem;\n        margin: 0 0.3rem 3rem 0.3rem; }\n      .container .card.logs .giant {\n        grid-column: span 6; }\n      .container .card.logs .expand {\n        width: 100% !important; }\n    .container .addLog {\n      grid-column: span 3; }\n    .container .tiny {\n      grid-column: span 1; } }\n\n@media only screen and (max-width: 720px) {\n  .container {\n    padding: 0 0.5rem; }\n    .container .addLog #inputsContainer .type {\n      width: 90%; }\n    .container .addLog #inputsContainer .date input {\n      margin-top: 0.5rem; }\n    .container .tiny {\n      grid-column: span 1; }\n    .container .card.logs.giant {\n      grid-column: span 6;\n      padding: 1rem 0; }\n    .container .card.logs {\n      grid-column: span 6; }\n      .container .card.logs .filterBtns {\n        margin: 2.5rem 0rem 2rem 0rem; }\n      .container .card.logs .logs-header {\n        width: 100%;\n        margin-left: 0rem; }\n      .container .card.logs .log {\n        width: 46%;\n        padding: 1.75rem 1.25rem;\n        margin: 0 0.3rem 3rem 0.3rem; }\n        .container .card.logs .log .entriesCount {\n          display: flex;\n          flex-flow: column;\n          margin-top: 1.8rem;\n          text-align: right;\n          font-size: 0.85rem; }\n          .container .card.logs .log .entriesCount span:first-child {\n            margin-bottom: .5rem; }\n        .container .card.logs .log h4 {\n          top: 2rem;\n          right: 1rem; }\n      .container .card.logs .giant {\n        grid-column: span 6; }\n      .container .card.logs .expand {\n        width: 100% !important; }\n    .container .addLog {\n      grid-column: span 6; }\n  .confirm-delete .confirmPopup {\n    padding: 4rem 2.5rem; } }\n"

/***/ }),

/***/ "./src/app/components/dashboard/logs-container/logs-container.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/logs-container/logs-container.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LogsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsContainerComponent", function() { return LogsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_logs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/logs.service */ "./src/app/services/logs.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { NgRedux, select } from '@angular-redux/store';
// import { IAppState } from '../../../store';
// import { INCREMENT, FETCH_ALL_LOGS_ERROR, FETCH_ALL_LOGS_SUCCESS } from '../../../actions';
var LogsContainerComponent = /** @class */ (function () {
    function LogsContainerComponent(_logsService, _notificationService) {
        this._logsService = _logsService;
        this._notificationService = _notificationService;
        this.currentShowbtn = 0;
        this.current = {
            number: 0,
            index: 'k'
        };
        this.showConfirmDelete = false;
        this.getAllLogs();
    }
    /* Determines color of a card header based on type of a log */
    LogsContainerComponent.prototype.getClass = function (type) {
        if (type.type === 'personal') {
            return 'personal';
        }
        else {
            return 'work';
        }
    };
    LogsContainerComponent.prototype.getDateOfWeek = function (w, y) {
        var d = (1 + (w - 1) * 7); // 1st of January + 7 days for each week
        return new Date(y, 0, d);
    };
    LogsContainerComponent.prototype.getEndingDateOfWeek = function (w, y) {
        var d = ((1 + (w - 1) * 7)) + 6; // func  getDateOfWeek + 6 days
        return new Date(y, 0, d);
    };
    // getAllLogs() {
    //   this._logsService.getAllLogs(this.userIdofCurrent);
    // }
    LogsContainerComponent.prototype.getAllLogs = function () {
        var _this = this;
        this.currentShowbtn = 0;
        this._logsService.getAllLogs(this.userIdofCurrent)
            .subscribe(function (res) {
            console.log(res);
            _this.logs = res;
            // console.log(this.logs);
            for (var i = 0; i < _this.logs.length; i++) {
                _this.logs[i].weekStart = _this.getDateOfWeek(_this.logs[i].week, 2017);
                _this.logs[i].weekEnd = _this.getEndingDateOfWeek(_this.logs[i].week, 2017);
                _this.logs[i].showText = false;
                if ('days' in _this.logs[i]) {
                    _this.logs[i].dayEntries = _this.logs[i].days.length;
                }
                else {
                    _this.logs[i].dayEntries = 0;
                }
                if (_this.logs[i].text === '') {
                    _this.logs[i].weekEntries = 0;
                }
                else {
                    _this.logs[i].weekEntries = 1;
                }
                if (typeof (_this.logs[i].text) === typeof (Array())) {
                    _this.logs[i].weekEntries = _this.logs[i].text.length;
                }
                if (typeof (_this.logs[i].text) === typeof (String())) {
                    _this.logs[i].text = [{ 'id': 0, 'text': _this.logs[i].text }];
                }
                if (_this.logs[i].text.length === 0) {
                    _this.logs[i].textToshow = _this.logs[i].days[0].text;
                }
                else {
                    _this.logs[i].textToshow = _this.logs[i].text[0].text;
                }
            }
        });
    };
    LogsContainerComponent.prototype.showWorkLogs = function () {
        var _this = this;
        this.currentShowbtn = 1;
        this._logsService.getWorkLogs(this.userIdofCurrent)
            .subscribe(function (res) {
            console.log(res);
            _this.logs = res;
            for (var i = 0; i < _this.logs.length; i++) {
                _this.logs[i].weekStart = _this.getDateOfWeek(_this.logs[i].week, 2017);
                _this.logs[i].weekEnd = _this.getEndingDateOfWeek(_this.logs[i].week, 2017);
                _this.logs[i].showText = false;
                if ('days' in _this.logs[i]) {
                    _this.logs[i].dayEntries = _this.logs[i].days.length;
                }
                else {
                    _this.logs[i].dayEntries = 0;
                }
                if (_this.logs[i].text === '') {
                    _this.logs[i].weekEntries = 0;
                }
                else {
                    _this.logs[i].weekEntries = 1;
                }
            }
        });
    };
    /* Shows confirmation window and stores index od wished number */
    LogsContainerComponent.prototype.initDelete = function (i, id) {
        this.showConfirmDelete = true;
        this.logToDeleteIndex = i;
        this.logToDeleteId = id;
    };
    /* Deletes log based on stored variable created by initDelete() */
    LogsContainerComponent.prototype.deleteLog = function (i, id) {
        this.showConfirmDelete = false;
        this._logsService.deleteLog(this.logToDeleteId);
        this.logs.splice(this.logToDeleteIndex, 1);
        this._notificationService.showNotification('Log has been deleted! 💣🗑️');
    };
    LogsContainerComponent.prototype.showPersonalLogs = function () {
        var _this = this;
        this.currentShowbtn = 2;
        this._logsService.getPersonalLogs(this.userIdofCurrent)
            .subscribe(function (res) {
            _this.logs = res;
            // console.log(res);
            for (var i = 0; i < _this.logs.length; i++) {
                _this.logs[i].weekStart = _this.getDateOfWeek(_this.logs[i].week, 2017);
                _this.logs[i].weekEnd = _this.getEndingDateOfWeek(_this.logs[i].week, 2017);
                _this.logs[i].showText = false;
                if ('days' in _this.logs[i]) {
                    _this.logs[i].dayEntries = _this.logs[i].days.length;
                }
                else {
                    _this.logs[i].dayEntries = 0;
                }
                if (_this.logs[i].text === '') {
                    _this.logs[i].weekEntries = 0;
                }
                else {
                    _this.logs[i].weekEntries = 1;
                }
            }
        });
    };
    LogsContainerComponent.prototype.expandCard = function (i, event) {
        if (event.target.tagName === 'BUTTON' || event.target.attributes.class.value.includes('text')) {
            return;
        }
        this.logs[i].showText = !this.logs[i].showText;
        setTimeout(function () {
            var x = document.querySelector("[data-index=\"" + i + "\"]");
            x.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
    };
    LogsContainerComponent.prototype.getActiveClass = function (index, letter, text) {
        if (Array.isArray(text)) {
            if (text.length === 0) {
                return 'active';
            }
        }
        if (index === this.current.number && letter === this.current.index) {
            return 'active';
        }
        else {
            return false;
        }
    };
    LogsContainerComponent.prototype.ngOnInit = function () {
        // this._logsService.getBS()
        //   .subscribe((res) => {
        //     console.log(res);
        //     this.showWorkLogs();
        //   });
        // setTimeout(() => {
        //   this.getAllLogs();
        // }, 10000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LogsContainerComponent.prototype, "showAddLog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LogsContainerComponent.prototype, "userIdofCurrent", void 0);
    LogsContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logs-container',
            template: __webpack_require__(/*! ./logs-container.component.html */ "./src/app/components/dashboard/logs-container/logs-container.component.html"),
            styles: [__webpack_require__(/*! ./logs-container.component.sass */ "./src/app/components/dashboard/logs-container/logs-container.component.sass")],
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_3__["easeInOut"],
                _animations__WEBPACK_IMPORTED_MODULE_3__["expandCard"]
            ],
        }),
        __metadata("design:paramtypes", [_services_logs_service__WEBPACK_IMPORTED_MODULE_1__["LogsService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], LogsContainerComponent);
    return LogsContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/logs-container/search/search.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/dashboard/logs-container/search/search.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"searchText\" (ngModelChange)=\"isTextAreaEmpty()\" placeholder=\"Search for a week number\">\n<ul *ngIf=\"showResult\">\n  <li *ngFor=\"let log of logs | filter : searchText\">\n    <div>\n      <p *ngIf=\"log != -1\">Week</p><p>{{log.week}}</p> \n      <p *ngIf=\"log == -1\"> No entry found </p>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/dashboard/logs-container/search/search.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/components/dashboard/logs-container/search/search.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: 0 auto;\n  width: 50%;\n  text-align: center;\n  font-family: Open Sans; }\n\nul {\n  margin-bottom: 2rem; }\n\nli {\n  color: black; }\n\ninput {\n  padding: 0.5rem 0.5rem;\n  border: none;\n  min-width: 8rem;\n  text-align: center;\n  font-weight: 300;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.03);\n  border-radius: 2px;\n  color: var(--black);\n  margin-bottom: 2rem; }\n\ninput:focus {\n    outline: none;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }\n\ndiv {\n  display: inline-flex; }\n\ndiv p:first-child {\n    margin-right: 0.25rem;\n    margin-bottom: 0.5rem; }\n"

/***/ }),

/***/ "./src/app/components/dashboard/logs-container/search/search.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/dashboard/logs-container/search/search.component.ts ***!
  \********************************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_logs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/logs.service */ "./src/app/services/logs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(_logsService) {
        this._logsService = _logsService;
        this.logs = [];
        this.showResult = false;
        this.getAllLogs();
    }
    SearchComponent.prototype.getAllLogs = function () {
        var _this = this;
        this._logsService.getAllLogs({ 'userId': '72315f' })
            .subscribe(function (res) {
            // console.log(res);
            _this.logs = res;
        });
    };
    SearchComponent.prototype.isTextAreaEmpty = function () {
        this.searchText !== '' ? this.showResult = true : this.showResult = false;
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/dashboard/logs-container/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.sass */ "./src/app/components/dashboard/logs-container/search/search.component.sass")],
        }),
        __metadata("design:paramtypes", [_services_logs_service__WEBPACK_IMPORTED_MODULE_1__["LogsService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <a href=\"#\">\r\n    <div id=\"icon\"></div>\r\n    Log Yourself\r\n  </a>\r\n  <div class=\"date\">{{today | date:'dd.MM.yyyy' }}, {{today | date:'EEEE' }} - Week {{today | week }}</div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  height: 4rem;\n  background: linear-gradient(#2F9173, #3f9c80);\n  padding: 1rem 2rem;\n  display: flex;\n  align-items: center;\n  box-shadow: 0px 4px 14px 0px rgba(129, 123, 123, 0.42);\n  margin-bottom: 1rem;\n  justify-content: space-between;\n  color: #ffffff;\n  font-weight: 300; }\n  nav #icon {\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg width%3D%22100%25%22 height%3D%22100%25%22 viewBox%3D%220 0 21 21%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 xml%3Aspace%3D%22preserve%22 xmlns%3Aserif%3D%22http%3A%2F%2Fwww.serif.com%2F%22 style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A1.41421%3B%22%3E%3Crect x%3D%22-58.985%22 y%3D%22-19%22 width%3D%22800%22 height%3D%221397%22 style%3D%22fill%3A%23b5d5cd%3B%22%2F%3E%3Cg id%3D%22header%22%3E%3Cuse xlink%3Ahref%3D%22%23_Image1%22 x%3D%220%22 y%3D%220%22 width%3D%2220.05px%22 height%3D%2220.885px%22 transform%3D%22matrix(0.954743%2C0%2C0%2C0.994524%2C0%2C0)%22%2F%3E%3Crect x%3D%22-58.985%22 y%3D%22-19%22 width%3D%22800%22 height%3D%2262%22 style%3D%22fill%3A%232f9173%3B%22%2F%3E%3Cg id%3D%22icon%22%3E%3Cpath d%3D%22M20.05%2C2.005c0%2C-1.107 -0.899%2C-2.005 -2.005%2C-2.005l-16.04%2C0c-1.107%2C0 -2.005%2C0.898 -2.005%2C2.005l0%2C16.875c0%2C1.107 0.898%2C2.005 2.005%2C2.005l16.04%2C0c1.106%2C0 2.005%2C-0.898 2.005%2C-2.005l0%2C-16.875Z%22 style%3D%22fill%3A%23fff%3B%22%2F%3E%3CclipPath id%3D%22_clip2%22%3E%3Crect x%3D%220%22 y%3D%220%22 width%3D%2220.05%22 height%3D%224%22%2F%3E%3C%2FclipPath%3E%3Cg clip-path%3D%22url(%23_clip2)%22%3E%3Cpath d%3D%22M20.05%2C2.005c0%2C-1.107 -0.899%2C-2.005 -2.005%2C-2.005l-16.04%2C0c-1.107%2C0 -2.005%2C0.898 -2.005%2C2.005l0%2C16.875c0%2C1.107 0.898%2C2.005 2.005%2C2.005l16.04%2C0c1.106%2C0 2.005%2C-0.898 2.005%2C-2.005l0%2C-16.875Z%22 style%3D%22fill%3A%2356c0a0%3B%22%2F%3E%3C%2Fg%3E%3Crect x%3D%224.177%22 y%3D%227.101%22 width%3D%2211.696%22 height%3D%220.835%22 style%3D%22fill%3A%236ecfb1%3B%22%2F%3E%3Crect x%3D%224.177%22 y%3D%2210.025%22 width%3D%2211.696%22 height%3D%220.835%22 style%3D%22fill%3A%236ecfb1%3B%22%2F%3E%3Crect x%3D%224.177%22 y%3D%2212.949%22 width%3D%2211.696%22 height%3D%220.835%22 style%3D%22fill%3A%236ecfb1%3B%22%2F%3E%3Crect x%3D%224.177%22 y%3D%2215.873%22 width%3D%2211.696%22 height%3D%220.835%22 style%3D%22fill%3A%236ecfb1%3B%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%3E%3Cimage id%3D%22_Image1%22 width%3D%2221px%22 height%3D%2221px%22 xlink%3Ahref%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAI0lEQVQ4jWNkYGBwZKAyYKK2gaOGjho6auiooaOGjhpKJQAAXbkAaxU88IQAAAAASUVORK5CYII%3D%22%2F%3E%3C%2Fdefs%3E%3C%2Fsvg%3E\");\n    height: 1.35rem;\n    width: 1.35rem;\n    margin-right: 0.5rem; }\n  nav a {\n    text-decoration: none;\n    color: white;\n    font-size: 1.35rem;\n    font-weight: 300;\n    display: inherit; }\n  @media only screen and (min-width: 500px) and (max-width: 1000px) {\n  nav {\n    padding: 1rem 1.5rem; }\n    nav div {\n      width: 43%;\n      line-height: 130%;\n      text-align: right; } }\n  @media only screen and (max-width: 500px) {\n  nav {\n    padding: 1rem 1rem;\n    height: 4.5rem; }\n    nav div {\n      width: 43%;\n      line-height: 130%;\n      text-align: right; } }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.today = Date.now();
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.sass */ "./src/app/components/navbar/navbar.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"404-container\">\r\n  <h1>Oops, we didn't quite find what you are looking for.</h1>\r\n  <h2>But we offer this puppy as a comforting buddy.</h2>\r\n  <img src=\"../../../assets/puppy.jpg\" alt=\"Adorable puppy\">\r\n  <h2>How about checking our dashboard though?</h2>\r\n  <a href=\"#\" routerLink=\"/dashboard\">Dashboard</a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  text-align: center;\n  padding: 3rem;\n  line-height: 2rem;\n  color: #0b7660; }\n  div h1 {\n    font-size: 1.75rem;\n    margin-bottom: 1rem; }\n  div h2 {\n    font-size: 1.25rem; }\n  a {\n  display: block;\n  background: linear-gradient(#c33e3e, #a03233);\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 1rem;\n  color: white;\n  text-decoration: none;\n  border-radius: 3px;\n  margin: 0 auto;\n  margin-top: 2rem; }\n  img {\n  max-height: 50vh;\n  box-shadow: 0px 0px 18px 12px #5ccbaf;\n  margin: 1.5rem 0; }\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.sass */ "./src/app/components/not-found/not-found.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/notifications/notifications.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"alert.show\" @easeInOut class=\"alert\" id=\"alert\">\n  {{alert.content}}\n</div>"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.sass":
/*!***********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.sass ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  position: fixed;\n  background: rgba(55, 151, 122, 0.95);\n  right: 0;\n  bottom: 3rem;\n  padding: 1.5rem 1.5rem;\n  border-radius: 3px 0 0 3px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.49); }\n"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(_notificationService) {
        this._notificationService = _notificationService;
        this.alert = { 'content': '', 'show': true };
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._notificationService.getNotification()
            .subscribe(function (res) {
            _this.alert = res;
        });
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/components/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.sass */ "./src/app/components/notifications/notifications.component.sass")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["easeInOut"]]
        }),
        __metadata("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        console.log(items);
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        var found = items.filter(function (it) {
            it = it.week.toString();
            if (it.toLowerCase().includes(searchText)) {
                return true;
            }
            else {
                return false;
            }
        });
        if (found.length === 0) {
            return [-1];
        }
        return found;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/week.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/week.pipe.ts ***!
  \************************************/
/*! exports provided: WeekPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekPipe", function() { return WeekPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WeekPipe = /** @class */ (function () {
    function WeekPipe() {
    }
    WeekPipe.prototype.transform = function (value) {
        return this.getWeekNumber(value);
    };
    // ISO WEEK - source: http://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
    WeekPipe.prototype.getWeekNumber = function (d) {
        // Copy date so don't modify original
        var x = new Date(+d);
        x.setHours(0, 0, 0);
        x = new Date(Date.UTC(x.getFullYear(), x.getMonth(), x.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        x.setUTCDate(x.getUTCDate() + 4 - (x.getUTCDay() || 7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(x.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((x.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
        // Return week number
        return weekNo;
    };
    WeekPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'week' })
    ], WeekPipe);
    return WeekPipe;
}());



/***/ }),

/***/ "./src/app/services/logs.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/logs.service.ts ***!
  \******************************************/
/*! exports provided: LogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsService", function() { return LogsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http, Headers, RequestOptions } from '@angular/http';


// import { NgRedux, select } from '@angular-redux/store';
// import { IAppState } from '../store';
// import { INCREMENT, FETCH_ALL_LOGS_ERROR, FETCH_ALL_LOGS_SUCCESS } from '../actions';
var LogsService = /** @class */ (function () {
    function LogsService(_http) {
        this._http = _http;
        this.logs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    LogsService.prototype.getBS = function () {
        console.log(this.logs);
        return this.logs;
    };
    // getAllLogs(id) {
    //   this._http.post<any>('/api/logs', id).subscribe((res) => {
    //     this.ngRedux.dispatch({ type: 'FETCH_ALL_LOGS_SUCCESS', logs: res.data });
    //     }, err => {
    //       this.ngRedux.dispatch({ type: 'FETCH_ALL_LOGS_ERROR' });
    //     });
    // }
    LogsService.prototype.getAllLogs = function (id) {
        var _this = this;
        return this._http.post('/api/logs', id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return _this.result = result.data; }));
    };
    LogsService.prototype.getWorkLogs = function (id) {
        var _this = this;
        return this._http.post('/api/logs/work', id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return _this.result = result.data; }));
    };
    LogsService.prototype.getPersonalLogs = function (id) {
        var _this = this;
        return this._http.post('/api/logs/personal', id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return _this.result = result.data; }));
    };
    LogsService.prototype.insertLog = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post('/api/log', data)
                .subscribe(function (res) {
                _this.add(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    LogsService.prototype.add = function (log) {
        this.logs.next(log);
    };
    LogsService.prototype.deleteLog = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post('/api/delete/' + id, id)
                .subscribe(function (res) {
                resolve(res);
                console.log(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    LogsService.prototype.updateLog = function (logToUpdate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.put('/api/update/' + logToUpdate._id, logToUpdate)
                .subscribe(function (res) {
                resolve(res);
                console.log(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    LogsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LogsService);
    return LogsService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.notification = { 'content': '', 'show': false };
    }
    NotificationService.prototype.getNotification = function () {
        var alert = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.notification);
        return alert;
    };
    NotificationService.prototype.showNotification = function (content) {
        var _this = this;
        this.notification.content = content;
        this.notification.show = true;
        setTimeout(function () { return _this.notification.show = false; }, 5000);
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sisak\Documents\Code\log-yourself\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map