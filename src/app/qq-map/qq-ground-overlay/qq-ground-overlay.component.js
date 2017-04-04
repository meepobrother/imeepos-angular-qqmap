"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GroundOverlayOptions = (function () {
    function GroundOverlayOptions() {
        this.clickable = false;
        this.cursor = '';
        this.imageUrl = '';
        this.opacity = 0.8;
        this.visible = false;
        this.zIndex = 1;
    }
    return GroundOverlayOptions;
}());
exports.GroundOverlayOptions = GroundOverlayOptions;
var QqGroundOverlayComponent = (function () {
    function QqGroundOverlayComponent() {
        this.groundOverlayOptions = new GroundOverlayOptions();
        this.groundOverlay = new qq.maps.GroundOverlay(this.groundOverlayOptions);
    }
    Object.defineProperty(QqGroundOverlayComponent.prototype, "options", {
        get: function () {
            return this.groundOverlayOptions;
        },
        set: function (val) {
            this.groundOverlayOptions = val;
        },
        enumerable: true,
        configurable: true
    });
    QqGroundOverlayComponent.prototype.ngOnInit = function () {
        this.groundOverlay.setOptions(this.groundOverlayOptions);
    };
    return QqGroundOverlayComponent;
}());
__decorate([
    core_1.Input()
], QqGroundOverlayComponent.prototype, "options", null);
QqGroundOverlayComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-ground-overlay',
        templateUrl: './qq-ground-overlay.component.html',
        styleUrls: ['./qq-ground-overlay.component.css']
    })
], QqGroundOverlayComponent);
exports.QqGroundOverlayComponent = QqGroundOverlayComponent;
