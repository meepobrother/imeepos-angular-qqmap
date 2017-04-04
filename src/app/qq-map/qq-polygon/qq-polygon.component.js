"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PolygonOptions = (function () {
    function PolygonOptions() {
        this.clickable = false;
        this.cursor = '';
        this.editable = false;
        this.fillColor = '#ccc';
        this.path = [];
        this.strokeColor = '#ccc';
        this.strokeDashStyle = '';
        this.strokeWeight = 2;
        this.visible = false;
        this.zIndex = 1;
    }
    return PolygonOptions;
}());
exports.PolygonOptions = PolygonOptions;
var QqPolygonComponent = (function () {
    function QqPolygonComponent() {
        this.polygonOptions = new PolygonOptions();
        this.Polygon = qq.maps.Polygon(this.polygonOptions);
    }
    Object.defineProperty(QqPolygonComponent.prototype, "options", {
        get: function () {
            return this.polygonOptions;
        },
        set: function (val) {
            this.polygonOptions = val;
        },
        enumerable: true,
        configurable: true
    });
    QqPolygonComponent.prototype.ngOnInit = function () {
        this.Polygon.setOptions(this.polygonOptions);
    };
    return QqPolygonComponent;
}());
__decorate([
    core_1.Input()
], QqPolygonComponent.prototype, "options", null);
QqPolygonComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-polygon',
        templateUrl: './qq-polygon.component.html',
        styleUrls: ['./qq-polygon.component.css']
    })
], QqPolygonComponent);
exports.QqPolygonComponent = QqPolygonComponent;
