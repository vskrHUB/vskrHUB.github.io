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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/achievements/achievements.component.css":
/*!*********************************************************!*\
  !*** ./src/app/achievements/achievements.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjaGlldmVtZW50cy9hY2hpZXZlbWVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/achievements/achievements.component.html":
/*!**********************************************************!*\
  !*** ./src/app/achievements/achievements.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  achievements works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/achievements/achievements.component.ts":
/*!********************************************************!*\
  !*** ./src/app/achievements/achievements.component.ts ***!
  \********************************************************/
/*! exports provided: AchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsComponent", function() { return AchievementsComponent; });
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

var AchievementsComponent = /** @class */ (function () {
    function AchievementsComponent() {
    }
    AchievementsComponent.prototype.ngOnInit = function () {
    };
    AchievementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-achievements',
            template: __webpack_require__(/*! ./achievements.component.html */ "./src/app/achievements/achievements.component.html"),
            styles: [__webpack_require__(/*! ./achievements.component.css */ "./src/app/achievements/achievements.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AchievementsComponent);
    return AchievementsComponent;
}());



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./achievements/achievements.component */ "./src/app/achievements/achievements.component.ts");
/* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hobbies/hobbies.component */ "./src/app/hobbies/hobbies.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");







var AppRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"] },
    { path: 'achievements', component: _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_4__["AchievementsComponent"] },
    { path: 'hobbies', component: _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__["HobbiesComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(AppRoutes, { useHash: false });


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* main left head */\r\n\r\n.text{\r\n    color:white;\r\n}\r\n\r\n.column_maindiv{\r\n    height:500px;\r\n    border:5px solid #ffffff;\r\n}\r\n\r\n.social-media-div{\r\n    border-top:1px solid #ffffff;\r\n}\r\n\r\n.social-media-div label{\r\n    padding:5px 10px;\r\n    margin:10px 0px;\r\n    cursor:pointer;\r\n}\r\n\r\n.social-media-div label a i{\r\n    color:white;\r\n    width:25px;\r\n}\r\n\r\n.social-media-div label:hover{\r\n    background-color:#ffffff;\r\n}\r\n\r\n.social-media-div label:hover a i{\r\n    color:#3d476b;\r\n}\r\n\r\n.icon-div{\r\n    padding: 10px 0px;\r\n    border-top: 1px solid grey;\r\n    cursor: pointer;\r\n}\r\n\r\n.icon-div i {\r\n    \r\n    color:#ffffff;\r\n}\r\n\r\n.active{\r\n   background-color:#ffffff !important;\r\n}\r\n\r\n.active i {\r\n    color:#3d476b;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9COztBQUVwQjtJQUNJLFlBQVk7Q0FDZjs7QUFDRDtJQUNJLGFBQWE7SUFDYix5QkFBeUI7Q0FDNUI7O0FBQ0Q7SUFDSSw2QkFBNkI7Q0FDaEM7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osV0FBVztDQUNkOztBQUNEO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFJRDtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0NBQ25COztBQUNEOztJQUVJLGNBQWM7Q0FDakI7O0FBQ0Q7R0FDRyxvQ0FBb0M7Q0FDdEM7O0FBQ0Q7SUFDSSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBtYWluIGxlZnQgaGVhZCAqL1xyXG5cclxuLnRleHR7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uY29sdW1uX21haW5kaXZ7XHJcbiAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgICBib3JkZXI6NXB4IHNvbGlkICNmZmZmZmY7XHJcbn1cclxuLnNvY2lhbC1tZWRpYS1kaXZ7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhLWRpdiBsYWJlbHtcclxuICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYS1kaXYgbGFiZWwgYSBpe1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB3aWR0aDoyNXB4O1xyXG59XHJcbi5zb2NpYWwtbWVkaWEtZGl2IGxhYmVsOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhLWRpdiBsYWJlbDpob3ZlciBhIGl7XHJcbiAgICBjb2xvcjojM2Q0NzZiO1xyXG59XHJcblxyXG5cclxuXHJcbi5pY29uLWRpdntcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmljb24tZGl2IGkge1xyXG4gICAgXHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5hY3RpdmUgaSB7XHJcbiAgICBjb2xvcjojM2Q0NzZiO1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top:70px;padding-bottom:70px;\">\r\n  <div class=\"container text-center\" style=\"background-color: #ffffff\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 column_maindiv\" style=\"background-color: #3d476b;\" >\r\n        <div style=\"text-align: center;margin:20px 0px;\">\r\n          <div>\r\n            <img class=\"text\" src=\"../assets/images/dp.jpg\" alt=\"profile pic\" style=\"width:210px;\" />\r\n          </div>\r\n          <div style=\"margin:10px 0px;\">\r\n            <h5 class=\"text\">Vuta Sai Kumar Reddy</h5>\r\n          </div>\r\n          <div>\r\n            <p class=\"text\">Life will always try to make things difficult for you, but every time you overcome obstacles, you come out stronger</p>\r\n          </div>\r\n          <div class=\"social-media-div\">\r\n            \r\n            <label for=\"Facebook\">\r\n              <a href=\"https://www.facebook.com/vskrz/\" target=\"_blank\">\r\n                <i class=\"fab fa-facebook-f\"></i>\r\n              </a>\r\n            </label>\r\n            <label for=\"Twitter\">\r\n              <a href=\"https://twitter.com/the_vskr\" target=\"_blank\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a>\r\n            </label>\r\n            <label for=\"LinkedIN\">\r\n              <a href=\"https://www.linkedin.com/in/vutasaikumarreddy/\" target=\"_blank\">\r\n                <i class=\"fab fa-linkedin-in\"></i>\r\n              </a>\r\n            </label>\r\n            <label for=\"LinkedIN\">\r\n              <a href=\"https://thevskr.wordpress.com/\" target=\"_blank\">\r\n                <i class=\"fab fa-wordpress\"></i>\r\n              </a>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9 column_maindiv\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-1\" style=\"background-color: #3d476b;padding: 0px;\">\r\n            <div style=\"height:200px;\"></div>\r\n            <div [routerLink]=\"['/home']\"  [ngClass]=\"{'active':locationHash=='/home'?true:false}\" class=\"icon-div\" for=\"Home\">\r\n              <i class=\"fas fa-home\"></i>\r\n            </div>\r\n            <div [routerLink]=\"['/profile']\"  [ngClass]=\"{'active':locationHash=='/profile'?true:false}\" class=\"icon-div\" for=\"Profile\">\r\n              <i class=\"fas fa-user-tie\"></i>\r\n            </div>\r\n            <div [routerLink]=\"['/experience']\" [ngClass]=\"{'active':locationHash=='/experience'?true:false}\" class=\"icon-div\" for=\"Experience\">\r\n              <i class=\"fas fa-briefcase \"></i>\r\n              <!-- <i class=\"fas fa-graduation-cap\" style=\"margin-left:5px;\"></i> -->\r\n            </div>\r\n            <div [routerLink]=\"['/skills']\"  [ngClass]=\"{'active':locationHash=='/skills'?true:false}\" class=\"icon-div\" for=\"Skills\">\r\n              <i class=\"fas fa-cogs\"></i>\r\n            </div>\r\n            <div [routerLink]=\"['/achievements']\"  [ngClass]=\"{'active':locationHash=='/achievements'?true:false}\" class=\"icon-div\" for=\"Achievements\" >\r\n              <i class=\"fas fa-award\"></i>\r\n            </div>\r\n            <div  [routerLink]=\"['/hobbies']\" [ngClass]=\"{'active':locationHash=='/hobbies'?true:false}\" class=\"icon-div\" for=\"Hobbies\">\r\n              <i class=\"fas fa-puzzle-piece\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-11\"  style=\"padding:0px\">\r\n            <div style=\"background-color:#ffffff;border:solid #3d476b;border-width:5px 5px 5px 0px;height:490px;\">\r\n              <router-outlet></router-outlet>\r\n            </div> \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  \r\n    "

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(routerInstance) {
        var _this = this;
        this.routerInstance = routerInstance;
        this.title = 'profileVCard';
        this.routerInstance.events.subscribe(function (evt) {
            if (evt.url) {
                _this.locationHash = evt.url;
            }
            if (evt.url == "" || evt.url == "/") {
                _this.locationHash = "/home";
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./achievements/achievements.component */ "./src/app/achievements/achievements.component.ts");
/* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hobbies/hobbies.component */ "./src/app/hobbies/hobbies.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_8__["AchievementsComponent"],
                _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_9__["HobbiesComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  education works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
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

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  experience works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
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

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/hobbies/hobbies.component.css":
/*!***********************************************!*\
  !*** ./src/app/hobbies/hobbies.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvYmJpZXMvaG9iYmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hobbies/hobbies.component.html":
/*!************************************************!*\
  !*** ./src/app/hobbies/hobbies.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  hobbies works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/hobbies/hobbies.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hobbies/hobbies.component.ts ***!
  \**********************************************/
/*! exports provided: HobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function() { return HobbiesComponent; });
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

var HobbiesComponent = /** @class */ (function () {
    function HobbiesComponent() {
    }
    HobbiesComponent.prototype.ngOnInit = function () {
    };
    HobbiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hobbies',
            template: __webpack_require__(/*! ./hobbies.component.html */ "./src/app/hobbies/hobbies.component.html"),
            styles: [__webpack_require__(/*! ./hobbies.component.css */ "./src/app/hobbies/hobbies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HobbiesComponent);
    return HobbiesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text{\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:200px 50px 20px 50px;\">\r\n  <div>\r\n    <h3>Hello I'am</h3>\r\n  </div>\r\n  <div>\r\n    <h1>Vuta Sai Kumar Reddy</h1>\r\n  </div>\r\n  <div>\r\n    <h3>Software Engineer</h3>\r\n  </div>\r\n  <div>\r\n      <i class=\"fas fa-map-marker-alt\" style=\"margin-right:5px;\"></i>\r\n      <span>Hyderabad, Telangana State, India</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-name{\r\n    text-align:left;\r\n    padding:10px 5px;\r\n    border-bottom: 1px solid #3d476b;\r\n}\r\n\r\n.about div{\r\n    padding-left:0px !important;\r\n}\r\n\r\n.about div{\r\n    \r\n    list-style-type:none;\r\n    text-align:left;\r\n    \r\n}\r\n\r\n.about div i{\r\n    color:#3d476b;\r\n    width:25px;\r\n}\r\n\r\n.about div label{\r\n    text-align:left;\r\n    width:100px;\r\n    color:#3d476b;\r\n    margin:0px 5px;\r\n    font-size:14px;\r\n}\r\n\r\n.about div span{\r\n    color:black;\r\n    font-size:14px;\r\n}   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLDRCQUE0QjtDQUMvQjs7QUFDRDs7SUFFSSxxQkFBcUI7SUFDckIsZ0JBQWdCOztDQUVuQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtDQUNsQjs7QUFDRDtJQUNJLFlBQVk7SUFDWixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1uYW1le1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgcGFkZGluZzoxMHB4IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2Q0NzZiO1xyXG59XHJcblxyXG4uYWJvdXQgZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hYm91dCBkaXZ7XHJcbiAgICBcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgXHJcbn1cclxuXHJcbi5hYm91dCBkaXYgaXtcclxuICAgIGNvbG9yOiMzZDQ3NmI7XHJcbiAgICB3aWR0aDoyNXB4O1xyXG59XHJcblxyXG4uYWJvdXQgZGl2IGxhYmVse1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBjb2xvcjojM2Q0NzZiO1xyXG4gICAgbWFyZ2luOjBweCA1cHg7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufVxyXG4uYWJvdXQgZGl2IHNwYW57XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59ICAgIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3 class=\"profile-name\">Profile</h3>\r\n</div>\r\n<div class=\"container\">\r\n<!--     <div>\r\n        <h5 class=\"profile-name\">Quick Info</h5>\r\n      </div> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"about\">\r\n        <div>\r\n          <i class=\"fas fa-user-tie\"></i>\r\n          <label>Name</label>\r\n          <span>Vuta Sai Kumar Reddy</span>\r\n        </div>\r\n  \r\n        <div>\r\n          <i class=\"far fa-calendar-alt\"></i>\r\n          <label>Date of birth</label>\r\n          <span>August 28, 1995</span>\r\n        </div>\r\n  \r\n        <div>\r\n          <i class=\"fas fa-map-marker-alt\"></i>\r\n          <label>Address</label>\r\n          <span>Hyderabad, Telangana State, India</span>\r\n        </div>\r\n        <div>\r\n          <i class=\"far fa-envelope\"></i>\r\n          <label>Email</label>\r\n          <span>vutasaikumarreddy@gmail.com</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"about\">\r\n          <div>\r\n              <i class=\"fas fa-language\"></i>\r\n              <label>Languages</label>\r\n              <span>English, Hindi & Telugu</span>\r\n            </div>\r\n            <div>\r\n              <i class=\"fas fa-flag\"></i>\r\n              <label>Nationality</label>\r\n              <span>Indian</span>\r\n            </div>\r\n            <div>\r\n              <i class=\"fas fa-globe-asia\"></i>\r\n              <label>Website</label>\r\n              <span>\r\n                <a href=\"https://thevskr.wordpress.com/\" target=\"_blank\">www.thevskr.wordpress.com</a>\r\n              </span>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  skills works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
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

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! D:\Codebase\Angular\personalvcard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map