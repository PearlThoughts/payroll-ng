(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leaves-leave-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/leaves/add/add.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/leaves/add/add.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    Create Leave\n</div>\n<div class=\"modal-body table-responsive\">\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{ error }}</div>\n    <form [formGroup]=\"leaveAddForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n            <div class=\"col col-xl-6 col-lg-12\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"employee\"\n                        >Employee</label\n                    >\n                    <ng-select\n                        [multiple]=\"true\"\n                        appendTo=\"body\"\n                        formControlName=\"employee\"\n                        id=\"employee\"\n                        [ngClass]=\"{\n                            'is-invalid': submitted && f.employee.errors\n                        }\"\n                        required\n                    >\n                        <ng-option\n                            *ngFor=\"let employee of employees\"\n                            [value]=\"employee._id\"\n                            >{{ employee.firstname }}</ng-option\n                        >\n                    </ng-select>\n                    <div\n                        *ngIf=\"submitted && f.employee.errors\"\n                        class=\"invalid-feedback\"\n                    >\n                        <div *ngIf=\"f.employee.errors.required\">\n                            Employee cannot be blank\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col col-xl-3 col-lg-12\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"date\">Date</label>\n                    <div class=\"input-group datepicker-input\">\n                        <input\n                            class=\"form-control\"\n                            readonly=\"true\"\n                            container=\"body\"\n                            formControlName=\"date\"\n                            id=\"date\"\n                            [ngClass]=\"{\n                                'is-invalid': submitted && f.date.errors\n                            }\"\n                            ngbDatepicker\n                            [minDate]=\"{\n                                year: 2020,\n                                month: 1,\n                                day: 1\n                            }\"\n                            [maxDate]=\"{\n                                year: 2020,\n                                month: 12,\n                                day: 31\n                            }\"\n                            [startDate]=\"{\n                                year: 2020,\n                                month: currentMonth + 1,\n                                day: currentDate\n                            }\"\n                            #d=\"ngbDatepicker\"\n                        />\n                        <button\n                            class=\"input-group-addon\"\n                            (click)=\"d.toggle()\"\n                            type=\"button\"\n                        >\n                            <span class=\"fa fa-calendar\"></span>\n                        </button>\n                        <div\n                            *ngIf=\"submitted && f.date.errors\"\n                            class=\"invalid-feedback\"\n                        >\n                            <div *ngIf=\"f.date.errors.required\">\n                                Date cannot be blank\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col col-xl-3 col-lg-12\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"duration\"\n                        >Duration</label\n                    >\n                    <ng-select\n                        appendTo=\"body\"\n                        formControlName=\"duration\"\n                        id=\"duration\"\n                        [ngClass]=\"{\n                            'is-invalid': submitted && f.duration.errors\n                        }\"\n                        required\n                    >\n                        <ng-option value=\"0.5\">Half Day</ng-option>\n                        <ng-option value=\"1\">Full day</ng-option>\n                    </ng-select>\n                    <div\n                        *ngIf=\"submitted && f.duration.errors\"\n                        class=\"invalid-feedback\"\n                    >\n                        <div *ngIf=\"f.duration.errors.required\">\n                            Duration cannot be blank\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button [disabled]=\"loading\" (click)=\"onSubmit()\" class=\"btn btn-success\">\n        <span\n            *ngIf=\"loading\"\n            class=\"spinner-border spinner-border-sm mr-1\"\n        ></span>\n        Create\n    </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/leaves/leave.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/leaves/leave.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n    <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Leaves\n                    <button\n                        type=\"button\"\n                        (click)=\"onAdd()\"\n                        class=\"btn btn-sm btn-primary pull-right\"\n                    >\n                        <strong>+ </strong>Add\n                    </button>\n                </div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table table-bordered\">\n                        <thead>\n                            <tr>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Date</th>\n                                <th>Duration</th>\n                                <th>Actions</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let leave of leaves\">\n                                <td>{{ leave.employee.firstname }}</td>\n                                <td>{{ leave.employee.lastname }}</td>\n                                <td>{{ leave.date | date }}</td>\n                                <td>\n                                    {{\n                                        leave.duration == \"1\"\n                                            ? \"Full Day\"\n                                            : \"Half Day\"\n                                    }}\n                                </td>\n                                <td class=\"td-actions\">\n                                    <button\n                                        type=\"button\"\n                                        style=\"margin-right: 5px;\"\n                                        class=\"btn-group-xs btn-success btn-round\"\n                                        [routerLink]=\"\"\n                                        (click)=\"onUpdateClick(leave._id)\"\n                                    >\n                                        <i class=\"fa fa-fw fa-edit\"></i>\n                                    </button>\n                                    <button\n                                        type=\"button\"\n                                        style=\"margin-right: 5px;\"\n                                        class=\"btn-group-xs btn-danger btn-round\"\n                                        [routerLink]=\"\"\n                                        (click)=\"onDeleteClick(leave._id)\"\n                                    >\n                                        <i class=\"fa fa-fw fa-trash\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/leaves/update/edit.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/leaves/update/edit.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    Update Leave\n</div>\n<div class=\"modal-body table-responsive\">\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{ error }}</div>\n    <form [formGroup]=\"leaveEditForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n            <div class=\"col col-xl-6 col-lg-12\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"employee\"\n                        >Employee</label\n                    >\n                    <ng-select\n                        [multiple]=\"true\"\n                        appendTo=\"body\"\n                        formControlName=\"employee\"\n                        id=\"employee\"\n                        [ngClass]=\"{\n                            'is-invalid': submitted && f.employee.errors\n                        }\"\n                        required\n                    >\n                        <ng-option\n                            *ngFor=\"let employee of employees\"\n                            [value]=\"employee._id\"\n                            >{{ employee.firstname }}</ng-option\n                        >\n                    </ng-select>\n                    <div\n                        *ngIf=\"submitted && f.employee.errors\"\n                        class=\"invalid-feedback\"\n                    >\n                        <div *ngIf=\"f.employee.errors.required\">\n                            Employee cannot be blank\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col col-xl-3 col-lg-12\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"date\">Date</label>\n                    <div class=\"input-group datepicker-input\">\n                        <input\n                            class=\"form-control\"\n                            readonly=\"true\"\n                            container=\"body\"\n                            formControlName=\"date\"\n                            id=\"date\"\n                            [ngClass]=\"{\n                                'is-invalid': submitted && f.date.errors\n                            }\"\n                            ngbDatepicker\n                            [minDate]=\"{\n                                year: 2020,\n                                month: 1,\n                                day: 1\n                            }\"\n                            [maxDate]=\"{\n                                year: 2020,\n                                month: 12,\n                                day: 31\n                            }\"\n                            [startDate]=\"{\n                                year: 2020,\n                                month: currentMonth + 1,\n                                day: currentDate\n                            }\"\n                            #d=\"ngbDatepicker\"\n                        />\n                        <button\n                            class=\"input-group-addon\"\n                            (click)=\"d.toggle()\"\n                            type=\"button\"\n                        >\n                            <span class=\"fa fa-calendar\"></span>\n                        </button>\n                        <div\n                            *ngIf=\"submitted && f.date.errors\"\n                            class=\"invalid-feedback\"\n                        >\n                            <div *ngIf=\"f.date.errors.required\">\n                                Date cannot be blank\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col col-xl-3 col-lg-12\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"duration\"\n                        >Duration</label\n                    >\n                    <ng-select\n                        appendTo=\"body\"\n                        formControlName=\"duration\"\n                        id=\"duration\"\n                        [ngClass]=\"{\n                            'is-invalid': submitted && f.duration.errors\n                        }\"\n                        required\n                    >\n                        <ng-option value=\"0.5\">Half Day</ng-option>\n                        <ng-option value=\"1\">Full day</ng-option>\n                    </ng-select>\n                    <div\n                        *ngIf=\"submitted && f.duration.errors\"\n                        class=\"invalid-feedback\"\n                    >\n                        <div *ngIf=\"f.duration.errors.required\">\n                            Duration cannot be blank\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button [disabled]=\"loading\" (click)=\"onSubmit()\" class=\"btn btn-success\">\n        <span\n            *ngIf=\"loading\"\n            class=\"spinner-border spinner-border-sm mr-1\"\n        ></span>\n        Update\n    </button>\n</div>\n");

/***/ }),

/***/ "./src/app/layout/leaves/add/add.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layout/leaves/add/add.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep body {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWRoZXJzb25qZXlha29kaS9wcm9qZWN0cy9hbmd1bGFyL2VtcC1tYW5hZ2Utbmcvc3JjL2FwcC9sYXlvdXQvbGVhdmVzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9sZWF2ZXMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGVhdmVzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIiwiOjpuZy1kZWVwIGJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/leaves/add/add.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/leaves/add/add.component.ts ***!
  \****************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_leave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/leave.service */ "./src/app/shared/services/leave.service.ts");
/* harmony import */ var src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/employee.service */ "./src/app/shared/services/employee.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







let AddComponent = class AddComponent {
    constructor(formBuilder, modal, employeeService, leaveService) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.employeeService = employeeService;
        this.leaveService = leaveService;
        this.loading = false;
        this.submitted = false;
        this.currentMonth = new Date().getMonth();
        this.currentDate = new Date().getDate();
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        this.employeeService.get().subscribe(() => { });
        this.employeeService.getEmployeesData().subscribe((data) => {
            this.employees = data.employees;
        });
        this.leaveAddForm = this.formBuilder.group({
            employee: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            duration: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date: [
                {
                    year: parseInt(this.currentYear, 10),
                    month: parseInt(this.currentMonth, 10),
                    day: parseInt(this.currentDate, 10),
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ],
        });
    }
    get f() {
        return this.leaveAddForm.controls;
    }
    onSubmit() {
        this.error = "";
        if (!this.leaveAddForm.value.employee ||
            this.leaveAddForm.value.employee.length === 0) {
            this.error = "You must choose one employee.";
            return;
        }
        if (!this.leaveAddForm.value.duration ||
            this.leaveAddForm.value.duration.length === 0) {
            this.error = "You must choose one duration.";
            return;
        }
        this.submitted = true;
        // stop here if form is invalid
        if (this.leaveAddForm.invalid) {
            return;
        }
        this.loading = true;
        this.leaveService.add(this.leaveAddForm.value).subscribe((response) => {
            this.modal.close("Close click");
            this.leaveService.get().subscribe(() => { });
        });
    }
};
AddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] },
    { type: src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] },
    { type: src_app_shared_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"] }
];
AddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-leave-add",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/leaves/add/add.component.html")).default,
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add.component.scss */ "./src/app/layout/leaves/add/add.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"],
        src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"],
        src_app_shared_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"]])
], AddComponent);



/***/ }),

/***/ "./src/app/layout/leaves/leave-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/leaves/leave-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LeaveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveRoutingModule", function() { return LeaveRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _leave_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave.component */ "./src/app/layout/leaves/leave.component.ts");




const routes = [
    {
        path: "",
        component: _leave_component__WEBPACK_IMPORTED_MODULE_3__["LeaveComponent"]
    }
];
let LeaveRoutingModule = class LeaveRoutingModule {
};
LeaveRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LeaveRoutingModule);



/***/ }),

/***/ "./src/app/layout/leaves/leave.component.scss":
/*!****************************************************!*\
  !*** ./src/app/layout/leaves/leave.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sZWF2ZXMvbGVhdmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/leaves/leave.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/leaves/leave.component.ts ***!
  \**************************************************/
/*! exports provided: LeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveComponent", function() { return LeaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/layout/leaves/add/add.component.ts");
/* harmony import */ var _update_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update/edit.component */ "./src/app/layout/leaves/update/edit.component.ts");
/* harmony import */ var src_app_shared_services_leave_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/leave.service */ "./src/app/shared/services/leave.service.ts");







let LeaveComponent = class LeaveComponent {
    constructor(dialogService, leaveService) {
        this.dialogService = dialogService;
        this.leaveService = leaveService;
    }
    ngOnInit() {
        this.leaveService.get().subscribe(() => { });
        this.leaveService.getLeavesData().subscribe(data => {
            this.leaves = data.leaves;
        });
    }
    onAdd() {
        this.dialogService.open(_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], {
            size: "lg",
            centered: true
        });
    }
    onUpdateClick(leaveId) {
        const modalRef = this.dialogService.open(_update_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], {
            size: "lg",
            centered: true
        });
        modalRef.componentInstance.leaveId = leaveId;
    }
    onDeleteClick(leaveId) {
        this.leaveService.delete(leaveId).subscribe(data => {
            this.leaveService.get().subscribe(() => { });
        });
    }
};
LeaveComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: src_app_shared_services_leave_service__WEBPACK_IMPORTED_MODULE_6__["LeaveService"] }
];
LeaveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-leave",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./leave.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/leaves/leave.component.html")).default,
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./leave.component.scss */ "./src/app/layout/leaves/leave.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        src_app_shared_services_leave_service__WEBPACK_IMPORTED_MODULE_6__["LeaveService"]])
], LeaveComponent);



/***/ }),

/***/ "./src/app/layout/leaves/leave.module.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/leaves/leave.module.ts ***!
  \***********************************************/
/*! exports provided: LeaveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveModule", function() { return LeaveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _leave_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave-routing.module */ "./src/app/layout/leaves/leave-routing.module.ts");
/* harmony import */ var _leave_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leave.component */ "./src/app/layout/leaves/leave.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add/add.component */ "./src/app/layout/leaves/add/add.component.ts");
/* harmony import */ var _update_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/edit.component */ "./src/app/layout/leaves/update/edit.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");











let LeaveModule = class LeaveModule {
};
LeaveModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _leave_routing_module__WEBPACK_IMPORTED_MODULE_3__["LeaveRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"]
        ],
        declarations: [_leave_component__WEBPACK_IMPORTED_MODULE_4__["LeaveComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"], _update_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"]]
    })
], LeaveModule);



/***/ }),

/***/ "./src/app/layout/leaves/update/edit.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/layout/leaves/update/edit.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep body {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWRoZXJzb25qZXlha29kaS9wcm9qZWN0cy9hbmd1bGFyL2VtcC1tYW5hZ2Utbmcvc3JjL2FwcC9sYXlvdXQvbGVhdmVzL3VwZGF0ZS9lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbGVhdmVzL3VwZGF0ZS9lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sZWF2ZXMvdXBkYXRlL2VkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIiwiOjpuZy1kZWVwIGJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/leaves/update/edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/leaves/update/edit.component.ts ***!
  \********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_leave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/leave.service */ "./src/app/shared/services/leave.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/employee.service */ "./src/app/shared/services/employee.service.ts");







let EditComponent = class EditComponent {
    constructor(formBuilder, modal, employeeService, leaveService) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.employeeService = employeeService;
        this.leaveService = leaveService;
        this.loading = false;
        this.submitted = false;
        this.currentMonth = new Date().getMonth();
        this.currentDate = new Date().getDate();
    }
    ngOnInit() {
        this.employeeService.get().subscribe(() => { });
        this.employeeService.getEmployeesData().subscribe((data) => {
            this.employees = data.employees;
        });
        this.leaveEditForm = this.formBuilder.group({
            employee: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            duration: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.leaveService.findById(this.leaveId).subscribe((response) => {
            const date = response.leave.date.split("-");
            const year = date[0];
            const month = date[1];
            const day = date[2];
            const employee = response.leave.employee;
            this.leaveEditForm = this.formBuilder.group({
                employee: [[employee], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                duration: [
                    response.leave.duration.toString(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ],
                date: [
                    {
                        year: parseInt(year, 10),
                        month: parseInt(month, 10),
                        day: parseInt(day, 10),
                    },
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ],
            });
        });
    }
    get f() {
        return this.leaveEditForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        this.error = "";
        if (!this.leaveEditForm.value.employee ||
            this.leaveEditForm.value.employee.length === 0) {
            this.error = "You must choose one employee.";
            return;
        }
        if (!this.leaveEditForm.value.duration ||
            this.leaveEditForm.value.duration.length === 0) {
            this.error = "You must choose one duration.";
            return;
        }
        // stop here if form is invalid
        if (this.leaveEditForm.invalid) {
            return;
        }
        this.loading = true;
        this.leaveService
            .update(this.leaveEditForm.value, this.leaveId)
            .subscribe((response) => {
            this.modal.close("Close click");
            this.leaveService.get().subscribe(() => { });
        });
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"] },
    { type: src_app_shared_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"] }
];
EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-leave-edit",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/leaves/update/edit.component.html")).default,
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.component.scss */ "./src/app/layout/leaves/update/edit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
        src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"],
        src_app_shared_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"]])
], EditComponent);



/***/ }),

/***/ "./src/app/shared/services/leave.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/leave.service.ts ***!
  \**************************************************/
/*! exports provided: LeaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveService", function() { return LeaveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let LeaveService = class LeaveService {
    constructor(http) {
        this.http = http;
        this.access_token = localStorage.getItem("access_token");
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.access_token,
        });
        this.options = { headers: this.headers };
        this.leaves = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.leave = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getLeavesData() {
        return this.leaves.asObservable();
    }
    getleaveData() {
        return this.leave.asObservable();
    }
    get() {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/leave`, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((leaves) => {
            this.leaves.next(leaves);
            return leaves;
        }));
    }
    findById(leaveId) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/leave/${leaveId}`, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((leave) => {
            this.leave.next(leave);
            return leave;
        }));
    }
    delete(leaveId) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/leave/${leaveId}`, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
    add(data) {
        const date = `${data.date.year}-${data.date.month}-${data.date.day}`;
        const body = {
            employee: data.employee,
            date: date,
            duration: data.duration,
        };
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/leave/create`, body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
    update(data, leaveId) {
        const date = `${data.date.year}-${data.date.month}-${data.date.day}`;
        const body = {
            employee: data.employee,
            date: date,
            duration: data.duration,
        };
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/leave/update/${leaveId}`, body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return response;
        }));
    }
};
LeaveService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LeaveService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LeaveService);



/***/ })

}]);
//# sourceMappingURL=leaves-leave-module-es2015.js.map