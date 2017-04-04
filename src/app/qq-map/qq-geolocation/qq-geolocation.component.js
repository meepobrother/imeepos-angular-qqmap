"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var QqGeolocationComponent = (function () {
    function QqGeolocationComponent() {
        this.key = '4MHBZ-JVL35-WLMII-Q3NME-3Z2G2-PKBJJ';
        this.success = new core_1.EventEmitter();
        this.geolocation = new qq.maps.Geolocation(this.key, 'app-qq-geolocation');
    }
    // 响应式
    QqGeolocationComponent.prototype.getLocation = function () {
        var _this = this;
        return Rx_1.Observable.create(function (r) {
            _this.geolocation.getLocation(function (res) {
                //成功
                r.next(res);
                r.complete();
            }, function () {
                //失败
                _this.geolocation.getIpLocation(function (res) {
                    //成功
                    r.next(res);
                    r.complete();
                }, function () {
                    //失败
                });
            }, { timeout: 2000 });
        });
    };
    QqGeolocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLocation().subscribe(function (res) {
            _this.success.emit(res);
        });
    };
    return QqGeolocationComponent;
}());
__decorate([
    core_1.Output()
], QqGeolocationComponent.prototype, "success", void 0);
QqGeolocationComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-geolocation',
        templateUrl: './qq-geolocation.component.html',
        styleUrls: ['./qq-geolocation.component.css']
    })
], QqGeolocationComponent);
exports.QqGeolocationComponent = QqGeolocationComponent;
