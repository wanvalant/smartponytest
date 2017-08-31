webpackJsonp([0],{

/***/ 106:
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
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__space_space__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_form__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newone_newone__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restaurant_restaurant__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__movies_movies__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__travel_travel__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doctors_doctors__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__health_health__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__supermarket_supermarket__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__electrical_electrical__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__industrialsupplies_industrialsupplies__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__machine_machine__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__automobile_automobile__ = __webpack_require__(205);
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
    // toggoleShowHide: any;
    function HomePage(navCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        // ["hidden"]="!myVar";
        this.myVars = false;
        this.findnewone = false;
        this.findnewtwo = false;
        this.space = __WEBPACK_IMPORTED_MODULE_2__space_space__["a" /* Space */];
        this.form = __WEBPACK_IMPORTED_MODULE_3__form_form__["a" /* Form */];
        this.newone = __WEBPACK_IMPORTED_MODULE_4__newone_newone__["a" /* Newone */];
        this.restaurant = __WEBPACK_IMPORTED_MODULE_5__restaurant_restaurant__["a" /* Restaurant */];
        this.movies = __WEBPACK_IMPORTED_MODULE_6__movies_movies__["a" /* Movies */];
        this.travel = __WEBPACK_IMPORTED_MODULE_7__travel_travel__["a" /* Travel */];
        this.doctors = __WEBPACK_IMPORTED_MODULE_8__doctors_doctors__["a" /* Doctors */];
        this.health = __WEBPACK_IMPORTED_MODULE_9__health_health__["a" /* Health */];
        this.supermarket = __WEBPACK_IMPORTED_MODULE_10__supermarket_supermarket__["a" /* Supermarket */];
        this.electrical = __WEBPACK_IMPORTED_MODULE_11__electrical_electrical__["a" /* Electrical */];
        this.industrialsupplies = __WEBPACK_IMPORTED_MODULE_12__industrialsupplies_industrialsupplies__["a" /* Industrialsupplies */];
        this.machine = __WEBPACK_IMPORTED_MODULE_13__machine_machine__["a" /* Machine */];
        this.automobile = __WEBPACK_IMPORTED_MODULE_14__automobile_automobile__["a" /* Automobile */];
        this.pet = "first";
        this.petone = "firstone";
    }
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();
    };
    HomePage.prototype.showRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        // alert.setTitle('Lightsaber color');
        // toggoleShowHide:string ="visible";
        alert.addInput({
            type: 'radio',
            label: 'list view',
            value: 'list',
            handler: function (data) {
                // this.test(data);
                // this.findOne=false;
                _this.pet = "findnewone";
                _this.first = false;
                // this.pet="second";
                // this.list=false;
                console.log('adfadadfas');
                alert.dismiss();
                // *ngSwitchCase:('newshow');
            }
        });
        alert.addInput({
            type: 'radio',
            label: 'grid view',
            value: 'grid',
            handler: function (data) {
                // this.test(data);
                _this.pet = "first";
                alert.dismiss();
            }
        });
        // alert.addButton('Cancel');
        // alert.addButton({
        //   text: 'OK',
        //   handler: data => {
        //     this.testRadioOpen = false;
        //     this.testRadioResult = data;
        //   }
        // });
        alert.present();
    };
    HomePage.prototype.test = function (data) {
        // console.log(data,'asdsad');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/home/home.html"*/'<ion-header>\n    <ion-toolbar >\n      <!-- <ion-buttons start>\n        <button ion-button icon-only>\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons> -->\n  \n      <ion-title>Home</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <div >\n    <ion-slides pager>\n      <ion-slide [navPush]="form" (click)="presentLoading()">\n        <img src="assets/images/bannerfive.jpg" class="imgsize">\n      </ion-slide>\n      <ion-slide [navPush]="form" (click)="presentLoading()">\n        <img src="assets/images/bannersix.jpg" class="imgsize">\n      </ion-slide>\n      <ion-slide [navPush]="form" (click)="presentLoading()">\n        <img src="assets/images/banner.jpg" class="imgsize">\n      </ion-slide>\n      <ion-slide [navPush]="form" (click)="presentLoading()">\n        <img src="assets/images/banner8.jpg" class="imgsize">\n      </ion-slide>\n      <ion-slide [navPush]="form" (click)="presentLoading()">\n          <img src="assets/images/bannerthree.jpg" class="imgsize">\n        </ion-slide>\n        <ion-slide [navPush]="form" (click)="presentLoading()">\n            <img src="assets/images/bannerseven.jpg" class="imgsize">\n          </ion-slide>\n    </ion-slides>\n  </div>\n  \n  <div  >\n    <ion-segment color="default" [(ngModel)]="pet">\n      <ion-segment-button value="first">\n        first\n      </ion-segment-button>\n      <ion-segment-button value="second">\n        second\n      </ion-segment-button>\n      <ion-segment-button value="third" [navPush]="space" (click)="presentLoading()">\n        third\n      </ion-segment-button>\n      <ion-segment-button value="icon" (click)="showRadio()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n <div [ngSwitch]="pet">\n   \n    <ion-list *ngSwitchCase="\'first\'">\n        <div>\n      <ion-item>\n        <ion-row >\n          <ion-col col-6  [navPush]="newone" >\n            <img src="assets/images/onlineshop.jpg" class="contentimg">\n            \n          </ion-col>\n          <!-- <ion-row [navPush]="newone" class="card-background-page">\n       <ion-col col-6 col-sm-4 col-md-3>\n       <ion-card>\n       <img  src="assets/images/beatch.jpg">\n     <div class="card-title">São Paulo</div>\n     <div class="card-subtitle">41 Listings</div>\n   </ion-card>\n   </ion-col> -->\n          <ion-col col-6 [navPush]="restaurant" >\n            <img src="assets/images/restau.jpeg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 [navPush]="movies" >\n            <img src="assets/images/fimlsimages.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 [navPush]="travel" >\n            <img src="assets/images/travels.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6  >\n            <img src="assets/images/49137216.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 >\n            <img src="assets/images/bill paid.png" class="contentimg">\n          </ion-col>\n          <ion-col col-6  >\n              <img src="assets/images/taxi.jpg" class="contentimg">\n            </ion-col>\n            <ion-col col-6 [navPush]="doctors" >\n                <img src="assets/images/doctors.jpg" class="contentimg">\n              </ion-col>\n              <ion-col col-6 [navPush]="supermarket">\n                  <img src="assets/images/fruits.jpg" class="contentimg">\n                </ion-col>\n                <ion-col col-6 [navPush]="health" >\n                    <img src="assets/images/healthand fightness.jpg" class="contentimg">\n                  </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n    <div *ngSwitchCase="findnewone">\n      <ion-item>\n        <ion-row>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-restaurant-outline"></ion-icon>\n            <p>Restaurant</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cart-outline"></ion-icon>\n            <p>shop-online</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-car-outline"></ion-icon>\n            <p>Rental</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-bus-outline"></ion-icon>\n            <p>Bus-stop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-build-outline"></ion-icon>\n            <p>Mechanic</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cafe-outline"></ion-icon>\n            <p>Cofee-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-game-controller-b-outline"></ion-icon>\n            <p>GamePoint</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-jet-outline"></ion-icon>\n            <p>Travel</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-phone-portrait-outline"></ion-icon>\n            <p>MobileShop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-reverse-camera-outline"></ion-icon>\n            <p>Photoshop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-train-outline"></ion-icon>\n            <p>Train</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-school-outline"></ion-icon>\n            <p>University</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-shirt-outline"></ion-icon>\n            <p>Dress-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-tennisball-outline"></ion-icon>\n            <p>Sports</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-rose-outline"></ion-icon>\n            <p>Flowershop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-film-outline"></ion-icon>\n            <p>Film</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-wine-outline"></ion-icon>\n            <p>Bar</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-timer-outline"></ion-icon>\n            <p>clock</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'second\'">\n\n      <div>\n      <ion-item>\n\n        <ion-row>\n          <ion-col col-6 [navPush]="electrical" >\n            <img src="assets/images/electircal.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 [navPush]="industrialsupplies" >\n            <img src="assets/images/industrialsupplies.jpeg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 [navPush]="machine" >\n            <img src="assets/images/machine.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 [navPush]="automobile" >\n            <img src="assets/images/automobile.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6  >\n            <img src="assets/images/food and beverages.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6  >\n            <img src="assets/images/constructions.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6  >\n              <img src="assets/images/chemical.jpg" class="contentimg">\n            </ion-col>\n            <ion-col col-6  >\n                <img src="assets/images/laboratory.jpg" class="contentimg">\n              </ion-col>\n              <ion-col col-6 >\n                  <img src="assets/images/package.jpg" class="contentimg">\n                </ion-col>\n                <ion-col col-6  >\n                    <img src="assets/images/mechanicalcomponents.jpg" class="contentimg">\n                  </ion-col>\n        </ion-row>\n\n      </ion-item>\n      </div>\n      <div *ngSwitchCase="findnewtwo">\n\n          <ion-row>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-restaurant-outline"></ion-icon>\n                <p>Restaurant</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-cart-outline"></ion-icon>\n                <p>shop-online</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-car-outline"></ion-icon>\n                <p>Rental</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-bus-outline"></ion-icon>\n                <p>Bus-stop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-build-outline"></ion-icon>\n                <p>Mechanic</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-cafe-outline"></ion-icon>\n                <p>Cofee-shop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-game-controller-b-outline"></ion-icon>\n                <p>GamePoint</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-jet-outline"></ion-icon>\n                <p>Travel</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-phone-portrait-outline"></ion-icon>\n                <p>MobileShop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-reverse-camera-outline"></ion-icon>\n                <p>Photoshop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-train-outline"></ion-icon>\n                <p>Train</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-school-outline"></ion-icon>\n                <p>University</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-shirt-outline"></ion-icon>\n                <p>Dress-shop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-tennisball-outline"></ion-icon>\n                <p>Sports</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-rose-outline"></ion-icon>\n                <p>Flowershop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-film-outline"></ion-icon>\n                <p>Film</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-wine-outline"></ion-icon>\n                <p>Bar</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-timer-outline"></ion-icon>\n                <p>clock</p>\n              </ion-col>\n            </ion-row>\n      </div>\n    </ion-list>\n\n    <!-- <ion-list *ngSwitchCase="\'grid\'">\n      <ion-item>\n        <ion-row>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/midrange hotels.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/beatch.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/aurovillehouse.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/daytrips.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/park.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/quatras.jpg" class="contentimg">\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    </ion-list>\n    <ion-list *ngSwitchCase="\'list\'">\n   <ion-item>\n        <ion-row>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-restaurant-outline"></ion-icon>\n              <p>Restaurant</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-cart-outline"></ion-icon>\n              <p>shop-online</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-car-outline"></ion-icon>\n              <p>Rental</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-bus-outline"></ion-icon>\n              <p>Bus-stop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-build-outline"></ion-icon>\n              <p>Mechanic</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-cafe-outline"></ion-icon>\n              <p>Cofee-shop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-game-controller-b-outline"></ion-icon>\n              <p>GamePoint</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-jet-outline"></ion-icon>\n              <p>Travel</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-phone-portrait-outline"></ion-icon>\n              <p>MobileShop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-reverse-camera-outline"></ion-icon>\n              <p>Photoshop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-train-outline"></ion-icon>\n              <p>Train</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-school-outline"></ion-icon>\n              <p>University</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-shirt-outline"></ion-icon>\n              <p>Dress-shop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-tennisball-outline"></ion-icon>\n              <p>Sports</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-rose-outline"></ion-icon>\n              <p>Flowershop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-film-outline"></ion-icon>\n              <p>Film</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-wine-outline"></ion-icon>\n              <p>Bar</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-timer-outline"></ion-icon>\n              <p>clock</p>\n            </ion-col>\n          </ion-row>\n   </ion-item>\n   \n    </ion-list> -->\n  </div>\n \n\n<!-- <div *ngIf="myVars" >\n  <div>\n    <ion-segment [(ngModel)]="petone">\n      <ion-segment-button value="firstone">\n        first\n      </ion-segment-button>\n      <ion-segment-button value="secondone">\n        second\n      </ion-segment-button>\n      <ion-segment-button value="third" [navPush]="space">\n        third\n      </ion-segment-button>\n      <ion-segment-button value="icon" (click)="showRadio()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="petone">\n\n    <ion-list *ngSwitchCase="\'firstone\'">\n      <ion-item>\n        <ion-row>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-restaurant-outline"></ion-icon>\n            <p>Restaurant</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cart-outline"></ion-icon>\n            <p>shop-online</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-car-outline"></ion-icon>\n            <p>Rental</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-bus-outline"></ion-icon>\n            <p>Bus-stop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-build-outline"></ion-icon>\n            <p>Mechanic</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cafe-outline"></ion-icon>\n            <p>Cofee-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-game-controller-b-outline"></ion-icon>\n            <p>GamePoint</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-jet-outline"></ion-icon>\n            <p>Travel</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-phone-portrait-outline"></ion-icon>\n            <p>MobileShop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-reverse-camera-outline"></ion-icon>\n            <p>Photoshop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-train-outline"></ion-icon>\n            <p>Train</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-school-outline"></ion-icon>\n            <p>University</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-shirt-outline"></ion-icon>\n            <p>Dress-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-tennisball-outline"></ion-icon>\n            <p>Sports</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-rose-outline"></ion-icon>\n            <p>Flowershop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-film-outline"></ion-icon>\n            <p>Film</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-wine-outline"></ion-icon>\n            <p>Bar</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-timer-outline"></ion-icon>\n            <p>clock</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'secondone\'">\n      <ion-item>\n\n        <ion-row>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-restaurant-outline"></ion-icon>\n            <p>Restaurant</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cart-outline"></ion-icon>\n            <p>shop-online</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-car-outline"></ion-icon>\n            <p>Rental</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-bus-outline"></ion-icon>\n            <p>Bus-stop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-build-outline"></ion-icon>\n            <p>Mechanic</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cafe-outline"></ion-icon>\n            <p>Cofee-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-game-controller-b-outline"></ion-icon>\n            <p>GamePoint</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-jet-outline"></ion-icon>\n            <p>Travel</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-phone-portrait-outline"></ion-icon>\n            <p>MobileShop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-reverse-camera-outline"></ion-icon>\n            <p>Photoshop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-train-outline"></ion-icon>\n            <p>Train</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-school-outline"></ion-icon>\n            <p>University</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-shirt-outline"></ion-icon>\n            <p>Dress-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-tennisball-outline"></ion-icon>\n            <p>Sports</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-rose-outline"></ion-icon>\n            <p>Flowershop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-film-outline"></ion-icon>\n            <p>Film</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-wine-outline"></ion-icon>\n            <p>Bar</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-timer-outline"></ion-icon>\n            <p>clock</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    </ion-list>\n  </div>\n</div> -->\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3 text-center>\n            <button ion-button icon-only menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n          </ion-col>\n          <ion-col col-3 text-center>\n            <ion-buttons icon-only>\n              <ion-icon name="ios-call-outline">\n              </ion-icon>\n            </ion-buttons>\n          </ion-col>\n\n          <ion-col col-3 text-center>\n            <ion-buttons icon-only>\n              <ion-icon name="ios-text-outline">\n              </ion-icon>\n            </ion-buttons>\n          </ion-col>\n          <ion-col col-3 text-center>\n            <ion-buttons icon-only>\n              <ion-icon name="ios-git-network-outline">\n              </ion-icon>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], HomePage);

// import { LoadingController } from 'ionic-angular';
// export class MyPage {
//   constructor(public loadingCtrl: LoadingController) {
//   }
//   presentLoading() {
//     let loader = this.loadingCtrl.create({
//       content: "Please wait...",
//       duration: 3000
//     });
//     loader.present();
//   }
// }
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Space; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Space = (function () {
    function Space(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Space.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Space');
    };
    return Space;
}());
Space = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-space',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/space/space.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    \n    <ion-title>My space</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <ion-list>\n     \n      <ion-item-divider >\n        \n        <ion-icon name="ios-heart-outline" item-start></ion-icon>\n           favourites\n        <!-- <ion-icon name="rose" item-end></ion-icon> -->\n      </ion-item-divider>\n     \n    </ion-list>\n    <ion-list>\n        <ion-item-divider>\n          <ion-icon name="ios-person-add-outline" item-start></ion-icon>\n          My interest\n          <!-- <ion-icon name="rose" item-end></ion-icon> -->\n        </ion-item-divider>\n      </ion-list>\n      <ion-list>\n          <ion-item-divider>\n            <ion-icon name="ios-medkit-outline" item-start></ion-icon>\n              My health\n            <!-- <ion-icon name="rose" item-end></ion-icon> -->\n          </ion-item-divider>\n        </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/space/space.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Space);

//# sourceMappingURL=space.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__billing_billing__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Form = (function () {
    function Form(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.billing = __WEBPACK_IMPORTED_MODULE_2__billing_billing__["a" /* Billing */];
    }
    Form.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();
    };
    Form.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Form');
    };
    return Form;
}());
Form = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-form',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/form/form.html"*/'\n<ion-header>\n\n  <ion-navbar color="facebookC">\n    <ion-title>form</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div>\n    <ion-slides [navPush]="form" pager>\n      <ion-slide>\n        <img src="assets/images/mob1.jpg" class="imgsize">\n      </ion-slide>\n      <ion-slide>\n        <img src="assets/images/mob5.jpg" class="imgsize">\n      </ion-slide>\n      <ion-slide>\n        <img src="assets/images/mob6.jpg" class="imgsize">\n      </ion-slide>\n      <ion-slide>\n        <img src="assets/images/mob7.jpg" class="imgsize">\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div>\n    <ion-slides ionSlideNextStart>\n      <ion-slide>\n        <ion-row>\n\n          <ion-col col-4  [navPush]="billing" (click)="presentLoading()">\n            <ion-card >              \n                  <ion-card-content class="textcenter">\n                      <img src="assets/images/firstone.png" class="findone">\n                  <p class="textcenter">samsung J7 Max 32GB</p>\n                  <!-- <code>₹2300</code> -->\n               \n              </ion-card-content>\n            </ion-card>\n           \n\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n            <ion-card>\n              <ion-card-content class="textcenter">\n               \n                  <img src="assets/images/secondone.jpg" class="findone">\n                  <p>samsung J7 Max 32GB</p>\n               \n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n            <ion-card>\n             <ion-card-content class="textcenter">\n               \n                  <img src="assets/images/thirdone.png" class="findone">\n                  <p>samsung J7 Max 32GB</p>\n               \n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n            <ion-card>\n             <ion-card-content class="textcenter">\n               \n                  <img src="assets/images/firstone.png" class="findone">\n                  <p>samsung J7 Max 32GB</p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n            <ion-card>\n             <ion-card-content class="textcenter">\n               \n                  <img src="assets/images/secondone.jpg" class="findone">\n                  <p>samsung J7 Max 32GB</p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n            <ion-card>\n             <ion-card-content class="textcenter">\n               \n                  <img src="assets/images/thirdone.png" class="findone">\n                  <p>samsung J7 Max 32GB</p>\n              </ion-card-content>class="textcenter"\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n            <ion-card>\n             <ion-card-content class="textcenter">\n               \n                  <img src="assets/images/firstone.png" class="findone">\n                  <p>samsung J7 Max 32GB</p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing " (click)="presentLoading()">\n            <ion-card>\n             <ion-card-content class="textcenter">\n                \n                  <img src="assets/images/secondone.jpg" class="findone">\n                  <p>samsung J7 Max 32GB</p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n            <ion-card>\n             <ion-card-content class="textcenter">\n               \n                  <img src="assets/images/thirdone.png" class="findone">\n                  <p>samsung J7 Max 32GB</p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div>\n    <ion-slides>\n      <ion-slide>\n        <ion-row>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                  <ion-card-content class="textcenter">\n            \n              <img src="assets/images/headone.png" class="findone">\n              <p>Headset</p>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n           \n              <img src="assets/images/headtwo.png" class="findone">\n              <p>Headset</p>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n           \n              <img src="assets/images/headthree.png" class="findone">\n              <p>Headset</p>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n           \n              <img src="assets/images/headone.png" class="findone">\n              <p>Headset</p>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n           \n              <img src="assets/images/headtwo.png" class="findone">\n              <p>Headset</p>                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n           \n              <img src="assets/images/headthree.png" class="findone">\n              <p>Headset</p>                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n          \n              <img src="assets/images/headone.png" class="findone">\n              <p>Headset</p>                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n            \n              <img src="assets/images/headtwo.png" class="findone">\n              <p>Headset</p>                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n            \n              <img src="assets/images/headthree.png" class="findone">\n              <p>Headset</p>                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n\n\n    </ion-slides>\n  </div>\n  <div>\n    <ion-slides>\n      <ion-slide>\n        <ion-row>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n\n            \n              <img src="assets/images/mobile11.jpg" class="findone">\n              <p>Micro max E481</p>\n                  </ion-card-content>\n              </ion-card>\n            </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n          \n              <img src="assets/images/mobile121.jpg" class="findone">\n              <p>Micro max E482</p>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n          \n              <img src="assets/images/mobile13.jpg" class="findone">\n              <p>Micro max E488</p>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n           \n              <img src="assets/images/mobile11.jpg" class="findone">\n              <p>Micro max E489</p>                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n           \n              <img src="assets/images/mobile121.jpg" class="findone">\n              <p>Micro max E438</p>                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n            \n              <img src="assets/images/mobile13.jpg" class="findone">\n              <p>Micro max E488</p>                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n            \n              <img src="assets/images/mobile11.jpg" class="findone">\n              <p>Micro max E485</p>                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n          \n              <img src="assets/images/mobile121.jpg" class="findone">\n              <p>Micro max E484</p>                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <ion-card>\n                 <ion-card-content class="textcenter">\n           \n              <img src="assets/images/mobile13.jpg" class="findone">\n              <p>Micro max E483</p>                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n\n\n    </ion-slides>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/form/form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], Form);

// import { LoadingController } from 'ionic-angular';
// export class MyPage {
//   constructor(public loadingCtrl: LoadingController) {
//   }
//   presentLoading() {
//     let loader = this.loadingCtrl.create({
//       content: "Please wait...",
//       duration: 3000
//     });
//     loader.present();
//   }
// }
//# sourceMappingURL=form.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Billing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Billing = (function () {
    function Billing(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchQuery = '';
        this.initializeItems();
    }
    Billing.prototype.initializeItems = function () {
        this.value = [
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven'
        ];
    };
    Billing.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.value = this.value.filter(function (items) {
                return (items.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    Billing.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Billing');
    };
    return Billing;
}());
Billing = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-billing',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/billing/billing.html"*/'<!--\n  Generated template for the Billing page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebookC">\n    <ion-title>billing</ion-title>\n    <div>\n    <ion-searchbar (ionInput)="getItems($event)">\n    </ion-searchbar>\n    <!-- <ion-searchbar light [(ngModel)]="searchQuery" [debounce]="500" placeholder="Search Question" (input)="search($event)" \n     (clear)="cancel($event)"></ion-searchbar> -->\n    <!-- <ion-list>\n        <ion-item >\n          {{ item }}\n        </ion-item>\n      </ion-list> -->\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-list  (click)="initializeItems">\n        <ion-item value="one">\n          <ion-thumbnail item-start>\n            <img src="assets/images/firstone.png">\n          </ion-thumbnail>\n          <h2>one</h2>\n          <p ><ion-icon name="md-star"></ion-icon>\n            <ion-icon name="md-star"></ion-icon>\n            <ion-icon name="md-star"></ion-icon>\n            <ion-icon name="md-star"></ion-icon>\n            <ion-icon name="md-star"></ion-icon></p>\n          <p>₹2200</p>\n          <!-- <button ion-button clear item-end>View</button> -->\n        </ion-item>\n        <ion-item value="two">\n            <ion-thumbnail item-start>\n              <img src="assets/images/mobile11.jpg">\n            </ion-thumbnail>\n            <h2>two</h2>\n            <p ><ion-icon name="md-star"></ion-icon>\n              <ion-icon name="md-star"></ion-icon>\n              <ion-icon name="md-star"></ion-icon>\n              <ion-icon name="md-star"></ion-icon></p>\n            <p>₹3000</p>\n            <!-- <button ion-button clear item-end>View</button> -->\n          </ion-item>\n          <ion-item value="three">\n              <ion-thumbnail item-start>\n                <img src="assets/images/thirdone.png">\n              </ion-thumbnail>\n              <h2>Three</h2>\n              <p ><ion-icon name="md-star"></ion-icon>\n                <ion-icon name="md-star"></ion-icon>\n                <ion-icon name="md-star"></ion-icon></p>\n              <p>₹5000</p>\n              <!-- <button ion-button clear item-end>View</button> -->\n            </ion-item>\n            <ion-item value="four">\n                <ion-thumbnail item-start>\n                  <img src="assets/images/secondone.jpg">\n                </ion-thumbnail>\n                <h2>Four</h2>\n                <p ><ion-icon name="md-star"></ion-icon>\n                  <ion-icon name="md-star"></ion-icon>\n                  <ion-icon name="md-star"></ion-icon>\n                  <ion-icon name="md-star"></ion-icon></p>\n                <p>₹3300</p>\n                <!-- <button ion-button clear item-end>View</button> -->\n              </ion-item>\n              <ion-item value="five">\n                  <ion-thumbnail item-start>\n                    <img src="assets/images/thirdone.png">\n                  </ion-thumbnail>\n                  <h2>Five</h2>\n                  <p ><ion-icon name="md-star"></ion-icon>\n                    <ion-icon name="md-star"></ion-icon>\n                    <ion-icon name="md-star"></ion-icon>\n                    <ion-icon name="md-star"></ion-icon>\n                    <ion-icon name="md-star"></ion-icon></p>\n                  <p>₹4500</p>\n                  <!-- <button ion-button clear item-end>View</button> -->\n                </ion-item>\n                <ion-item value="six">\n                    <ion-thumbnail item-start>\n                      <img src="assets/images/secondone.jpg">\n                    </ion-thumbnail>\n                    <h2>Six</h2>\n                    <p ><ion-icon name="md-star"></ion-icon>\n                      <ion-icon name="md-star"></ion-icon>\n                      <ion-icon name="md-star"></ion-icon>\n                      <ion-icon name="md-star"></ion-icon>\n                      <ion-icon name="md-star"></ion-icon></p>\n                    <p>₹4600</p>\n                    <!-- <button ion-button clear item-end>View</button> -->\n                  </ion-item>\n                  <ion-item value="seven">\n                      <ion-thumbnail item-start>\n                        <img src="assets/images/firstone.png">\n                      </ion-thumbnail>\n                      <h2>Seven</h2>\n                      <p ><ion-icon name="md-star"></ion-icon>\n                        <ion-icon name="md-star"></ion-icon>\n                        <ion-icon name="md-star"></ion-icon></p>\n                      <p>₹3500</p>\n                      <!-- <button ion-button clear item-end>View</button> -->\n                    </ion-item>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/billing/billing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Billing);

//# sourceMappingURL=billing.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Newone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Newone = (function () {
    function Newone(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Newone.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad newone');
    };
    return Newone;
}());
Newone = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newone',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/newone/newone.html"*/'\n<ion-header>\n    \n      <ion-navbar color="facebookC">\n        <ion-title >Shopping</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n        <ion-icon class="iconsize"  name="ios-cart-outline">\n            </ion-icon>\n            </button>\n            </ion-buttons >\n      \n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content>\n      <div>\n          <!-- <ion-card-header>\n              Header\n            </ion-card-header> -->\n        <ion-slides [navPush]="form" pager >\n            <ion-slide >\n            <img src="assets/images/onenewtwo.jpg" class="imgsize">\n          </ion-slide>\n          <ion-slide>\n             <img src="assets/images/mob1.jpg" class="imgsize">\n          </ion-slide>\n          <ion-slide>\n             <img src="assets/images/mob2.png" class="imgsize">\n          </ion-slide>\n             <ion-slide>\n             <img src="assets/images/mob4.jpg" class="imgsize">\n             </ion-slide>\n          </ion-slides>\n      </div>\n      <div>\n        <ion-slides ionSlideNextStart>\n            <ion-slide>\n              <ion-row>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <ion-card>\n                               <ion-card-content class="textcenter">\n              <img src="assets/images/e1.jpg" class="findone">\n              <code>₹2300</code>\n                                </ion-card-content>\n                        </ion-card>\n                  \n                </ion-col>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <ion-card>\n                               <ion-card-content class="textcenter">\n                    <img src="assets/images/e2.jpg" class="findone">\n                    <code>₹2000</code>\n                                </ion-card-content>\n                        </ion-card>\n                </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                          <img src="assets/images/e3.jpg" class="findone">\n                          <code>₹2500</code>\n                                    </ion-card-content>\n                            </ion-card>\n                            </ion-col>\n              </ion-row>\n              \n            </ion-slide>\n            <ion-slide>\n                <ion-row>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                  <img src="assets/images/e8.jpg" class="findone">\n                  <code>₹2300</code>\n                                    </ion-card-content>\n                            </ion-card>\n                    </ion-col>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                        <img src="assets/images/e5.jpg" class="findone">\n                        <code>₹2000</code>\n                                    </ion-card-content>\n                            </ion-card>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <ion-card>\n                                       <ion-card-content class="textcenter">\n                              <img src="assets/images/e6.jpg" class="findone">\n                              <code>₹2500</code>\n                                        </ion-card-content>\n                                </ion-card>\n                                </ion-col>\n                  </ion-row>\n               \n            </ion-slide>\n            <ion-slide>\n                <ion-row>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                  <img src="assets/images/e7.jpg" class="findone">\n                  <code>₹2300</code>\n                                    </ion-card-content>\n                            </ion-card>\n                    </ion-col>\n                    <ion-col col-4 [navPush]="billing " (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                        <img src="assets/images/e8.jpg" class="findone">\n                        <code>₹2000</code>\n                        \n                                    </ion-card-content>\n                            </ion-card>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <ion-card>\n                                       <ion-card-content class="textcenter">\n                              <img src="assets/images/e3.jpg" class="findone">\n                              <code>₹2500</code>\n                                        </ion-card-content>\n                                </ion-card>\n                                </ion-col>\n                  </ion-row>\n                \n            </ion-slide>\n          </ion-slides>\n      </div>\n      <div>\n        <ion-slides>\n        <ion-slide>\n            <ion-row>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <ion-card>\n                               <ion-card-content class="textcenter">\n                  <img src="assets/images/headone.png" class="findone">\n                  <code>₹2600</code>\n                                </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                        <img src="assets/images/headtwo.png" class="findone">\n                        <code>₹2000</code>\n                                    </ion-card-content>\n                            </ion-card>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <ion-card>\n                                       <ion-card-content class="textcenter">\n                              <img src="assets/images/headthree.png" class="findone">\n                              <code>₹2900</code>\n                                        </ion-card-content>\n                                </ion-card>\n                                </ion-col>\n                </ion-row>\n    \n        </ion-slide>\n        <ion-slide>\n            <ion-row>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <ion-card>\n                               <ion-card-content class="textcenter">\n                  <img src="assets/images/headone.png" class="findone">\n                  <code>₹2600</code>\n                                </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                        <img src="assets/images/headtwo.png" class="findone">\n                        <code>₹2000</code>\n                                    </ion-card-content>\n                            </ion-card>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <ion-card>\n                                       <ion-card-content class="textcenter">\n                              <img src="assets/images/headthree.png" class="findone">\n                              <code>₹2900</code>\n                              \n                                        </ion-card-content>\n                                </ion-card>\n                                </ion-col>\n                </ion-row>\n    \n        </ion-slide>\n        <ion-slide>\n            <ion-row>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <ion-card>\n                               <ion-card-content class="textcenter">\n                  <img src="assets/images/headone.png" class="findone">\n                  <code>₹2600</code>\n                                </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                        <img src="assets/images/headtwo.png" class="findone">\n                        <code>₹2000</code>\n                                    </ion-card-content>\n                            </ion-card>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <ion-card>\n                                       <ion-card-content class="textcenter">\n                              <img src="assets/images/headthree.png" class="findone">\n                              <code>₹2900</code>\n                                        </ion-card-content>\n                                </ion-card>\n                              </ion-col>\n                </ion-row>\n        </ion-slide>\n    \n    \n    \n        </ion-slides>\n      </div>\n      <div>\n          <ion-slides>\n          <ion-slide>\n              <ion-row>\n                  <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <ion-card>\n                               <ion-card-content class="textcenter">\n                    <img src="assets/images/f1.jpg" class="findone">\n                    <code>₹2600</code>\n                                </ion-card-content>\n                        </ion-card>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                          <img src="assets/images/f2.jpg" class="findone">\n                          <code>₹2000</code>\n                                    </ion-card-content>\n                            </ion-card>\n                            </ion-col>\n                            <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                    <ion-card>\n                                           <ion-card-content class="textcenter">\n                                <img src="assets/images/f5.jpg" class="findone">\n                                <code>₹2900</code>\n                                            </ion-card-content>\n                                    </ion-card>\n                                  </ion-col>\n                  </ion-row>\n      \n          </ion-slide>\n          <ion-slide>\n              <ion-row>\n                  <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <ion-card>\n                               <ion-card-content class="textcenter">\n                    <img src="assets/images/f3.jpg" class="findone">\n                    <code>₹2600</code>\n                                </ion-card-content>\n                        </ion-card>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                          <img src="assets/images/f7.jpg" class="findone">\n                          <code>₹2000</code>\n                                    </ion-card-content>\n                            </ion-card>\n                            </ion-col>\n                            <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                    <ion-card>\n                                           <ion-card-content class="textcenter">\n                                <img src="assets/images/f5.jpg" class="findone">\n                                <code>₹2900</code>\n                                            </ion-card-content>\n                                    </ion-card>\n                                  </ion-col>\n                  </ion-row>\n      \n          </ion-slide>\n          <ion-slide>\n              <ion-row>\n                  <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <ion-card>\n                               <ion-card-content class="textcenter">\n                    <img src="assets/images/f4.jpg" class="findone">\n                    <code>₹2600</code>\n                                </ion-card-content>\n                        </ion-card>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()" >\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                          <img src="assets/images/f2.jpg" class="findone">\n                          <code>₹2000</code>\n                                    </ion-card-content>\n                            </ion-card>\n                            </ion-col>\n                            <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                    <ion-card>\n                                           <ion-card-content class="textcenter">\n                                <img src="assets/images/f6.jpg" class="findone">\n                                <code>₹2900</code>\n                                            </ion-card-content>\n                                    </ion-card>\n                                  </ion-col>\n                  </ion-row>\n          </ion-slide>\n      \n      \n      \n          </ion-slides>\n        </div>\n        <div>\n            <ion-slides>\n            <ion-slide>\n                <ion-row>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                      <img src="assets/images/g1.jpg" class="findone">\n                      <code>₹2600</code>\n                                    </ion-card-content>\n                            </ion-card>\n                        </ion-col>\n                        <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <ion-card>\n                                       <ion-card-content class="textcenter">\n                            <img src="assets/images/g4.jpg" class="findone">\n                            <code>₹2000</code>\n                                        </ion-card-content>\n                                </ion-card>\n                              </ion-col>\n                              <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                    <ion-card>\n                                           <ion-card-content class="textcenter">\n                                  <img src="assets/images/g4.jpg" class="findone">\n                                  <code>₹2900</code>\n                                            </ion-card-content>\n                                    </ion-card>\n                                    </ion-col>\n                    </ion-row>\n        \n            </ion-slide>\n            <ion-slide>\n                <ion-row>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                      <img src="assets/images/g4.jpg" class="findone">\n                      <code>₹2600</code>\n                                    </ion-card-content>\n                            </ion-card>\n                        </ion-col>\n                        <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <ion-card>\n                                       <ion-card-content class="textcenter">\n                            <img src="assets/images/g7.jpg" class="findone">\n                            <code>₹2000</code>\n                                        </ion-card-content>\n                                </ion-card>\n                              </ion-col>\n                              <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                    <ion-card>\n                                           <ion-card-content class="textcenter">\n                                  <img src="assets/images/g4.jpg" class="findone">\n                                  <code>₹2900</code>\n                                            </ion-card-content>\n                                    </ion-card>\n                                    </ion-col>\n                    </ion-row>\n        \n            </ion-slide>\n            <ion-slide>\n                <ion-row>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                      <img src="assets/images/g4.jpg" class="findone">\n                      <code>₹2600</code>\n                                    </ion-card-content>\n                            </ion-card>\n                        </ion-col>\n                        <ion-col col-4 [navPush]="billing" (click)="presentLoading()" >\n                                <ion-card>\n                                       <ion-card-content class="textcenter">\n                            <img src="assets/images/g6.jpg" class="findone">\n                            <code>₹2000</code>\n                                        </ion-card-content>\n                                </ion-card>                              </ion-col>\n                              <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                    <ion-card>\n                                           <ion-card-content class="textcenter">\n                                  <img src="assets/images/g4.jpg" class="findone">\n                                  <code>₹2900</code>\n                                            </ion-card-content>\n                                    </ion-card>\n                                    </ion-col>\n                    </ion-row>\n            </ion-slide>\n        \n        \n        \n            </ion-slides>\n          </div>\n          <div>\n              <ion-slides>\n              <ion-slide>\n                  <ion-row>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                        <img src="assets/images/headone.png" class="findone">\n                        <code>₹2600</code>\n                                    </ion-card-content>\n                            </ion-card>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <ion-card>\n                                       <ion-card-content class="textcenter">\n                              <img src="assets/images/headtwo.png" class="findone">\n                              <code>₹2000</code>\n                                        </ion-card-content>\n                                </ion-card>\n                                </ion-col>\n                                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                        <ion-card>\n                                               <ion-card-content class="textcenter">\n                                    <img src="assets/images/headthree.png" class="findone">\n                                    <code>₹2900</code>\n                                                </ion-card-content>\n                                        </ion-card>\n                                      </ion-col>\n                      </ion-row>\n          \n              </ion-slide>\n              <ion-slide>\n                  <ion-row>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                        <img src="assets/images/headone.png" class="findone">\n                        <code>₹2600</code>\n                                    </ion-card-content>\n                            </ion-card>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <ion-card>\n                                       <ion-card-content class="textcenter">\n                              <img src="assets/images/headtwo.png" class="findone">\n                              <code>₹2000</code>\n                                        </ion-card-content>\n                                </ion-card>                                </ion-col>\n                                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                        <ion-card>\n                                               <ion-card-content class="textcenter">\n                                    <img src="assets/images/headthree.png" class="findone">\n                                    <code>₹2900</code>\n                                                </ion-card-content>\n                                        </ion-card>\n                                      </ion-col>\n                      </ion-row>\n          \n              </ion-slide>\n              <ion-slide>\n                  <ion-row>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <ion-card>\n                                   <ion-card-content class="textcenter">\n                        <img src="assets/images/headone.png" class="findone">\n                        <code>₹2600</code>\n                                    </ion-card-content>\n                            </ion-card>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <ion-card>\n                                       <ion-card-content class="textcenter">\n                              <img src="assets/images/headtwo.png" class="findone">\n                              <code>₹2000</code>\n                                        </ion-card-content>\n                                </ion-card>\n                                </ion-col>\n                                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                        <ion-card>\n                                               <ion-card-content class="textcenter">\n                                    <img src="assets/images/headthree.png" class="findone">\n                                    <code>₹2900</code>\n                                                </ion-card-content>\n                                        </ion-card>\n                                      </ion-col>\n                      </ion-row>\n              </ion-slide>\n          \n          \n          \n              </ion-slides>\n            </div>\n      \n    \n    </ion-content>\n    '/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/newone/newone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Newone);

//# sourceMappingURL=newone.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Restaurant = (function () {
    function Restaurant(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Restaurant.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Restaurant');
    };
    Restaurant.prototype.gohome = function () {
        this.navCtrl.popToRoot();
    };
    return Restaurant;
}());
Restaurant = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restaurant',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/restaurant/restaurant.html"*/'<ion-content>\n  <div>\n    <ion-slides >        \n          <ion-slide class="backgroundone">\n            \n            \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span style="color:white;">Restaurant </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon color="light" name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>       \n          <ion-slide class="backgroundtwo">\n            \n            \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span style="color:white;">Restaurant </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon color="light" name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>       \n          <ion-slide class="backgroundthree">           \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span style="color:white;">Restaurant </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon color="light" name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>      \n        \n        </ion-slides>\n  </div>\n  <div>\n      <ion-list> \n          <ion-item-divider color="light">Categories</ion-item-divider>\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="assets/images/resfind1.jpg">\n            </ion-avatar>\n            <h2>cuisines</h2>\n            <p>Find your choice of cuisine</p>\n          </ion-item>\n          <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/images/resfind2.jpg">\n              </ion-avatar>\n              <h2>Home Delivery</h2>\n              <p>Never miss a meal again</p>\n            </ion-item>\n            <ion-item>\n                <ion-avatar item-start>\n                  <img src="assets/images/resfind3.jpg">\n                </ion-avatar>\n                <h2>Book Table</h2>\n                <p>Reserve a Table quickly and easily</p>\n              </ion-item>\n              <ion-item>\n                  <ion-avatar item-start>\n                    <img src="assets/images/resfind4.jpg">\n                  </ion-avatar>\n                  <h2>Pure Veg</h2>\n                  <p>Vegetarian delights</p>\n                </ion-item>\n                <ion-item>\n                    <ion-avatar item-start>\n                      <img src="assets/images/resfind5.jpg">\n                    </ion-avatar>\n                    <h2>cafes</h2>\n                    <p>Spill the beans</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-avatar item-start>\n                        <img src="assets/images/resfind6.jpg">\n                      </ion-avatar>\n                      <h2>Bakeries</h2>\n                      <p>Find your next tasty treat</p>\n                    </ion-item>\n        </ion-list>\n        \n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/restaurant/restaurant.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Restaurant);

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movies; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Movies = (function () {
    function Movies(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.new = "movies";
    }
    Movies.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Movies');
    };
    Movies.prototype.gohome = function () {
        this.navCtrl.popToRoot();
    };
    return Movies;
}());
Movies = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-movies',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/movies/movies.html"*/'\n<ion-header>\n    \n      <ion-navbar color="facebookC">\n        <ion-title >movies</ion-title>\n        <ion-buttons end (click)="gohome()">\n            <button ion-button icon-only>\n        <ion-icon class="iconsize"  name="md-close">\n            </ion-icon>\n            </button>\n            </ion-buttons >\n      \n      </ion-navbar>\n    \n    </ion-header>\n\n\n<ion-content>\n    <div>\n        <ion-segment [(ngModel)]="new">\n          <ion-segment-button value="movies">\n            movies\n          </ion-segment-button>\n          <ion-segment-button value="players">\n           players\n          </ion-segment-button>\n          <ion-segment-button value="events">\n             Events\n             </ion-segment-button>\n             <ion-segment-button value="sports">\n                sports\n               </ion-segment-button>\n               <ion-segment-button value="all">\n                 all\n                 </ion-segment-button>\n        </ion-segment>\n      </div>\n      \n      <div [ngSwitch]="new">\n        <ion-list *ngSwitchCase="\'movies\'">\n\n            <ion-card>\n                <img class="imgsize" src="assets/images/vv2.jpg"/>\n                <ion-card-content>\n                  <h2>\n                    vivegam(Tamil Movie)\n                  </h2>\n                  <p>\n                   spy Thriller, Action\n                  </p>\n                </ion-card-content>\n              </ion-card>\n\n            <ion-card>\n                <img class="imgsize" src="assets/images/annabella.jpg"/>\n                <ion-card-content>\n                  <h2>\n                    Annabelle Creation\n                    </h2>\n                  <p>\n                   Horror, Suspense Thriller\n                  </p>\n                </ion-card-content>\n              </ion-card>\n\n            <ion-card>\n                <img class="imgsize" src="assets/images/filmtwo.jpg"/>\n                <ion-card-content>\n                  <h2>\n                    velai illa pattathari 2\n                    </h2>\n                  <p>\n                   Romance, Drama, Action\n                  </p>\n                </ion-card-content>\n              </ion-card>\n\n            <ion-card>\n                <img class="imgsize" src="assets/images/taramani.jpg"/>\n                <ion-card-content>\n                  <h2>\n                    Taramani\n                    </h2>\n                  <p>\n                      Romance, Drama\n                  </p>\n                </ion-card-content>\n              </ion-card>\n\n            <!-- <ion-card>\n                <img src="img/nin-live.png"/>\n                <ion-card-content>\n                  <ion-card-title>\n                    vivegam(Tamil Movie)\n                    </ion-card-title>\n                  <p>\n                   spy Thriller, Action\n                  </p>\n                </ion-card-content>\n              </ion-card> -->\n         \n        </ion-list>\n      \n        <ion-list *ngSwitchCase="\'players\'">\n          \n        </ion-list>\n        <ion-list *ngSwitchCase="\'events\'">\n            \n          </ion-list>\n          <ion-list *ngSwitchCase="\'sports\'">\n              \n            </ion-list>\n            <ion-list *ngSwitchCase="\'all\'">\n                <ion-row>\n                    <ion-col col-6  >\n                      <img src="assets/images/electircal.jpg" class="contentimg">\n                    </ion-col>\n                    <ion-col col-6  >\n                      <img src="assets/images/industrialsupplies.jpeg" class="contentimg">\n                    </ion-col>\n                    <ion-col col-6  >\n                      <img src="assets/images/machine.jpg" class="contentimg">\n                    </ion-col>\n                    <ion-col col-6 >\n                      <img src="assets/images/automobile.jpg" class="contentimg">\n                    </ion-col>\n                    <ion-col col-6  >\n                      <img src="assets/images/food and beverages.jpg" class="contentimg">\n                    </ion-col>\n                    <ion-col col-6  >\n                      <img src="assets/images/constructions.jpg" class="contentimg">\n                    </ion-col>\n                    <ion-col col-6  >\n                        <img src="assets/images/chemical.jpg" class="contentimg">\n                      </ion-col>\n                      <ion-col col-6  >\n                          <img src="assets/images/laboratory.jpg" class="contentimg">\n                        </ion-col>\n                        <ion-col col-6 >\n                            <img src="assets/images/package.jpg" class="contentimg">\n                          </ion-col>\n                          <ion-col col-6  >\n                              <img src="assets/images/mechanicalcomponents.jpg" class="contentimg">\n                            </ion-col>\n                  </ion-row>\n              </ion-list>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/movies/movies.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Movies);

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Travel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Travel = (function () {
    function Travel(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Travel.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Travel');
    };
    Travel.prototype.gohome = function () {
        this.navCtrl.popToRoot();
    };
    return Travel;
}());
Travel = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-travel',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/travel/travel.html"*/'<!--\n  Generated template for the Travel page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>travel</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content>\n    <div>\n        <ion-slides >        \n              <ion-slide class="backgroundone">\n                \n                \n                <ion-row class="gridtop">\n                  <ion-col col-2 (click)="gohome()">\n                      <ion-buttons  >\n                         \n                      <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                          </ion-icon>\n                          \n                          </ion-buttons >\n                  </ion-col>\n                  <ion-col col-8 text-center>\n                <span style="color:white;">Travel </span>\n                  </ion-col>\n                  <ion-col col-2>\n                      <ion-buttons  >\n                          <ion-icon color="light" name="search" ></ion-icon>\n                      </ion-buttons>\n                  </ion-col>\n                </ion-row>                       \n              </ion-slide>       \n              <ion-slide class="backgroundtwo">\n                \n                \n                <ion-row class="gridtop">\n                  <ion-col col-2 (click)="gohome()">\n                      <ion-buttons  >\n                         \n                      <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                          </ion-icon>\n                          \n                          </ion-buttons >\n                  </ion-col>\n                  <ion-col col-8 text-center>\n                <span style="color:white;">Restaurant </span>\n                  </ion-col>\n                  <ion-col col-2>\n                      <ion-buttons  >\n                          <ion-icon color="light" name="search" ></ion-icon>\n                      </ion-buttons>\n                  </ion-col>\n                </ion-row>                       \n              </ion-slide>       \n              <ion-slide class="backgroundthree">           \n                <ion-row class="gridtop">\n                  <ion-col col-2 (click)="gohome()">\n                      <ion-buttons  >\n                         \n                      <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                          </ion-icon>\n                          \n                          </ion-buttons >\n                  </ion-col>\n                  <ion-col col-8 text-center>\n                <span style="color:white;">Restaurant </span>\n                  </ion-col>\n                  <ion-col col-2>\n                      <ion-buttons  >\n                          <ion-icon color="light" name="search" ></ion-icon>\n                      </ion-buttons>\n                  </ion-col>\n                </ion-row>                       \n              </ion-slide>      \n            \n            </ion-slides>\n      </div>\n\n      <div>\n          <ion-list> \n              <ion-item-divider color="light">Categories</ion-item-divider>\n              <ion-item>\n                <ion-icon color="newgray" name="ios-jet-outline" item-start></ion-icon>\n                  Flight\n                <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-icon color="newgray" name="ios-bus-outline" item-start></ion-icon>\n                  Bus\n                <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-icon color="newgray" name="ios-car-outline" item-start></ion-icon>\n                  Taxi\n                <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-icon color="newgray" name="ios-train-outline" item-start></ion-icon>\n                  Trains\n                <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-icon color="newgray" name="ios-restaurant-outline" item-start></ion-icon>\n                  Hotels\n                <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-icon color="newgray" name="ios-apps-outline" item-start></ion-icon>\n                  International Hotels\n                <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-icon color="newgray" name="ios-list-box-outline" item-start></ion-icon>\n                  Visa Assistance\n                <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-icon color="newgray" name="ios-closed-captioning-outline" item-start></ion-icon>\n                 Foreign Exchange\n                <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-icon color="newgray" name="ios-train-outline" item-start></ion-icon>\n                  Meals on Train\n                <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n              </ion-item>\n          </ion-list>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/travel/travel.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Travel);

//# sourceMappingURL=travel.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doctors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Doctors = (function () {
    function Doctors(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Doctors.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Doctors');
    };
    Doctors.prototype.gohome = function () {
        this.navCtrl.popToRoot();
    };
    return Doctors;
}());
Doctors = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-doctors',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/doctors/doctors.html"*/'<ion-content>\n  <div>\n    <ion-slides >        \n          <ion-slide class="backgroundone">\n            \n            \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon  class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span >Doctors </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon  name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>       \n          <ion-slide class="backgroundtwo">\n            \n            \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon  class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span >Doctors </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon  name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>       \n          <ion-slide class="backgroundthree">           \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon  class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span >Doctors </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon  name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>      \n        \n        </ion-slides>\n  </div>\n  <div>\n    <ion-list> \n        <ion-item-divider color="light">Categories</ion-item-divider>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-heart-outline" item-start></ion-icon>\n           My Doctor\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-medkit-outline" item-start></ion-icon>\n           AYurvedic Doctors\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-car-outline" item-start></ion-icon>\n            Cardiologists\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-train-outline" item-start></ion-icon>\n            Chest Specialists\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-restaurant-outline" item-start></ion-icon>\n           Dentists\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-apps-outline" item-start></ion-icon>\n            Dermatologists\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-list-box-outline" item-start></ion-icon>\n           Diabetologists\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-closed-captioning-outline" item-start></ion-icon>\n           Dietitians\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-eye-outline" item-start></ion-icon>\n            Eye Specialists\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n</div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/doctors/doctors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Doctors);

//# sourceMappingURL=doctors.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Health; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Health = (function () {
    function Health(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Health.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Health');
    };
    Health.prototype.gohome = function () {
        this.navCtrl.popToRoot();
    };
    return Health;
}());
Health = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-health',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/health/health.html"*/'<ion-content>\n  <div>\n    <ion-slides >        \n          <ion-slide class="backgroundone">\n            \n            \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span style="color:white;">Health & Fithness </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon color="light" name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>       \n          <ion-slide class="backgroundtwo">\n            \n            \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span style="color:white;">Health & Fithness </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon color="light" name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>       \n          <ion-slide class="backgroundthree">           \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span style="color:white;">Health & Fithness </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon color="light" name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>      \n        \n        </ion-slides>\n  </div>\n  <div>\n    <ion-list> \n        <ion-item-divider color="light">Categories</ion-item-divider>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-jet-outline" item-start></ion-icon>\n            Dietitians\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-bus-outline" item-start></ion-icon>\n           Fitness Classes\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-car-outline" item-start></ion-icon>\n          Gym\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-train-outline" item-start></ion-icon>\n         Health Equipments\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-restaurant-outline" item-start></ion-icon>\n           Health Food & Supplements\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-apps-outline" item-start></ion-icon>\n            Meditation & Relaxation\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-list-box-outline" item-start></ion-icon>\n           Sport Clubs\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-closed-captioning-outline" item-start></ion-icon>\n           Swimming Clubs\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="newgray" name="ios-train-outline" item-start></ion-icon>\n            Yoga Classes\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n</div>  \n  \n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/health/health.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Health);

//# sourceMappingURL=health.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Supermarket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Supermarket = (function () {
    function Supermarket(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Supermarket.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Supermarket');
    };
    Supermarket.prototype.gohome = function () {
        this.navCtrl.popToRoot();
    };
    return Supermarket;
}());
Supermarket = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-supermarket',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/supermarket/supermarket.html"*/'<ion-content>\n  <div>\n    <ion-slides >        \n          <ion-slide class="backgroundone">\n            \n            \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span style="color:white;">Grocery </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon color="light" name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>       \n          <ion-slide class="backgroundtwo">\n            \n            \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span style="color:white;">Grocery </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon color="light" name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>       \n          <ion-slide class="backgroundthree">           \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons  >\n                     \n                  <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span style="color:white;">Grocery </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons  >\n                      <ion-icon color="light" name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </ion-slide>      \n        \n        </ion-slides>\n  </div>\n  <div>\n    <ion-list> \n        <ion-item-divider color="light">Categories</ion-item-divider>\n        <ion-item>\n          \n            Flight\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          \n            Bus\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          \n            Taxi\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          \n            Trains\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n         \n            Hotels\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n         \n            International Hotels\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          \n            Visa Assistance\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n         \n           Foreign Exchange\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          \n            Meals on Train\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n</div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/supermarket/supermarket.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Supermarket);

//# sourceMappingURL=supermarket.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Electrical; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Electrical = (function () {
    function Electrical(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Electrical.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Electrical');
    };
    Electrical.prototype.gohome = function () {
        this.navCtrl.popToRoot();
    };
    return Electrical;
}());
Electrical = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-electrical',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/electrical/electrical.html"*/'<ion-content>\n  \n   \n           <div class="backgroundone">\n             \n             \n             <ion-row class="gridtop">\n               <ion-col col-2 (click)="gohome()">\n                   <ion-buttons icon-only >\n                      \n                   <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                       </ion-icon>\n                       \n                       </ion-buttons >\n               </ion-col>\n               <ion-col col-8 text-center>\n             <span style="color:white;" class="sizeofone">Electrical </span>\n               </ion-col>\n               <ion-col col-2>\n                   <ion-buttons icon-only  >\n                       <ion-icon color="light" name="search" ></ion-icon>\n                   </ion-buttons>\n               </ion-col>\n             </ion-row>                       \n           </div>       \n         \n   <div>\n     <ion-list> \n         <ion-item-divider color="light">Categories</ion-item-divider>\n         <ion-item>\n           \n             Access Control & Biometric Products\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n             Air Conditioners Coolers & control Products\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n             Automatic Washing  Machine\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n             Axis\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n          \n            Danger Board \n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n          \n            Digital Recorder\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n             Dro System\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n          \n           Electric &Light Fittings\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n            Digital Signal Processor\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n     </ion-list>\n </div>\n   \n </ion-content>\n '/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/electrical/electrical.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Electrical);

//# sourceMappingURL=electrical.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Industrialsupplies; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Industrialsupplies = (function () {
    function Industrialsupplies(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Industrialsupplies.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Industrialsupplies');
    };
    Industrialsupplies.prototype.gohome = function () {
        this.navCtrl.popToRoot();
    };
    return Industrialsupplies;
}());
Industrialsupplies = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-industrialsupplies',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/industrialsupplies/industrialsupplies.html"*/'<ion-content>\n  \n   \n           <div class="backgroundone">\n             \n             \n             <ion-row class="gridtop">\n               <ion-col col-2 (click)="gohome()">\n                   <ion-buttons icon-only >\n                      \n                   <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                       </ion-icon>\n                       \n                       </ion-buttons >\n               </ion-col>\n               <ion-col col-8 text-center>\n             <span style="color:white;" class="sizeofone">Industrialsupplies </span>\n               </ion-col>\n               <ion-col col-2>\n                   <ion-buttons icon-only  >\n                       <ion-icon color="light" name="search" ></ion-icon>\n                   </ion-buttons>\n               </ion-col>\n             </ion-row>                       \n           </div>       \n         \n   <div>\n     <ion-list> \n         <ion-item-divider color="light">Categories</ion-item-divider>\n         <ion-item>\n           \n             Abrasive Disc For Metal\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n             Abrasive Disc For Plastic\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n            Abrasive Distributor\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n            Abrasive Paper Roll\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n          \n            ABS Power\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n          \n             AC Control Panel\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n             Ac Fan Blower\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n          \n           AC Inverter\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n            AC Sero Drive\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n     </ion-list>\n </div>\n   \n </ion-content>\n '/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/industrialsupplies/industrialsupplies.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Industrialsupplies);

//# sourceMappingURL=industrialsupplies.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Machine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Machine = (function () {
    function Machine(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Machine.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Machine');
    };
    Machine.prototype.gohome = function () {
        this.navCtrl.popToRoot();
    };
    return Machine;
}());
Machine = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-machine',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/machine/machine.html"*/'<ion-content>\n \n  \n          <div class="backgroundone">\n            \n            \n            <ion-row class="gridtop">\n              <ion-col col-2 (click)="gohome()">\n                  <ion-buttons icon-only >\n                     \n                  <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                      </ion-icon>\n                      \n                      </ion-buttons >\n              </ion-col>\n              <ion-col col-8 text-center>\n            <span style="color:white;" class="sizeofone">Machine </span>\n              </ion-col>\n              <ion-col col-2>\n                  <ion-buttons icon-only  >\n                      <ion-icon color="light" name="search" ></ion-icon>\n                  </ion-buttons>\n              </ion-col>\n            </ion-row>                       \n          </div>       \n        \n  <div>\n    <ion-list> \n        <ion-item-divider color="light">Categories</ion-item-divider>\n        <ion-item>\n          \n            Flight\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          \n            Bus\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          \n            Taxi\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          \n            Trains\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n         \n            Hotels\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n         \n            International Hotels\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          \n            Visa Assistance\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n         \n           Foreign Exchange\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          \n            Meals on Train\n          <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n</div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/machine/machine.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Machine);

//# sourceMappingURL=machine.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Automobile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Automobile = (function () {
    function Automobile(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Automobile.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Automobile');
    };
    Automobile.prototype.gohome = function () {
        this.navCtrl.popToRoot();
    };
    return Automobile;
}());
Automobile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-automobile',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/automobile/automobile.html"*/'<ion-content>\n  \n   \n           <div>\n             \n              <ion-slides >        \n                  <ion-slide class="backgroundone">\n             <ion-row class="gridtop">\n               <ion-col col-2 (click)="gohome()">\n                   <ion-buttons icon-only >\n                      \n                   <ion-icon color="light" class="iconsize"  name="ios-arrow-back-outline">\n                       </ion-icon>\n                       \n                       </ion-buttons >\n               </ion-col>\n               <ion-col col-8 text-center>\n             <span style="color:white;" class="sizeofone">Automobile </span>\n               </ion-col>\n               <ion-col col-2>\n                   <ion-buttons icon-only  >\n                       <ion-icon color="light" name="search" ></ion-icon>\n                   </ion-buttons>\n               </ion-col>\n             </ion-row>\n                  </ion-slide>\n              </ion-slides>                      \n           </div>       \n         \n   <div>\n     <ion-list> \n         <ion-item-divider color="light">Categories</ion-item-divider>\n         <ion-item>\n           \n           Automobile Machineries & Tools\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n            Camera & Photography Equipments\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n            Farming Equipments & Machines\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n            Food Machineries & Equipments\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n          \n            Machine Parts & Accesories\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n          \n             paper Products & Machineries\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n            printing Machines Equipments & Supplies\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n          \n           Wire Drawing & Cabling Machine\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n         <ion-item>\n           \n            Welding Machines\n           <ion-icon color="secondgray" name="ios-arrow-forward" item-end></ion-icon>\n         </ion-item>\n     </ion-list>\n </div>\n   \n </ion-content>\n '/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/automobile/automobile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Automobile);

//# sourceMappingURL=automobile.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_form_form__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_space_space__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_billing_billing__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_newone_newone__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_restaurant_restaurant__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_movies_movies__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_travel_travel__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_doctors_doctors__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_health_health__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_supermarket_supermarket__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_electrical_electrical__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_industrialsupplies_industrialsupplies__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_machine_machine__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_automobile_automobile__ = __webpack_require__(205);
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
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_form_form__["a" /* Form */],
            __WEBPACK_IMPORTED_MODULE_9__pages_space_space__["a" /* Space */],
            __WEBPACK_IMPORTED_MODULE_10__pages_billing_billing__["a" /* Billing */],
            __WEBPACK_IMPORTED_MODULE_11__pages_newone_newone__["a" /* Newone */],
            __WEBPACK_IMPORTED_MODULE_12__pages_restaurant_restaurant__["a" /* Restaurant */],
            __WEBPACK_IMPORTED_MODULE_13__pages_movies_movies__["a" /* Movies */],
            __WEBPACK_IMPORTED_MODULE_14__pages_travel_travel__["a" /* Travel */],
            __WEBPACK_IMPORTED_MODULE_15__pages_doctors_doctors__["a" /* Doctors */],
            __WEBPACK_IMPORTED_MODULE_16__pages_health_health__["a" /* Health */],
            __WEBPACK_IMPORTED_MODULE_17__pages_supermarket_supermarket__["a" /* Supermarket */],
            __WEBPACK_IMPORTED_MODULE_18__pages_electrical_electrical__["a" /* Electrical */],
            __WEBPACK_IMPORTED_MODULE_19__pages_industrialsupplies_industrialsupplies__["a" /* Industrialsupplies */],
            __WEBPACK_IMPORTED_MODULE_20__pages_machine_machine__["a" /* Machine */],
            __WEBPACK_IMPORTED_MODULE_21__pages_automobile_automobile__["a" /* Automobile */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_form_form__["a" /* Form */],
            __WEBPACK_IMPORTED_MODULE_9__pages_space_space__["a" /* Space */],
            __WEBPACK_IMPORTED_MODULE_10__pages_billing_billing__["a" /* Billing */],
            __WEBPACK_IMPORTED_MODULE_11__pages_newone_newone__["a" /* Newone */],
            __WEBPACK_IMPORTED_MODULE_12__pages_restaurant_restaurant__["a" /* Restaurant */],
            __WEBPACK_IMPORTED_MODULE_13__pages_movies_movies__["a" /* Movies */],
            __WEBPACK_IMPORTED_MODULE_14__pages_travel_travel__["a" /* Travel */],
            __WEBPACK_IMPORTED_MODULE_15__pages_doctors_doctors__["a" /* Doctors */],
            __WEBPACK_IMPORTED_MODULE_16__pages_health_health__["a" /* Health */],
            __WEBPACK_IMPORTED_MODULE_17__pages_supermarket_supermarket__["a" /* Supermarket */],
            __WEBPACK_IMPORTED_MODULE_18__pages_electrical_electrical__["a" /* Electrical */],
            __WEBPACK_IMPORTED_MODULE_19__pages_industrialsupplies_industrialsupplies__["a" /* Industrialsupplies */],
            __WEBPACK_IMPORTED_MODULE_20__pages_machine_machine__["a" /* Machine */],
            __WEBPACK_IMPORTED_MODULE_21__pages_automobile_automobile__["a" /* Automobile */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(206);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map