"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PolylineOptions = (function () {
    function PolylineOptions() {
        this.clickable = false;
        this.cursor = '';
        this.editable = false;
        this.path = [];
        this.strokeColor = '#ccc';
        this.strokeDashStyle = 'solid';
        this.strokeWeight = 2;
        this.visible = false;
        this.zIndex = 1;
    }
    PolylineOptions.prototype.setMap = function (map) {
        this.map = map;
    };
    return PolylineOptions;
}());
exports.PolylineOptions = PolylineOptions;
var QqPolylineComponent = (function () {
    function QqPolylineComponent() {
        this.polylineOptions = new PolylineOptions();
        this.polyline = new qq.maps.Polyline(this.polylineOptions);
    }
    Object.defineProperty(QqPolylineComponent.prototype, "options", {
        get: function () {
            return this.polylineOptions;
        },
        set: function (val) {
            this.polylineOptions = val;
        },
        enumerable: true,
        configurable: true
    });
    QqPolylineComponent.prototype.ngOnInit = function () {
        this.polyline.setOptions(this.polylineOptions);
    };
    return QqPolylineComponent;
}());
__decorate([
    core_1.Input()
], QqPolylineComponent.prototype, "options", null);
QqPolylineComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-polyline',
        templateUrl: './qq-polyline.component.html',
        styleUrls: ['./qq-polyline.component.css']
    })
], QqPolylineComponent);
exports.QqPolylineComponent = QqPolylineComponent;