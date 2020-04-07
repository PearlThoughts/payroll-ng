(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salary-salary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/salary/salary.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/salary/salary.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n    <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Salaries\n                    <div ngbDropdown class=\"d-inline-block pull-right\">\n                        <button\n                            class=\"btn btn-outline-primary btn-sm\"\n                            id=\"dropdownBasic1\"\n                            ngbDropdownToggle\n                        >\n                            Bulk Action\n                        </button>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                            <button\n                                [disabled]=\"isEnableGenerateSalary\"\n                                (click)=\"onGenerateSalary()\"\n                                ngbDropdownItem\n                            >\n                                Generate Salary\n                            </button>\n                            <button\n                                [disabled]=\"isEnableProcessSalary\"\n                                (click)=\"onProcessSalary()\"\n                                ngbDropdownItem\n                            >\n                                Process Salary\n                            </button>\n                            <button\n                                [disabled]=\"isEnableDetectLop\"\n                                (click)=\"onDetectLopForAll()\"\n                                ngbDropdownItem\n                            >\n                                Detect Lop For All\n                            </button>\n                            <button\n                                [disabled]=\"isEnableRelaxLop\"\n                                (click)=\"onRelaxLopForAll()\"\n                                ngbDropdownItem\n                            >\n                                Relax Lop For All\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-body table-responsive\">\n                    <div *ngIf=\"error\" class=\"alert alert-danger\">\n                        {{ error }}\n                    </div>\n                    <table class=\"table table-bordered\">\n                        <thead>\n                            <tr>\n                                <th>Name</th>\n                                <th>From Date</th>\n                                <th>To Date</th>\n                                <th>Actual Salary</th>\n                                <th>Bonus</th>\n                                <th>Lop</th>\n                                <th>Lop Status</th>\n                                <th>Net Salary</th>\n                                <th>Paid Status</th>\n                                <th>Actions</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let salary of salaries\">\n                                <td>{{ salary.employee.firstname }}</td>\n                                <td>{{ salary.from_date | date }}</td>\n                                <td>{{ salary.to_date | date }}</td>\n                                <td>{{ salary.actual_salary }}</td>\n                                <td>\n                                    <span\n                                        *ngIf=\"salary.status !== 3\"\n                                        (keyup)=\"changeValue($event)\"\n                                        (blur)=\"updateList(salary._id, $event)\"\n                                        contenteditable=\"true\"\n                                        >{{ salary.bonus }}</span\n                                    >\n                                    <span *ngIf=\"salary.status === 3\">{{\n                                        salary.bonus\n                                    }}</span>\n                                </td>\n                                <td>{{ salary.lop }}</td>\n                                <td>\n                                    <span\n                                        class=\"badge {{\n                                            salary.can_detect_lop\n                                                ? 'badge-danger'\n                                                : 'badge-success'\n                                        }}\"\n                                        >{{\n                                            salary.can_detect_lop\n                                                ? \"Detected\"\n                                                : \"Not Detected\"\n                                        }}</span\n                                    >\n                                </td>\n                                <td>{{ salary.net_salary }}</td>\n                                <td>\n                                    <span\n                                        class=\"badge {{\n                                            salary.status === 1\n                                                ? 'badge-info'\n                                                : salary.status === 2\n                                                ? 'badge-danger'\n                                                : 'badge-success'\n                                        }}\"\n                                        >{{\n                                            salary.status === 1\n                                                ? \"Payment Pending\"\n                                                : salary.status === 2\n                                                ? \"Payment Failed\"\n                                                : \"Salary Paid\"\n                                        }}</span\n                                    >\n                                </td>\n                                <td>\n                                    <button\n                                        *ngIf=\"salary.status !== 3\"\n                                        type=\"button\"\n                                        style=\"margin-right: 5px;\"\n                                        placement=\"top\"\n                                        ngbTooltip=\"{{\n                                            salary.can_detect_lop\n                                                ? 'Relax'\n                                                : 'Detect'\n                                        }} Lop\"\n                                        (click)=\"\n                                            changeLopStatus(\n                                                salary._id,\n                                                !salary.can_detect_lop\n                                            )\n                                        \"\n                                        class=\"btn {{\n                                            !salary.can_detect_lop\n                                                ? 'btn-danger'\n                                                : 'btn-success'\n                                        }} btn-sm\"\n                                    >\n                                        <i class=\"fa fa-fw fa-inr\"></i>\n                                    </button>\n                                    <button\n                                        *ngIf=\"salary.status !== 3\"\n                                        type=\"button\"\n                                        style=\"margin-right: 5px;\"\n                                        placement=\"top\"\n                                        ngbTooltip=\"Pay Salary\"\n                                        (click)=\"paySalary(salary._id)\"\n                                        class=\"btn btn-success btn-sm\"\n                                    >\n                                        <i class=\"fa fa-paypal\"></i>\n                                    </button>\n                                    <button\n                                        *ngIf=\"salary.status !== 1\"\n                                        type=\"button\"\n                                        style=\"margin-right: 5px;\"\n                                        placement=\"top\"\n                                        ngbTooltip=\"Pay Info\"\n                                        (click)=\"salaryInfo(salary.transfer_id)\"\n                                        class=\"btn btn-info btn-sm\"\n                                    >\n                                        <i class=\"fa fa-info\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/layout/salary/salary-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/salary/salary-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SalaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryRoutingModule", function() { return SalaryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _salary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salary.component */ "./src/app/layout/salary/salary.component.ts");




const routes = [
    {
        path: "",
        component: _salary_component__WEBPACK_IMPORTED_MODULE_3__["SalaryComponent"]
    }
];
let SalaryRoutingModule = class SalaryRoutingModule {
};
SalaryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SalaryRoutingModule);



/***/ }),

/***/ "./src/app/layout/salary/salary.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/salary/salary.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zYWxhcnkvc2FsYXJ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/salary/salary.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/salary/salary.component.ts ***!
  \***************************************************/
/*! exports provided: SalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryComponent", function() { return SalaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_salary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/salary.service */ "./src/app/shared/services/salary.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _transfer_info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transfer/info/info.component */ "./src/app/layout/transfer/info/info.component.ts");






let SalaryComponent = class SalaryComponent {
    constructor(salaryService, dialogService) {
        this.salaryService = salaryService;
        this.dialogService = dialogService;
        this.canSubmit = false;
        this.isEnableGenerateSalary = new Date().getDate() > 26;
        this.isEnableProcessSalary = new Date().getDate() > 26;
        this.isEnableDetectLop = new Date().getDate() > 26;
        this.isEnableRelaxLop = new Date().getDate() > 26;
    }
    ngOnInit() {
        this.salaryService.get().subscribe(() => { });
        this.salaryService.getSalariesData().subscribe((data) => {
            this.salaries = data.salaries;
        });
    }
    onGenerateSalary() {
        if (!this.isEnableGenerateSalary) {
            this.salaryService.add().subscribe(() => {
                this.salaryService.get().subscribe(() => { });
            });
        }
    }
    onProcessSalary() {
        if (!this.isEnableProcessSalary) {
            this.salaryService.processSalary().subscribe(() => {
                this.salaryService.get().subscribe(() => { });
            });
        }
    }
    paySalary(salary_id) {
        if (!this.isEnableProcessSalary) {
            this.salaryService.paySalary(salary_id).subscribe(() => {
                this.salaryService.get().subscribe(() => { });
            });
        }
    }
    onDetectLopForAll() {
        if (!this.isEnableDetectLop) {
            this.salaryService.changeLopStatusForAll(true).subscribe(() => {
                this.salaryService.get().subscribe(() => { });
            });
        }
    }
    onRelaxLopForAll() {
        if (!this.isEnableRelaxLop) {
            this.salaryService.changeLopStatusForAll(false).subscribe(() => {
                this.salaryService.get().subscribe(() => { });
            });
        }
    }
    changeLopStatus(id, status) {
        this.salaryService.changeLopStatus(status, id).subscribe(() => {
            this.salaryService.get().subscribe(() => { });
        });
    }
    updateList(id, event) {
        if (this.canSubmit) {
            this.salaryService
                .update(event.target.textContent, id)
                .subscribe(() => {
                this.salaryService.get().subscribe(() => { });
            });
        }
        else {
            this.salaryService.get().subscribe(() => { });
        }
    }
    changeValue(event) {
        const bonus = Number(event.target.textContent);
        if (isNaN(bonus)) {
            this.canSubmit = false;
            this.error = "Bonus must be number";
        }
        else {
            this.error = "";
            this.canSubmit = true;
        }
    }
    salaryInfo(transferId) {
        const modalRef = this.dialogService.open(_transfer_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"], {
            size: "lg",
            centered: true,
        });
        modalRef.componentInstance.transferId = transferId;
    }
};
SalaryComponent.ctorParameters = () => [
    { type: src_app_shared_services_salary_service__WEBPACK_IMPORTED_MODULE_3__["SalaryService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
SalaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-salary",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./salary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/salary/salary.component.html")).default,
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./salary.component.scss */ "./src/app/layout/salary/salary.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_salary_service__WEBPACK_IMPORTED_MODULE_3__["SalaryService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], SalaryComponent);



/***/ }),

/***/ "./src/app/layout/salary/salary.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/salary/salary.module.ts ***!
  \************************************************/
/*! exports provided: SalaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryModule", function() { return SalaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _salary_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salary-routing.module */ "./src/app/layout/salary/salary-routing.module.ts");
/* harmony import */ var _salary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salary.component */ "./src/app/layout/salary/salary.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







let SalaryModule = class SalaryModule {
};
SalaryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _salary_routing_module__WEBPACK_IMPORTED_MODULE_3__["SalaryRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]],
        declarations: [_salary_component__WEBPACK_IMPORTED_MODULE_4__["SalaryComponent"]]
    })
], SalaryModule);



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");


function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/shared/services/salary.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/salary.service.ts ***!
  \***************************************************/
/*! exports provided: SalaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryService", function() { return SalaryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







let SalaryService = class SalaryService {
    constructor(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.access_token = localStorage.getItem("token");
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.access_token,
        });
        this.options = { headers: this.headers };
        this.salaries = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.salary = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getSalariesData() {
        return this.salaries.asObservable();
    }
    getSalaryData() {
        return this.salary.asObservable();
    }
    get() {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/salary`, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((salaries) => {
            this.salaries.next(salaries);
            return salaries;
        }));
    }
    findById(salaryId) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/salary/${salaryId}`, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((salary) => {
            this.salary.next(salary);
            return salary;
        }));
    }
    add() {
        const body = {};
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/salary/create`, body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
    update(bonus, salaryId) {
        const body = {
            bonus: bonus,
        };
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/salary/update/${salaryId}`, body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
    changeLopStatus(status, salaryId) {
        const body = {
            can_detect_lop: status,
        };
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/salary/change-lop-status/${salaryId}`, body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
    changeLopStatusForAll(status) {
        const date = new Date();
        const from_date = this.datePipe.transform(new Date(date.getFullYear(), date.getMonth() - 1, 27), "y-M-d");
        const to_date = this.datePipe.transform(new Date(date.getFullYear(), date.getMonth(), 26), "y-M-d");
        const body = {
            can_detect_lop: status,
        };
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/salary/change-lop-status/${from_date}/${to_date}`, body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
    processSalary() {
        const body = {};
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/salary/process`, body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
    paySalary(salary_id) {
        const body = {};
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/salary/process/${salary_id}`, body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
};
SalaryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
];
SalaryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
], SalaryService);



/***/ })

}]);
//# sourceMappingURL=salary-salary-module-es2015.js.map