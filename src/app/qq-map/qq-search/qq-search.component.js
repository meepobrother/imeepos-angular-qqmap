"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QqSearchComponent = (function () {
    function QqSearchComponent() {
        var _this = this;
        this.complete = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this._clear = false;
        this.option = {
            complete: function (res) {
                _this.complete.emit(res);
            },
            error: function (res) {
                _this.error.emit(res);
            }
        };
        this.service = new qq.maps.SearchService(this.option);
    }
    Object.defineProperty(QqSearchComponent.prototype, "search", {
        get: function () {
            return this._search;
        },
        set: function (val) {
            this._search = val;
            if (this._search) {
                this.service.search(this._search);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqSearchComponent.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (val) {
            this._location = val;
            if (this._location) {
                this.service.setLocation(this._location);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqSearchComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (val) {
            this._page = val;
            if (this._page) {
                this.service.setPageIndex(this._page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqSearchComponent.prototype, "pageCount", {
        get: function () {
            return this._pageCount;
        },
        set: function (val) {
            this._pageCount = val;
            if (this._pageCount) {
                this.service.setPageCapacity(this._pageCount);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqSearchComponent.prototype, "clear", {
        get: function () {
            return this._clear;
        },
        set: function (val) {
            this._clear = val;
            this.service.clear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QqSearchComponent.prototype, "map", {
        get: function () {
            return this._map;
        },
        set: function (val) {
            this._map = val;
            if (this._map) {
                this.service.clear();
                this.option.map = this._map;
                this.service = new qq.maps.SearchService(this.option);
            }
        },
        enumerable: true,
        configurable: true
    });
    QqSearchComponent.prototype.ngOnInit = function () {
    };
    return QqSearchComponent;
}());
__decorate([
    core_1.Output()
], QqSearchComponent.prototype, "complete", void 0);
__decorate([
    core_1.Output()
], QqSearchComponent.prototype, "error", void 0);
__decorate([
    core_1.Input()
], QqSearchComponent.prototype, "search", null);
__decorate([
    core_1.Input()
], QqSearchComponent.prototype, "location", null);
__decorate([
    core_1.Input()
], QqSearchComponent.prototype, "page", null);
__decorate([
    core_1.Input()
], QqSearchComponent.prototype, "pageCount", null);
__decorate([
    core_1.Input()
], QqSearchComponent.prototype, "clear", null);
__decorate([
    core_1.Input()
], QqSearchComponent.prototype, "map", null);
QqSearchComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-search',
        templateUrl: './qq-search.component.html',
        styleUrls: ['./qq-search.component.css']
    })
], QqSearchComponent);
exports.QqSearchComponent = QqSearchComponent;
