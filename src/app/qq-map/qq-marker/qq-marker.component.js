"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QqMarkerComponent = (function () {
    function QqMarkerComponent() {
        this._create = false;
        this.click = new core_1.EventEmitter();
        this.dragend = new core_1.EventEmitter();
    }
    Object.defineProperty(QqMarkerComponent.prototype, "animation", {
        get: function () {
            return this._animation;
        },
        set: function (val) {
            this._animation = val;
            if (val) {
                this.marker && this.marker.setAnimation(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "clickAble", {
        get: function () {
            return this._clickAble;
        },
        set: function (val) {
            this._clickAble = val;
            this.marker && this.marker.setClickable(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "cursor", {
        // 标注的鼠标样式
        get: function () {
            return this.marker.getCursor();
        },
        set: function (val) {
            if (val) {
                this.marker.setCursor(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "draggable", {
        // 标注是否可拖拽
        get: function () {
            return this.marker.getDraggable();
        },
        set: function (val) {
            this.marker.setDraggable(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "flat", {
        // 是否有阴影
        get: function () {
            return this.marker.getFlat();
        },
        set: function (val) {
            this.marker.setFlat(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "icon", {
        //标注的图标
        get: function () {
            return this.marker.getIcon();
        },
        set: function (val) {
            this.marker.setIcon(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "map", {
        get: function () {
            return this._map;
        },
        set: function (val) {
            this._map = val;
            this.marker && this.marker.setMap(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (val) {
            this._position = val;
            if (val) {
                this.marker && this.marker.setPosition(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "shadow", {
        // 标注的阴影
        get: function () {
            return this.marker.getShadow();
        },
        set: function (val) {
            this.marker.setShadow(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "shape", {
        // 标注的可响应区域
        get: function () {
            return this.marker.getShape();
        },
        set: function (val) {
            this.marker.setShape(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "title", {
        // 标注的名称属性
        get: function () {
            return this.marker.getTitle();
        },
        set: function (val) {
            this.marker.setTitle(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "visible", {
        // 标注是否可见
        get: function () {
            return this.marker.getVisible();
        },
        set: function (val) {
            this.marker.setVisible(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "zindex", {
        get: function () {
            return this._zindex;
        },
        set: function (val) {
            this._zindex = val;
            if (this._zindex) {
                this.marker && this.marker.setZIndex(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqMarkerComponent.prototype, "rotation", {
        // marker的旋转角度
        get: function () {
            return this.marker.getRotation();
        },
        set: function (val) {
            this.marker.setRotation(val);
        },
        enumerable: true,
        configurable: true
    });
    QqMarkerComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(QqMarkerComponent.prototype, "create", {
        get: function () {
            return this._create;
        },
        set: function (val) {
            this._create = val;
            if (this._create) {
                this.initCreate();
            }
        },
        enumerable: true,
        configurable: true
    });
    QqMarkerComponent.prototype.initCreate = function () {
        var _this = this;
        this._option = {
            map: this._map,
            position: this._position
        };
        this.marker = new qq.maps.Marker(this._option);
        qq.maps.event.addListener(this.marker, 'click', function (e) {
            _this.click.emit(_this.marker);
        });
        qq.maps.event.addListener(this.marker, 'dragend', function (e) {
            _this.dragend.emit(_this.marker);
        });
    };
    return QqMarkerComponent;
}());
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "animation", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "clickAble", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "cursor", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "draggable", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "flat", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "icon", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "map", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "position", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "shadow", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "shape", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "title", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "visible", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "zindex", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "rotation", null);
__decorate([
    core_1.Input()
], QqMarkerComponent.prototype, "create", null);
__decorate([
    core_1.Output()
], QqMarkerComponent.prototype, "click", void 0);
__decorate([
    core_1.Output()
], QqMarkerComponent.prototype, "dragend", void 0);
QqMarkerComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-marker',
        templateUrl: './qq-marker.component.html',
        styleUrls: ['./qq-marker.component.css']
    })
], QqMarkerComponent);
exports.QqMarkerComponent = QqMarkerComponent;
