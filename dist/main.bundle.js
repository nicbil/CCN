webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate__ = __webpack_require__("../../../../../src/app/translate/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_translate) {
        this._translate = _translate;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._translate.use('ru');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__restrictinput_directive__ = __webpack_require__("../../../../../src/app/restrictinput.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__translate__ = __webpack_require__("../../../../../src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_create_protocol_with_acute_myocardial_infarction_create_protocol_with_acute_myocardial_infarction_component__ = __webpack_require__("../../../../../src/app/pages/create-protocol-with-acute-myocardial-infarction/create-protocol-with-acute-myocardial-infarction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_index_index_component__ = __webpack_require__("../../../../../src/app/pages/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/bundles/ng2-datepicker.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_main_menu_main_menu_component__ = __webpack_require__("../../../../../src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_view_protocol_with_acute_myocardial_infarction_view_protocol_with_acute_myocardial_infarction_component__ = __webpack_require__("../../../../../src/app/components/view-protocol-with-acute-myocardial-infarction/view-protocol-with-acute-myocardial-infarction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_protocol_acute_myocardial_infarction_protocol_acute_myocardial_infarction_component__ = __webpack_require__("../../../../../src/app/components/protocol-acute-myocardial-infarction/protocol-acute-myocardial-infarction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_update_protocol_with_acute_myocardial_infarction_update_protocol_with_acute_myocardial_infarction_component__ = __webpack_require__("../../../../../src/app/pages/update-protocol-with-acute-myocardial-infarction/update-protocol-with-acute-myocardial-infarction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_obj_ng_for_pipe__ = __webpack_require__("../../../../../src/app/shared/obj-ng-for.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* routingComponents */],
            __WEBPACK_IMPORTED_MODULE_11__translate__["b" /* TranslatePipe */],
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__restrictinput_directive__["a" /* RestrictInputDirective */],
            __WEBPACK_IMPORTED_MODULE_12__pages_create_protocol_with_acute_myocardial_infarction_create_protocol_with_acute_myocardial_infarction_component__["a" /* CreateProtocolWithAcuteMyocardialInfarctionComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_main_menu_main_menu_component__["a" /* MainMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_view_protocol_with_acute_myocardial_infarction_view_protocol_with_acute_myocardial_infarction_component__["a" /* ViewProtocolWithAcuteMyocardialInfarctionComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_protocol_acute_myocardial_infarction_protocol_acute_myocardial_infarction_component__["a" /* ProtocolAcuteMyocardialInfarctionComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_update_protocol_with_acute_myocardial_infarction_update_protocol_with_acute_myocardial_infarction_component__["a" /* UpdateProtocolWithAcuteMyocardialInfarctionComponent */],
            __WEBPACK_IMPORTED_MODULE_21__shared_obj_ng_for_pipe__["a" /* ObjNgForPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15_ng2_datepicker__["NgDatepickerModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_10_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_17_ng2_charts__["ChartsModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_11__translate__["a" /* TRANSLATION_PROVIDERS */], __WEBPACK_IMPORTED_MODULE_11__translate__["c" /* TranslateService */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_index_component__ = __webpack_require__("../../../../../src/app/pages/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_create_protocol_with_acute_myocardial_infarction_create_protocol_with_acute_myocardial_infarction_component__ = __webpack_require__("../../../../../src/app/pages/create-protocol-with-acute-myocardial-infarction/create-protocol-with-acute-myocardial-infarction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_update_protocol_with_acute_myocardial_infarction_update_protocol_with_acute_myocardial_infarction_component__ = __webpack_require__("../../../../../src/app/pages/update-protocol-with-acute-myocardial-infarction/update-protocol-with-acute-myocardial-infarction.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_index_index_component__["a" /* IndexComponent */]
    }, {
        path: 'create_protocol_with_acute_myocardial_infarction',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_create_protocol_with_acute_myocardial_infarction_create_protocol_with_acute_myocardial_infarction_component__["a" /* CreateProtocolWithAcuteMyocardialInfarctionComponent */]
    }, {
        path: 'update_protocol_with_acute_myocardial_infarction',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_update_protocol_with_acute_myocardial_infarction_update_protocol_with_acute_myocardial_infarction_component__["a" /* UpdateProtocolWithAcuteMyocardialInfarctionComponent */]
    }, {
        path: '**',
        redirectTo: 'create_protocol_with_acute_myocardial_infarction'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_2__pages_index_index_component__["a" /* IndexComponent */],
    __WEBPACK_IMPORTED_MODULE_3__pages_create_protocol_with_acute_myocardial_infarction_create_protocol_with_acute_myocardial_infarction_component__["a" /* CreateProtocolWithAcuteMyocardialInfarctionComponent */]
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-main-menu\">\n  <div class=\"main-menu\">\n    <a href=\"/\">\n      <button mat-button>{{'lang_98' | translate}}</button>\n    </a>\n\n    <button mat-button [matMenuTriggerFor]=\"menu\">{{'lang_97' | translate}}</button>\n    <mat-menu #menu=\"matMenu\">\n      <a href=\"/create_protocol_with_acute_myocardial_infarction\">\n        <button mat-menu-item>{{'lang_75' | translate}}</button>\n      </a>\n    </mat-menu>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/main-menu/main-menu.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap-main-menu {\n  position: fixed;\n  width: 100%;\n  height: 38px;\n  top: 0;\n  left: 0;\n  color: #fff;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background: #337ab7;\n  z-index: 3; }\n\n.main-menu {\n  width: 1000px;\n  margin: 0 auto; }\n  .main-menu a {\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainMenuComponent = (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-menu',
        template: __webpack_require__("../../../../../src/app/components/main-menu/main-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main-menu/main-menu.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], MainMenuComponent);

//# sourceMappingURL=main-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/protocol-acute-myocardial-infarction/protocol-acute-myocardial-infarction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-body\">\n  <form class=\"wrap-form\" #protocolForm=\"ngForm\" (ngSubmit)=\"saveForm(protocolForm)\">\n    <mat-tab-group [selectedIndex]=\"1\">\n      <mat-tab label=\"{{'lang_96' | translate}}\">\n        <div>\n          <div>\n            <mat-form-field class=\"wrap-date\">\n              <input matInput [(ngModel)]='protocol.date_and_time_of_arrival' id=\"date_and_time_of_arrival\"\n                     name=\"date_and_time_of_arrival\"\n                     #arrival_date=\"ngModel\"\n                     placeholder=\"{{'lang_36' | translate}}\"\n                     [textMask]=\"{mask: dataService.maskDateTime}\"\n                     [pattern]=\"dataService.patternTimeDate\" required>\n            </mat-form-field>\n          </div>\n\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center;\">\n            <div>\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"protocol.first_name\" name=\"first_name\" placeholder=\"{{'first_name' | translate}}\" required>\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-form-field class=\"\">\n                <input matInput [(ngModel)]=\"protocol.last_name\" name=\"last_name\" placeholder=\"{{'last_name' | translate}}\" required>\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-form-field class=\"example-full-width\">\n                <input type=\"text\"\n                       placeholder=\"{{'patronymic' | translate}}\"\n                       matInput\n                       [formControl]=\"autocompleteControl\"\n                       [matAutocomplete]=\"patronymic\"\n                       [(ngModel)]=\"protocol.patronymic\" name=\"patronymic\">\n\n                <mat-autocomplete #patronymic=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of filteredOptionsAutocomplete | async\"\n                              [value]=\"option.patronymic\"\n                              (onSelectionChange)=\"applyAutocomplete(option, true)\">\n                    {{ transformDate(option.birthday_date, true) }} - {{ option.first_name }} {{ option.last_name }} {{ option.patronymic }}\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-form-field class=\"wrap-date\">\n                <input matInput [(ngModel)]='protocol.birthday_date' name=\"birthday_date\" placeholder=\"{{'birthday_date' | translate}}\"\n                       [textMask]=\"{mask: dataService.maskDate}\"\n                       [pattern]=\"dataService.patternDate\" required>\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-radio-group class=\"wrap-gender\" [(ngModel)]='protocol.gender' name=\"gender\">\n                <mat-radio-button value=\"man\" checked>{{'man' | translate}}</mat-radio-button>\n                <mat-radio-button value=\"woman\">{{'women' | translate}}</mat-radio-button>\n              </mat-radio-group>\n            </div>\n            <div>\n              <mat-form-field>\n                <input matInput [(ngModel)]='protocol.address' name=\"address\" placeholder=\"{{'lang_21' | translate}}\">\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-form-field>\n                <input matInput [(ngModel)]='protocol.phone' name=\"phone\" placeholder=\"{{'lang_70' | translate}}\"\n                       [textMask]=\"{mask: dataService.maskPhone}\">\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-form-field>\n                <input matInput [(ngModel)]='protocol.delivered' name=\"delivered\" placeholder=\"{{'lang_20' | translate}}\">\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-form-field>\n                <mat-select placeholder=\"{{'lang_43' | translate}}\" [(ngModel)] = \"protocol.killip_type\" name=\"killip_type\" required>\n                  <mat-option value=\"1\">{{'lang_44' | translate}}</mat-option>\n                  <mat-option value=\"2\">{{'lang_45' | translate}}</mat-option>\n                  <mat-option value=\"3\">{{'lang_46' | translate}}</mat-option>\n                  <mat-option value=\"4\">{{'lang_47' | translate}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-form-field>\n                <input type=\"text\" placeholder=\"{{'ecg' | translate}}\" matInput\n                       [(ngModel)] = \"protocol.ecg\" name=\"ecg\"\n                       [matAutocomplete]=\"auto\" required>\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                  <mat-option value=\"{{'lang_57' | translate}}\">{{'lang_57' | translate}}</mat-option>\n                  <mat-option value=\"{{'lang_58' | translate}}\">{{'lang_58' | translate}}</mat-option>\n                  <mat-option value=\"{{'lang_59' | translate}}\">{{'lang_59' | translate}}</mat-option>\n                  <mat-option value=\"{{'lang_62' | translate}}\">{{'lang_62' | translate}}</mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n            <div style=\"display: flex\">\n              <div class=\"wrap-radio\">\n                <div class=\"title\">{{'lang_71' | translate}}</div>\n                <mat-radio-group class=\"\" [(ngModel)]='protocol.cd.offOn' name=\"cd\">\n                  <mat-radio-button value=\"no\" checked (click)=\"protocol.cd.type = ''\">{{'lang_55' | translate}}</mat-radio-button>\n                  <mat-radio-button value=\"yes\" (click)=\"protocol.cd.type = 1\">{{'lang_56' | translate}}</mat-radio-button>\n                </mat-radio-group>\n              </div>\n\n              <div class=\"wrap-radio\" *ngIf=\"protocol.cd.offOn === 'yes'\">\n                <div class=\"title\">{{'lang_106' | translate}}</div>\n                <mat-radio-group class=\"\" [(ngModel)]='protocol.cd.type' name=\"cd_type\">\n                  <mat-radio-button value=\"1\" checked>1</mat-radio-button>\n                  <mat-radio-button value=\"2\">2</mat-radio-button>\n                </mat-radio-group>\n              </div>\n            </div>\n          </div>\n\n          <div>\n            <div class=\"title-input\">{{'lang_107' | translate}}</div>\n            <mat-form-field>\n              <input matInput [(ngModel)]='protocol.ad.c_before' name=\"ad_c_before\" placeholder=\"{{'lang_108' | translate}}\"\n                     [min]=\"0\" [max]=\"300\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput [(ngModel)]='protocol.ad.d_before' name=\"ad_d_before\" placeholder=\"{{'lang_109' | translate}}\"\n                     [min]=\"0\" [max]=\"150\">\n            </mat-form-field>\n\n            <span class=\"title-between-input\">{{'lang_110' | translate}}</span>&nbsp;&nbsp;\n            <mat-form-field>\n              <input matInput [(ngModel)]='protocol.ad.c_after' name=\"ad_c_after\" placeholder=\"{{'lang_108' | translate}}\"\n                     [min]=\"0\" [max]=\"300\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput [(ngModel)]='protocol.ad.d_after' name=\"ad_d_after\" placeholder=\"{{'lang_109' | translate}}\"\n                     [min]=\"0\" [max]=\"150\">\n            </mat-form-field>\n          </div>\n\n          <div style=\"display: flex\">\n            <div class=\"wrap-radio\">\n              <div class=\"title\">{{'lang_54' | translate}}</div>\n              <mat-radio-group class=\"\" [(ngModel)]='protocol.effect_of_thrombolysis' name=\"effect_of_thrombolysis\">\n                <mat-radio-button value=\"no\" checked>{{'lang_55' | translate}}</mat-radio-button>\n                <mat-radio-button value=\"yes\">{{'lang_56' | translate}}</mat-radio-button>\n              </mat-radio-group>\n            </div>\n\n            <div class=\"wrap-radio\">\n              <div>\n                <div class=\"title\">{{'lang_48' | translate}}</div>\n                <mat-radio-group [(ngModel)]='protocol.thrombolysis.type' name=\"thrombolysis\" (click)=\"protocol.thrombolysis.data = {}\">\n                  <mat-radio-button value=\"no\" checked>{{'lang_49' | translate}}</mat-radio-button>\n                  <mat-radio-button value=\"yes\">{{'lang_50' | translate}}</mat-radio-button>\n                  <mat-radio-button value=\"contraindicated\">{{'lang_51' | translate}}</mat-radio-button>\n                </mat-radio-group>\n              </div>\n\n              <div class=\"sub-group-of-thrombolysis\">\n                <ng-container *ngIf=\"protocol.thrombolysis.type === 'no'\"></ng-container>\n\n                <ng-container *ngIf=\"protocol.thrombolysis.type === 'yes'\">\n                  <mat-form-field class=\"\">\n                    <input matInput [(ngModel)]=\"protocol.thrombolysis.data.time\" name=\"thrombolysis_time\"\n                           [pattern]=\"dataService.patternTime\"\n                           [textMask]=\"{mask: dataService.maskTime}\"\n                           placeholder=\"{{'lang_52' | translate}}\">\n                  </mat-form-field>\n\n                  <mat-form-field class=\"\">\n                    <input matInput [(ngModel)]=\"protocol.thrombolysis.data.drug\" name=\"thrombolysis_drug\" placeholder=\"{{'lang_53' | translate}}\">\n                  </mat-form-field>\n                </ng-container>\n\n                <ng-container *ngIf=\"protocol.thrombolysis.type === 'contraindicated'\">\n                  <mat-form-field>\n                    <input matInput [(ngModel)]=\"protocol.thrombolysis.data.cause\" name=\"thrombolysis_cause\" placeholder=\"{{'lang_99' | translate}}\">\n                  </mat-form-field>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <table class=\"table table-time-intervals\">\n          <thead>\n          <tr>\n            <th colspan=\"4\">{{'lang_31' | translate}}</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let timeIntervalsVC of tables.time_intervals_vertical_count; let horizontalI = index;\">\n            <td>\n              <ng-container>\n                {{timeIntervalsVC | translate}}\n              </ng-container>\n            </td>\n            <td>\n              <mat-form-field class=\"wrap-date\">\n                <input matInput [(ngModel)]='protocol.time_intervals.date[horizontalI]'\n                       name=\"timeIntervalsDate{{horizontalI}}\"\n                       [textMask]=\"{mask: dataService.maskDate}\"\n                       [pattern]=\"dataService.patternDate\"\n                       placeholder=\"{{'lang_32' | translate}}\">\n              </mat-form-field>\n            </td>\n            <td>\n              <mat-form-field class=\"wrap-time\">\n                <input matInput [(ngModel)]=\"protocol.time_intervals.time[horizontalI]\"\n                       name=\"timeIntervalsTime{{horizontalI}}\"\n                       [pattern]=\"dataService.patternTime\"\n                       [textMask]=\"{mask: dataService.maskTime}\"\n                       placeholder=\"{{'lang_33' | translate}}\">\n              </mat-form-field>\n            </td>\n            <td>\n              <mat-form-field class=\"cant-determined\">\n                <input matInput [(ngModel)]=\"protocol.time_intervals.not_determined[horizontalI]\"\n                       name=\"timeIntervals_not_determined\"\n                       placeholder=\"{{'lang_34' | translate}}\">\n              </mat-form-field>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n\n        <div class=\"wrap-row\" style=\"display: flex;\">\n          <div class=\"\">\n            <div class=\"title\">{{'lang_23' | translate}}</div>\n            <mat-radio-group class=\"radios\" [(ngModel)]='protocol.continuing_pain' name=\"continuing_pain\">\n              <mat-radio-button value=\"no\">{{'lang_25' | translate}}</mat-radio-button>\n              <mat-radio-button value=\"yes\">{{'lang_24' | translate}}</mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <div class=\"\">\n            <div class=\"title\">{{'lang_26' | translate}}</div>\n            <mat-radio-group class=\"radios\" [(ngModel)]='protocol.increase_segment_st' name=\"increase_segment_st\">\n              <mat-radio-button value=\"no\">{{'lang_25' | translate}}</mat-radio-button>\n              <mat-radio-button value=\"yes\">{{'lang_24' | translate}}</mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </div>\n\n        <div class=\"h-row wrap-thrombaspiration\">\n          <div class=\"title\">{{'lang_27' | translate}}</div>\n          <mat-radio-group class=\"radios\" [(ngModel)]='protocol.thrombaspiration' name=\"thrombaspiration\">\n            <mat-radio-button value=\"thrombus_not_received\">{{'lang_29' | translate}}</mat-radio-button>\n            <mat-radio-button value=\"thrombus_received\">{{'lang_28' | translate}}</mat-radio-button>\n            <mat-radio-button value=\"failed\">{{'lang_30' | translate}}</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n        <div class=\"group wrap-row\">\n          <div>\n            <div class=\"title\">{{'lang_22' | translate}}</div>\n            <mat-radio-group class=\"radios\" [(ngModel)]='protocol.blood_timi_before' name=\"blood_timi_before\">\n              <mat-radio-button value=\"0\">0</mat-radio-button>\n              <mat-radio-button value=\"1\">1</mat-radio-button>\n              <mat-radio-button value=\"2\">2</mat-radio-button>\n              <mat-radio-button value=\"3\">3</mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <div>\n            <div class=\"title\">{{'lang_17' | translate}}</div>\n            <mat-radio-group class=\"radios\" [(ngModel)]='protocol.blood_timi_after' name=\"blood_timi_after\">\n              <mat-radio-button value=\"0\">0</mat-radio-button>\n              <mat-radio-button value=\"1\">1</mat-radio-button>\n              <mat-radio-button value=\"2\">2</mat-radio-button>\n              <mat-radio-button value=\"3\">3</mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <div>\n            <mat-form-field class=\"\">\n              <input matInput placeholder=\"{{'lang_18' | translate}}\" class=\"input\" [min]=\"1\" [max]=\"100\"\n                     [pattern]=\"patternPercentage\"\n                     [(ngModel)]=\"protocol.stenosis_diameter_ica_before_chkv\"\n                     name=\"stenosis_diameter_ica_before_chkv\" required>\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field class=\"\">\n              <input matInput placeholder=\"{{'lang_19' | translate}}\" class=\"input\" [min]=\"1\" [max]=\"100\"\n                     [pattern]=\"patternPercentage\"\n                     [(ngModel)]=\"protocol.stenosis_diameter_ica_after_chkv\"\n                     name=\"stenosis_diameter_ica_after_chkv\" required>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"title-table\">{{'lang_11' | translate}}</div>\n\n        <div class=\"wrap-additionally wrap-row\">\n          <mat-checkbox [(ngModel)]=\"protocol.additionally['ivl']\" name=\"additionally0\">\n            {{'lang_12' | translate}}\n          </mat-checkbox>\n          <mat-checkbox [(ngModel)]=\"protocol.additionally['vabk']\" name=\"additionally1}}\">\n            {{'lang_13' | translate}}\n          </mat-checkbox>\n          <mat-checkbox [(ngModel)]=\"protocol.additionally['inotropic_support']\" name=\"additionally2}}\">\n            {{'lang_14' | translate}}\n          </mat-checkbox>\n          <mat-checkbox [(ngModel)]=\"protocol.additionally['eks']\" name=\"additionally3}}\">\n            {{'lang_15' | translate}}\n          </mat-checkbox>\n          <mat-checkbox [(ngModel)]=\"protocol.additionally['cardioversion']\" name=\"additionally4}}\">\n            {{'lang_16' | translate}}\n          </mat-checkbox>\n        </div>\n\n        <mat-form-field>\n          <mat-select placeholder=\"{{'lang_5' | translate}}\" [(ngModel)] = \"protocol.type_interventions\" name=\"type_interventions\">\n            <mat-option value=\"0\">{{'lang_0' | translate}}</mat-option>\n            <mat-option value=\"1\">{{'lang_1' | translate}}</mat-option>\n            <mat-option value=\"2\">{{'lang_2' | translate}}</mat-option>\n            <mat-option value=\"3\">{{'lang_3' | translate}}</mat-option>\n            <mat-option value=\"4\">{{'lang_4' | translate}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"wrap-date\">\n          <input matInput [(ngModel)]='protocol.date_and_time_of_death' name=\"date_and_time_of_death\" placeholder=\"{{'lang_6' | translate}}\"\n                 [textMask]=\"{mask: dataService.maskDateTime}\"\n                 [pattern]=\"dataService.patternTimeDate\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"{{'lang_63' | translate}}\" [(ngModel)]=\"protocol.cause_of_death\"\n                 name=\"cause_of_death\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"{{'lang_7' | translate}}\" [(ngModel)]=\"protocol.operator\"\n                 name=\"operator\">\n        </mat-form-field>\n\n        <table class=\"table table-lka\">\n          <thead>\n          <tr>\n            <th>{{'lang_8' | translate}}</th>\n            <th colspan=\"2\">{{'lang_90' | translate}}</th>\n            <th colspan=\"4\">{{'lang_91' | translate}}</th>\n            <th colspan=\"2\">{{'lang_92' | translate}}</th>\n            <th>{{'lang_93' | translate}}</th>\n            <th>{{'lang_94' | translate}}</th>\n            <th>{{'lang_95' | translate}}</th>\n          </tr>\n          <tr>\n            <th *ngFor=\"let lkaHC of tables.lkaHorizontalCount;\">{{lkaHC | translate}}</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let lkaVC of tables.lkaVerticalCount; let horizontalI = index;\">\n            <td *ngFor=\"let lkaHC of tables.lkaHorizontalCount; let verticalI = index;\">\n              <ng-container *ngIf=\"!verticalI\">\n                {{lkaVC | translate}}\n              </ng-container>\n\n              <ng-container *ngIf=\"verticalI && (lkaVC === 'percent')\">\n                <mat-form-field>\n                  <input matInput placeholder=\"{{'lang_74' | translate}}\" class=\"input\" [min]=\"1\" [max]=\"100\"\n                         [pattern]=\"patternPercentage\"\n                         [(ngModel)]=\"protocol.lka[lkaVC][verticalI-1]\"\n                         name=\"{{lkaVC+verticalI}}\">\n                </mat-form-field>\n              </ng-container>\n\n              <ng-container *ngIf=\"verticalI && ((lkaVC !== 'timiAfter') && (lkaVC !== 'timiBefore') && (lkaVC !== 'percent'))\">\n                <mat-checkbox [(ngModel)]=\"protocol.lka[lkaVC][verticalI-1]\" name=\"{{lkaVC+verticalI}}\"></mat-checkbox>\n              </ng-container>\n\n              <ng-container *ngIf=\"verticalI && ((lkaVC === 'timiAfter') || (lkaVC === 'timiBefore'))\">\n                <mat-form-field>\n                  <mat-select [(ngModel)] = \"protocol.lka[lkaVC][verticalI-1]\" name=\"{{lkaVC+verticalI}}\">\n                    <mat-option value=\"0\">0</mat-option>\n                    <mat-option value=\"1\">1</mat-option>\n                    <mat-option value=\"2\">2</mat-option>\n                    <mat-option value=\"3\">3</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </ng-container>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n\n        <table class=\"table table-pka\">\n          <thead>\n          <tr>\n            <th *ngFor=\"let pkaHC of tables.pkaHorizontalCount;\">{{pkaHC | translate}}</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let pkaVC of tables.pkaVerticalCount; let horizontalI = index;\">\n            <td *ngFor=\"let pkaHC of tables.pkaHorizontalCount; let verticalI = index;\">\n              <ng-container *ngIf=\"!verticalI\">\n                {{pkaVC | translate}}\n              </ng-container>\n\n              <ng-container *ngIf=\"verticalI && (pkaVC === 'percent')\">\n                <mat-form-field>\n                  <input matInput placeholder=\"{{'lang_74' | translate}}\" class=\"input\" [min]=\"1\" [max]=\"100\"\n                         [pattern]=\"patternPercentage\"\n                         [(ngModel)]=\"protocol.pka[pkaVC][verticalI-1]\"\n                         name=\"{{pkaVC+verticalI}}\">\n                </mat-form-field>\n              </ng-container>\n\n              <ng-container *ngIf=\"verticalI && ((pkaVC !== 'timiAfter') && (pkaVC !== 'timiBefore') && (pkaVC !== 'percent'))\">\n                <mat-checkbox [(ngModel)]=\"protocol.pka[pkaVC][verticalI-1]\" name=\"{{pkaVC+verticalI}}\"></mat-checkbox>\n              </ng-container>\n\n              <ng-container *ngIf=\"verticalI && ((pkaVC === 'timiAfter') || (pkaVC === 'timiBefore'))\">\n                <mat-form-field>\n                  <mat-select [(ngModel)]=\"protocol.pka[pkaVC][verticalI-1]\" name=\"{{pkaVC+verticalI}}\">\n                    <mat-option value=\"0\">0</mat-option>\n                    <mat-option value=\"1\">1</mat-option>\n                    <mat-option value=\"2\">2</mat-option>\n                    <mat-option value=\"3\">3</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </ng-container>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n\n        <div class=\"title-input\">{{'lang_10' | translate}}</div>\n        <mat-form-field *ngFor=\"let lvgHC of tables.lvgHorizontalCount; let horizontalI = index;\">\n          <mat-select placeholder=\"{{lvgHC | translate}}\" [(ngModel)]=\"protocol.lvg[horizontalI]\" name=\"lvg_{{horizontalI}}\">\n            <mat-option value=\"1\">{{'normakinez' | translate}}</mat-option>\n            <mat-option value=\"2\">{{'gipokinez' | translate}}</mat-option>\n            <mat-option value=\"3\">{{'akinez' | translate}}</mat-option>\n            <mat-option value=\"4\">{{'diskinez' | translate}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select placeholder=\"{{'fv' | translate}}\" [(ngModel)]=\"protocol.fv\" name=\"fv\">\n            <mat-option value=\"30\"><=30</mat-option>\n            <mat-option value=\"40\">30-40</mat-option>\n            <mat-option value=\"50\">40-50</mat-option>\n            <mat-option value=\"70\">50-70</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-tab>\n\n      <mat-tab label=\"{{'lang_111' | translate}}\">\n        <span class=\"title-input\">{{'lang_112' | translate}}</span>\n        <mat-form-field>\n          <mat-select [(ngModel)] = \"protocol.aortic_valve_or_prosthesis['valve_or_prosthesis']\"\n                      name=\"aortic_valve_or_prosthesis_valve_or_prosthesis\">\n            <mat-option value=\"\"></mat-option>\n            <mat-option value=\"1\">{{'lang_113' | translate}}</mat-option>\n            <mat-option value=\"2\">{{'lang_114' | translate}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"protocol.aortic_valve_or_prosthesis.max_gradient\"\n                 name=\"aortic_valve_or_prosthesis_max_gradient\"\n                 restrict-input=\"numbers\"\n                 placeholder=\"{{'lang_115' | translate}}\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"protocol.aortic_valve_or_prosthesis.effective_area_holes\"\n                 name=\"aortic_valve_or_prosthesis_effective_area_holes\"\n                 restrict-input=\"numbers\"\n                 placeholder=\"{{'lang_116' | translate}}\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select [(ngModel)] = \"protocol.aortic_valve_or_prosthesis.regurgitation\"\n                      name=\"aortic_valve_or_prosthesis_regurgitation\"\n                      placeholder=\"{{'lang_117' | translate}}\">\n            <mat-option value=\"\"></mat-option>\n            <mat-option value=\"0\">0</mat-option>\n            <mat-option value=\"1\">1</mat-option>\n            <mat-option value=\"2\">2</mat-option>\n            <mat-option value=\"3\">3</mat-option>\n            <mat-option value=\"4\">4</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"protocol.aortic_valve_or_prosthesis.features\"\n                 name=\"aortic_valve_or_prosthesis_features\"\n                 placeholder=\"{{'lang_118' | translate}}\">\n        </mat-form-field>\n        <hr>\n        <span class=\"title-input\">{{'lang_122' | translate}}</span>\n        <mat-form-field>\n          <mat-select [(ngModel)] = \"protocol.mitral_valve_or_prosthesis.valve_or_prosthesis\"\n                      name=\"mitral_valve_or_prosthesis_valve_or_prosthesis\">\n            <mat-option value=\"\"></mat-option>\n            <mat-option value=\"1\">{{'lang_123' | translate}}</mat-option>\n            <mat-option value=\"2\">{{'lang_114' | translate}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"protocol.mitral_valve_or_prosthesis.max_gradient\"\n                 name=\"mitral_valve_or_prosthesis_max_gradient\"\n                 restrict-input=\"numbers\"\n                 placeholder=\"{{'lang_115' | translate}}\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"protocol.mitral_valve_or_prosthesis.effective_area_holes\"\n                 name=\"mitral_valve_or_prosthesis_effective_area_holes\"\n                 restrict-input=\"numbers\"\n                 placeholder=\"{{'lang_116' | translate}}\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select [(ngModel)] = \"protocol.mitral_valve_or_prosthesis.regurgitation\"\n                      name=\"mitral_valve_or_prosthesis_regurgitation\"\n                      placeholder=\"{{'lang_117' | translate}}\">\n            <mat-option value=\"\"></mat-option>\n            <mat-option value=\"0\">0</mat-option>\n            <mat-option value=\"1\">1</mat-option>\n            <mat-option value=\"2\">2</mat-option>\n            <mat-option value=\"3\">3</mat-option>\n            <mat-option value=\"4\">4</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"protocol.mitral_valve_or_prosthesis.features\"\n                 name=\"mitral_valve_or_prosthesis_features\"\n                 placeholder=\"{{'lang_118' | translate}}\">\n        </mat-form-field>\n        <hr>\n        <span class=\"title-input\">{{'lang_119' | translate}}</span>\n        <mat-form-field>\n          <mat-select [(ngModel)] = \"protocol.pulmonary_artery_valve.regurgitation\" name=\"pulmonary_artery_valve_regurgitation\"\n                      placeholder=\"{{'lang_117' | translate}}\">\n            <mat-option value=\"\"></mat-option>\n            <mat-option value=\"0\">0</mat-option>\n            <mat-option value=\"1\">1</mat-option>\n            <mat-option value=\"2\">2</mat-option>\n            <mat-option value=\"3\">3</mat-option>\n            <mat-option value=\"4\">4</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"protocol.pulmonary_artery_valve.features\"\n                 name=\"pulmonary_artery_valve_features\"\n                 placeholder=\"{{'lang_118' | translate}}\">\n        </mat-form-field>\n        <hr>\n        <span class=\"title-input\">{{'lang_121' | translate}}</span>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"protocol.three_leaf_valve.effective_area_holes\"\n                 name=\"three_leaf_valve_effective_area_holes\"\n                 restrict-input=\"numbers\"\n                 placeholder=\"{{'lang_116' | translate}}\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select [(ngModel)] = \"protocol.three_leaf_valve.regurgitation\" name=\"three_leaf_valve_regurgitation\"\n                      placeholder=\"{{'lang_117' | translate}}\">\n            <mat-option value=\"\"></mat-option>\n            <mat-option value=\"0\">0</mat-option>\n            <mat-option value=\"1\">1</mat-option>\n            <mat-option value=\"2\">2</mat-option>\n            <mat-option value=\"3\">3</mat-option>\n            <mat-option value=\"4\">4</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"protocol.three_leaf_valve.features\"\n                 name=\"three_leaf_valve_features\"\n                 placeholder=\"{{'lang_118' | translate}}\">\n        </mat-form-field>\n        <hr>\n        <span class=\"title-input\">{{'lang_125' | translate}}</span>\n        {{'lang_126' | translate}}\n        <mat-form-field class=\"mm-input\">\n          <input matInput [(ngModel)]=\"protocol.aorta\"\n                 name=\"aorta\"\n                 [min]=\"0\" [max]=\"100\"\n                 placeholder=\"{{'lang_147' | translate}}\">\n        </mat-form-field>\n        <hr>\n        <span class=\"title-input\">{{'lang_127' | translate}}</span>\n        {{'lang_128' | translate}}\n        <mat-form-field class=\"mm-input\">\n          <input matInput [(ngModel)]=\"protocol.left_atrium.size_0\"\n                 name=\"left_atrium_size_0\"\n                 [min]=\"0\" [max]=\"10\"\n                 placeholder=\"{{'lang_147' | translate}}\">\n        </mat-form-field>\n        {{'lang_129' | translate}}\n        <mat-form-field class=\"mm-input\">\n          <input matInput [(ngModel)]=\"protocol.left_atrium.size_1\"\n                 name=\"left_atrium_size_1\"\n                 [min]=\"0\" [max]=\"10\"\n                 placeholder=\"{{'lang_147' | translate}}\">\n        </mat-form-field>\n        /\n        <mat-form-field class=\"mm-input\">\n          <input matInput [(ngModel)]=\"protocol.left_atrium.size_2\"\n                 name=\"left_atrium_size_2\"\n                 [min]=\"0\" [max]=\"10\"\n                 placeholder=\"{{'lang_147' | translate}}\">\n        </mat-form-field>\n        <hr>\n        <span class=\"title-input\">{{'lang_130' | translate}}</span>\n        {{'lang_131' | translate}}\n        <mat-form-field class=\"mm-input\">\n          <input matInput [(ngModel)]=\"protocol.left_ventricle.size_diastolic\"\n                 name=\"left_ventricle_size_diastolic\"\n                 [min]=\"0\" [max]=\"10\"\n                 placeholder=\"{{'lang_147' | translate}}\">\n        </mat-form-field>\n        {{'lang_132' | translate}}\n        <mat-form-field class=\"mm-input\">\n          <input matInput [(ngModel)]=\"protocol.left_ventricle.size_systolic\"\n                 name=\"left_ventricle_size_systolic\"\n                 [min]=\"0\" [max]=\"10\"\n                 placeholder=\"{{'lang_147' | translate}}\">\n        </mat-form-field>\n\n        <table class=\"table table-lv-volumes\">\n          <thead>\n            <tr>\n              <th *ngFor=\"let leftVentricleHCTH of tables.leftVentricleHorizontalCount;\">\n                {{leftVentricleHCTH | translate}}\n              </th>\n            </tr>\n          </thead>\n            <tbody>\n              <tr *ngFor=\"let leftVentricleVC of tables.leftVentricleVerticalCount; let horizontalI = index;\">\n                <td *ngFor=\"let leftVentricleHC of tables.leftVentricleHorizontalCount; let verticalI = index;\">\n                  <ng-container *ngIf=\"verticalI === 0\">\n                    {{leftVentricleVC | translate}}\n                  </ng-container>\n\n                  <mat-form-field class=\"input-w-40\" *ngIf=\"(verticalI !== 4) && (verticalI !== 0)\">\n                    <input matInput placeholder=\"{{'lang_138' | translate}}\" class=\"input\" [min]=\"0\" [max]=\"500\"\n                           [min]=\"0\" [max]=\"500\"\n                           [(ngModel)]=\"protocol.left_ventricle.scope_lv[horizontalI+'_'+verticalI]\"\n                           name=\"scope{{horizontalI}}_{{verticalI}}\">\n                  </mat-form-field>\n\n                  <mat-form-field class=\"input-w-40\" *ngIf=\"verticalI === 4\">\n                    <input matInput placeholder=\"{{'lang_74' | translate}}\" class=\"input\" [min]=\"1\" [max]=\"100\"\n                           [min]=\"0\" [max]=\"100\"\n                           [(ngModel)]=\"protocol.left_ventricle.scope_lv[horizontalI+'_'+verticalI]\"\n                           name=\"scope{{horizontalI}}_{{verticalI}}\">\n                  </mat-form-field>\n                </td>\n              </tr>\n            </tbody>\n        </table>\n\n        {{'lang_140' | translate}}\n        <mat-form-field class=\"mm-input margin-left\">\n          <input matInput [(ngModel)]=\"protocol.left_ventricle.thickness_of_myocardium_diastolic\"\n                 name=\"thickness_of_myocardium_diastolic\"\n                 [min]=\"0\" [max]=\"20\"\n                 placeholder=\"{{'lang_147' | translate}}\">\n        </mat-form-field>\n        {{'lang_142' | translate}}\n        <mat-form-field class=\"mm-input margin-left\">\n          <input matInput [(ngModel)]=\"protocol.left_ventricle.thickness_of_myocardium_systolic\"\n                 name=\"thickness_of_myocardium_systolic\"\n                 [min]=\"0\" [max]=\"20\"\n                 placeholder=\"{{'lang_147' | translate}}\">\n        </mat-form-field>\n\n        <div>\n          {{'lang_145' | translate}}\n          <mat-form-field class=\"mm-input margin-left\">\n            <input matInput [(ngModel)]=\"protocol.left_ventricle.mass_myocardium\"\n                   name=\"mass_myocardium\"\n                   [min]=\"0\" [max]=\"500\"\n                   placeholder=\"{{'lang_148' | translate}}\">\n          </mat-form-field>\n        </div>\n        <hr>\n\n        <div class=\"title\">{{'lang_139' | translate}}</div>\n        <div style=\"display: flex;\">\n          <div style=\"line-height: 18px;\">\n            <div *ngFor=\"let data_circle of dataCircle; let i = index;\">\n              <div style=\"display: flex;\">\n                <div>{{data_circle.title | translate}}</div>\n                <div [ngStyle]=\"{'width': '10px', 'height': '10px', 'margin': '4px 3px', 'background-color': data_circle.color}\"></div>\n              </div>\n            </div>\n          </div>\n          <div>\n            <div class=\"inputs-sector\">\n              <ng-container *ngFor=\"let segment of segmentsOfMyocardialContractility | objNgFor; let i = index;\">\n                <input [ngStyle]=\"{'top': segment['top']+'px', 'margin-left': segment['m_left']+'px'}\"\n                       [textMask]=\"{mask: dataService.maskLVG_1_4}\"\n                       placeholder=\"N\"\n                       (input)=\"setColor(protocol.myocardial_contractility[i], segment['position'])\"\n                       [(ngModel)]=\"protocol.myocardial_contractility[i]\" name=\"myocardial_contractility-{{i}}\">\n\n                {{setColor(protocol.myocardial_contractility[i], segment['position'])}}\n              </ng-container>\n            </div>\n            <svg\n              xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n              xmlns:cc=\"http://creativecommons.org/ns#\"\n              xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n              xmlns:svg=\"http://www.w3.org/2000/svg\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n              xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n              width=\"80mm\"\n              height=\"80mm\"\n              viewBox=\"0 0 159 159\"\n              version=\"1.1\"\n              id=\"svg4771\"\n              inkscape:version=\"0.92.2 (5c3e80d, 2017-08-06)\"\n              sodipodi:docname=\"drawing-1.svg.2017_11_11_23_36_39.0.svg\">\n              <g #segments\n                 inkscape:label=\"Layer 1\"\n                 id=\"layer1\"\n                 style=\"display:inline;opacity:1\"\n                 inkscape:groupmode=\"layer\"\n                 transform=\"translate(0,-138)\">\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 40.340513,178.30734 c -2.78973,-2.68661 -7.174529,-7.08179 -9.744001,-9.76706 l -4.671766,-4.8823 1.999069,-1.85283 c 6.894778,-6.3904 14.338388,-11.10456 22.846097,-14.4688 8.685228,-3.43444 16.044357,-5.0246 26.125596,-5.6452 l 2.338607,-0.14395 v 13.99387 13.99388 l -3.140417,0.15354 c -10.240653,0.50065 -20.677007,4.90164 -29.390308,12.39384 l -1.290645,1.10977 z\"\n                  id=\"path4784\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 111.4401,181.32826 c -7.57072,-6.6766 -18.500751,-11.17948 -28.26376,-11.64391 l -3.140416,-0.1494 v -14.00851 -14.0085 l 1.804069,0.14358 c 0.992238,0.079 2.826375,0.21315 4.075862,0.29817 10.357632,0.70478 23.309795,4.74454 32.073175,10.00358 4.87916,2.92805 9.14476,6.10791 13.37516,9.9707 l 1.98054,1.80844 -9.74823,9.75097 c -5.36152,5.36303 -9.80898,9.74412 -9.88323,9.73574 -0.0743,-0.008 -1.09718,-0.86376 -2.27317,-1.90086 z\"\n                  id=\"path4786\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 91.528514,202.84768 c -2.772503,-2.24395 -7.432122,-4.08758 -10.356694,-4.09775 l -1.135896,-0.004 v -14.16521 c 0,-7.79091 0.0902,-14.16405 0.200451,-14.16253 1.610558,0.0222 7.15419,0.68234 9.111591,1.08509 5.682306,1.16919 12.216834,3.8515 16.662844,6.83984 2.39971,1.61294 6.89927,5.29201 6.89927,5.64119 0,0.10901 -4.4801,4.66554 -9.95578,10.12566 l -9.955804,9.92747 z\"\n                  id=\"path4788\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 127.80745,214.44807 c -0.43884,-9.741 -4.51789,-19.85973 -11.27226,-27.96263 l -2.08828,-2.50521 9.77548,-9.77549 9.77549,-9.77547 1.68368,1.83163 c 11.29319,12.28559 18.96958,29.93096 19.85294,45.63508 0.0852,1.5139 0.21731,3.44411 0.29368,4.28935 l 0.13884,1.5368 h -14.00604 -14.00603 z\"\n                  id=\"path4790\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 98.744787,216.42852 c 0,-2.98852 -1.65543,-7.3737 -3.861552,-10.22909 l -1.159,-1.50009 10.010295,-9.9925 10.01029,-9.99251 0.80953,0.93545 c 7.70197,8.89991 11.56517,18.26799 12.3718,30.00101 l 0.1424,2.07133 H 112.90668 98.744787 Z\"\n                  id=\"path4792\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 103.40054,241.30764 -9.910464,-10.04625 1.335612,-1.75833 c 2.224609,-2.92868 3.904239,-7.20885 3.915149,-9.97686 l 0.004,-1.00226 H 112.87 126.99514 l -0.11122,2.07133 c -0.38794,7.22516 -2.75329,15.06265 -6.39246,21.1811 -1.57772,2.65258 -4.42281,6.56009 -6.16252,8.46372 l -1.0179,1.1138 z\"\n                  id=\"path4794\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 123.82795,261.73935 -9.79553,-9.67311 1.99831,-2.27178 c 4.89105,-5.56043 8.63732,-12.71025 10.51682,-20.07154 0.70465,-2.75984 1.31854,-7.1135 1.32473,-9.39492 l 0.005,-1.80407 h 14.01906 14.01905 l -0.11315,1.26953 c -0.0622,0.69824 -0.17632,2.39315 -0.25352,3.76646 -0.75951,13.51102 -6.57573,28.86289 -15.32751,40.45685 -1.83057,2.42506 -6.03424,7.24206 -6.40914,7.34427 -0.10367,0.0283 -4.59649,-4.30149 -9.98403,-9.62169 z\"\n                  id=\"path4796\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 80.035924,280.11654 v -14.01865 h 2.00628 c 5.516041,0 12.942038,-1.89129 18.974376,-4.83249 4.07624,-1.98746 6.09472,-3.36571 11.5997,-7.92046 l 0.71574,-0.59219 9.80566,9.81299 9.80566,9.81299 -2.54007,2.24595 c -7.90018,6.98542 -15.88479,11.66463 -25.77707,15.10605 -7.335803,2.55206 -13.792281,3.79152 -22.251669,4.27171 l -2.338607,0.13274 z\"\n                  id=\"path4798\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 80.035924,251.13267 v -14.16713 l 1.135896,-0.004 c 2.778474,-0.01 6.731122,-1.48388 9.74512,-3.63462 l 1.742361,-1.24333 10.020519,10.02051 10.02052,10.02051 -2.23374,1.87015 c -2.97689,2.49234 -4.83723,3.72476 -8.51456,5.64065 -6.352192,3.30947 -12.202042,4.92486 -19.978411,5.51686 l -1.937705,0.14751 z\"\n                  id=\"path4800\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 80.035924,227.33871 v -8.81478 h 8.907859 8.907864 l -0.2415,1.80407 c -1.12229,8.38375 -7.582948,14.59245 -16.304694,15.66882 l -1.269529,0.15667 z\"\n                  id=\"path4802\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 80.035924,208.61858 v -9.10354 l 1.269529,0.17143 c 5.767546,0.7788 10.393299,3.51213 13.272042,7.84238 1.884522,2.83472 2.837422,5.45943 3.191242,8.7901 l 0.14906,1.40317 h -8.940935 -8.940938 z\"\n                  id=\"path4804\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 61.172177,217.12076 c 0.06742,-0.33073 0.19503,-1.23959 0.283581,-2.01969 0.08855,-0.78007 0.465145,-2.26148 0.836874,-3.292 2.471693,-6.85211 7.983617,-11.1551 15.538318,-12.13031 l 1.403165,-0.18113 v 9.11224 9.11225 h -9.092256 -9.092255 z\"\n                  id=\"path4806\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 76.971874,235.86632 c -4.129137,-0.60153 -7.851899,-2.54108 -10.911059,-5.68465 -2.428949,-2.49597 -4.733758,-7.6788 -4.733758,-10.64482 v -1.01292 h 8.953529 8.953529 v 8.81989 c 0,6.89512 -0.07291,8.81278 -0.334087,8.78731 -0.183748,-0.0179 -1.051417,-0.13709 -1.928154,-0.26481 z\"\n                  id=\"path4808\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"M 43.67784,248.92583 C 36.973351,241.12085 32.785341,231.07136 32.275936,221.56597 l -0.163028,-3.04204 h 14.20617 14.206169 v 1.15996 c 0,2.88559 1.680811,7.20958 3.949499,10.16035 l 1.203222,1.56497 -9.8581,9.86079 c -5.421955,5.42344 -9.945817,9.8608 -10.053026,9.8608 -0.107212,0 -1.047261,-0.99224 -2.089002,-2.20497 z\"\n                  id=\"path4810\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 75.225071,265.00099 c -9.511916,-0.83014 -19.437376,-4.96884 -26.5265,-11.06093 -1.139235,-0.979 -2.071339,-1.86187 -2.071339,-1.9619 0,-0.10003 4.441151,-4.62182 9.869221,-10.04841 9.86105,-9.85834 9.869733,-9.86613 10.490327,-9.41215 3.979029,2.91074 7.769233,4.44794 10.96714,4.44794 h 1.280195 v 14.16526 14.1653 l -0.734992,-0.0368 c -0.404243,-0.0202 -1.877568,-0.13646 -3.274052,-0.25835 z\"\n                  id=\"path4812\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 32.26857,214.44807 c 0.457526,-9.65623 4.603893,-19.76491 11.301786,-27.55331 l 1.802423,-2.09588 9.972488,9.96983 9.972487,9.96982 -0.655386,0.81232 c -2.286524,2.83402 -3.835959,6.67795 -4.071144,10.09993 l -0.142359,2.07134 H 46.281155 32.113442 Z\"\n                  id=\"path4814\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 56.08175,194.01461 -9.84781,-10.04646 1.733447,-1.57296 c 7.666463,-6.95669 17.535612,-10.98093 29.061754,-11.85022 l 2.204974,-0.16629 v 14.18365 14.18365 h -1.252453 c -2.980608,0 -7.303262,1.66121 -10.277494,3.94966 l -1.77461,1.36543 z\"\n                  id=\"path4816\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 3.3295678,216.8401 c 0,-2.05708 0.596229,-8.31793 1.0868176,-11.41238 1.3414306,-8.46125 3.5893789,-15.23881 7.6077946,-22.93748 2.920054,-5.59438 6.194096,-10.25027 11.085874,-15.76478 l 1.969276,-2.21997 9.704872,9.70215 c 5.337683,5.33618 9.703292,9.76289 9.701361,9.83715 -0.0019,0.0743 -0.72879,0.9769 -1.615237,2.00589 -2.335966,2.71159 -5.168833,7.02237 -6.655432,10.12758 -2.650125,5.53559 -4.498784,12.64262 -4.752292,18.26981 l -0.1475,3.27405 H 17.322335 3.3295678 Z\"\n                  id=\"path4818\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"M 23.483591,269.37196 C 16.627204,261.75345 12.019386,254.45193 8.5959923,245.7811 5.6893958,238.41925 4.0694534,230.69911 3.4513616,221.26344 L 3.2719074,218.52393 H 17.292672 31.313435 l 0.151318,3.00678 c 0.189997,3.77548 0.964872,7.59418 2.486861,12.25568 1.977414,6.05637 5.305398,11.86641 9.220507,16.09733 l 1.937496,2.0938 -9.730147,9.73289 c -5.351582,5.35309 -9.798009,9.73289 -9.880947,9.73289 -0.08294,0 -0.989659,-0.93211 -2.014932,-2.07134 z\"\n                  id=\"path4820\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#fd9fb3;fill-opacity:1;stroke-width:0.26726952\"\n                  d=\"m 74.780579,293.87542 c -10.830597,-0.69103 -20.618931,-3.47296 -31.201754,-8.86776 -5.478021,-2.79255 -10.475561,-6.35204 -15.794092,-11.24933 l -1.603619,-1.47661 9.798851,-9.81671 9.798852,-9.8167 1.693738,1.48148 c 8.053052,7.04388 18.374103,11.34715 28.487508,11.87761 l 3.274052,0.17174 v 13.99103 13.99105 l -0.601356,-0.0392 c -0.330745,-0.0215 -2.064226,-0.13252 -3.85218,-0.2466 z\"\n                  id=\"path4822\"\n                  inkscape:connector-curvature=\"0\" />\n                <rect\n                  style=\"fill:#e1e1e1;fill-opacity:1;stroke-width:0.26458332\"\n                  id=\"rect5925\"\n                  width=\"152.5858\"\n                  height=\"0.80180997\"\n                  x=\"3.3295677\"\n                  y=\"217.72215\" />\n                <path\n                  style=\"fill:#e1e1e1;fill-opacity:1;stroke-width:0.19488403\"\n                  d=\"m 127.79362,219.88465 -0.0387,-1.41291 h -14.89241 c -11.73157,0 -14.913263,0.0517 -14.990696,0.24361 -0.07833,0.19412 -0.10142,0.1939 -0.113681,-0.001 -0.01228,-0.19535 -6.630619,-0.24427 -32.804623,-0.24249 -69.1247193,0.005 -61.5346336,0.0528 -61.5346336,-0.38977 0,-0.38896 0.1299227,-0.38977 61.7639476,-0.38977 58.658936,0 61.768436,-0.0171 61.853076,-0.34105 0.0849,-0.32481 0.0902,-0.32481 0.11174,0 0.0213,0.32151 0.84323,0.34105 14.34658,0.34105 14.19405,0 14.32398,0.004 14.32398,0.38977 0,0.38613 -0.12993,0.38976 -13.92567,0.38976 h -13.92567 l -0.0673,1.41291 -0.0673,1.41291 z\"\n                  id=\"path5927\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#e1e1e1;fill-opacity:1;stroke-width:0.19488403\"\n                  d=\"m 39.340621,218.52052 c 3.946993,-0.0295 10.348934,-0.0295 14.226535,3e-5 3.877601,0.0295 0.648242,0.0536 -7.17635,0.0536 -7.824594,-2e-5 -10.997178,-0.0242 -7.050185,-0.0537 z\"\n                  id=\"path5931\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#e1e1e1;fill-opacity:1;stroke-width:0.19488403\"\n                  d=\"m 32.096031,219.10511 -0.0292,-0.63337 14.275254,0.0474 14.275255,0.0474 -14.164989,0.0513 -14.16499,0.0513 -0.08107,0.53466 c -0.07521,0.49608 -0.08317,0.48896 -0.110262,-0.0987 z\"\n                  id=\"path5933\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#e1e1e1;fill-opacity:1;stroke-width:0.19488403\"\n                  d=\"m 127.79412,219.96038 -0.0392,-1.53205 -14.85991,0.11264 c -8.17295,0.0619 -14.947616,0.12018 -15.054801,0.12939 -0.107186,0.009 -8.394629,-0.0282 -18.41654,-0.0831 -10.021911,-0.0549 -24.728567,-0.0488 -32.681455,0.0136 l -14.459796,0.11345 -0.07502,0.70696 c -0.07386,0.69595 -0.07553,0.69406 -0.107786,-0.12129 l -0.03276,-0.82826 H 17.742853 c -14.1537064,0 -14.3239766,-0.005 -14.3239766,-0.3865 0,-0.38445 0.3278509,-0.38688 61.7295176,-0.45805 33.951232,-0.0393 61.817226,-0.0712 61.924406,-0.0708 27.87755,0.10876 28.7454,0.1247 28.7454,0.52807 0,0.38281 -0.15995,0.38726 -13.92602,0.38726 h -13.926 l -0.0664,1.51035 -0.0664,1.51035 z\"\n                  id=\"path5935\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#e1e1e1;fill-opacity:1;stroke-width:0.19488403\"\n                  d=\"m 127.79412,219.95066 -0.0392,-1.54179 -11.93665,0.13402 c -6.56516,0.0737 -17.242374,0.13026 -23.72714,0.12567 -16.366042,-0.0116 -29.087323,-0.0136 -45.640378,-0.007 l -14.166606,0.005 -0.0746,0.82826 -0.0746,0.82826 -0.03405,-0.9257 -0.03405,-0.9257 H 17.754355 c -7.8718622,0 -14.3557136,-0.07 -14.4085601,-0.15547 -0.052846,-0.0855 -0.034872,-0.25451 0.039943,-0.37557 0.1004767,-0.16257 16.2447941,-0.23654 61.7725041,-0.28302 51.777728,-0.0529 61.662748,-0.10541 61.800658,-0.32858 0.1386,-0.22428 0.17794,-0.22428 0.25265,0 0.0734,0.22029 2.52379,0.27646 14.34757,0.32889 13.92343,0.0617 14.25908,0.0721 14.25908,0.43849 0,0.36692 -0.30946,0.37526 -13.92602,0.37526 h -13.926 l -0.0664,1.51035 -0.0664,1.51035 z\"\n                  id=\"path5937\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#e1e1e1;fill-opacity:1;stroke-width:0.19488403\"\n                  d=\"m 127.79362,219.85309 -0.0387,-1.44446 -8.42874,0.13121 c -4.6358,0.0722 -26.116722,0.13 -47.735366,0.12852 l -39.306623,-0.003 -0.07462,0.82873 -0.07462,0.82874 -0.03405,-0.9257 -0.03405,-0.9257 H 17.754355 c -7.8718622,0 -14.3557136,-0.07 -14.4085601,-0.15547 -0.052846,-0.0855 -0.036098,-0.24948 0.037219,-0.36439 0.094178,-0.14761 18.1916031,-0.23589 61.6594011,-0.3008 45.490105,-0.0679 61.595565,-0.14952 61.792625,-0.31306 0.19894,-0.1651 0.32307,-0.16465 0.48951,0.002 0.16157,0.16158 4.11584,0.24813 14.35831,0.31429 13.62765,0.088 14.13534,0.10435 14.13534,0.45448 0,0.35091 -0.46991,0.36316 -13.92567,0.36316 h -13.92567 l -0.0673,1.41291 -0.0673,1.41291 z\"\n                  id=\"path5939\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"fill:#e1e1e1;fill-opacity:1;stroke-width:0.19488403\"\n                  d=\"m 127.79362,219.85364 -0.0387,-1.44391 -5.81528,0.12965 c -3.1984,0.0713 -24.679321,0.12897 -47.735372,0.12814 l -41.920093,-0.002 -0.07461,0.82857 -0.07462,0.82856 -0.03405,-0.9257 -0.03405,-0.9257 h -14.31249 c -7.8718622,0 -14.3557136,-0.07 -14.4085601,-0.15546 -0.052846,-0.0855 -0.036098,-0.24785 0.037219,-0.36075 0.092601,-0.14259 18.8240861,-0.24546 61.3461611,-0.3369 33.66707,-0.0724 61.474655,-0.2067 61.794635,-0.29847 0.32599,-0.0935 0.71491,-0.0923 0.88461,0.003 0.16656,0.0932 6.6269,0.22885 14.35631,0.30141 13.45716,0.12633 14.05347,0.14711 14.05347,0.48974 0,0.34381 -0.5446,0.3578 -13.92567,0.3578 h -13.92567 l -0.0673,1.41291 -0.0673,1.41291 z\"\n                  id=\"path5941\"\n                  inkscape:connector-curvature=\"0\" />\n                <rect\n                  id=\"rect89\"\n                  width=\"152.5858\"\n                  height=\"0.80180997\"\n                  x=\"3.3295677\"\n                  y=\"217.72215\"\n                  style=\"stroke-width:0.26458332\" />\n                <rect\n                  id=\"rect93\"\n                  width=\"0.80180895\"\n                  height=\"152.58797\"\n                  x=\"79.234116\"\n                  y=\"141.54723\"\n                  style=\"stroke-width:0.26458332\" />\n                <path\n                  style=\"opacity:0;fill:#ff0000;fill-opacity:1;stroke-width:0.19488403\"\n                  d=\"m 73.288668,294.71843 c -0.321559,-0.0369 -1.549329,-0.16395 -2.728375,-0.28226 -5.051505,-0.50685 -10.888816,-1.79982 -16.223052,-3.5934 -26.786903,-9.0068 -46.5090893,-31.69636 -51.5760476,-59.3361 -2.93176426,-15.99247 -0.7226722,-32.44505 6.3286808,-47.13389 2.5369398,-5.28475 5.7485158,-10.38926 9.4589398,-15.03411 4.031199,-5.04641 10.559285,-11.14842 15.955756,-14.91434 23.384827,-16.31908 54.006881,-18.56728 79.43513,-5.83194 13.24593,6.63401 24.25518,16.78748 31.7925,29.32118 6.96041,11.57437 10.63906,24.18516 11.00025,37.71006 0.4335,16.23283 -4.13482,31.85679 -13.23086,45.2504 -13.14629,19.35748 -34.08793,31.62427 -57.642901,33.76495 -2.032424,0.1847 -11.151883,0.24234 -12.570021,0.0795 z\"\n                  id=\"path6310\"\n                  inkscape:connector-curvature=\"0\" />\n                <path\n                  style=\"color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.01636899;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate\"\n                  d=\"m 79.506806,140.48895 c -6.60912,5e-4 -13.209735,0.82358 -19.533203,2.46875 -30.487448,7.93193 -53.3067379,33.85345 -57.2499979,65.03711 -4.1265199,32.63295 12.5570199,64.05421 41.8964819,78.90625 8.749567,4.42915 17.966993,7.12228 27.65039,8.07813 l 0.582032,0.0566 -0.002,-0.0469 c 4.009334,0.31828 13.680236,0.10899 17.283203,-0.40625 16.995768,-2.43037 31.992328,-9.90981 44.029298,-21.95703 12.36952,-12.38005 19.62856,-26.98581 22.23046,-44.72656 0.50693,-3.45642 0.52001,-16.51325 0.0176,-19.91602 -2.0398,-13.81474 -6.63049,-25.28945 -14.32422,-35.7832 -10.56195,-14.40581 -25.857,-24.80958 -42.999992,-29.2461 -6.353011,-1.644 -12.970959,-2.46534 -19.580078,-2.46484 z m 0,1.01758 c 6.524791,-5e-4 13.05745,0.80995 19.324218,2.43164 16.911776,4.37668 32.012316,14.64669 42.435546,28.86328 7.59905,10.36462 12.11913,21.65254 14.13867,35.33008 0.44261,2.99761 0.43211,16.55301 -0.0176,19.61914 -2.57422,17.55201 -9.71549,31.91993 -21.94336,44.1582 -11.88741,11.89754 -26.66534,19.26706 -43.455075,21.66797 -3.492203,0.4994 -14.129416,0.7349 -17.617187,0.39063 -9.560476,-0.94372 -18.651826,-3.60036 -27.292949,-7.97461 -28.962746,-14.66134 -45.41928585,-45.65682 -41.3457059,-77.8711 3.89084,-30.769 26.4112999,-56.35447 56.4960969,-64.18164 6.236486,-1.62254 12.752552,-2.4331 19.277344,-2.43359 z\"\n                  id=\"path6872\"\n                  inkscape:connector-curvature=\"0\" />\n              </g>\n            </svg>\n          </div>\n        </div>\n      </mat-tab>\n\n      <mat-tab label=\"Tab 3\">Tab 3</mat-tab>\n    </mat-tab-group>\n  </form>\n</div>\n\n<div class=\"wrap-footer\" *ngIf=\"!protocol['update']\" [ngClass]=\"[protocolForm.valid ? '' : 'hide']\">\n  <div class=\"footer\">\n    <mat-checkbox *ngIf=\"protocol.autocompleteCheckboxShow\" [(ngModel)]=\"protocol.autocompleteParent\" name=\"autocompleteParent\">\n      {{'lang_69' | translate}}\n    </mat-checkbox>\n\n    <button class='btn btn-secondary' (click)=\"cancel(protocolForm)\">{{'lang_72' | translate}}</button>\n    <button class='btn btn-primary' (click)=\"saveForm(protocolForm)\">{{'lang_100' | translate}}</button>\n  </div>\n</div>\n\n<div class=\"wrap-footer\" *ngIf=\"protocol['update']\" [ngClass]=\"[protocolForm.valid ? '' : 'hide']\">\n  <div class=\"footer\">\n    <a href=\"/\"><button class='btn btn-secondary'>{{'lang_72' | translate}}</button></a>\n    <button class='btn btn-primary' (click)=\"saveForm(protocolForm)\">{{'lang_100' | translate}}</button>\n  </div>\n</div>\n\n<div class=\"alert alert-danger alert-dismissible\" *ngIf=\"responseAfterSave['error']\">\n  <a class=\"close\" (click)=\"responseAfterSave['error'] = false\">&times;</a>\n  <strong>{{'lang_102' | translate}} </strong> {{'lang_101' | translate}}\n</div>\n\n<div class=\"alert alert-success alert-dismissible\" *ngIf=\"responseAfterSave['success']\">\n  <a class=\"close\" (click)=\"responseAfterSave['success'] = false\">&times;</a>\n  <strong>{{'lang_103' | translate}} </strong> {{'lang_104' | translate}}\n</div>\n\n<div class=\"shadow\" *ngIf=\"progressSpinnerActive\">\n  <div class=\"progress-spinner\">\n    <mat-progress-spinner class=\"example-margin\"\n                          [color]=\"dataService.spinner.color\"\n                          [mode]=\"dataService.spinner.mode\"\n                          [value]=\"dataService.spinner.value\">\n    </mat-progress-spinner>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/protocol-acute-myocardial-infarction/protocol-acute-myocardial-infarction.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap-form {\n  margin-top: 20px; }\n  .wrap-form .sub-group-of-thrombolysis {\n    margin-top: 10px; }\n  .wrap-form .wrap-additionally {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap; }\n    .wrap-form .wrap-additionally .mat-checkbox {\n      margin-right: 20px; }\n  .wrap-form .group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .wrap-form .title-table {\n    font-weight: bold;\n    margin: 10px 0px 10px 0px; }\n  .wrap-form .table {\n    width: auto; }\n    .wrap-form .table td {\n      text-align: center; }\n    .wrap-form .table th {\n      color: #fff;\n      background-color: #337ab7;\n      font-size: 12px;\n      line-height: 13px; }\n    .wrap-form .table .text-left {\n      text-align: left; }\n  .wrap-form .table-lka tbody tr td:first-child, .wrap-form .table-pka tbody tr td:first-child {\n    text-align: left;\n    padding-right: 15px;\n    font-size: 12px;\n    font-weight: bold;\n    vertical-align: middle; }\n  .wrap-form .lvg .ng-invalid {\n    border-bottom: 1px solid red; }\n  .wrap-form .lvg .mat-input-container {\n    width: 100px; }\n  .wrap-form .table-lka th {\n    text-align: center;\n    border-right: 1px solid #ddd;\n    border-top: 1px solid #ddd; }\n  .wrap-form .table-time-intervals td {\n    text-align: center; }\n  .wrap-form .table-time-intervals td:first-child {\n    text-align: left; }\n  .wrap-form .table-time-intervals td {\n    padding: 0px;\n    vertical-align: middle; }\n  .wrap-form .table-time-intervals tbody tr td {\n    padding-right: 15px; }\n  .wrap-form .table-time-intervals tbody tr td:first-child {\n    width: 115px;\n    font-size: 12px;\n    font-weight: bold; }\n  .wrap-form .table-time-intervals .wrap-date {\n    width: 72px;\n    margin: 0; }\n  .wrap-form .table-time-intervals .wrap-time {\n    width: 35px;\n    margin: 0; }\n  .wrap-form .table-time-intervals .cant-determined {\n    margin: 0; }\n\n.wrap-ngb-datepicker {\n  width: 90px; }\n\n.wrap-ngb-timepicker {\n  display: inline-table; }\n\n.wrap-thrombaspiration .radios {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column wrap;\n          flex-flow: column wrap; }\n  .wrap-thrombaspiration .radios .mat-radio-button {\n    margin-bottom: 5px; }\n\n.save-button {\n  padding: 0px;\n  margin: 0px;\n  border: 0;\n  padding: 8px 14px;\n  border-radius: 5px;\n  outline: none;\n  background-color: #337ab7;\n  color: white;\n  cursor: pointer; }\n\n.table-lvg input::-webkit-input-placeholder, .table-pka input::-webkit-input-placeholder, .table-lka input::-webkit-input-placeholder {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.table-lvg input:-ms-input-placeholder, .table-pka input:-ms-input-placeholder, .table-lka input:-ms-input-placeholder {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.table-lvg input::placeholder, .table-pka input::placeholder, .table-lka input::placeholder {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.wrap-footer {\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  bottom: 0;\n  background-color: black; }\n  .wrap-footer .footer {\n    max-width: 1000px;\n    height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0 auto;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n\n.hide {\n  display: none; }\n\n.title-between-input {\n  font-weight: bold; }\n\n.inputs-sector {\n  position: absolute; }\n  .inputs-sector input {\n    position: absolute;\n    width: 15px;\n    border: 0;\n    border-bottom: 1px solid gray;\n    background: 0 0;\n    outline: 0; }\n\n.table-lv-volumes td:first-child {\n  vertical-align: middle; }\n\nspan.title-input {\n  padding-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/protocol-acute-myocardial-infarction/protocol-acute-myocardial-infarction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocolAcuteMyocardialInfarctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_http_service__ = __webpack_require__("../../../../../src/app/shared/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProtocolAcuteMyocardialInfarctionComponent = (function () {
    function ProtocolAcuteMyocardialInfarctionComponent(datePipe, httpService, dataService, _renderer) {
        this.datePipe = datePipe;
        this.httpService = httpService;
        this.dataService = dataService;
        this._renderer = _renderer;
        this.transformToStringify = ['thrombolysis', 'ecg', 'time_intervals', 'lka', 'pka', 'lvg', 'additionally', 'type_interventions',
            'ad', 'cd', 'aortic_valve_or_prosthesis', 'mitral_valve_or_prosthesis', 'pulmonary_artery_valve', 'three_leaf_valve',
            'left_atrium', 'left_ventricle', 'myocardial_contractility'];
        this.tables = {
            'time_intervals_vertical_count': ['onsetOfSymptoms', 'firstMedicalContact', 'ecg', 'enteringTheHospital',
                'ecgInTheHospital', 'fibrinolysisOrThrombolysis', 'arrivalInAngiography', 'restoringBloodFlow'],
            'lkaHorizontalCount': ['', 'lang_88', 'lang_89', 'lang_81', 'lang_82', 'lang_83', 'lang_86', 'lang_81', 'lang_82', '', '', ''],
            'lkaVerticalCount': ['percent', 'b', 'cm', 'cl', 'cb', 'timiAfter', 'timiBefore'],
            'pkaHorizontalCount': ['lang_9', 'lang_81', 'lang_82', 'lang_83', 'lang_84', 'lang_85', 'lang_86', 'lang_87'],
            'pkaVerticalCount': ['percent', 'b', 'cm', 'cl', 'cb', 'timiAfter', 'timiBefore'],
            'lvgHorizontalCount': ['lang_76', 'lang_77', 'lang_78', 'lang_79', 'lang_80'],
            'leftVentricleVerticalCount': ['m_mode', 'b_mode'],
            'leftVentricleHorizontalCount': ['lang_133', 'lang_134', 'lang_135', 'lang_136', 'lang_137'],
        };
        this.protocol = {
            date_and_time_of_arrival: this.datePipe.transform(new Date(), 'H:mm') + ' ' + this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
            first_name: 'Биленко',
            last_name: 'Николай',
            patronymic: 'Николаевич',
            birthday_date: '11-08-1989',
            gender: 'man',
            delivered: '',
            killip_type: '1',
            effect_of_thrombolysis: 'no',
            thrombolysis: {
                type: 'no',
                data: {}
            },
            ecg: 'Передний, подъем ST (V1-V4)',
            time_intervals: {
                date: {},
                time: {},
                not_determined: {}
            },
            continuing_pain: 'no',
            increase_segment_st: 'no',
            thrombaspiration: 'thrombus_not_received',
            blood_timi_before: '0',
            blood_timi_after: '0',
            stenosis_diameter_ica_before_chkv: '2',
            stenosis_diameter_ica_after_chkv: '3',
            additionally: {},
            type_interventions: '',
            lka: {
                percent: [],
                b: [],
                cm: [],
                cl: [],
                cb: [],
                timiAfter: [],
                timiBefore: []
            },
            pka: {
                percent: [],
                b: [],
                cm: [],
                cl: [],
                cb: [],
                timiAfter: [],
                timiBefore: []
            },
            lvg: {},
            cause_of_death: '',
            operator: '',
            date_and_time_of_death: '12:50 13-10-2099',
            fv: '',
            address: '',
            phone: '',
            cd: {
                offOn: 'no',
                type: ''
            },
            ad: {
                c_before: '',
                d_before: '',
                c_after: '',
                d_after: '',
            },
            aortic_valve_or_prosthesis: {
                valve_or_prosthesis: '',
                max_gradient: '',
                effective_area_holes: '',
                regurgitation: '',
                features: ''
            },
            mitral_valve_or_prosthesis: {
                valve_or_prosthesis: '',
                max_gradient: '',
                effective_area_holes: '',
                regurgitation: '',
                features: ''
            },
            pulmonary_artery_valve: {
                regurgitation: '',
                features: ''
            },
            three_leaf_valve: {
                effective_area_holes: '',
                regurgitation: '',
                features: ''
            },
            aorta: '',
            left_atrium: {
                size_0: '',
                size_1: '',
                size_2: ''
            },
            left_ventricle: {
                size_diastolic: '',
                size_systolic: '',
                scope_lv: {},
                thickness_of_myocardium_diastolic: '',
                thickness_of_myocardium_systolic: '',
                mass_myocardium: '',
            },
            myocardial_contractility: {},
            autocompleteCheckboxShow: false,
            autocompleteParent: false,
            update: ''
        };
        this.autocompleteControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]();
        this.responseAfterSave = {};
        this.progressSpinnerActive = false;
        this.segmentsOfMyocardialContractility = {
            0: { 'top': 32, 'm_left': 93, position: 0 },
            1: { 'top': 32, 'm_left': 181, position: 1 },
            2: { 'top': 127, 'm_left': 130, position: 11 },
            3: { 'top': 120, 'm_left': 75, position: 15 },
            4: { 'top': 80, 'm_left': 112, position: 16 },
            5: { 'top': 100, 'm_left': 25, position: 17 },
            6: { 'top': 80, 'm_left': 169, position: 2 },
            7: { 'top': 127, 'm_left': 156, position: 10 },
            8: { 'top': 116, 'm_left': 204, position: 4 },
            9: { 'top': 100, 'm_left': 257, position: 3 },
            10: { 'top': 184, 'm_left': 27, position: 18 },
            11: { 'top': 167, 'm_left': 78, position: 13 },
            12: { 'top': 156, 'm_left': 129, position: 12 },
            13: { 'top': 200, 'm_left': 118, position: 14 },
            14: { 'top': 255, 'm_left': 96, position: 19 },
            15: { 'top': 157, 'm_left': 157, position: 9 },
            16: { 'top': 200, 'm_left': 168, position: 8 },
            17: { 'top': 255, 'm_left': 189, position: 7 },
            18: { 'top': 167, 'm_left': 203, position: 5 },
            19: { 'top': 185, 'm_left': 256, position: 6 }
        };
        this.dataCircle = [
            { 'title': 'lang_149', 'color': '#7cf17c' },
            { 'title': 'lang_150', 'color': '#7c6beb' },
            { 'title': 'lang_151', 'color': '#903030' },
            { 'title': 'lang_152', 'color': '#f12f59' },
        ];
        this.updateId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProtocolAcuteMyocardialInfarctionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptionsAutocomplete = this.autocompleteControl.valueChanges
            .debounceTime(400)
            .startWith(null)
            .distinctUntilChanged()
            .switchMap(function (searchLine) { return _this.searchAutocomplete(searchLine); });
        if (typeof (this.updateId) === 'number') {
            this.update(this.updateId);
        }
    };
    ProtocolAcuteMyocardialInfarctionComponent.prototype.setColor = function (sector, position) {
        --sector;
        this._renderer.setElementStyle(this.segments.nativeElement.children[position], 'fill', (this.dataCircle[sector] && this.dataCircle[sector]['color']) ? this.dataCircle[sector]['color'] : '#fd9fb3');
    };
    ProtocolAcuteMyocardialInfarctionComponent.prototype.spinner = function (active) {
        this.progressSpinnerActive = active;
    };
    ProtocolAcuteMyocardialInfarctionComponent.prototype.update = function (id) {
        var _this = this;
        this.spinner(true);
        return this.httpService.Http({ 'id': id }, 'get_protocol_infarction_st').subscribe(function (protocol) {
            _this.applyAutocomplete(protocol[0], false);
            _this.spinner(false);
            _this.protocol['update'] = id;
        });
    };
    ProtocolAcuteMyocardialInfarctionComponent.prototype.searchAutocomplete = function (searchLine) {
        if (searchLine) {
            return this.httpService.Http(this.protocol, 'auto_complete_protocol_infarction_st').map(function (protocols) {
                return protocols['rows'];
            });
        }
        return [];
    };
    ProtocolAcuteMyocardialInfarctionComponent.prototype.applyAutocomplete = function (data, autocompleteCheckboxShow) {
        var _this = this;
        this.protocol = Object.assign({}, data);
        this.protocol['birthday_date'] = this.transformDate(this.protocol['birthday_date'], true);
        this.protocol['date_and_time_of_arrival'] = this.transformDate(this.protocol['date_and_time_of_arrival'], false);
        this.protocol['date_and_time_of_death'] = this.transformDate(this.protocol['date_and_time_of_death'], false);
        this.protocol['autocompleteCheckboxShow'] = autocompleteCheckboxShow;
        this.transformToStringify.forEach(function (item) {
            _this.protocol[item] = JSON.parse(_this.protocol[item]);
        });
    };
    ProtocolAcuteMyocardialInfarctionComponent.prototype.transformDate = function (date, onlyDate) {
        if (date) {
            if (onlyDate) {
                return this.datePipe.transform(date, 'dd-MM-yyyy');
            }
            else {
                var date_and_time = date.split(' ');
                var time = date_and_time[1].split(':');
                return time[0] + ":" + time[1] + " " + this.datePipe.transform(date_and_time[0], 'dd-MM-yyyy');
            }
        }
    };
    ProtocolAcuteMyocardialInfarctionComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.responseAfterSave = {};
        if (form.valid) {
            this.spinner(true);
            var dataProtocol_1 = Object.assign({}, this.protocol);
            this.transformToStringify.forEach(function (item) {
                dataProtocol_1[item] = JSON.stringify(dataProtocol_1[item]);
            });
            this.httpService.Http(dataProtocol_1, 'create_protocol_infarction_st')
                .subscribe(function (res) {
                if (res.success) {
                    _this.responseAfterSave = { 'success': true };
                    _this.cancel(form);
                    if (_this.protocol['update']) {
                        location.href = '/';
                    }
                }
                else {
                    _this.responseAfterSave = { 'error': true };
                }
                _this.spinner(false);
            });
        }
        else {
            this.responseAfterSave = { 'error': true };
        }
    };
    ProtocolAcuteMyocardialInfarctionComponent.prototype.cancel = function (form) {
        var that = this;
        form.reset();
        this.autocompleteControl.reset();
        var defaultValuesOfForm = function () {
            that.protocol['date_and_time_of_arrival'] = that.datePipe.transform(new Date(), 'H:mm') + ' ' + that.datePipe.transform(new Date(), 'dd-MM-yyyy');
            that.protocol['birthday_date'] = '11-08-1989';
            that.protocol['gender'] = 'man';
            that.protocol['effect_of_thrombolysis'] = 'no';
            that.protocol['thrombolysis']['type'] = 'no';
            that.protocol['continuing_pain'] = 'no';
            that.protocol['increase_segment_st'] = 'no';
            that.protocol['thrombaspiration'] = 'thrombus_not_received';
            that.protocol['blood_timi_before'] = '0';
            that.protocol['blood_timi_after'] = '0';
            that.protocol['date_and_time_of_death'] = '12:50 13-10-2099';
            that.protocol['autocompleteCheckboxShow'] = false;
            that.protocol['autocompleteParent'] = false;
        };
        setTimeout(function () {
            defaultValuesOfForm();
        }, 100);
    };
    return ProtocolAcuteMyocardialInfarctionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProtocolAcuteMyocardialInfarctionComponent.prototype, "updateId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('segments'),
    __metadata("design:type", Object)
], ProtocolAcuteMyocardialInfarctionComponent.prototype, "segments", void 0);
ProtocolAcuteMyocardialInfarctionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-protocol-acute-myocardial-infarction',
        template: __webpack_require__("../../../../../src/app/components/protocol-acute-myocardial-infarction/protocol-acute-myocardial-infarction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/protocol-acute-myocardial-infarction/protocol-acute-myocardial-infarction.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_2__shared_http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object])
], ProtocolAcuteMyocardialInfarctionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=protocol-acute-myocardial-infarction.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/view-protocol-with-acute-myocardial-infarction/view-protocol-with-acute-myocardial-infarction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-filter\">\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        {{'lang_65' | translate}}\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <form class=\"filter\" #filterForm=\"ngForm\" (ngSubmit)=\"showTable(filterForm)\">\n      <div class=\"filter__fields\">\n        <div>\n          {{'lang_67' | translate}}&nbsp;\n          <mat-form-field class=\"wrap-date\">\n            <input matInput [(ngModel)]='filter.date_and_time_of_arrival_from' id=\"date_and_time_of_arrival_from\"\n                   name=\"date_and_time_of_arrival_from\"\n                   #arrival_date=\"ngModel\"\n                   placeholder=\"{{'lang_66' | translate}}\"\n                   [textMask]=\"{mask: dataService.maskDate}\"\n                   [pattern]=\"dataService.patternDate\">\n          </mat-form-field>\n\n          {{'lang_68' | translate}}&nbsp;\n          <mat-form-field class=\"wrap-date\">\n            <input matInput [(ngModel)]='filter.date_and_time_of_arrival_before' id=\"date_and_time_of_arrival_before\"\n                   name=\"date_and_time_of_arrival_before\"\n                   #arrival_date=\"ngModel\"\n                   placeholder=\"{{'lang_66' | translate}}\"\n                   [textMask]=\"{mask: dataService.maskDate}\"\n                   [pattern]=\"dataService.patternDate\">\n          </mat-form-field>\n        </div>\n\n        <div>\n          <div class=\"filter__title\">{{'gender' | translate}}</div>\n          <mat-checkbox [(ngModel)]=\"filter.gender['man']\" name=\"man\">\n            {{'man' | translate}}\n          </mat-checkbox>\n          <mat-checkbox [(ngModel)]=\"filter.gender['woman']\" name=\"woman\">\n            {{'women' | translate}}\n          </mat-checkbox>\n        </div>\n\n        <div>\n          &nbsp;&nbsp;{{'lang_67' | translate}}&nbsp;\n          <mat-form-field class=\"wrap-date\">\n            <input matInput [(ngModel)]='filter.birthday_date_from' id=\"birthday_date_from\"\n                   name=\"birthday_date_from\"\n                   #arrival_date=\"ngModel\"\n                   placeholder=\"{{'birthday_date' | translate}}\"\n                   [textMask]=\"{mask: dataService.maskDate}\"\n                   [pattern]=\"dataService.patternDate\">\n          </mat-form-field>\n\n          {{'lang_68' | translate}}&nbsp;\n          <mat-form-field class=\"wrap-date\">\n            <input matInput [(ngModel)]='filter.birthday_date_before' id=\"birthday_date_before\"\n                   name=\"birthday_date_before\"\n                   #arrival_date=\"ngModel\"\n                   placeholder=\"{{'birthday_date' | translate}}\"\n                   [textMask]=\"{mask: dataService.maskDate}\"\n                   [pattern]=\"dataService.patternDate\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"wrap-radio\">\n          <div class=\"filter__title\">{{'lang_54' | translate}}</div>\n          <mat-checkbox [(ngModel)]=\"filter.effect_of_thrombolysis['no']\" name=\"effect_of_thrombolysis_no\">\n            {{'lang_49' | translate}}\n          </mat-checkbox>\n          <mat-checkbox [(ngModel)]=\"filter.effect_of_thrombolysis['yes']\" name=\"effect_of_thrombolysis_yes\">\n            {{'lang_50' | translate}}\n          </mat-checkbox>\n        </div>\n\n        <div>\n          <mat-form-field>\n            <mat-select placeholder=\"{{'fv' | translate}}\" [(ngModel)]=\"filter.fv\" name=\"fv\" multiple=\"true\">\n              <mat-option value=\"30\"><=30</mat-option>\n              <mat-option value=\"40\">30-40</mat-option>\n              <mat-option value=\"50\">40-50</mat-option>\n              <mat-option value=\"70\">50-70</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"filter__buttons\">\n        <button class='btn btn-secondary' (click)=\"resetFilter(filterForm)\">{{'lang_73' | translate}}</button>\n        <button class='btn btn-primary' (click)=\"showTable(filterForm)\">{{'lang_105' | translate}}</button>\n      </div>\n    </form>\n  </mat-expansion-panel>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <canvas baseChart\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\">\n    </canvas>\n  </div>\n</div>\n<br><br><br>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"{{field}}\" *ngFor=\"let field of displayedColumns\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> {{field | translate}} </mat-header-cell>\n\n      <ng-container *ngIf=\"field !== 'controls'\">\n        <mat-cell *matCellDef=\"let row\"> {{ tableRow(row, field)}} </mat-cell>\n      </ng-container>\n\n      <ng-container *ngIf=\"field === 'controls'\">\n        <mat-cell *matCellDef=\"let row\">\n          <a href=\"/update_protocol_with_acute_myocardial_infarction?id={{row['id']}}\">\n            <i class=\"material-icons\">&#xE254;</i>\n          </a>\n        </mat-cell>\n      </ng-container>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n  <mat-paginator #paginator\n   [length]=\"pageLength\"\n   [pageIndex]=\"pageIndex\"\n   [pageSize]=\"pageSize\"\n   [pageSizeOptions]=\"pageSizeOptions\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/view-protocol-with-acute-myocardial-infarction/view-protocol-with-acute-myocardial-infarction.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap-filter {\n  padding-bottom: 20px; }\n  .wrap-filter .filter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: wrap column;\n            flex-flow: wrap column; }\n    .wrap-filter .filter__fields {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n    .wrap-filter .filter__title {\n      font-weight: bold; }\n    .wrap-filter .filter__buttons {\n      -ms-flex-item-align: end;\n          align-self: flex-end; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-protocol-with-acute-myocardial-infarction/view-protocol-with-acute-myocardial-infarction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProtocolWithAcuteMyocardialInfarctionComponent; });
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_http_service__ = __webpack_require__("../../../../../src/app/shared/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__translate__ = __webpack_require__("../../../../../src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ViewProtocolWithAcuteMyocardialInfarctionComponent = (function () {
    function ViewProtocolWithAcuteMyocardialInfarctionComponent(dataService, httpService, translate) {
        this.dataService = dataService;
        this.httpService = httpService;
        this.translate = translate;
        this.pageLength = 100;
        this.pageIndex = 0;
        this.pageSize = 100;
        this.pageSizeOptions = [5, 10, 25, 100, 250, 500, 1000];
        this.active = '';
        this.direction = '';
        this.filter = {
            'date_and_time_of_arrival_from': '',
            'date_and_time_of_arrival_before': '',
            'birthday_date_from': '',
            'birthday_date_before': '',
            'gender': {},
            'effect_of_thrombolysis': {},
            'fv': []
        };
        this.barChartOptions = {
            scaleShowVerticalLines: true,
            responsive: true
        };
        this.barChartData = [
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('normakinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('gipokinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('akinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('diskinez') }
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartLabels = [this.translate.instant('lang_76'), this.translate.instant('lang_77'), this.translate.instant('lang_78'), this.translate.instant('lang_79'), this.translate.instant('lang_80')];
        this.displayedColumns = ['first_name', 'last_name', 'patronymic', 'birthday_date', 'gender', 'fv', 'date_and_time_of_arrival', 'controls'];
        this.lineTranslationOfTable = ['man'];
        this.spinner = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ViewProtocolWithAcuteMyocardialInfarctionComponent.prototype.ngOnInit = function () {
        this.showTable();
    };
    ViewProtocolWithAcuteMyocardialInfarctionComponent.prototype.showTable = function () {
        var _this = this;
        this.spinner.emit(true);
        var data = {
            'fields': this.filter,
            'pagination': {
                'pageSize': this.pageSize,
                'pageIndex': this.pageIndex,
            },
            'sort': {
                'active': this.active,
                'direction': this.direction
            }
        };
        this.httpService.Http(JSON.stringify(data), 'filter_protocol_infarction_st')
            .subscribe(function (res) {
            if (res.pageLength) {
                _this.pageLength = res.pageLength;
                _this.renderLVGChart(res);
                _this.dataSource = new ExampleDataSource(res.rows, _this.paginator, _this, _this.translate, _this.sort);
            }
            _this.spinner.emit(false);
        });
    };
    ViewProtocolWithAcuteMyocardialInfarctionComponent.prototype.resetFilter = function (filterForm) {
        filterForm.reset();
    };
    ViewProtocolWithAcuteMyocardialInfarctionComponent.prototype.renderLVGChart = function (data) {
        var _this = this;
        this.barChartData = [
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('normakinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('gipokinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('akinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('diskinez') }
        ];
        data.rows.forEach(function (item, index) {
            var lvg = JSON.parse(item.lvg);
            if (Object.keys(lvg).length) {
                for (var index_1 in lvg) {
                    _this.barChartData[lvg[index_1] - 1]['data'][index_1] += 1;
                }
            }
        });
    };
    ViewProtocolWithAcuteMyocardialInfarctionComponent.prototype.tableRow = function (row, field) {
        if (this.lineTranslationOfTable.indexOf(row[field]) !== -1) {
            return this.translate.instant(row[field]);
        }
        return row[field];
    };
    return ViewProtocolWithAcuteMyocardialInfarctionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSort */]) === "function" && _a || Object)
], ViewProtocolWithAcuteMyocardialInfarctionComponent.prototype, "sort", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatPaginator */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatPaginator */]) === "function" && _b || Object)
], ViewProtocolWithAcuteMyocardialInfarctionComponent.prototype, "paginator", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ViewProtocolWithAcuteMyocardialInfarctionComponent.prototype, "spinner", void 0);
ViewProtocolWithAcuteMyocardialInfarctionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-protocol-with-acute-myocardial-infarction',
        template: __webpack_require__("../../../../../src/app/components/view-protocol-with-acute-myocardial-infarction/view-protocol-with-acute-myocardial-infarction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/view-protocol-with-acute-myocardial-infarction/view-protocol-with-acute-myocardial-infarction.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shared_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_10__shared_data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__shared_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_http_service__["a" /* HttpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__translate__["c" /* TranslateService */]) === "function" && _e || Object])
], ViewProtocolWithAcuteMyocardialInfarctionComponent);

var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator, _viewProtocolWithAcuteMyocardialInfarctionComponent, translate, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._viewProtocolWithAcuteMyocardialInfarctionComponent = _viewProtocolWithAcuteMyocardialInfarctionComponent;
        _this.translate = translate;
        _this._sort = _sort;
        _this.firstRenderingOfTable = false;
        _this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        this.dataChange.next(this._exampleDatabase);
        var displayDataChanges = [
            this.dataChange,
            this._paginator.page,
            this._sort.sortChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            ['itemsPerPageLabel', 'nextPageLabel', 'previousPageLabel'].forEach(function (item, index) {
                _this._paginator._intl[item] = _this.translate.instant(item);
            });
            if (_this.firstRenderingOfTable) {
                _this._viewProtocolWithAcuteMyocardialInfarctionComponent.pageSize = _this._paginator.pageSize;
                _this._viewProtocolWithAcuteMyocardialInfarctionComponent.pageIndex = _this._paginator.pageIndex;
                _this._viewProtocolWithAcuteMyocardialInfarctionComponent.active = _this._sort.active;
                _this._viewProtocolWithAcuteMyocardialInfarctionComponent.direction = _this._sort.direction;
                _this._viewProtocolWithAcuteMyocardialInfarctionComponent.showTable();
            }
            _this.firstRenderingOfTable = true;
            return _this.data;
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b, _c, _d, _e;
//# sourceMappingURL=view-protocol-with-acute-myocardial-infarction.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/create-protocol-with-acute-myocardial-infarction/create-protocol-with-acute-myocardial-infarction.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-menu></app-main-menu>\r\n<app-protocol-acute-myocardial-infarction></app-protocol-acute-myocardial-infarction>"

/***/ }),

/***/ "../../../../../src/app/pages/create-protocol-with-acute-myocardial-infarction/create-protocol-with-acute-myocardial-infarction.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/create-protocol-with-acute-myocardial-infarction/create-protocol-with-acute-myocardial-infarction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProtocolWithAcuteMyocardialInfarctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateProtocolWithAcuteMyocardialInfarctionComponent = (function () {
    function CreateProtocolWithAcuteMyocardialInfarctionComponent() {
    }
    CreateProtocolWithAcuteMyocardialInfarctionComponent.prototype.ngOnInit = function () { };
    return CreateProtocolWithAcuteMyocardialInfarctionComponent;
}());
CreateProtocolWithAcuteMyocardialInfarctionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-protocol-with-acute-myocardial-infarction',
        template: __webpack_require__("../../../../../src/app/pages/create-protocol-with-acute-myocardial-infarction/create-protocol-with-acute-myocardial-infarction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/create-protocol-with-acute-myocardial-infarction/create-protocol-with-acute-myocardial-infarction.component.sass")],
    }),
    __metadata("design:paramtypes", [])
], CreateProtocolWithAcuteMyocardialInfarctionComponent);

//# sourceMappingURL=create-protocol-with-acute-myocardial-infarction.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-menu></app-main-menu>\r\n<div class=\"wrap-body\">\r\n  <app-view-protocol-with-acute-myocardial-infarction (spinner)=\"spinner($event)\"></app-view-protocol-with-acute-myocardial-infarction>\r\n</div>\r\n\r\n<div class=\"shadow\" *ngIf=\"progressSpinnerActive\">\r\n  <div class=\"progress-spinner\">\r\n    <mat-progress-spinner class=\"example-margin\"\r\n                          [color]=\"dataService.spinner.color\"\r\n                          [mode]=\"dataService.spinner.mode\"\r\n                          [value]=\"dataService.spinner.value\">\r\n    </mat-progress-spinner>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate__ = __webpack_require__("../../../../../src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = (function () {
    function IndexComponent(translate, dataService) {
        this.translate = translate;
        this.dataService = dataService;
        this.progressSpinnerActive = false;
    }
    IndexComponent.prototype.ngOnInit = function () { };
    IndexComponent.prototype.spinner = function (active) {
        this.progressSpinnerActive = active;
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/pages/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/index/index.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */]) === "function" && _b || Object])
], IndexComponent);

var _a, _b;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/update-protocol-with-acute-myocardial-infarction/update-protocol-with-acute-myocardial-infarction.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-menu></app-main-menu>\n<app-protocol-acute-myocardial-infarction [(updateId)]=\"id\"></app-protocol-acute-myocardial-infarction>"

/***/ }),

/***/ "../../../../../src/app/pages/update-protocol-with-acute-myocardial-infarction/update-protocol-with-acute-myocardial-infarction.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/update-protocol-with-acute-myocardial-infarction/update-protocol-with-acute-myocardial-infarction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProtocolWithAcuteMyocardialInfarctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_parse_url_query_service__ = __webpack_require__("../../../../../src/app/shared/parse-url-query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdateProtocolWithAcuteMyocardialInfarctionComponent = (function () {
    function UpdateProtocolWithAcuteMyocardialInfarctionComponent(parseUrlQueryService) {
        this.parseUrlQueryService = parseUrlQueryService;
        this.id = 0;
    }
    UpdateProtocolWithAcuteMyocardialInfarctionComponent.prototype.ngOnInit = function () {
        this.id = parseInt(this.parseUrlQueryService.parseUrlQuery()['id']);
    };
    return UpdateProtocolWithAcuteMyocardialInfarctionComponent;
}());
UpdateProtocolWithAcuteMyocardialInfarctionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-protocol-with-acute-myocardial-infarction',
        template: __webpack_require__("../../../../../src/app/pages/update-protocol-with-acute-myocardial-infarction/update-protocol-with-acute-myocardial-infarction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/update-protocol-with-acute-myocardial-infarction/update-protocol-with-acute-myocardial-infarction.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_parse_url_query_service__["a" /* ParseUrlQueryService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_parse_url_query_service__["a" /* ParseUrlQueryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_parse_url_query_service__["a" /* ParseUrlQueryService */]) === "function" && _a || Object])
], UpdateProtocolWithAcuteMyocardialInfarctionComponent);

var _a;
//# sourceMappingURL=update-protocol-with-acute-myocardial-infarction.component.js.map

/***/ }),

/***/ "../../../../../src/app/restrictinput.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestrictInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestrictInputDirective = (function () {
    function RestrictInputDirective(model, el) {
        this.model = model;
        this.el = el;
        this.regexMap = {
            integer: '/^([^0-9]*)$/',
            float: '^[+-]?([0-9]*[.])?[0-9]+$',
            words: /[^A-zА-ЯЁ]/i,
            numbers: /[^0-9]/i,
            point25: '^\-?[0-9]*(?:\\.25|\\.50|\\.75|)$',
            percent: /^[1-9][0-9]?$|^100$/
            ///^(100|[0-9])%?$/
            //percent: '^[1-9][0-9]?$|^100$'
        };
        this.regexp = null;
    }
    Object.defineProperty(RestrictInputDirective.prototype, "defineInputType", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    RestrictInputDirective.prototype.input = function (event) {
        var value = this.el.nativeElement.value;
        if (value) {
            this.model.valueAccessor.writeValue(value.replace(this.regexMap[this.type], ''));
        }
    };
    return RestrictInputDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('restrict-input'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], RestrictInputDirective.prototype, "defineInputType", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RestrictInputDirective.prototype, "input", null);
RestrictInputDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[restrict-input]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], RestrictInputDirective);

var _a, _b;
//# sourceMappingURL=restrictinput.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var DataService = (function () {
    function DataService() {
        this.maskDate = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskTime = [/\d/, /\d/, ':', /\d/, /\d/];
        this.maskDateTime = [/\d/, /\d/, ':', /\d/, /\d/, ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskPercentage = [/\d/, /\d/, /\d/];
        this.maskPhone = ['+', '3', /\d/, /\d/, ' ', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.maskLVG_1_4 = [/[1-4]/];
        this.patternDate = /^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/;
        this.patternTime = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))/;
        this.patternTimeDate = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00)) (0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/;
        this.spinner = {
            'color': 'primary',
            'mode': 'indeterminate',
            'value': 50
        };
    }
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpService = (function () {
    function HttpService(http, router, renderer, elementRef) {
        this.http = http;
        this.router = router;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.mapResponse = function (res) {
            return res.json();
        };
        this.handleError = function (error) {
            console.error('Erorr', error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.message || error);
        };
    }
    HttpService.prototype.Http = function (params, url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(('/backend/web/index.php?r=api/' + url), params, options)
            .map(this.mapResponse)
            .catch(this.handleError);
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], HttpService);

var _a, _b, _c, _d;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/obj-ng-for.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjNgForPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ObjNgForPipe = (function () {
    function ObjNgForPipe() {
    }
    ObjNgForPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) { return Object.assign({ key: key }, value[key]); });
    };
    return ObjNgForPipe;
}());
ObjNgForPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'objNgFor'
    })
], ObjNgForPipe);

//# sourceMappingURL=obj-ng-for.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/parse-url-query.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseUrlQueryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParseUrlQueryService = (function () {
    function ParseUrlQueryService() {
    }
    ParseUrlQueryService.prototype.parseUrlQuery = function () {
        var data = {};
        if (location.search) {
            var pair = (location.search.substr(1)).split('&');
            for (var i = 0; i < pair.length; i++) {
                var param = pair[i].split('=');
                data[param[0]] = param[1];
            }
        }
        return data;
    };
    return ParseUrlQueryService;
}());
ParseUrlQueryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ParseUrlQueryService);

//# sourceMappingURL=parse-url-query.service.js.map

/***/ }),

/***/ "../../../../../src/app/translate/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate_service__ = __webpack_require__("../../../../../src/app/translate/translate.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__translate_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translations__ = __webpack_require__("../../../../../src/app/translate/translations.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__translations__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_pipe__ = __webpack_require__("../../../../../src/app/translate/translate.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__translate_pipe__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/translate/lang-en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LANG_EN_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_EN_TRANS; });
var LANG_EN_NAME = 'en';
var LANG_EN_TRANS = {
    'normakinez': 'Нормакинез',
    'gipokinez': 'Гипокинез',
    'akinez': 'Акинез',
    'diskinez': 'Дискинез',
    'percent': '%',
    'b': 'Б.',
    'cm': 'С.М.',
    'cl': 'С.Л.',
    'cb': 'С.Б.',
    'timiAfter': 'TIMI До',
    'timiBefore': 'TIME После',
    'lang_0': 'Первичное ЧКВ',
    'lang_1': 'Фармакоинвазивная стратерия (3-24)',
    'lang_2': 'ЧКВ Спасения:Неэффект:Тромболизис',
    'lang_3': 'ЧКВ Больше 24 часов',
    'lang_4': 'Только Агиография',
    'lang_5': 'Вид вмешательства',
    'lang_6': 'Смерть, Время, дата',
    'lang_7': 'Оператор',
    'lang_8': 'ЛКА',
    'lang_9': 'ПКА',
    'lang_10': 'ЛВГ ФВ ___%',
    'lang_11': 'Дополнительно',
    'lang_12': 'ИВЛ',
    'lang_13': 'ВАБК',
    'lang_14': 'Инотрапная поддержка',
    'lang_15': 'ЭКС',
    'lang_16': 'Кардиоверсия',
    'lang_17': 'Кровоток по TIMI после открытия',
    'lang_18': 'Диаметр Стеноза ИСА до ЧКВ',
    'lang_19': 'Диаметр Стеноза ИСА после ЧКВ'
};
//# sourceMappingURL=lang-en.js.map

/***/ }),

/***/ "../../../../../src/app/translate/lang-ru.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LANG_RU_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_RU_TRANS; });
var LANG_RU_NAME = 'ru';
var LANG_RU_TRANS = {
    'normakinez': 'Нормокинез',
    'gipokinez': 'Гипокинез',
    'akinez': 'Акинез',
    'diskinez': 'Дискинез',
    'percent': '%',
    'b': 'Б.',
    'cm': 'С.М.',
    'cl': 'С.Л.',
    'cb': 'С.Б.',
    'timiAfter': 'TIMI До',
    'timiBefore': 'TIME После',
    'lang_0': 'Первичное ЧКВ',
    'lang_1': 'Фармакоинвазивная стратерия (3-24)',
    'lang_2': 'ЧКВ Спасения:Неэффект:Тромболизис',
    'lang_3': 'ЧКВ Больше 24 часов',
    'lang_4': 'Только Агиография',
    'lang_5': 'Вид вмешательства',
    'lang_6': 'Смерть, Время, дата',
    'lang_7': 'Оператор',
    'lang_8': 'ЛКА',
    'lang_9': 'ПКА',
    'lang_10': 'ЛВГ ФВ',
    'lang_11': 'Дополнительно',
    'lang_12': 'ИВЛ',
    'lang_13': 'ВАБК',
    'lang_14': 'Инотропная поддержка',
    'lang_15': 'ЭКС',
    'lang_16': 'Кардиоверсия',
    'lang_17': 'Кровоток по TIMI после открытия',
    'lang_18': 'Диаметр Стеноза ИСА до ЧКВ',
    'lang_19': 'Диаметр Стеноза ИСА после ЧКВ',
    'lang_20': 'Доставлен',
    'lang_21': 'Адрес',
    'lang_22': 'Кровоток по TIMI до открытия',
    'lang_23': 'Продолжающаяся боль в ангиографическом кабинете, после открытия ИСА',
    'lang_24': 'Да',
    'lang_25': 'Нет',
    'lang_26': 'Продолжающееся повышение сегмента ST в ангиографическом кабинете, после открытия ИСА',
    'lang_27': 'Тромбаспирация',
    'lang_28': 'Тромб получен',
    'lang_29': 'Тромб не получен',
    'lang_30': 'Не удалось провести катетер',
    'lang_31': 'Временные интервалы',
    'lang_32': 'д.м.г.',
    'lang_33': 'ч:мин.',
    'lang_34': 'Нет возможности определить',
    'onsetOfSymptoms': 'Начало симптомов',
    'firstMedicalContact': 'Первый медицинский контакт',
    'ecg': 'ЭКГ',
    'enteringTheHospital': 'Поступление в госпиталь',
    'ecgInTheHospital': 'ЭКГ в госпитале',
    'fibrinolysisOrThrombolysis': 'Фибринолизис/Тромболизис',
    'arrivalInAngiography': 'Прибытие в ангиографию',
    'restoringBloodFlow': 'Восстановление кровотока',
    'birthday_date': 'Дата рождения д/м/г',
    'lang_36': 'Дата д/м/г',
    'lang_37': 'Время поступления',
    'first_name': 'Фамилия',
    'last_name': 'Имя',
    'patronymic': 'Отчество',
    'man': 'муж.',
    'women': 'жен.',
    'lang_43': 'Класс тяжести по KILLIP',
    'lang_44': 'ИМ без признаков недостаточности кровообращения',
    'lang_45': 'ИМ с признаками умеренно выраженной недостаточности кровообращения (тахикардия, влажные хрипы в легких)',
    'lang_46': 'ИМ с отеком легких',
    'lang_47': 'ИМ с кардиогенным шоком',
    'lang_48': 'Тромболизис',
    'lang_49': 'Нет',
    'lang_50': 'Да',
    'lang_51': 'Противопоказано',
    'lang_52': 'Время',
    'lang_53': 'Препарат',
    'lang_54': 'Эффект тромболизиса',
    'lang_55': 'Нет',
    'lang_56': 'Да',
    'lang_57': 'Передний, подъем ST (V1-V4)',
    'lang_58': 'Латеральный подъем ST(I,AVL,V5,V6)',
    'lang_59': 'Нижний подъем ST(Ⅱ,Ⅲ,AVF)',
    'lang_60': 'Другое',
    'lang_61': 'ЭКГ',
    'lang_62': 'Без подъема',
    'lang_63': 'Причина смерти',
    'fv': 'ФВ',
    'lang_65': 'Фильтр',
    'lang_66': 'Дата поступления пациента',
    'lang_67': 'От',
    'lang_68': 'До',
    'lang_69': 'Прикрепить к родительскому протоколу',
    'lang_70': 'Телефон',
    'lang_71': 'Сахарный диабет',
    'lang_72': 'Отменить',
    'lang_73': 'Сбросить',
    'lang_74': '1-100%',
    'lang_75': 'Создать протокол пациента с острым инфарктом миокарда с подъемом сегмента ST.',
    'lang_76': 'Передебоковая',
    'lang_77': 'Верхушечная',
    'lang_78': 'Нижняя',
    'lang_79': 'Заднебоковая',
    'lang_80': 'Перегородочная',
    'lang_81': '1 c.',
    'lang_82': '2 c.',
    'lang_83': '3 c.',
    'lang_84': 'ЗМЖВ',
    'lang_85': 'ЗБВ',
    'lang_86': 'Биф.',
    'lang_87': 'ВОК',
    'lang_88': 'П.',
    'lang_89': 'Д.',
    'lang_90': 'Ствол',
    'lang_91': 'ПМЖВ',
    'lang_92': 'ОВ',
    'lang_93': 'ВТК',
    'lang_94': 'Срединная',
    'lang_95': 'Графт',
    'lang_96': 'Протокол пациента с острым инфарктом миокарда с подъемом сегмента ST.',
    'lang_97': 'Протоколы',
    'lang_98': 'Главная',
    'lang_99': 'Причина',
    'lang_100': 'Сохранить',
    'lang_101': 'У Вас есть обязательные данные для заполнение или данные, которые Вы ввели не коректно.',
    'lang_102': 'Ошибка!',
    'lang_103': 'Сохранение',
    'lang_104': 'Протокол успешно сохранен',
    'gender': 'Пол',
    'itemsPerPageLabel': 'Элементов на странице',
    'nextPageLabel': 'Следущая страница',
    'previousPageLabel': 'Предыдущая страница',
    'lang_105': 'Отправить',
    'controls': ' ',
    'lang_106': 'Tип сахарного диабета',
    'lang_107': 'Артериальное давление при поступлении в операц.',
    'lang_108': 'Систолическое',
    'lang_109': 'Диастолическое',
    'lang_110': 'после',
    'lang_111': 'Ультразвуковое исследование сердца',
    'lang_112': 'Аортальный клапан(протез):',
    'lang_113': 'Аортальный клапан',
    'lang_114': 'Протез',
    'lang_115': 'Максимальный градиент (систола)',
    'lang_116': 'Площадь эффективного отверстия',
    'lang_117': 'Регургитация',
    'lang_118': 'Особенности',
    'lang_119': 'Клапан легочной артерии:',
    'lang_120': 'ДЛА',
    'lang_121': 'Трехстворчатый клапан:',
    'lang_122': 'Митральный клапан(протез):',
    'lang_123': 'Митральный клапан',
    'lang_124': 'Максимальный градиент (диастола)',
    'lang_125': 'Аорта:',
    'lang_126': 'диамерт на уровне АК',
    'lang_127': 'Левое предсердие:',
    'lang_128': 'передне-задний размер',
    'lang_129': ',в 4-камерной позиции',
    'lang_130': 'Левый желудочек:',
    'lang_131': 'М-режим размер: конечо-диастолический',
    'lang_132': 'конечно систолический',
    'lang_133': 'Объемы ЛЖ',
    'lang_134': 'КДО, мл',
    'lang_135': 'КСО, мл',
    'lang_136': 'УО, мл',
    'lang_137': 'ФВ, %',
    'lang_138': 'мл',
    'lang_139': 'Сократимость миокарда ЛЖ:',
    'lang_140': 'Толщина миокарда МЖП: диаст.',
    'lang_141': '',
    'lang_142': 'сист.',
    'lang_143': 'амплитуда движения',
    'lang_144': 'Толщина задней стенки',
    'lang_145': 'Масса миокарда ЛЖ',
    'lang_146': 'Тип',
    'lang_147': 'мм',
    'lang_148': 'г.',
    'lang_149': '1 - нормакинез',
    'lang_150': '2 - гипокинез',
    'lang_151': '3 - акинез',
    'lang_152': '4 - дискинез',
    'lang_153': '',
    'lang_154': '',
    'lang_155': '',
    'lang_156': '',
    'lang_157': '',
    'lang_158': '',
    'lang_159': '',
    'lang_160': '',
    'lang_161': '',
    'lang_162': '',
    'lang_163': '',
    'lang_164': '',
    'lang_165': '',
    'lang_166': '',
    'lang_167': '',
    'lang_168': '',
    'lang_169': '',
    'lang_170': '',
    'lang_171': '',
    'lang_172': '',
    'lang_173': '',
    'lang_174': '',
    'lang_175': '',
    'lang_176': '',
    'lang_177': '',
    'lang_178': '',
    'lang_179': '',
    'lang_180': '',
    'lang_181': '',
    'lang_182': '',
    'lang_183': '',
    'lang_184': '',
    'lang_185': '',
    'lang_186': '',
    'lang_187': '',
    'lang_188': '',
    'lang_189': '',
    'lang_190': '',
    'lang_191': '',
    'lang_192': '',
    'lang_193': '',
    'lang_194': '',
    'lang_195': '',
    'lang_196': '',
    'lang_197': '',
    'lang_198': '',
    'lang_199': '',
    'lang_200': '',
    'lang_201': '',
    'lang_202': '',
    'lang_203': '',
    'lang_204': '',
    'lang_205': '',
    'lang_206': '',
    'lang_207': '',
    'lang_208': '',
    'lang_209': '',
    'lang_210': '',
    'lang_211': '',
    'lang_212': '',
    'lang_213': '',
    'lang_214': '',
    'lang_215': '',
    'lang_216': '',
    'lang_217': '',
    'lang_218': '',
    'lang_219': '',
    'lang_220': '',
    'lang_221': '',
    'lang_222': '',
    'lang_223': '',
    'lang_224': '',
    'lang_225': '',
    'lang_226': '',
    'lang_227': '',
    'lang_228': '',
    'lang_229': '',
    'lang_230': '',
    'lang_231': '',
    'lang_232': '',
    'lang_233': '',
    'lang_234': '',
    'lang_235': '',
    'lang_236': '',
    'lang_237': '',
    'lang_238': '',
    'lang_239': '',
    'lang_240': '',
    'lang_241': '',
    'lang_242': '',
    'lang_243': '',
    'lang_244': '',
    'lang_245': '',
    'lang_246': '',
    'lang_247': '',
    'lang_248': '',
    'lang_249': '',
    'lang_250': '',
    'lang_251': '',
    'lang_252': '',
    'lang_253': '',
    'lang_254': '',
    'lang_255': '',
    'lang_256': '',
    'lang_257': '',
    'lang_258': '',
    'lang_259': '',
    'lang_260': '',
    'lang_261': '',
    'lang_262': '',
    'lang_263': '',
    'lang_264': '',
    'lang_265': '',
    'lang_266': '',
    'lang_267': '',
    'lang_268': '',
    'lang_269': '',
    'lang_270': '',
    'lang_271': '',
    'lang_272': '',
    'lang_273': '',
    'lang_274': '',
    'lang_275': '',
    'lang_276': '',
    'lang_277': '',
    'lang_278': '',
    'lang_279': '',
    'lang_280': '',
    'lang_281': '',
    'lang_282': '',
    'lang_283': '',
    'lang_284': '',
    'lang_285': '',
    'lang_286': '',
    'lang_287': '',
    'lang_288': '',
    'lang_289': '',
    'lang_290': '',
    'lang_291': '',
    'lang_292': '',
    'lang_293': '',
    'lang_294': '',
    'lang_295': '',
    'lang_296': '',
    'lang_297': '',
    'lang_298': '',
    'lang_299': '',
    'm_mode': 'М-режим (Teichholz)',
    'b_mode': 'В-режим (Simpson)',
};
//var s = ''; for(var i = 141; i < 300; i++) {s += "'lang_"+i+"': '',\n";} 
//# sourceMappingURL=lang-ru.js.map

/***/ }),

/***/ "../../../../../src/app/translate/translate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate__ = __webpack_require__("../../../../../src/app/translate/index.ts");
// app/translate/translate.pipe.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // our translate service
var TranslatePipe = (function () {
    function TranslatePipe(_translate) {
        this._translate = _translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        return this._translate.instant(value);
    };
    return TranslatePipe;
}());
TranslatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'translate',
        pure: false // impure pipe, update value when we change language
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */]) === "function" && _a || Object])
], TranslatePipe);

var _a;
//# sourceMappingURL=translate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/translate/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translations__ = __webpack_require__("../../../../../src/app/translate/translations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

 // import our opaque token
var TranslateService = (function () {
    // inject our translations
    function TranslateService(_translations) {
        this._translations = _translations;
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.use = function (lang) {
        // set current language
        this._currentLang = lang;
    };
    TranslateService.prototype.translate = function (key) {
        // private perform translation
        var translation = key;
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return translation;
    };
    TranslateService.prototype.instant = function (key) {
        // public perform translation
        return this.translate(key);
    };
    return TranslateService;
}());
TranslateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__translations__["a" /* TRANSLATIONS */])),
    __metadata("design:paramtypes", [Object])
], TranslateService);

//# sourceMappingURL=translate.service.js.map

/***/ }),

/***/ "../../../../../src/app/translate/translations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRANSLATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRANSLATION_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_en__ = __webpack_require__("../../../../../src/app/translate/lang-en.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_ru__ = __webpack_require__("../../../../../src/app/translate/lang-ru.ts");
// app/translate/translation.ts

// import translations


// translation token
var TRANSLATIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('translations');
// all traslations
var dictionary = {
    'en': __WEBPACK_IMPORTED_MODULE_1__lang_en__["a" /* LANG_EN_TRANS */],
    'ru': __WEBPACK_IMPORTED_MODULE_2__lang_ru__["a" /* LANG_RU_TRANS */],
};
// providers
var TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
//# sourceMappingURL=translations.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map