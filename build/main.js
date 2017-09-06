webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__airport_airport__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, httpGetReq) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.httpGetReq = httpGetReq;
        this.airport = __WEBPACK_IMPORTED_MODULE_2__airport_airport__["a" /* Airport */];
        this.pet = "kittens";
        // searchQuery: string = '';
        // category: string[];
        this.slides = [];
        this.searchCate = [];
        this.httpGetReq.get('data/data.json').subscribe(function (res) {
            _this.Category = res.json();
            _this.initializecategory();
        });
        this.slides.push('../assets/image/newfour.jpg', '../assets/image/surfingtwo.jpg', '../assets/image/surfingtwo.jpg', '../assets/image/surfingtwo.jpg');
        //  this.slides.push('../assets/image/surfingtwo.jpg');
        //   this.slides.push('../assets/image/surfingtwo.jpg');
        //    this.slides.push('../assets/image/surfingtwo.jpg');
    }
    HomePage.prototype.initializecategory = function () {
        this.searchCate = this.Category;
        // console.log(this.searchCate,'this.searchCate');
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializecategory();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.searchCate = this.searchCate.filter(function (item) {
                return (item.category.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/cloudlogic/PondyCity/src/pages/home/home.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openPage(homePage)">\n        Home\n      </button>\n      <button ion-item (click)="openPage(friendsPage)">\n        Friends\n      </button>\n      <button ion-item (click)="openPage(eventsPage)">\n        Events\n      </button>\n      <button ion-item (click)="closeMenu()">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n<ion-header>\n  <ion-navbar color="primary">\n    \n      <ion-row>\n        <ion-col col-1>\n  <ion-buttons class="paddingtop"  >\n   <button ion-button icon-only menuToggle >\n        <ion-icon class="ionsize" name="md-menu"></ion-icon>\n   </button>\n  </ion-buttons>\n        </ion-col>\n\n  <ion-col col-11>\n    <ion-title>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </ion-title>\n        </ion-col>\n    </ion-row>\n    \n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div>\n    <ion-slides runcallback class="backgroundone" ionSlideAutoplay>\n      <ion-slide *ngFor="let slide of slides">\n        <img [src]="slide">\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div>\n\n\n    <ion-segment [(ngModel)]="pet">\n\n      <ion-segment-button value="kittens">\n        PONDY STUFF\n      </ion-segment-button>\n      <ion-segment-button value="puppies">\n        SITE SEEN\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n  <div [ngSwitch]="pet">\n\n    <div *ngSwitchCase="\'puppies\'">\n      <!-- <h2>Ruby</h2> -->\n      <ion-row class="card-background-page" align-items>\n        <ion-col col-6 col-sm-4 col-md-3 \n        *ngFor="let cat of searchCate;let i = index" (click)="initializeItems">\n          <ion-card *ngIf="i > 15">\n            <img src="{{cat.img}}" class="contentimg" [navPush]="airport" [navParams]="cat" />\n\n            <div class="card-subtitle">\n              <b> {{cat.category}}</b>\n            </div>\n\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngSwitchCase="\'kittens\'">\n      <!-- <h2>Luna</h2> -->\n      <ion-row class="card-background-page" align-items>\n        <ion-col col-6 col-sm-4 col-md-3 \n        *ngFor="let cat of searchCate; let i =index" (click)="initializeItems">\n          <ion-card *ngIf="i < 15">\n            <img src="{{cat.img}}" class="contentimg" [navPush]="airport" [navParams]="cat" />\n\n            <div class="card-subtitle">\n              <b> {{cat.category}}</b>\n            </div>\n\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n  </div>\n \n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4 text-center>\n            <ion-buttons icon-only>\n            <ion-icon name="home">\n            </ion-icon>\n            </ion-buttons>\n          </ion-col>\n          \n          <ion-col col-4 text-center>\n            <ion-buttons icon-only>\n            <ion-icon name="md-text">\n            </ion-icon>\n            </ion-buttons>\n          </ion-col>\n          <ion-col col-4 text-center>\n            <ion-buttons icon-only>\n            <ion-icon name="ios-call">\n            </ion-icon>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/cloudlogic/PondyCity/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Airport; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__airone_airone__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Airport = (function () {
    function Airport(navCtrl, navParams, httpGetReq) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpGetReq = httpGetReq;
        this.airone = __WEBPACK_IMPORTED_MODULE_2__airone_airone__["a" /* Airone */];
        console.log(this.navParams.data.category, 'this.navParams');
        this.info = this.navParams.data.info;
        this.tiltle = this.navParams.data.category;
        this.initializeinfo();
        // this.httpGetReq.get('data/data.json').subscribe((res) => {
        //   let data =res.json();
        //   // this.info
        //   data.filter((element)=>{
        //     if(element.category == 'Top10Attraction'){
        //       this.info=element.info;
        //         console.log(this.info,'this.info');
        //     }
        //   })
        // });
    }
    Airport.prototype.initializeinfo = function () {
        this.searchinfo = this.info;
        // console.log(this.searchCate,'this.searchCate');
    };
    Airport.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Airport');
    };
    Airport.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeinfo();
        // console.log(this.searchCate,'initializecategory')
        // set val to the value of the searchbar
        var val = ev.target.value;
        // console.log(val,'asdas');
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.searchinfo = this.searchinfo.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return Airport;
}());
Airport = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-airport',template:/*ion-inline-start:"/home/cloudlogic/PondyCity/src/pages/airport/airport.html"*/'<!--\n  Generated template for the Airport page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary" >\n    <ion-title>\n      {{tiltle}}\n   </ion-title>\n  </ion-navbar>\n\n</ion-header>\n<!-- <ion-header>\n  <ion-toolbar color="primary">\n    \n\n    <ion-title>{{tiltle}}</ion-title>\n\n    \n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content >\n  <ion-searchbar  (ionInput)="getItems($event)"></ion-searchbar>\n \n  <div *ngFor="let find of searchinfo" (click)="initializeItems">\n\n    <ion-list [navPush]="airone" [navParams]="find" >\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="{{find.img}}">\n        </ion-thumbnail>\n        <h2  text-wrap>{{find.name}}</h2>\n        <p  text-wrap>{{find.addr}}</p>\n        <button  ion-button clear item-end >View\n     </button>\n      </ion-item>\n    </ion-list>\n  </div>\n  <!-- <ion-list>\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="img/thumbnail-totoro.png">\n    </ion-thumbnail>\n    <h2>My Neighbor Totoro</h2>\n    <p>Hayao Miyazaki • 1988</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n  \n</ion-list> -->\n  \n  \n</ion-content>'/*ion-inline-end:"/home/cloudlogic/PondyCity/src/pages/airport/airport.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], Airport);

//# sourceMappingURL=airport.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Airone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__iframe_iframe__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Airone = (function () {
    function Airone(navCtrl, navParams, httpGetReq, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpGetReq = httpGetReq;
        this.alertCtrl = alertCtrl;
        this.iframe = __WEBPACK_IMPORTED_MODULE_5__iframe_iframe__["a" /* Iframe */];
        console.log(this.navParams.data, 'this.navParams');
        this.find = this.navParams.data;
        this.tiltle = this.navParams.data.name;
    }
    Airone.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Airone');
    };
    Airone.prototype.gohome = function () {
        this.navCtrl.popToRoot();
    };
    Airone.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'contact',
            message: "Enter a name for this new album you're so keen on adding",
            // inputs: [
            //   {
            //     name: 'title',
            //     placeholder: 'Title'
            //   },
            // ],
            buttons: [
                {
                    text: 'Call',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                }
                // {
                //   text: 'Save',
                //   handler: data => {
                //     console.log('Saved clicked');
                //   }
                // }
            ]
        });
        prompt.present();
    };
    return Airone;
}());
Airone = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-airone',template:/*ion-inline-start:"/home/cloudlogic/PondyCity/src/pages/airone/airone.html"*/'<!--\n  Generated template for the Airone page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  \n\n  <ion-navbar color="primary" >\n    <ion-title>\n      {{tiltle}}\n      \n\n\n    </ion-title>\n  </ion-navbar>\n  \n\n</ion-header>\n\n\n<ion-content>\n  <div>\n<ion-slides>\n<ion-slide>\n<img src="{{find.images}}" class="contentimage">\n</ion-slide>\n<ion-slide>\n<img src="{{find.images}}" class="contentimage">\n</ion-slide>\n<ion-slide>\n<img src="{{find.images}}" class="contentimage">\n</ion-slide>\n</ion-slides>\n</div>\n  \n<ion-list>\n  <ion-item text-wrap>\n    <ion-icon color="facebook" name="ios-cafe-outline" item-start large></ion-icon>\n    <h2 class="fontcolorlist">{{find.name}}</h2>\n    <p>{{find.addr}} {{find.city}} {{find.state}} {{find.pincode}} \n      {{find.country}}</p>\n  </ion-item>\n  <ion-item>\n    <ion-icon color="facebook" name="ios-pin-outline" item-start large></ion-icon>\n    <h2 class="fontcolorlist" [navPush]="iframe" >location</h2>\n    \n   \n  </ion-item>\n  <ion-item>\n    <ion-icon color="facebook" name="ios-call-outline" item-start large></ion-icon>\n    <h2 class="fontcolorlist" (click)="showPrompt()">0413 225 5506</h2>\n   \n  </ion-item>\n  \n  <!-- <ion-item>\n    <ion-icon name="md-globe" item-start large></ion-icon>\n    <h2 class="fontcolorlist">www.aai.aero/allAirports/pondicherry_generalinfo.jsp</h2>\n    \n  </ion-item> -->\n</ion-list>\n \n<!-- <ion-list>\n  <ion-list-header>\n    Action\n  </ion-list-header>\n  <ion-item>Terminator II</ion-item>\n  <ion-item>The Empire Strikes Back</ion-item>\n  <ion-item>Blade Runner</ion-item>\n</ion-list>\n   -->\n\n\n</ion-content>'/*ion-inline-end:"/home/cloudlogic/PondyCity/src/pages/airone/airone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Airone);

//# sourceMappingURL=airone.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iframe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Iframe = (function () {
    function Iframe(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Iframe.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Iframe');
    };
    return Iframe;
}());
Iframe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-iframe',template:/*ion-inline-start:"/home/cloudlogic/PondyCity/src/pages/iframe/iframe.html"*/' <ion-header>\n  \n\n  <ion-navbar color="primary" >\n    <ion-title>\n     \n      location\n\n\n    </ion-title>\n  </ion-navbar> \n </ion-header>\n\n<ion-content>\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.815825093574!2d79.77805617199363!3d11.936304623761629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPuducherry!5e0!3m2!1sen!2sin!4v1501912876324" width="600" \n  height="700px" frameborder="0" style="border:0" allowfullscreen></iframe>\n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/PondyCity/src/pages/iframe/iframe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], Iframe);

//# sourceMappingURL=iframe.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_airport_airport__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_airone_airone__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_iframe_iframe__ = __webpack_require__(198);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_airport_airport__["a" /* Airport */],
            __WEBPACK_IMPORTED_MODULE_9__pages_airone_airone__["a" /* Airone */],
            __WEBPACK_IMPORTED_MODULE_10__pages_iframe_iframe__["a" /* Iframe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_airport_airport__["a" /* Airport */],
            __WEBPACK_IMPORTED_MODULE_9__pages_airone_airone__["a" /* Airone */],
            __WEBPACK_IMPORTED_MODULE_10__pages_iframe_iframe__["a" /* Iframe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/cloudlogic/PondyCity/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/cloudlogic/PondyCity/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map