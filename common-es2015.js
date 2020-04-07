(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/transfer/info/info.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/transfer/info/info.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    Transfer Request (Reference ID: {{ transfer.referenceId || \"\" }})\n</div>\n<div class=\"modal-body table-responsive\">\n    <div class=\"card-body table-responsive\">\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th>Tilte</th>\n                    <th>Value</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>\n                        Beneficiary ID\n                    </td>\n                    <td>{{ transfer.beneId }}</td>\n                </tr>\n                <tr>\n                    <td>\n                        Acc No\n                    </td>\n                    <td>{{ transfer.bankAccount }}</td>\n                </tr>\n                <tr>\n                    <td>\n                        IFSC Code\n                    </td>\n                    <td>{{ transfer.ifsc }}</td>\n                </tr>\n                <tr>\n                    <td>\n                        Amount\n                    </td>\n                    <td>{{ transfer.amount }}</td>\n                </tr>\n                <tr>\n                    <td>\n                        Status\n                    </td>\n                    <td>\n                        <span\n                            class=\"badge {{\n                                transfer.status === 'SUCCESS'\n                                    ? 'badge-success'\n                                    : 'badge-danger'\n                            }}\"\n                        >\n                            {{ transfer.status }}\n                        </span>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        UTR\n                    </td>\n                    <td>{{ transfer.utr ? transfer.utr : \"\" }}</td>\n                </tr>\n                <tr>\n                    <td>\n                        Added On\n                    </td>\n                    <td>{{ transfer.addedOn }}</td>\n                </tr>\n                <tr>\n                    <td>\n                        Processed On\n                    </td>\n                    <td>{{ transfer.processedOn }}</td>\n                </tr>\n                <tr>\n                    <td>\n                        Mode\n                    </td>\n                    <td>{{ transfer.transferMode }}</td>\n                </tr>\n                <tr>\n                    <td>\n                        Acknowledged\n                    </td>\n                    <td>\n                        <span\n                            class=\"badge {{\n                                transfer.acknowledged === 1\n                                    ? 'badge-success'\n                                    : 'badge-danger'\n                            }}\"\n                        >\n                            {{ transfer.acknowledged ? \"SUCCESS\" : \"FAILED\" }}\n                        </span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button (click)=\"close()\" class=\"btn btn-info\">\n        Close\n    </button>\n</div>\n");

/***/ }),

/***/ "./src/app/layout/transfer/info/info.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/layout/transfer/info/info.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep body {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWRoZXJzb25qZXlha29kaS9wcm9qZWN0cy9hbmd1bGFyL2VtcC1tYW5hZ2Utbmcvc3JjL2FwcC9sYXlvdXQvdHJhbnNmZXIvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvdHJhbnNmZXIvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90cmFuc2Zlci9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIiwiOjpuZy1kZWVwIGJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/transfer/info/info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/transfer/info/info.component.ts ***!
  \********************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_transfer_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/transfer-status.service */ "./src/app/shared/services/transfer-status.service.ts");





let InfoComponent = class InfoComponent {
    constructor(modal, transferStatusService) {
        this.modal = modal;
        this.transferStatusService = transferStatusService;
        this.transfer = {};
    }
    ngOnInit() {
        this.transferStatusService
            .findById(this.transferId)
            .subscribe((data) => {
            this.transfer = data;
        });
    }
    close() {
        this.modal.close("Close click");
    }
};
InfoComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: src_app_shared_services_transfer_status_service__WEBPACK_IMPORTED_MODULE_4__["TransferStatusService"] }
];
InfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-transfer-info",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/transfer/info/info.component.html")).default,
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./info.component.scss */ "./src/app/layout/transfer/info/info.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
        src_app_shared_services_transfer_status_service__WEBPACK_IMPORTED_MODULE_4__["TransferStatusService"]])
], InfoComponent);



/***/ }),

/***/ "./src/app/shared/services/employee.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/employee.service.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.access_token = localStorage.getItem("token");
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.access_token,
        });
        this.options = { headers: this.headers };
        this.employees = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.employee = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getEmployeesData() {
        return this.employees.asObservable();
    }
    getEmployeeData() {
        return this.employee.asObservable();
    }
    get() {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/employee`, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((employees) => {
            this.employees.next(employees);
            return employees;
        }));
    }
    findById(employeeId) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/employee/${employeeId}`, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((employee) => {
            this.employee.next(employee);
            return employee;
        }));
    }
    delete(employeeId) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/employee/${employeeId}`, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
    add(data) {
        const joined_on = `${data.joined_on.year}-${data.joined_on.month}-${data.joined_on.day}`;
        const body = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            acc_no: data.acc_no,
            ifsc_code: data.ifsc_code,
            joined_on: joined_on,
            salary: data.salary,
            number: data.number,
        };
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/employee/create`, body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
    update(data, employeeId) {
        const joined_on = `${data.joined_on.year}-${data.joined_on.month}-${data.joined_on.day}`;
        const body = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            acc_no: data.acc_no,
            ifsc_code: data.ifsc_code,
            joined_on: joined_on,
            salary: data.salary,
            number: data.number,
        };
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/employee/update/${employeeId}`, body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmployeeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EmployeeService);



/***/ }),

/***/ "./src/app/shared/services/transfer-status.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/transfer-status.service.ts ***!
  \************************************************************/
/*! exports provided: TransferStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferStatusService", function() { return TransferStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







let TransferStatusService = class TransferStatusService {
    constructor(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.access_token = localStorage.getItem("token");
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.access_token,
        });
        this.options = { headers: this.headers };
        this.transfers = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.transfer = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getTransfersData() {
        return this.transfers.asObservable();
    }
    getTransferData() {
        return this.transfer.asObservable();
    }
    get() {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/transfer`, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((transfers) => {
            this.transfers.next(transfers);
            return transfers;
        }));
    }
    findById(transferId) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/transfer/status/${transferId}`, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((transfer) => {
            this.transfer.next(transfer);
            return transfer;
        }));
    }
};
TransferStatusService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
];
TransferStatusService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
], TransferStatusService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map