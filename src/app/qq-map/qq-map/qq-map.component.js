"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QqMapComponent = (function () {
    function QqMapComponent(ele) {
        var _this = this;
        this.ele = ele;
        this.option = {
            draggable: true,
            scrollwheel: true,
            disableDoubleClickZoom: false,
            panControl: false,
            panControlOptions: {},
            scaleControl: false,
            scaleControlOptions: {},
            mapTypeControl: false,
            mapTypeControlOptions: {
                mapTypeIds: []
            }
        };
        this.boundsChange = new core_1.EventEmitter();
        this.idle = new core_1.EventEmitter();
        this.mapSuccess = new core_1.EventEmitter();
        this.getBounds = new core_1.EventEmitter();
        console.log(this.option);
        this.map = new qq.maps.Map(this.ele.nativeElement, this.option);
        qq.maps.event.addListener(this.map, 'bounds_changed', function (res) {
            _this.boundsChange.emit(res);
        });
        qq.maps.event.addListener(this.map, 'idle', function (res) {
            _this.idle.emit('map now free');
        });
    }
    Object.defineProperty(QqMapComponent.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        set: function (num) {
            this._zoom = num;
            if (this._zoom) {
                this.map.zoomTo(this._zoom);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMapComponent.prototype, "draggable", {
        get: function () {
            return this._draggable;
        },
        set: function (val) {
            this._draggable = val;
            this.option.draggable = val;
            this.map.setOptions(this.option);
        },
        enumerable: true,
        configurable: true
    });
    QqMapComponent.prototype.ngOnInit = function () {
        console.log('on init');
        var option = {
            zoom: this._zoom
        };
        this.map.setOptions(option);
        this.mapSuccess.emit(this.map);
    };
    Object.defineProperty(QqMapComponent.prototype, "center", {
        get: function () {
            return this._center;
        },
        set: function (center) {
            this._center = center;
            if (this._center) {
                this.map.panTo(this._center);
            }
        },
        enumerable: true,
        configurable: true
    });
    return QqMapComponent;
}());
__decorate([
    core_1.Output()
], QqMapComponent.prototype, "boundsChange", void 0);
__decorate([
    core_1.Output()
], QqMapComponent.prototype, "idle", void 0);
__decorate([
    core_1.Output()
], QqMapComponent.prototype, "mapSuccess", void 0);
__decorate([
    core_1.Input()
], QqMapComponent.prototype, "zoom", null);
__decorate([
    core_1.Input()
], QqMapComponent.prototype, "draggable", null);
__decorate([
    core_1.Output()
], QqMapComponent.prototype, "getBounds", void 0);
__decorate([
    core_1.Input()
], QqMapComponent.prototype, "center", null);
QqMapComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-map',
        templateUrl: './qq-map.component.html',
        styleUrls: ['./qq-map.component.css']
    })
], QqMapComponent);
exports.QqMapComponent = QqMapComponent;
