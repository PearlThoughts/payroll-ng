(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">PT - Payroll </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n        <span class=\"navbar-toggler-icon\"></span>\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-user\"></i> John Smith <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a\n                        class=\"dropdown-item\"\n                        [routerLink]=\"['/login']\"\n                        (click)=\"onLoggedout()\"\n                    >\n                        <i class=\"fa fa-fw fa-power-off\"></i>\n                        {{ \"Log Out\" | translate }}\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/sidebar/sidebar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n    class=\"sidebar\"\n    [ngClass]=\"{ sidebarPushRight: isActive, collapsed: collapsed }\"\n>\n    <div class=\"list-group\">\n        <a\n            [routerLink]=\"['/employees']\"\n            [routerLinkActive]=\"['router-link-active']\"\n            class=\"list-group-item\"\n        >\n            <i class=\"fa fa-fw fa-users\"></i>&nbsp;\n            <span>{{ \"Employees\" | translate }}</span>\n        </a>\n        <a\n            [routerLink]=\"['/leaves']\"\n            [routerLinkActive]=\"['router-link-active']\"\n            class=\"list-group-item\"\n        >\n            <i class=\"fa fa-fw fa-calendar-times-o\"></i>&nbsp;\n            <span>{{ \"leaves\" | translate }}</span>\n        </a>\n        <a\n            [routerLink]=\"['/salary']\"\n            [routerLinkActive]=\"['router-link-active']\"\n            class=\"list-group-item\"\n        >\n            <i class=\"fa fa-fw fa-inr\"></i>&nbsp;\n            <span>{{ \"Salary\" | translate }}</span>\n        </a>\n        <a\n            [routerLink]=\"['/beneficiary']\"\n            [routerLinkActive]=\"['router-link-active']\"\n            class=\"list-group-item\"\n        >\n            <i class=\"fa fa-fw fa-book\"></i>&nbsp;\n            <span>{{ \"Beneficiary\" | translate }}</span>\n        </a>\n        <a\n            [routerLink]=\"['/transfer']\"\n            [routerLinkActive]=\"['router-link-active']\"\n            class=\"list-group-item\"\n        >\n            <i class=\"fa fa-fw fa-exchange\"></i>&nbsp;\n            <span>{{ \"Transfer\" | translate }}</span>\n        </a>\n    </div>\n    <div\n        class=\"toggle-button\"\n        [ngClass]=\"{ collapsed: collapsed }\"\n        (click)=\"toggleCollapsed()\"\n    >\n        <i\n            class=\"fa fa-fw fa-angle-double-{{ collapsed ? 'right' : 'left' }}\"\n        ></i\n        >&nbsp;\n        <span>{{ \"Collapse Sidebar\" | translate }}</span>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\n    <router-outlet></router-outlet>\n</section>\n");

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .navbar {\n  background-color: #222;\n}\n:host .navbar .navbar-brand {\n  color: #fff;\n}\n:host .navbar .nav-item > a {\n  color: #999;\n}\n:host .navbar .nav-item > a:hover {\n  color: #fff;\n}\n:host .messages {\n  width: 300px;\n}\n:host .messages .media {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n:host .messages .media:last-child {\n  border-bottom: none;\n}\n:host .messages .media-body h5 {\n  font-size: 13px;\n  font-weight: 600;\n}\n:host .messages .media-body .small {\n  margin: 0;\n}\n:host .messages .media-body .last {\n  font-size: 12px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWRoZXJzb25qZXlha29kaS9wcm9qZWN0cy9hbmd1bGFyL2VtcC1tYW5hZ2Utbmcvc3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksc0JBSGtCO0FDRTFCO0FERVE7RUFDSSxXQUFBO0FDQVo7QURFUTtFQUNJLFdBQUE7QUNBWjtBRENZO0VBQ0ksV0FBQTtBQ0NoQjtBREdJO0VBQ0ksWUFBQTtBQ0RSO0FERVE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDQVo7QURDWTtFQUNJLG1CQUFBO0FDQ2hCO0FER1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNEaEI7QURHWTtFQUNJLFNBQUE7QUNEaEI7QURHWTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FDRGhCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbjpob3N0IHtcbiAgICAubmF2YmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5uYXYtaXRlbSA+IGEge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubWVzc2FnZXMge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIC5tZWRpYSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tZWRpYS1ib2R5IHtcbiAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxhc3Qge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCI6aG9zdCAubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbn1cbjpob3N0IC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLm5hdmJhciAubmF2LWl0ZW0gPiBhIHtcbiAgY29sb3I6ICM5OTk7XG59XG46aG9zdCAubmF2YmFyIC5uYXYtaXRlbSA+IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IC5tZXNzYWdlcyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbjpob3N0IC5tZXNzYWdlcyAubWVkaWEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG46aG9zdCAubWVzc2FnZXMgLm1lZGlhOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYS1ib2R5IGg1IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYS1ib2R5IC5zbWFsbCB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5tZXNzYWdlcyAubWVkaWEtYm9keSAubGFzdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(translate, router, authService) {
        this.translate = translate;
        this.router = router;
        this.authService = authService;
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngOnInit() {
        this.pushRightClass = "push-right";
    }
    isToggled() {
        const dom = document.querySelector("body");
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector("body");
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector("body");
        dom.classList.toggle("rtl");
    }
    onLoggedout() {
        this.authService.logout();
    }
    changeLang(language) {
        this.translate.use(language);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out;\n}\n.sidebar .list-group a.list-group-item {\n  background: #222;\n  border: 0;\n  border-radius: 0;\n  color: #999;\n  text-decoration: none;\n}\n.sidebar .list-group a.list-group-item .fa {\n  margin-right: 10px;\n}\n.sidebar .list-group a:hover {\n  background: #151515;\n  color: #fff;\n}\n.sidebar .list-group a.router-link-active {\n  background: #151515;\n  color: #fff;\n}\n.sidebar .list-group .header-fields {\n  padding-top: 10px;\n}\n.sidebar .list-group .header-fields > .list-group-item:first-child {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n.sidebar .sidebar-dropdown *:focus {\n  border-radius: none;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-title {\n  font-size: 1rem;\n  height: 50px;\n  margin-bottom: 0;\n}\n.sidebar .sidebar-dropdown .panel-title a {\n  color: #999;\n  text-decoration: none;\n  font-weight: 400;\n  background: #222;\n}\n.sidebar .sidebar-dropdown .panel-title a span {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.5rem;\n  padding-top: 1rem;\n}\n.sidebar .sidebar-dropdown .panel-title a:hover,\n.sidebar .sidebar-dropdown .panel-title a:focus {\n  color: #fff;\n  outline: none;\n  outline-offset: -2px;\n}\n.sidebar .sidebar-dropdown .panel-title:hover {\n  background: #151515;\n}\n.sidebar .sidebar-dropdown .panel-collapse {\n  border-radious: 0;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n  border-radius: 0;\n  background-color: #222;\n  border: 0 solid transparent;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n  color: #999;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n  color: #fff;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n  background: #151515;\n}\n.nested-menu .list-group-item {\n  cursor: pointer;\n}\n.nested-menu .nested {\n  list-style-type: none;\n}\n.nested-menu ul.submenu {\n  display: none;\n  height: 0;\n}\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n}\n.nested-menu .expand ul.submenu li a {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px;\n  }\n}\n@media print {\n  .sidebar {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .header-fields {\n    display: none;\n  }\n}\n::-webkit-scrollbar {\n  width: 8px;\n}\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white;\n}\n.toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out;\n}\n.toggle-button i {\n  font-size: 23px;\n}\n.toggle-button:hover {\n  background: #151515;\n  color: #fff;\n}\n.collapsed {\n  width: 60px;\n}\n.collapsed span {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWRoZXJzb25qZXlha29kaS9wcm9qZWN0cy9hbmd1bGFyL2VtcC1tYW5hZ2Utbmcvc3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFic0I7RUFjdEIsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUtBLGdDQUFBO0FDQUo7QURHUTtFQUNJLGdCQTFCYztFQTJCZCxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNEWjtBREVZO0VBQ0ksa0JBQUE7QUNBaEI7QURHUTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0RaO0FER1E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNEWjtBREdRO0VBQ0ksaUJBQUE7QUNEWjtBREdZO0VBQ0ksOENBQUE7QUNEaEI7QURNUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0paO0FETVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSlo7QURLWTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBaEVVO0FDNkQxQjtBRElnQjtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNGcEI7QURLWTs7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDSGhCO0FETVE7RUFDSSxtQkFBQTtBQ0paO0FETVE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNKWjtBRE1nQjtFQUNJLGdCQUFBO0VBQ0Esc0JBeEZNO0VBeUZOLDJCQUFBO0FDSnBCO0FES29CO0VBQ0ksV0FBQTtBQ0h4QjtBREtvQjtFQUNJLFdBQUE7QUNIeEI7QURNZ0I7RUFDSSxtQkFBQTtBQ0pwQjtBRFlJO0VBQ0ksZUFBQTtBQ1RSO0FEV0k7RUFDSSxxQkFBQTtBQ1RSO0FEV0k7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQ1RSO0FEWVE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDVlo7QURZZ0I7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNWcEI7QURnQkE7RUFDSTtJQUNJLFNBQUE7SUFDQSxTQUFBO0VDYk47QUFDRjtBRGVBO0VBQ0k7SUFDSSx3QkFBQTtFQ2JOO0FBQ0Y7QURlQTtFQUNJO0lBQ0ksYUFBQTtFQ2JOO0FBQ0Y7QURnQkE7RUFDSSxVQUFBO0FDZEo7QURpQkE7RUFDSSx1Q0FBQTtFQUNBLGtCQUFBO0FDZEo7QURpQkE7RUFDSSxrQkFBQTtFQUNBLHVDQUFBO0FDZEo7QURpQkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQVFBLDBCQUFBO0VBS0EsZ0NBQUE7QUNyQko7QURTSTtFQUNJLGVBQUE7QUNQUjtBRFNJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDUFI7QURpQkE7RUFDSSxXQUFBO0FDZEo7QURlSTtFQUNJLGFBQUE7QUNiUiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbi5zaWRlYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHRvcDogNTZweDtcbiAgICBsZWZ0OiAyMzVweDtcbiAgICB3aWR0aDogMjM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gICAgLmxpc3QtZ3JvdXAge1xuICAgICAgICBhLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAuZmEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGEucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXItZmllbGRzIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICA+IC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNpZGViYXItZHJvcGRvd24ge1xuICAgICAgICAqOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnBhbmVsLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyLFxuICAgICAgICAgICAgYTpmb2N1cyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucGFuZWwtdGl0bGU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xuICAgICAgICB9XG4gICAgICAgIC5wYW5lbC1jb2xsYXBzZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaW91czogMDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIC5wYW5lbC1ib2R5IHtcbiAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5lc3RlZC1tZW51IHtcbiAgICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAubmVzdGVkIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIH1cbiAgICB1bC5zdWJtZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgICAmIC5leHBhbmQge1xuICAgICAgICB1bC5zdWJtZW51IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIHRvcDogNTRweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgIH1cbn1cbkBtZWRpYSBwcmludCB7XG4gICAgLnNpZGViYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmhlYWRlci1maWVsZHMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi50b2dnbGUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDIzNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xuICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5OTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29sbGFwc2VkIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCIuc2lkZWJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgdG9wOiA1NnB4O1xuICBsZWZ0OiAyMzVweDtcbiAgd2lkdGg6IDIzNXB4O1xuICBtYXJnaW4tbGVmdDogLTIzNXB4O1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uc2lkZWJhciAubGlzdC1ncm91cCBhLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6ICM5OTk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zaWRlYmFyIC5saXN0LWdyb3VwIGEubGlzdC1ncm91cC1pdGVtIC5mYSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zaWRlYmFyIC5saXN0LWdyb3VwIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zaWRlYmFyIC5saXN0LWdyb3VwIGEucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzE1MTUxNTtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2lkZWJhciAubGlzdC1ncm91cCAuaGVhZGVyLWZpZWxkcyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnNpZGViYXIgLmxpc3QtZ3JvdXAgLmhlYWRlci1maWVsZHMgPiAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duICo6Zm9jdXMge1xuICBib3JkZXItcmFkaXVzOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC10aXRsZSBhIHtcbiAgY29sb3I6ICM5OTk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZDogIzIyMjtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC10aXRsZSBhIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtdGl0bGUgYTpob3Zlcixcbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC10aXRsZSBhOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLXRpdGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE1MTUxNTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC1jb2xsYXBzZSB7XG4gIGJvcmRlci1yYWRpb3VzOiAwO1xuICBib3JkZXI6IG5vbmU7XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtY29sbGFwc2UgLnBhbmVsLWJvZHkgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC1jb2xsYXBzZSAucGFuZWwtYm9keSAubGlzdC1ncm91cC1pdGVtIGEge1xuICBjb2xvcjogIzk5OTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC1jb2xsYXBzZSAucGFuZWwtYm9keSAubGlzdC1ncm91cC1pdGVtIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC1jb2xsYXBzZSAucGFuZWwtYm9keSAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE1MTUxNTtcbn1cblxuLm5lc3RlZC1tZW51IC5saXN0LWdyb3VwLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmVzdGVkLW1lbnUgLm5lc3RlZCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5uZXN0ZWQtbWVudSB1bC5zdWJtZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuLm5lc3RlZC1tZW51IC5leHBhbmQgdWwuc3VibWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5uZXN0ZWQtbWVudSAuZXhwYW5kIHVsLnN1Ym1lbnUgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHRvcDogNTRweDtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbn1cbkBtZWRpYSBwcmludCB7XG4gIC5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaGVhZGVyLWZpZWxkcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHdoaXRlO1xufVxuXG4udG9nZ2xlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIzNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6ICM5OTk7XG4gIGJhY2tncm91bmQ6ICMyMTI1Mjk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi50b2dnbGUtYnV0dG9uIGkge1xuICBmb250LXNpemU6IDIzcHg7XG59XG4udG9nZ2xlLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxNTE1MTU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29sbGFwc2VkIHtcbiAgd2lkdGg6IDYwcHg7XG59XG4uY29sbGFwc2VkIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");





let SidebarComponent = class SidebarComponent {
    constructor(translate, router, authService) {
        this.translate = translate;
        this.router = router;
        this.authService = authService;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = "";
        this.pushRightClass = "push-right";
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = "0";
        }
        else {
            this.showMenu = element;
        }
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    isToggled() {
        const dom = document.querySelector("body");
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector("body");
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector("body");
        dom.classList.toggle("rtl");
    }
    changeLang(language) {
        this.translate.use(language);
    }
    onLoggedout() {
        this.authService.logout();
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SidebarComponent.prototype, "collapsedEvent", void 0);
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sidebar",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/sidebar/sidebar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");




const routes = [
    {
        path: "",
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: "", redirectTo: "employees", pathMatch: "prefix" },
            {
                path: "employees",
                loadChildren: () => Promise.all(/*! import() | employee-employee-module */[__webpack_require__.e("common"), __webpack_require__.e("employee-employee-module")]).then(__webpack_require__.bind(null, /*! ./employee/employee.module */ "./src/app/layout/employee/employee.module.ts")).then((m) => m.EmployeeModule),
            },
            {
                path: "leaves",
                loadChildren: () => Promise.all(/*! import() | leaves-leave-module */[__webpack_require__.e("default~beneficiary-beneficiary-module~leaves-leave-module~transfer-transfer-module"), __webpack_require__.e("common"), __webpack_require__.e("leaves-leave-module")]).then(__webpack_require__.bind(null, /*! ./leaves/leave.module */ "./src/app/layout/leaves/leave.module.ts")).then((m) => m.LeaveModule),
            },
            {
                path: "salary",
                loadChildren: () => Promise.all(/*! import() | salary-salary-module */[__webpack_require__.e("common"), __webpack_require__.e("salary-salary-module")]).then(__webpack_require__.bind(null, /*! ./salary/salary.module */ "./src/app/layout/salary/salary.module.ts")).then((m) => m.SalaryModule),
            },
            {
                path: "transfer",
                loadChildren: () => Promise.all(/*! import() | transfer-transfer-module */[__webpack_require__.e("default~beneficiary-beneficiary-module~leaves-leave-module~transfer-transfer-module"), __webpack_require__.e("common"), __webpack_require__.e("transfer-transfer-module")]).then(__webpack_require__.bind(null, /*! ./transfer/transfer.module */ "./src/app/layout/transfer/transfer.module.ts")).then((m) => m.TransferModule),
            },
            {
                path: "beneficiary",
                loadChildren: () => Promise.all(/*! import() | beneficiary-beneficiary-module */[__webpack_require__.e("default~beneficiary-beneficiary-module~leaves-leave-module~transfer-transfer-module"), __webpack_require__.e("beneficiary-beneficiary-module")]).then(__webpack_require__.bind(null, /*! ./beneficiary/beneficiary.module */ "./src/app/layout/beneficiary/beneficiary.module.ts")).then((m) => m.BeneficiaryModule),
            },
        ],
    },
];
let LayoutRoutingModule = class LayoutRoutingModule {
};
LayoutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LayoutRoutingModule);



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  transition: margin-left 0.2s ease-in-out;\n}\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n.collapsed {\n  margin-left: 60px;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important;\n  }\n}\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWRoZXJzb25qZXlha29kaS9wcm9qZWN0cy9hbmd1bGFyL2VtcC1tYW5hZ2Utbmcvc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0ksd0NBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QUREQTtFQUNJO0lBQ0ksMkJBQUE7RUNJTjtBQUNGOztBREZBO0VBQ0k7SUFDSSwwQkFBQTtJQUNBLDJCQUFBO0VDSU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBtYXJnaW4tbGVmdDogMjM1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY29sbGFwc2VkIHtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSBwcmludCB7XG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG4iLCIqIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMjM1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb2xsYXBzZWQge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBwcmludCB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let LayoutComponent = class LayoutComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userIsAuthenticated = false;
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        if (!this.userIsAuthenticated) {
            this.router.navigate(["/login"]);
        }
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
    }
    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-layout",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LayoutComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");









let LayoutModule = class LayoutModule {
};
LayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LayoutRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"]
        ],
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]]
    })
], LayoutModule);



/***/ })

}]);
//# sourceMappingURL=layout-layout-module-es2015.js.map