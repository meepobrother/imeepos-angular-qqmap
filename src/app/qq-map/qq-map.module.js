"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var qq_map_component_1 = require("./qq-map/qq-map.component");
var qq_marker_component_1 = require("./qq-marker/qq-marker.component");
var qq_label_component_1 = require("./qq-label/qq-label.component");
var qq_search_component_1 = require("./qq-search/qq-search.component");
var qq_gencoder_component_1 = require("./qq-gencoder/qq-gencoder.component");
var qq_driving_component_1 = require("./qq-driving/qq-driving.component");
var qq_spherical_component_1 = require("./qq-spherical/qq-spherical.component");
var qq_autocomplete_component_1 = require("./qq-autocomplete/qq-autocomplete.component");
var qq_city_component_1 = require("./qq-city/qq-city.component");
var qq_location_component_1 = require("./qq-location/qq-location.component");
var qq_control_component_1 = require("./qq-control/qq-control.component");
var qq_marker_cluster_component_1 = require("./qq-marker-cluster/qq-marker-cluster.component");
var qq_info_component_1 = require("./qq-info/qq-info.component");
var qq_polyline_component_1 = require("./qq-polyline/qq-polyline.component");
var qq_polygon_component_1 = require("./qq-polygon/qq-polygon.component");
var qq_circle_component_1 = require("./qq-circle/qq-circle.component");
var qq_ground_overlay_component_1 = require("./qq-ground-overlay/qq-ground-overlay.component");
var qq_overlay_component_1 = require("./qq-overlay/qq-overlay.component");
var qq_map_panes_component_1 = require("./qq-map-panes/qq-map-panes.component");
var qq_geolocation_component_1 = require("./qq-geolocation/qq-geolocation.component");
var QqMapModule = (function () {
    function QqMapModule() {
    }
    return QqMapModule;
}());
QqMapModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        exports: [
            qq_map_component_1.QqMapComponent,
            qq_marker_component_1.QqMarkerComponent,
            qq_label_component_1.QqLabelComponent,
            qq_search_component_1.QqSearchComponent,
            qq_gencoder_component_1.QqGencoderComponent,
            qq_driving_component_1.QqDrivingComponent,
            qq_spherical_component_1.QqSphericalComponent,
            qq_autocomplete_component_1.QqAutocompleteComponent,
            qq_city_component_1.QqCityComponent,
            qq_location_component_1.QqLocationComponent,
            qq_control_component_1.QqControlComponent,
            qq_marker_cluster_component_1.QqMarkerClusterComponent,
            qq_info_component_1.QqInfoComponent,
            qq_polyline_component_1.QqPolylineComponent,
            qq_polygon_component_1.QqPolygonComponent,
            qq_circle_component_1.QqCircleComponent,
            qq_ground_overlay_component_1.QqGroundOverlayComponent,
            qq_overlay_component_1.QqOverlayComponent,
            qq_map_panes_component_1.QqMapPanesComponent,
            qq_geolocation_component_1.QqGeolocationComponent
        ],
        declarations: [
            qq_map_component_1.QqMapComponent,
            qq_marker_component_1.QqMarkerComponent,
            qq_label_component_1.QqLabelComponent,
            qq_search_component_1.QqSearchComponent,
            qq_gencoder_component_1.QqGencoderComponent,
            qq_driving_component_1.QqDrivingComponent,
            qq_spherical_component_1.QqSphericalComponent,
            qq_autocomplete_component_1.QqAutocompleteComponent,
            qq_city_component_1.QqCityComponent,
            qq_location_component_1.QqLocationComponent,
            qq_control_component_1.QqControlComponent,
            qq_marker_cluster_component_1.QqMarkerClusterComponent,
            qq_info_component_1.QqInfoComponent,
            qq_polyline_component_1.QqPolylineComponent,
            qq_polygon_component_1.QqPolygonComponent,
            qq_circle_component_1.QqCircleComponent,
            qq_ground_overlay_component_1.QqGroundOverlayComponent,
            qq_overlay_component_1.QqOverlayComponent,
            qq_map_panes_component_1.QqMapPanesComponent,
            qq_geolocation_component_1.QqGeolocationComponent
        ]
    })
], QqMapModule);
exports.QqMapModule = QqMapModule;
