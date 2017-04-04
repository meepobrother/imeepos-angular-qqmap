"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QqMarkerClusterComponent = (function () {
    function QqMarkerClusterComponent() {
        this.markerClusterClick = new core_1.EventEmitter();
    }
    Object.defineProperty(QqMarkerClusterComponent.prototype, "map", {
        get: function () {
            return this._map;
        },
        set: function (val) {
            this._map = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerClusterComponent.prototype, "markers", {
        get: function () {
            return this._markers;
        },
        set: function (val) {
            this._markers = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerClusterComponent.prototype, "minimumClusterSize", {
        get: function () {
            return this._minimumClusterSize;
        },
        set: function (val) {
            this._minimumClusterSize = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerClusterComponent.prototype, "zoomOnClick", {
        get: function () {
            return this._zoomOnClick;
        },
        set: function (val) {
            this._zoomOnClick = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerClusterComponent.prototype, "gridSize", {
        get: function () {
            return this._gridSize;
        },
        set: function (val) {
            this._gridSize = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerClusterComponent.prototype, "averageCenter", {
        get: function () {
            return this._averageCenter;
        },
        set: function (val) {
            this._averageCenter = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerClusterComponent.prototype, "maxZoom", {
        get: function () {
            return this._maxZoom;
        },
        set: function (val) {
            if (val < 4) {
                val = 4;
            }
            if (val > 18) {
                val = 18;
            }
            this._maxZoom = val;
        },
        enumerable: true,
        configurable: true
    });
    QqMarkerClusterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MarkerCluster = new qq.maps.MarkerCluster({
            map: this._map,
            minimumClusterSize: this._minimumClusterSize || 2,
            markers: this._markers,
            zoomOnClick: this._zoomOnClick,
            gridSize: this._gridSize || 60,
            averageCenter: this._averageCenter,
            maxZoom: this._maxZoom || 18
        });
        qq.maps.event.addListener(this.MarkerCluster, 'clusterclick', function (evt) {
            _this.markerClusterClick.emit(evt);
        });
    };
    return QqMarkerClusterComponent;
}());
__decorate([
    core_1.Input()
], QqMarkerClusterComponent.prototype, "map", null);
__decorate([
    core_1.Input()
], QqMarkerClusterComponent.prototype, "markers", null);
__decorate([
    core_1.Input()
], QqMarkerClusterComponent.prototype, "minimumClusterSize", null);
__decorate([
    core_1.Input()
], QqMarkerClusterComponent.prototype, "zoomOnClick", null);
__decorate([
    core_1.Input()
], QqMarkerClusterComponent.prototype, "gridSize", null);
__decorate([
    core_1.Input()
], QqMarkerClusterComponent.prototype, "averageCenter", null);
__decorate([
    core_1.Input()
], QqMarkerClusterComponent.prototype, "maxZoom", null);
__decorate([
    core_1.Output()
], QqMarkerClusterComponent.prototype, "markerClusterClick", void 0);
QqMarkerClusterComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-marker-cluster',
        templateUrl: './qq-marker-cluster.component.html',
        styleUrls: ['./qq-marker-cluster.component.css']
    })
], QqMarkerClusterComponent);
exports.QqMarkerClusterComponent = QqMarkerClusterComponent;
