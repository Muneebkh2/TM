(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout.routing */ "./src/app/layouts/auth-layout/auth-layout.routing.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/reset-password/reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                // NgbModule
            ],
            declarations: [
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"],
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/reset-password/reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");



var AuthLayoutRoutes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'reset-password/:ID', component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"] }
];


/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container-fluid\" style=\"padding: 0!important;\">-->\r\n  <!--<div class=\"row p-0 m-0\">-->\r\n    <!--&lt;!&ndash;Left Div Start&ndash;&gt;-->\r\n    <!--<div class=\"col-md-8\">-->\r\n      <!--<div class=\"container py-7 py-lg-8\">-->\r\n\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n    <!--&lt;!&ndash;Left Div End&ndash;&gt;-->\r\n    <!--&lt;!&ndash;Right Div Start&ndash;&gt;-->\r\n    <!--<div class=\"col-md-4 bg-gradient-animated h-100vh d-flex\">-->\r\n      <!--<div class=\"container py-7 py-lg-8 justify-content-center align-self-center\">-->\r\n        <!--<div class=\"card bg-secondary shadow border-0\">-->\r\n          <!--<div class=\"card-header bg-transparent pb-5\">-->\r\n            <!--<div class=\"text-muted text-center mt-2 mb-3\">-->\r\n              <!--<h4>Welcome back! Sign in as</h4-->\r\n              <!--&gt;</div>-->\r\n            <!--<div class=\"btn-wrapper text-center\">-->\r\n              <!--<a href=\"javascript:void(0)\" class=\"btn\" [ngClass]=\"(isTrainerLogin)?'btn-default':'btn-outline-default'\" (click)=\"loginType(true)\">-->\r\n                <!--<span class=\"btn-inner&#45;&#45;text\">Trainer</span>-->\r\n              <!--</a>-->\r\n              <!--<a href=\"javascript:void(0)\" class=\"btn\" [ngClass]=\"(isTrainerLogin)?'btn-outline-default':'btn-default'\" (click)=\"loginType(false)\">-->\r\n                <!--<span class=\"btn-inner&#45;&#45;text\">Company</span>-->\r\n              <!--</a>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"card-body px-lg-5 py-lg-5\">-->\r\n            <!--<form role=\"form\">-->\r\n              <!--<div class=\"form-group mb-3\">-->\r\n                <!--<div class=\"input-group input-group-alternative\">-->\r\n                  <!--<div class=\"input-group-prepend\">-->\r\n                    <!--<span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>-->\r\n                  <!--</div>-->\r\n                  <!--<input class=\"form-control\" placeholder=\"Email\" type=\"email\">-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"form-group\">-->\r\n                <!--<div class=\"input-group input-group-alternative\">-->\r\n                  <!--<div class=\"input-group-prepend\">-->\r\n                    <!--<span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>-->\r\n                  <!--</div>-->\r\n                  <!--<input class=\"form-control\" placeholder=\"Password\"  [type]=\"isPasswordVisible ? 'text' : 'password'\">-->\r\n                  <!--<div class=\"input-group-append\">-->\r\n                    <!--<button class=\"btn\" type=\"button\" (click)=\"togglePasswordVisiblity()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"fas fa-eye\" [class.d-none]=\"!isPasswordVisible\"></i>&ndash;&gt;-->\r\n                      <!--<img src=\"assets/img/theme/invisible.png\" [class.d-none]=\"isPasswordVisible\">-->\r\n                      <!--<img src=\"assets/img/theme/visible.png\" [class.d-none]=\"!isPasswordVisible\">-->\r\n                      <!--&lt;!&ndash;<i class=\"fas fa-eye-slash\" [class.d-none]=\"isPasswordVisible\"></i>&ndash;&gt;-->\r\n                    <!--</button>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"custom-control custom-control-alternative custom-checkbox\">-->\r\n                <!--<input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">-->\r\n                <!--<label class=\"custom-control-label\" for=\" customCheckLogin\">-->\r\n                  <!--<span class=\"text-muted\">Remember me</span>-->\r\n                <!--</label>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"text-center\">-->\r\n                <!--<button type=\"button\" class=\"btn btn-default my-4\">Sign in</button>-->\r\n              <!--</div>-->\r\n            <!--</form>-->\r\n            <!--<div class=\"row mt-3\">-->\r\n              <!--<div class=\"col-6\">-->\r\n                <!--<a href=\"javascript:void(0)\" class=\"text-light\">-->\r\n                  <!--<p class=\"text-default\">Forgot password?</p>-->\r\n                <!--</a>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"col-6 text-right\">-->\r\n                <!--<a [routerLink]=\"['/register']\" class=\"text-light\">-->\r\n                  <!--<p class=\"text-default\">Create new account</p>-->\r\n                <!--</a>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n  <!--&lt;!&ndash;Right Div End&ndash;&gt;-->\r\n<!--</div>-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"header bg-gradient-animated py-7 py-lg-8\">\r\n    <div class=\"container\">\r\n    <!--<div class=\"header-body text-center mb-7\">-->\r\n      <!--<div class=\"row justify-content-center\">-->\r\n        <!--<div class=\"col-lg-5 col-md-6\">-->\r\n          <!--<h1 class=\"text-white\">Premier Partnership Portal</h1>-->\r\n          <!--<p class=\"text-lead text-light\">-->\r\n              <!---->\r\n          <!--</p>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<div class=\"container mt--8 pb-5\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5 col-md-7\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        <div class=\"card-header bg-transparent pb-5\">\r\n          <div class=\"text-muted text-center mt-2 mb-3\">\r\n            <h4>Welcome back! Sign in as</h4\r\n            ></div>\r\n          <div class=\"btn-wrapper text-center\">\r\n            <a href=\"javascript:void(0)\" class=\"btn\" [ngClass]=\"(isTrainerLogin)?'btn-default':'btn-outline-default'\" (click)=\"loginType(true)\">\r\n              <span class=\"btn-inner--text\">Trainer</span>\r\n            </a>\r\n            <a href=\"javascript:void(0)\" class=\"btn\" [ngClass]=\"(isTrainerLogin)?'btn-outline-default':'btn-default'\" (click)=\"loginType(false)\">\r\n              <span class=\"btn-inner--text\">Company</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <form role=\"form\">\r\n            <div class=\"form-group mb-3\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Password\"  [type]=\"isPasswordVisible ? 'text' : 'password'\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn\" type=\"button\" (click)=\"togglePasswordVisiblity()\">\r\n                    <!--<i class=\"fas fa-eye\" [class.d-none]=\"!isPasswordVisible\"></i>-->\r\n                    <img src=\"assets/img/theme/invisible.png\" [class.d-none]=\"isPasswordVisible\">\r\n                    <img src=\"assets/img/theme/visible.png\" [class.d-none]=\"!isPasswordVisible\">\r\n                    <!--<i class=\"fas fa-eye-slash\" [class.d-none]=\"isPasswordVisible\"></i>-->\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n              <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                <span class=\"text-muted\">Remember me</span>\r\n              </label>\r\n            </div>\r\n            \r\n            <div class=\"text-center\" *ngIf=\"isTrainerLogin; else isCompany\">\r\n              <button type=\"button\" class=\"btn btn-default my-4\" [routerLink]=\"['/resource-dashboard/1']\">Sign in</button>\r\n            </div>\r\n            <ng-template #isCompany>\r\n              <div class=\"text-center\">\r\n                <button type=\"button\" class=\"btn btn-default my-4\" [routerLink]=\"['/dashboard']\">Sign in</button>\r\n              </div>\r\n            </ng-template>\r\n            \r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-6\">\r\n          <a href=\"javascript:void(0)\" class=\"text-light\"><small>Forgot password?</small></a>\r\n        </div>\r\n        <div class=\"col-6 text-right\">\r\n          <a [routerLink]=\"['/register']\" class=\"text-light\"><small>Create new account</small></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.isTrainerLogin = null;
        this.isPasswordVisible = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isTrainerLogin = true; // By default company login
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.prototype.loginType = function (isTrainer) {
        this.isTrainerLogin = isTrainer;
    };
    LoginComponent.prototype.togglePasswordVisiblity = function () {
        this.isPasswordVisible = !this.isPasswordVisible;
        console.log(this.isPasswordVisible);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header bg-gradient-danger py-7 py-lg-8\">\r\n  <div class=\"container\">\r\n    <div class=\"header-body text-center mb-7\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n          <h1 class=\"text-white\">Welcome!</h1>\r\n          <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <!-- Table -->\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-6 col-md-8\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        <div class=\"card-header bg-transparent pb-5\">\r\n          <div class=\"text-muted text-center mt-2 mb-4\"><small>Sign up with</small></div>\r\n          <div class=\"text-center\">\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\r\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/github.svg\"></span>\r\n              <span class=\"btn-inner--text\">Github</span>\r\n            </a>\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/google.svg\"></span>\r\n              <span class=\"btn-inner--text\">Google</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <div class=\"text-center text-muted mb-4\">\r\n            <small>Or sign up with credentials</small>\r\n          </div>\r\n          <form role=\"form\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Name\" type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n              </div>\r\n            </div>\r\n            <div class=\"text-muted font-italic\"><small>password strength: <span class=\"text-success font-weight-700\">strong</span></small></div>\r\n            <div class=\"row my-4\">\r\n              <div class=\"col-12\">\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\"customCheckRegister\">\r\n                    <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button type=\"button\" class=\"btn btn-primary mt-4\">Create account</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header bg-gradient-animated py-7 py-lg-8\">\r\n    <div class=\"container\">\r\n        <!-- <div class=\"header-body text-center mb-7\">\r\n        <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n        <h1 class=\"text-white\">Premier Partnership Portal</h1>\r\n        <p class=\"text-lead text-light\">\r\n        </p>\r\n        </div>\r\n        </div>\r\n        </div> -->\r\n    </div>\r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n            xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n    </div>\r\n</div>\r\n<div class=\"container mt--6 pb-5\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-7\">\r\n            <div class=\"card bg-secondary shadow border-0\">\r\n                <div class=\"card-header bg-transparent pb-5\">\r\n                    <div class=\"text-muted text-center mt-2 mb-3\">\r\n                        <h2>Reset Your Password</h2>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body px-lg-5 py-lg-5\">\r\n                    <form role=\"form\">\r\n                        <div class=\"form-group mb-3\">\r\n                            <div class=\"input-group input-group-alternative\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text bg-light\"><i class=\"ni ni-email-83\"></i></span>\r\n                                </div>\r\n                                <input class=\"form-control\" placeholder=\"Email\" type=\"email\" value=\"john@test.com\" readonly>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group input-group-alternative\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                                </div>\r\n                                <input class=\"form-control\" placeholder=\"Password\"\r\n                                    [type]=\"isPasswordVisible ? 'text' : 'password'\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn\" type=\"button\" (click)=\"togglePasswordVisiblity()\">\r\n                                        <!--<i class=\"fas fa-eye\" [class.d-none]=\"!isPasswordVisible\"></i>-->\r\n                                        <img src=\"assets/img/theme/invisible.png\" [class.d-none]=\"isPasswordVisible\">\r\n                                        <img src=\"assets/img/theme/visible.png\" [class.d-none]=\"!isPasswordVisible\">\r\n                                        <!--<i class=\"fas fa-eye-slash\" [class.d-none]=\"isPasswordVisible\"></i>-->\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group input-group-alternative\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                                </div>\r\n                                <input class=\"form-control\" placeholder=\"Confirm Password\"\r\n                                    [type]=\"isPasswordVisible ? 'text' : 'password'\">\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-center\">\r\n                            <button type=\"button\" class=\"btn btn-default my-4\">Reset Password</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group .form-control:not(:first-child) {\n  border-left: 0;\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXQtcGFzc3dvcmQvZTpcXFRyYWluZXJzLU1hbmFnZW1lbnRcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHJlc2V0LXBhc3N3b3JkXFxyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
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

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent() {
        this.isPasswordVisible = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.togglePasswordVisiblity = function () {
        this.isPasswordVisible = !this.isPasswordVisible;
        // console.log(this.isPasswordVisible);
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/pages/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/pages/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map