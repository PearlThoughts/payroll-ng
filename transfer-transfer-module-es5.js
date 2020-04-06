function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transfer-transfer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/transfer/transfer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/transfer/transfer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutTransferTransferComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [@routerTransition]>\n    <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Transfers\n                </div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table table-bordered\">\n                        <thead>\n                            <tr>\n                                <th>Reference ID</th>\n                                <th>Beneficiary ID</th>\n                                <th>Amount</th>\n                                <th>Status</th>\n                                <th>Added On</th>\n                                <th>Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let transfer of transfers\">\n                                <td>{{ transfer.referenceId }}</td>\n                                <td>{{ transfer.beneId }}</td>\n                                <td>{{ transfer.amount }}</td>\n                                <td>\n                                    <span\n                                        class=\"badge {{\n                                            transfer.status === 'SUCCESS'\n                                                ? 'badge-success'\n                                                : 'badge-danger'\n                                        }}\"\n                                    >\n                                        {{ transfer.status }}\n                                    </span>\n                                </td>\n                                <td>\n                                    {{\n                                        transfer.addedOn\n                                            | date: \"MMM d, y h:mm:ss a\"\n                                    }}\n                                </td>\n                                <td class=\"\">\n                                    <button\n                                        type=\"button\"\n                                        style=\"margin-right: 5px;\"\n                                        placement=\"top\"\n                                        ngbTooltip=\"Info\"\n                                        (click)=\"info(transfer.transferId)\"\n                                        class=\"btn btn-info btn-sm\"\n                                    >\n                                        <i class=\"fa fa-info\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/layout/transfer/transfer-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/transfer/transfer-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: TransferRoutingModule */

  /***/
  function srcAppLayoutTransferTransferRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferRoutingModule", function () {
      return TransferRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./transfer.component */
    "./src/app/layout/transfer/transfer.component.ts");

    var routes = [{
      path: "",
      component: _transfer_component__WEBPACK_IMPORTED_MODULE_3__["TransferComponent"]
    }];

    var TransferRoutingModule = function TransferRoutingModule() {
      _classCallCheck(this, TransferRoutingModule);
    };

    TransferRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TransferRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/transfer/transfer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/layout/transfer/transfer.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutTransferTransferComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90cmFuc2Zlci90cmFuc2Zlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/transfer/transfer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/layout/transfer/transfer.component.ts ***!
    \*******************************************************/

  /*! exports provided: TransferComponent */

  /***/
  function srcAppLayoutTransferTransferComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferComponent", function () {
      return TransferComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../router.animations */
    "./src/app/router.animations.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_shared_services_transfer_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/transfer-status.service */
    "./src/app/shared/services/transfer-status.service.ts");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/layout/transfer/info/info.component.ts");

    var TransferComponent =
    /*#__PURE__*/
    function () {
      function TransferComponent(dialogService, transferStatusService) {
        _classCallCheck(this, TransferComponent);

        this.dialogService = dialogService;
        this.transferStatusService = transferStatusService;
      }

      _createClass(TransferComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.transferStatusService.get().subscribe(function () {});
          this.transferStatusService.getTransfersData().subscribe(function (data) {
            _this.transfers = data;
          });
        }
      }, {
        key: "info",
        value: function info(transferId) {
          var modalRef = this.dialogService.open(_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"], {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.transferId = transferId;
        }
      }]);

      return TransferComponent;
    }();

    TransferComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: src_app_shared_services_transfer_status_service__WEBPACK_IMPORTED_MODULE_4__["TransferStatusService"]
      }];
    };

    TransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-transfer",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./transfer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/transfer/transfer.component.html"))["default"],
      animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./transfer.component.scss */
      "./src/app/layout/transfer/transfer.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], src_app_shared_services_transfer_status_service__WEBPACK_IMPORTED_MODULE_4__["TransferStatusService"]])], TransferComponent);
    /***/
  },

  /***/
  "./src/app/layout/transfer/transfer.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/layout/transfer/transfer.module.ts ***!
    \****************************************************/

  /*! exports provided: TransferModule */

  /***/
  function srcAppLayoutTransferTransferModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferModule", function () {
      return TransferModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _transfer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./transfer-routing.module */
    "./src/app/layout/transfer/transfer-routing.module.ts");
    /* harmony import */


    var _transfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./transfer.component */
    "./src/app/layout/transfer/transfer.component.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");

    var TransferModule = function TransferModule() {
      _classCallCheck(this, TransferModule);
    };

    TransferModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _transfer_routing_module__WEBPACK_IMPORTED_MODULE_3__["TransferRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]],
      declarations: [_transfer_component__WEBPACK_IMPORTED_MODULE_4__["TransferComponent"]]
    })], TransferModule);
    /***/
  }
}]);
//# sourceMappingURL=transfer-transfer-module-es5.js.map