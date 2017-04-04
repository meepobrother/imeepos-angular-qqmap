"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QqAutocompleteComponent = (function () {
    function QqAutocompleteComponent() {
        this.confirmSuccess = new core_1.EventEmitter();
    }
    Object.defineProperty(QqAutocompleteComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (val) {
            this._options = val;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    QqAutocompleteComponent.prototype.ngOnInit = function () {
        this.init();
    };
    QqAutocompleteComponent.prototype.init = function () {
        this.place && this.place.dispose();
        this.place = new qq.maps.place.Autocomplete(this.input.nativeElement, this._options);
        this.addDomListener();
    };
    QqAutocompleteComponent.prototype.addDomListener = function () {
        var _this = this;
        qq.maps.event.addDomListener(this.place, 'confirm', function (res) {
            _this.confirmSuccess.emit(res);
        });
    };
    return QqAutocompleteComponent;
}());
__decorate([
    core_1.ViewChild('auto')
], QqAutocompleteComponent.prototype, "input", void 0);
__decorate([
    core_1.Output()
], QqAutocompleteComponent.prototype, "confirmSuccess", void 0);
__decorate([
    core_1.Input()
], QqAutocompleteComponent.prototype, "options", null);
QqAutocompleteComponent = __decorate([
    core_1.Component({
        selector: 'app-qq-autocomplete',
        templateUrl: './qq-autocomplete.component.html',
        styleUrls: ['./qq-autocomplete.component.css']
    })
], QqAutocompleteComponent);
exports.QqAutocompleteComponent = QqAutocompleteComponent;
