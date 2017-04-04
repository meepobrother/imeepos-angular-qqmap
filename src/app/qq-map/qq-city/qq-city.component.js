"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QqCityComponent = (function () {
    function QqCityComponent() {
        var _this = this;
        this.complete = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this.options = {
            complete: function (res) {
                _this.complete.emit(res);
            },
            error: function (err) {
                _this.error.emit(err);
            }
        };
        this.city = new qq.maps.CityService(this.options);
    }
    QqCityComponent.prototype.ngOnInit = function () {
        this.searchLocalCity();
    };
    QqCityComponent.prototype.searchLocalCity = function () {
        console.log('sss', this.latlng);
        this.city.searchLocalCity();
    };
    Object.defineProperty(QqCityComponent.prototype, "cityname", {
        get: function () {
            return this._cityname;
        },
        set: function (val) {
            this._cityname = val;
            this.searchCityByName(val);
        },
        enumerable: true,
        configurable: true
    });
    QqCityComponent.prototype.searchCityByName = function (cityname) {
        this.city.searchCityByName(cityname);
    };
    Object.defineProperty(QqCityComponent.prototype, "latlng", {
        get: function () {
            return this._latlng;
        },
        set: function (val) {
            this._latlng = val;
            if (val) {
                this.searchCityByLatLng(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    QqCityComponent.prototype.searchCityByLatLng = function (latlng) {
        console.log('lat lng 定位', latlng);
        this.city.searchCityByLatLng(latlng);
    };
    Object.defineProperty(QqCityComponent.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        set: function (val) {
            this._ip = val;
            this.searchCityByIP(val);
        },
        enumerable: true,
        configurable: true
    });
    QqCityComponent.prototype.searchCityByIP = function (ip) {
        this.city.searchCityByIP(ip);
    };
    Object.defineProperty(QqCityComponent.prototype, "areaCode", {
        get: function () {
            return this._areaCode;
        },
        set: function (val) {
            this._areaCode = val;
            this.searchCityByAreaCode(val);
        },
        enumerable: true,
        configurable: true
    });
    QqCityComponent.prototype.searchCityByAreaCode = function (areaCode) {
        this.city.searchCityByAreaCode(areaCode);
    };
    Object.defineProperty(QqCityComponent.prototype, "completeSet", {
        // 设置检索成功后的回调函数
        get: function () {
            return this.options.complete;
        },
        set: function (val) {
            this.options.complete = val;
            this.setComplete(val);
        },
        enumerable: true,
        configurable: true
    });
    QqCityComponent.prototype.setComplete = function (complete) {
        this.city.setComplete(complete);
    };
    Object.defineProperty(QqCityComponent.prototype, "errorSet", {
        // 设置检索失败后的回调函数
        get: function () {
            return this.options.error;
        },
        set: function (val) {
            this.options.error = val;
            this.setError(val);
        },
        enumerable: true,
        configurable: true
    });
    QqCityComponent.prototype.setError = function (error) {
        this.city.setError(error);
    };
    return QqCityComponent;
}());
__decorate([
    core_1.Output()
], QqCityComponent.prototype, "complete", void 0);
__decorate([
    core_1.Output()
], QqCityComponent.prototype, "error", void 0);
__decorate([
    core_1.Input()
], QqCityComponent.prototype, "cityname", null);
__decorate([
    core_1.Input()
], QqCityComponent.prototype, "latlng", null);
__decorate([
    core_1.Input()
], QqCityComponent.prototype, "ip", null);
__decorate([
    core_1.Input()
], QqCityComponent.prototype, "areaCode", null);
__decorate([
    core_1.Input()
], QqCityComponent.prototype, "completeSet", null);
__decorate([
    core_1.Input()
], QqCityComponent.prototype, "errorSet", null);
QqCityComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-city',
        templateUrl: './qq-city.component.html',
        styleUrls: ['./qq-city.component.css']
    })
], QqCityComponent);
exports.QqCityComponent = QqCityComponent;
