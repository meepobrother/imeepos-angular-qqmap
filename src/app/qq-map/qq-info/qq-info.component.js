"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InfoWindowOptions = (function () {
    function InfoWindowOptions() {
        this.zIndex = 1;
        this.show = false;
    }
    InfoWindowOptions.prototype.closeclick = function (e) {
        e.show = false;
    };
    return InfoWindowOptions;
}());
exports.InfoWindowOptions = InfoWindowOptions;
var QqInfoComponent = (function () {
    function QqInfoComponent(ele) {
        this.ele = ele;
        this.closeclick = new core_1.EventEmitter();
        this.infoWindow = this.infoWindow || new qq.maps.InfoWindow();
    }
    Object.defineProperty(QqInfoComponent.prototype, "options", {
        get: function () {
            return this.infoWindowOptions;
        },
        set: function (val) {
            this.infoWindowOptions = val;
            if (this.infoWindowOptions.show) {
                this.infoWindow.open();
            }
        },
        enumerable: true,
        configurable: true
    });
    QqInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoWindowOptions.content = this.ele.nativeElement;
        this.infoWindow.setOptions(this.infoWindowOptions);
        qq.maps.event.addListener(this.infoWindow, 'closeclick', function (e) {
            _this.closeclick.emit(_this.infoWindowOptions);
        });
    };
    return QqInfoComponent;
}());
__decorate([
    core_1.Input()
], QqInfoComponent.prototype, "options", null);
__decorate([
    core_1.Output()
], QqInfoComponent.prototype, "closeclick", void 0);
QqInfoComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-info',
        templateUrl: './qq-info.component.html',
        styleUrls: ['./qq-info.component.css']
    })
], QqInfoComponent);
exports.QqInfoComponent = QqInfoComponent;
