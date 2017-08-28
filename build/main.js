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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__space_space__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_form__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newone_newone__ = __webpack_require__(195);
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
        selector: 'page-home',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-slides pager>\n      <ion-slide [navPush]="form" (click)="presentLoading()">\n        <img src="assets/images/naturetwo.jpg" class="imgsize">\n      </ion-slide>\n      <ion-slide [navPush]="form" (click)="presentLoading()">\n        <img src="assets/images/naturethree.jpg" class="imgsize">\n      </ion-slide>\n      <ion-slide [navPush]="form" (click)="presentLoading()">\n        <img src="assets/images/third.jpg" class="imgsize">\n      </ion-slide>\n      <ion-slide [navPush]="form" (click)="presentLoading()">\n        <img src="assets/images/nature.jpg" class="imgsize">\n      </ion-slide>\n    </ion-slides>\n  </div>\n  \n  <div  >\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="first">\n        first\n      </ion-segment-button>\n      <ion-segment-button value="second">\n        second\n      </ion-segment-button>\n      <ion-segment-button value="third" [navPush]="space" (click)="presentLoading()">\n        third\n      </ion-segment-button>\n      <ion-segment-button value="icon" (click)="showRadio()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n <div [ngSwitch]="pet">\n   \n    <ion-list *ngSwitchCase="\'first\'">\n        <div>\n      <ion-item>\n        <ion-row [navPush]="newone">\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/mobiletwo.jpg" class="contentimg">\n            \n          </ion-col>\n          <!-- <ion-row [navPush]="newone" class="card-background-page">\n       <ion-col col-6 col-sm-4 col-md-3>\n       <ion-card>\n       <img  src="assets/images/beatch.jpg">\n     <div class="card-title">São Paulo</div>\n     <div class="card-subtitle">41 Listings</div>\n   </ion-card>\n   </ion-col> -->\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/restau.jpeg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/cinemas.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/travels.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/49137216.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/taxi.jpg" class="contentimg">\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n    <div *ngSwitchCase="findnewone">\n      <ion-item>\n        <ion-row>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-restaurant-outline"></ion-icon>\n            <p>Restaurant</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cart-outline"></ion-icon>\n            <p>shop-online</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-car-outline"></ion-icon>\n            <p>Rental</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-bus-outline"></ion-icon>\n            <p>Bus-stop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-build-outline"></ion-icon>\n            <p>Mechanic</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cafe-outline"></ion-icon>\n            <p>Cofee-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-game-controller-b-outline"></ion-icon>\n            <p>GamePoint</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-jet-outline"></ion-icon>\n            <p>Travel</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-phone-portrait-outline"></ion-icon>\n            <p>MobileShop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-reverse-camera-outline"></ion-icon>\n            <p>Photoshop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-train-outline"></ion-icon>\n            <p>Train</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-school-outline"></ion-icon>\n            <p>University</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-shirt-outline"></ion-icon>\n            <p>Dress-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-tennisball-outline"></ion-icon>\n            <p>Sports</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-rose-outline"></ion-icon>\n            <p>Flowershop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-film-outline"></ion-icon>\n            <p>Film</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-wine-outline"></ion-icon>\n            <p>Bar</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-timer-outline"></ion-icon>\n            <p>clock</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'second\'">\n\n      <div>\n      <ion-item>\n\n        <ion-row>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/electircal.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/industrialsupplies.jpeg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/machine.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/automobile.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/food and beverages.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/constructions.jpg" class="contentimg">\n          </ion-col>\n        </ion-row>\n\n      </ion-item>\n      </div>\n      <div *ngSwitchCase="findnewtwo">\n\n          <ion-row>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-restaurant-outline"></ion-icon>\n                <p>Restaurant</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-cart-outline"></ion-icon>\n                <p>shop-online</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-car-outline"></ion-icon>\n                <p>Rental</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-bus-outline"></ion-icon>\n                <p>Bus-stop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-build-outline"></ion-icon>\n                <p>Mechanic</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-cafe-outline"></ion-icon>\n                <p>Cofee-shop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-game-controller-b-outline"></ion-icon>\n                <p>GamePoint</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-jet-outline"></ion-icon>\n                <p>Travel</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-phone-portrait-outline"></ion-icon>\n                <p>MobileShop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-reverse-camera-outline"></ion-icon>\n                <p>Photoshop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-train-outline"></ion-icon>\n                <p>Train</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-school-outline"></ion-icon>\n                <p>University</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-shirt-outline"></ion-icon>\n                <p>Dress-shop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-tennisball-outline"></ion-icon>\n                <p>Sports</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-rose-outline"></ion-icon>\n                <p>Flowershop</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-film-outline"></ion-icon>\n                <p>Film</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-wine-outline"></ion-icon>\n                <p>Bar</p>\n              </ion-col>\n              <ion-col col-6 col-sm-4 col-md-3 text-center>\n                <ion-icon class="iconsize" color="brownnew" name="ios-timer-outline"></ion-icon>\n                <p>clock</p>\n              </ion-col>\n            </ion-row>\n      </div>\n    </ion-list>\n\n    <!-- <ion-list *ngSwitchCase="\'grid\'">\n      <ion-item>\n        <ion-row>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/midrange hotels.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/beatch.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/aurovillehouse.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/daytrips.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/park.jpg" class="contentimg">\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3>\n            <img src="assets/images/quatras.jpg" class="contentimg">\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    </ion-list>\n    <ion-list *ngSwitchCase="\'list\'">\n   <ion-item>\n        <ion-row>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-restaurant-outline"></ion-icon>\n              <p>Restaurant</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-cart-outline"></ion-icon>\n              <p>shop-online</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-car-outline"></ion-icon>\n              <p>Rental</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-bus-outline"></ion-icon>\n              <p>Bus-stop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-build-outline"></ion-icon>\n              <p>Mechanic</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-cafe-outline"></ion-icon>\n              <p>Cofee-shop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-game-controller-b-outline"></ion-icon>\n              <p>GamePoint</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-jet-outline"></ion-icon>\n              <p>Travel</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-phone-portrait-outline"></ion-icon>\n              <p>MobileShop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-reverse-camera-outline"></ion-icon>\n              <p>Photoshop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-train-outline"></ion-icon>\n              <p>Train</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-school-outline"></ion-icon>\n              <p>University</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-shirt-outline"></ion-icon>\n              <p>Dress-shop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-tennisball-outline"></ion-icon>\n              <p>Sports</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-rose-outline"></ion-icon>\n              <p>Flowershop</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-film-outline"></ion-icon>\n              <p>Film</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-wine-outline"></ion-icon>\n              <p>Bar</p>\n            </ion-col>\n            <ion-col col-6 col-sm-4 col-md-3 text-center>\n              <ion-icon class="iconsize" color="brownnew" name="ios-timer-outline"></ion-icon>\n              <p>clock</p>\n            </ion-col>\n          </ion-row>\n   </ion-item>\n   \n    </ion-list> -->\n  </div>\n \n\n<!-- <div *ngIf="myVars" >\n  <div>\n    <ion-segment [(ngModel)]="petone">\n      <ion-segment-button value="firstone">\n        first\n      </ion-segment-button>\n      <ion-segment-button value="secondone">\n        second\n      </ion-segment-button>\n      <ion-segment-button value="third" [navPush]="space">\n        third\n      </ion-segment-button>\n      <ion-segment-button value="icon" (click)="showRadio()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="petone">\n\n    <ion-list *ngSwitchCase="\'firstone\'">\n      <ion-item>\n        <ion-row>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-restaurant-outline"></ion-icon>\n            <p>Restaurant</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cart-outline"></ion-icon>\n            <p>shop-online</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-car-outline"></ion-icon>\n            <p>Rental</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-bus-outline"></ion-icon>\n            <p>Bus-stop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-build-outline"></ion-icon>\n            <p>Mechanic</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cafe-outline"></ion-icon>\n            <p>Cofee-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-game-controller-b-outline"></ion-icon>\n            <p>GamePoint</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-jet-outline"></ion-icon>\n            <p>Travel</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-phone-portrait-outline"></ion-icon>\n            <p>MobileShop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-reverse-camera-outline"></ion-icon>\n            <p>Photoshop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-train-outline"></ion-icon>\n            <p>Train</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-school-outline"></ion-icon>\n            <p>University</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-shirt-outline"></ion-icon>\n            <p>Dress-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-tennisball-outline"></ion-icon>\n            <p>Sports</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-rose-outline"></ion-icon>\n            <p>Flowershop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-film-outline"></ion-icon>\n            <p>Film</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-wine-outline"></ion-icon>\n            <p>Bar</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-timer-outline"></ion-icon>\n            <p>clock</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'secondone\'">\n      <ion-item>\n\n        <ion-row>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-restaurant-outline"></ion-icon>\n            <p>Restaurant</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cart-outline"></ion-icon>\n            <p>shop-online</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-car-outline"></ion-icon>\n            <p>Rental</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-bus-outline"></ion-icon>\n            <p>Bus-stop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-build-outline"></ion-icon>\n            <p>Mechanic</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-cafe-outline"></ion-icon>\n            <p>Cofee-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-game-controller-b-outline"></ion-icon>\n            <p>GamePoint</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-jet-outline"></ion-icon>\n            <p>Travel</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-phone-portrait-outline"></ion-icon>\n            <p>MobileShop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-reverse-camera-outline"></ion-icon>\n            <p>Photoshop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-train-outline"></ion-icon>\n            <p>Train</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-school-outline"></ion-icon>\n            <p>University</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-shirt-outline"></ion-icon>\n            <p>Dress-shop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-tennisball-outline"></ion-icon>\n            <p>Sports</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-rose-outline"></ion-icon>\n            <p>Flowershop</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-film-outline"></ion-icon>\n            <p>Film</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-wine-outline"></ion-icon>\n            <p>Bar</p>\n          </ion-col>\n          <ion-col col-6 col-sm-4 col-md-3 text-center>\n            <ion-icon class="iconsize" color="brownnew" name="ios-timer-outline"></ion-icon>\n            <p>clock</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    </ion-list>\n  </div>\n</div> -->\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3 text-center>\n            <button ion-button icon-only menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n          </ion-col>\n          <ion-col col-3 text-center>\n            <ion-buttons icon-only>\n              <ion-icon name="ios-call-outline">\n              </ion-icon>\n            </ion-buttons>\n          </ion-col>\n\n          <ion-col col-3 text-center>\n            <ion-buttons icon-only>\n              <ion-icon name="ios-text-outline">\n              </ion-icon>\n            </ion-buttons>\n          </ion-col>\n          <ion-col col-3 text-center>\n            <ion-buttons icon-only>\n              <ion-icon name="ios-git-network-outline">\n              </ion-icon>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        selector: 'page-form',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/form/form.html"*/'<!--\n  Generated template for the Form page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebookC">\n    <ion-title>form</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div>\n    <ion-slides [navPush]="form" pager >\n        <ion-slide >\n        <img src="assets/images/fourth.png" class="imgsize">\n      </ion-slide>\n      <ion-slide>\n         <img src="assets/images/first.png" class="imgsize">\n      </ion-slide>\n      <ion-slide>\n         <img src="assets/images/third.jpg" class="imgsize">\n      </ion-slide>\n         <ion-slide>\n         <img src="assets/images/naturethree.jpg" class="imgsize">\n         </ion-slide>\n      </ion-slides>\n  </div>\n  <div>\n    <ion-slides ionSlideNextStart>\n        <ion-slide>\n          <ion-row>\n            <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n              <div>\n          <img src="assets/images/firstone.png" class="findone">\n          <code>₹2300</code>\n              </div>\n            </ion-col>\n            <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                <div>\n                <img src="assets/images/secondone.jpg" class="findone">\n                <code>₹2000</code>\n                </div>\n                  </ion-col>\n                  <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                    <div>\n                      <img src="assets/images/thirdone.png" class="findone">\n                      <code>₹2500</code>\n                    </div>\n                        </ion-col>\n          </ion-row>\n          \n        </ion-slide>\n        <ion-slide>\n            <ion-row>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                  <div >\n              <img src="assets/images/firstone.png" class="findone">\n              <code>₹2300</code>\n                  </div>\n                </ion-col>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                    <div>\n                    <img src="assets/images/secondone.jpg" class="findone">\n                    <code>₹2000</code>\n                    </div>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <div>\n                          <img src="assets/images/thirdone.png" class="findone">\n                          <code>₹2500</code>\n                        </div>\n                            </ion-col>\n              </ion-row>\n           \n        </ion-slide>\n        <ion-slide>\n            <ion-row>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                  <div >\n              <img src="assets/images/firstone.png" class="findone">\n              <code>₹2300</code>\n                  </div>\n                </ion-col>\n                <ion-col col-4 [navPush]="billing " (click)="presentLoading()">\n                    <div>\n                    <img src="assets/images/secondone.jpg" class="findone">\n                    <code>₹2000</code>\n                    </div>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <div>\n                          <img src="assets/images/thirdone.png" class="findone">\n                          <code>₹2500</code>\n                        </div>\n                            </ion-col>\n              </ion-row>\n            \n        </ion-slide>\n      </ion-slides>\n  </div>\n  <div>\n    <ion-slides>\n    <ion-slide>\n        <ion-row>\n            <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                <div>\n              <img src="assets/images/headone.png" class="findone">\n              <code>₹2600</code>\n                </div>\n                </ion-col>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                    <div>\n                    <img src="assets/images/headtwo.png" class="findone">\n                    <code>₹2000</code>\n                    </div>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                          <div>\n                          <img src="assets/images/headthree.png" class="findone">\n                          <code>₹2900</code>\n                          </div>\n                            </ion-col>\n            </ion-row>\n\n    </ion-slide>\n    <ion-slide>\n        <ion-row>\n            <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                <div>\n              <img src="assets/images/headone.png" class="findone">\n              <code>₹2600</code>\n                </div>\n                </ion-col>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                    <div>\n                    <img src="assets/images/headtwo.png" class="findone">\n                    <code>₹2000</code>\n                    </div>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                          <div>\n                          <img src="assets/images/headthree.png" class="findone">\n                          <code>₹2900</code>\n                          </div>\n                            </ion-col>\n            </ion-row>\n\n    </ion-slide>\n    <ion-slide>\n        <ion-row>\n            <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                <div>\n              <img src="assets/images/headone.png" class="findone">\n              <code>₹2600</code>\n                </div>\n                </ion-col>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                    <div>\n                    <img src="assets/images/headtwo.png" class="findone">\n                    <code>₹2000</code>\n                    </div>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                          <div>\n                          <img src="assets/images/headthree.png" class="findone">\n                          <code>₹2900</code>\n                          </div>\n                            </ion-col>\n            </ion-row>\n    </ion-slide>\n\n\n\n    </ion-slides>\n  </div>\n  <div>\n      <ion-slides>\n      <ion-slide>\n          <ion-row>\n              <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                  <div>\n                <img src="assets/images/mobile11.jpg" class="findone">\n                <code>₹2600</code>\n                  </div>\n                  </ion-col>\n                  <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                      <div>\n                      <img src="assets/images/mobile121.jpg" class="findone">\n                      <code>₹2000</code>\n                      </div>\n                        </ion-col>\n                        <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <div>\n                            <img src="assets/images/mobile13.jpg" class="findone">\n                            <code>₹2900</code>\n                            </div>\n                              </ion-col>\n              </ion-row>\n  \n      </ion-slide>\n      <ion-slide>\n          <ion-row>\n              <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                  <div>\n                <img src="assets/images/mobile11.jpg" class="findone">\n                <code>₹2600</code>\n                  </div>\n                  </ion-col>\n                  <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                      <div>\n                      <img src="assets/images/mobile121.jpg" class="findone">\n                      <code>₹2000</code>\n                      </div>\n                        </ion-col>\n                        <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <div>\n                            <img src="assets/images/mobile13.jpg" class="findone">\n                            <code>₹2900</code>\n                            </div>\n                              </ion-col>\n              </ion-row>\n  \n      </ion-slide>\n      <ion-slide>\n          <ion-row>\n              <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                  <div>\n                <img src="assets/images/mobile11.jpg" class="findone">\n                <code>₹2600</code>\n                  </div>\n                  </ion-col>\n                  <ion-col col-4 [navPush]="billing" (click)="presentLoading()" >\n                      <div>\n                      <img src="assets/images/mobile121.jpg" class="findone">\n                      <code>₹2000</code>\n                      </div>\n                        </ion-col>\n                        <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <div>\n                            <img src="assets/images/mobile13.jpg" class="findone">\n                            <code>₹2900</code>\n                            </div>\n                              </ion-col>\n              </ion-row>\n      </ion-slide>\n  \n  \n  \n      </ion-slides>\n    </div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/form/form.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        selector: 'page-newone',template:/*ion-inline-start:"/home/cloudlogic/smartpondyone/src/pages/newone/newone.html"*/'\n<ion-header>\n    \n      <ion-navbar color="facebookC">\n        <ion-title >Shopping</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n        <ion-icon class="iconsize"  name="ios-cart-outline">\n            </ion-icon>\n            </button>\n            </ion-buttons >\n      \n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content>\n      <div>\n          <!-- <ion-card-header>\n              Header\n            </ion-card-header> -->\n        <ion-slides [navPush]="form" pager >\n            <ion-slide >\n            <img src="assets/images/onefour.jpg" class="imgsize">\n          </ion-slide>\n          <ion-slide>\n             <img src="assets/images/onenewtwo.jpg" class="imgsize">\n          </ion-slide>\n          <ion-slide>\n             <img src="assets/images/onefour.jpg" class="imgsize">\n          </ion-slide>\n             <ion-slide>\n             <img src="assets/images/onethree.jpg" class="imgsize">\n             </ion-slide>\n          </ion-slides>\n      </div>\n      <div>\n        <ion-slides ionSlideNextStart>\n            <ion-slide>\n              <ion-row>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                  <div>\n              <img src="assets/images/e1.jpg" class="findone">\n              <code>₹2300</code>\n                  </div>\n                </ion-col>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                    <div>\n                    <img src="assets/images/e2.jpg" class="findone">\n                    <code>₹2000</code>\n                    </div>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <div>\n                          <img src="assets/images/e3.jpg" class="findone">\n                          <code>₹2500</code>\n                        </div>\n                            </ion-col>\n              </ion-row>\n              \n            </ion-slide>\n            <ion-slide>\n                <ion-row>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                      <div >\n                  <img src="assets/images/e8.jpg" class="findone">\n                  <code>₹2300</code>\n                      </div>\n                    </ion-col>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <div>\n                        <img src="assets/images/e5.jpg" class="findone">\n                        <code>₹2000</code>\n                        </div>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <div>\n                              <img src="assets/images/e6.jpg" class="findone">\n                              <code>₹2500</code>\n                            </div>\n                                </ion-col>\n                  </ion-row>\n               \n            </ion-slide>\n            <ion-slide>\n                <ion-row>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                      <div >\n                  <img src="assets/images/e7.jpg" class="findone">\n                  <code>₹2300</code>\n                      </div>\n                    </ion-col>\n                    <ion-col col-4 [navPush]="billing " (click)="presentLoading()">\n                        <div>\n                        <img src="assets/images/e8.jpg" class="findone">\n                        <code>₹2000</code>\n                        </div>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <div>\n                              <img src="assets/images/e3.jpg" class="findone">\n                              <code>₹2500</code>\n                            </div>\n                                </ion-col>\n                  </ion-row>\n                \n            </ion-slide>\n          </ion-slides>\n      </div>\n      <div>\n        <ion-slides>\n        <ion-slide>\n            <ion-row>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                    <div>\n                  <img src="assets/images/headone.png" class="findone">\n                  <code>₹2600</code>\n                    </div>\n                    </ion-col>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <div>\n                        <img src="assets/images/headtwo.png" class="findone">\n                        <code>₹2000</code>\n                        </div>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                              <div>\n                              <img src="assets/images/headthree.png" class="findone">\n                              <code>₹2900</code>\n                              </div>\n                                </ion-col>\n                </ion-row>\n    \n        </ion-slide>\n        <ion-slide>\n            <ion-row>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                    <div>\n                  <img src="assets/images/headone.png" class="findone">\n                  <code>₹2600</code>\n                    </div>\n                    </ion-col>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <div>\n                        <img src="assets/images/headtwo.png" class="findone">\n                        <code>₹2000</code>\n                        </div>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                              <div>\n                              <img src="assets/images/headthree.png" class="findone">\n                              <code>₹2900</code>\n                              </div>\n                                </ion-col>\n                </ion-row>\n    \n        </ion-slide>\n        <ion-slide>\n            <ion-row>\n                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                    <div>\n                  <img src="assets/images/headone.png" class="findone">\n                  <code>₹2600</code>\n                    </div>\n                    </ion-col>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <div>\n                        <img src="assets/images/headtwo.png" class="findone">\n                        <code>₹2000</code>\n                        </div>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                              <div>\n                              <img src="assets/images/headthree.png" class="findone">\n                              <code>₹2900</code>\n                              </div>\n                                </ion-col>\n                </ion-row>\n        </ion-slide>\n    \n    \n    \n        </ion-slides>\n      </div>\n      <div>\n          <ion-slides>\n          <ion-slide>\n              <ion-row>\n                  <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                      <div>\n                    <img src="assets/images/f1.jpg" class="findone">\n                    <code>₹2600</code>\n                      </div>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                          <div>\n                          <img src="assets/images/f2.jpg" class="findone">\n                          <code>₹2000</code>\n                          </div>\n                            </ion-col>\n                            <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <div>\n                                <img src="assets/images/f5.jpg" class="findone">\n                                <code>₹2900</code>\n                                </div>\n                                  </ion-col>\n                  </ion-row>\n      \n          </ion-slide>\n          <ion-slide>\n              <ion-row>\n                  <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                      <div>\n                    <img src="assets/images/f3.jpg" class="findone">\n                    <code>₹2600</code>\n                      </div>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                          <div>\n                          <img src="assets/images/f7.jpg" class="findone">\n                          <code>₹2000</code>\n                          </div>\n                            </ion-col>\n                            <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <div>\n                                <img src="assets/images/f5.jpg" class="findone">\n                                <code>₹2900</code>\n                                </div>\n                                  </ion-col>\n                  </ion-row>\n      \n          </ion-slide>\n          <ion-slide>\n              <ion-row>\n                  <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                      <div>\n                    <img src="assets/images/f4.jpg" class="findone">\n                    <code>₹2600</code>\n                      </div>\n                      </ion-col>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()" >\n                          <div>\n                          <img src="assets/images/f2.jpg" class="findone">\n                          <code>₹2000</code>\n                          </div>\n                            </ion-col>\n                            <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                <div>\n                                <img src="assets/images/f6.jpg" class="findone">\n                                <code>₹2900</code>\n                                </div>\n                                  </ion-col>\n                  </ion-row>\n          </ion-slide>\n      \n      \n      \n          </ion-slides>\n        </div>\n        <div>\n            <ion-slides>\n            <ion-slide>\n                <ion-row>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <div>\n                      <img src="assets/images/g1.jpg" class="findone">\n                      <code>₹2600</code>\n                        </div>\n                        </ion-col>\n                        <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <div>\n                            <img src="assets/images/g2.jpg" class="findone">\n                            <code>₹2000</code>\n                            </div>\n                              </ion-col>\n                              <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                  <div>\n                                  <img src="assets/images/g5.jpg" class="findone">\n                                  <code>₹2900</code>\n                                  </div>\n                                    </ion-col>\n                    </ion-row>\n        \n            </ion-slide>\n            <ion-slide>\n                <ion-row>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <div>\n                      <img src="assets/images/g8.jpg" class="findone">\n                      <code>₹2600</code>\n                        </div>\n                        </ion-col>\n                        <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                            <div>\n                            <img src="assets/images/g7.jpg" class="findone">\n                            <code>₹2000</code>\n                            </div>\n                              </ion-col>\n                              <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                  <div>\n                                  <img src="assets/images/g3.jpg" class="findone">\n                                  <code>₹2900</code>\n                                  </div>\n                                    </ion-col>\n                    </ion-row>\n        \n            </ion-slide>\n            <ion-slide>\n                <ion-row>\n                    <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                        <div>\n                      <img src="assets/images/g2.jpg" class="findone">\n                      <code>₹2600</code>\n                        </div>\n                        </ion-col>\n                        <ion-col col-4 [navPush]="billing" (click)="presentLoading()" >\n                            <div>\n                            <img src="assets/images/g6.jpg" class="findone">\n                            <code>₹2000</code>\n                            </div>\n                              </ion-col>\n                              <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                  <div>\n                                  <img src="assets/images/g4.jpg" class="findone">\n                                  <code>₹2900</code>\n                                  </div>\n                                    </ion-col>\n                    </ion-row>\n            </ion-slide>\n        \n        \n        \n            </ion-slides>\n          </div>\n          <div>\n              <ion-slides>\n              <ion-slide>\n                  <ion-row>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                          <div>\n                        <img src="assets/images/headone.png" class="findone">\n                        <code>₹2600</code>\n                          </div>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                              <div>\n                              <img src="assets/images/headtwo.png" class="findone">\n                              <code>₹2000</code>\n                              </div>\n                                </ion-col>\n                                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                    <div>\n                                    <img src="assets/images/headthree.png" class="findone">\n                                    <code>₹2900</code>\n                                    </div>\n                                      </ion-col>\n                      </ion-row>\n          \n              </ion-slide>\n              <ion-slide>\n                  <ion-row>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                          <div>\n                        <img src="assets/images/headone.png" class="findone">\n                        <code>₹2600</code>\n                          </div>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                              <div>\n                              <img src="assets/images/headtwo.png" class="findone">\n                              <code>₹2000</code>\n                              </div>\n                                </ion-col>\n                                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                    <div>\n                                    <img src="assets/images/headthree.png" class="findone">\n                                    <code>₹2900</code>\n                                    </div>\n                                      </ion-col>\n                      </ion-row>\n          \n              </ion-slide>\n              <ion-slide>\n                  <ion-row>\n                      <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                          <div>\n                        <img src="assets/images/headone.png" class="findone">\n                        <code>₹2600</code>\n                          </div>\n                          </ion-col>\n                          <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                              <div>\n                              <img src="assets/images/headtwo.png" class="findone">\n                              <code>₹2000</code>\n                              </div>\n                                </ion-col>\n                                <ion-col col-4 [navPush]="billing" (click)="presentLoading()">\n                                    <div>\n                                    <img src="assets/images/headthree.png" class="findone">\n                                    <code>₹2900</code>\n                                    </div>\n                                      </ion-col>\n                      </ion-row>\n              </ion-slide>\n          \n          \n          \n              </ion-slides>\n            </div>\n      \n    \n    </ion-content>\n    '/*ion-inline-end:"/home/cloudlogic/smartpondyone/src/pages/newone/newone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Newone);

//# sourceMappingURL=newone.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_form_form__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_space_space__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_billing_billing__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_newone_newone__ = __webpack_require__(195);
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
            __WEBPACK_IMPORTED_MODULE_11__pages_newone_newone__["a" /* Newone */]
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
            __WEBPACK_IMPORTED_MODULE_11__pages_newone_newone__["a" /* Newone */]
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

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(196);
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

},[197]);
//# sourceMappingURL=main.js.map