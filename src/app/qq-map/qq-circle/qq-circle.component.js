"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CircleOptions = (function () {
    function CircleOptions() {
        this.clickable = false;
        this.cursor = '';
        this.fillColor = '#ccc';
        this.radius = 2;
        this.strokeColor = '#ddd';
        this.strokeDashStyle = 'solid';
        this.strokeWeight = 2;
        this.visible = false;
        this.zIndex = 1;
    }
    return CircleOptions;
}());
exports.CircleOptions = CircleOptions;
var QqCircleComponent = (function () {
    function QqCircleComponent() {
        this.circleOptions = new CircleOptions();
        this.circle = qq.maps.Circle(this.circleOptions);
    }
    Object.defineProperty(QqCircleComponent.prototype, "options", {
        get: function () {
            return this.circleOptions;
        },
        set: function (val) {
            this.circleOptions = val;
        },
        enumerable: true,
        configurable: true
    });
    QqCircleComponent.prototype.ngOnInit = function () {
        this.circle.setOptions(this.circleOptions);
    };
    return QqCircleComponent;
}());
__decorate([
    core_1.Input()
], QqCircleComponent.prototype, "options", null);
QqCircleComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-circle',
        templateUrl: './qq-circle.component.html',
        styleUrls: ['./qq-circle.component.css']
    })
], QqCircleComponent);
exports.QqCircleComponent = QqCircleComponent;
