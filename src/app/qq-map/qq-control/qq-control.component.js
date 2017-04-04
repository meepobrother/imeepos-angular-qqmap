"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ControlPosition;
(function (ControlPosition) {
    ControlPosition[ControlPosition["TOP_LEFT"] = 0] = "TOP_LEFT";
    ControlPosition[ControlPosition["TOP_CENTER"] = 1] = "TOP_CENTER";
    ControlPosition[ControlPosition["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    ControlPosition[ControlPosition["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    ControlPosition[ControlPosition["BOTTOM_CENTER"] = 4] = "BOTTOM_CENTER";
    ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    ControlPosition[ControlPosition["LEFT_TOP"] = 6] = "LEFT_TOP";
    ControlPosition[ControlPosition["LEFT_CENTER"] = 7] = "LEFT_CENTER";
    ControlPosition[ControlPosition["LEFT_BOTTOM"] = 8] = "LEFT_BOTTOM";
    ControlPosition[ControlPosition["RIGHT_TOP"] = 9] = "RIGHT_TOP";
    ControlPosition[ControlPosition["RIGHT_CENTER"] = 10] = "RIGHT_CENTER";
    ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 11] = "RIGHT_BOTTOM";
    ControlPosition[ControlPosition["CENTER"] = 12] = "CENTER";
})(ControlPosition = exports.ControlPosition || (exports.ControlPosition = {}));
var QqControlComponent = (function () {
    function QqControlComponent(ele) {
        this.ele = ele;
        this.index = 1;
    }
    Object.defineProperty(QqControlComponent.prototype, "map", {
        get: function () {
            return this._map;
        },
        set: function (val) {
            this._map = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqControlComponent.prototype, "position", {
        get: function () {
            return this._postion;
        },
        set: function (val) {
            if (val == 'TOP_LEFT') {
                this._postion = qq.maps.ControlPosition.TOP_LEFT;
            }
            else if (val == 'TOP_CENTER') {
                this._postion = qq.maps.ControlPosition.TOP_CENTER;
            }
            else if (val == 'TOP_RIGHT') {
                this._postion = qq.maps.ControlPosition.TOP_RIGHT;
            }
            else if (val == 'BOTTOM_LEFT') {
                this._postion = qq.maps.ControlPosition.BOTTOM_LEFT;
            }
            else if (val == 'BOTTOM_CENTER') {
                this._postion = qq.maps.ControlPosition.BOTTOM_CENTER;
            }
            else if (val == 'BOTTOM_RIGHT') {
                this._postion = qq.maps.ControlPosition.BOTTOM_RIGHT;
            }
            else if (val == 'LEFT_TOP') {
                this._postion = qq.maps.ControlPosition.LEFT_TOP;
            }
            else if (val == 'LEFT_CENTER') {
                this._postion = qq.maps.ControlPosition.LEFT_CENTER;
            }
            else if (val == 'LEFT_BOTTOM') {
                this._postion = qq.maps.ControlPosition.LEFT_BOTTOM;
            }
            else if (val == 'RIGHT_TOP') {
                this._postion = qq.maps.ControlPosition.RIGHT_TOP;
            }
            else if (val == 'RIGHT_CENTER') {
                this._postion = qq.maps.ControlPosition.RIGHT_CENTER;
            }
            else if (val == 'RIGHT_BOTTOM') {
                this._postion = qq.maps.ControlPosition.RIGHT_BOTTOM;
            }
            else if (val == 'CENTER') {
                this._postion = qq.maps.ControlPosition.CENTER;
            }
            else {
                this._postion = qq.maps.ControlPosition.TOP_CENTER;
            }
        },
        enumerable: true,
        configurable: true
    });
    QqControlComponent.prototype.ngOnInit = function () {
        this._map.controls[this._postion].push(this.ele.nativeElement);
    };
    return QqControlComponent;
}());
__decorate([
    core_1.Input()
], QqControlComponent.prototype, "map", null);
__decorate([
    core_1.Input()
], QqControlComponent.prototype, "position", null);
QqControlComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-control',
        templateUrl: './qq-control.component.html',
        styleUrls: ['./qq-control.component.css']
    })
], QqControlComponent);
exports.QqControlComponent = QqControlComponent;
