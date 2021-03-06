import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QqMapComponent } from './qq-map/qq-map.component';
import { QqMarkerComponent } from './qq-marker/qq-marker.component';
import { QqLabelComponent } from './qq-label/qq-label.component';
import { QqSearchComponent } from './qq-search/qq-search.component';
import { QqGencoderComponent } from './qq-gencoder/qq-gencoder.component';
import { QqDrivingComponent } from './qq-driving/qq-driving.component';
import { QqSphericalComponent } from './qq-spherical/qq-spherical.component';
import { QqAutocompleteComponent } from './qq-autocomplete/qq-autocomplete.component';
import { QqCityComponent } from './qq-city/qq-city.component';
import { QqLocationComponent } from './qq-location/qq-location.component';
import { QqControlComponent } from './qq-control/qq-control.component';
import { QqMarkerClusterComponent } from './qq-marker-cluster/qq-marker-cluster.component';
import { QqInfoComponent } from './qq-info/qq-info.component';
import { QqPolylineComponent } from './qq-polyline/qq-polyline.component';
import { QqPolygonComponent } from './qq-polygon/qq-polygon.component';
import { QqCircleComponent } from './qq-circle/qq-circle.component';
import { QqGroundOverlayComponent } from './qq-ground-overlay/qq-ground-overlay.component';
import { QqOverlayComponent } from './qq-overlay/qq-overlay.component';
import { QqMapPanesComponent } from './qq-map-panes/qq-map-panes.component';
import { QqGeolocationComponent } from './qq-geolocation/qq-geolocation.component';


export { QqMapComponent,MapOptions } from './qq-map/qq-map.component';
export { QqMarkerComponent } from './qq-marker/qq-marker.component';
export { QqLabelComponent } from './qq-label/qq-label.component';
export { QqSearchComponent } from './qq-search/qq-search.component';
export { QqGencoderComponent } from './qq-gencoder/qq-gencoder.component';
export { QqDrivingComponent } from './qq-driving/qq-driving.component';
export { QqSphericalComponent } from './qq-spherical/qq-spherical.component';
export { QqAutocompleteComponent,AutoComplete,AutocompleteOptions } from './qq-autocomplete/qq-autocomplete.component';
export { QqCityComponent,CityServiceOptions } from './qq-city/qq-city.component';
export { QqLocationComponent } from './qq-location/qq-location.component';
export { QqControlComponent,ControlPosition } from './qq-control/qq-control.component';
export { QqMarkerClusterComponent } from './qq-marker-cluster/qq-marker-cluster.component';
export { QqInfoComponent,InfoWindowOptions } from './qq-info/qq-info.component';
export { QqPolylineComponent,PolylineOptions } from './qq-polyline/qq-polyline.component';
export { QqPolygonComponent,PolygonOptions } from './qq-polygon/qq-polygon.component';
export { QqCircleComponent,CircleOptions } from './qq-circle/qq-circle.component';
export { QqGroundOverlayComponent,GroundOverlayOptions } from './qq-ground-overlay/qq-ground-overlay.component';
export { QqOverlayComponent,CustomOverlay } from './qq-overlay/qq-overlay.component';
export { QqMapPanesComponent,MapPanes } from './qq-map-panes/qq-map-panes.component';
export { QqGeolocationComponent } from './qq-geolocation/qq-geolocation.component';
export { QqMarkerImage } from './qq-marker/qq-marker-image';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    QqMapComponent,
    QqMarkerComponent,
    QqLabelComponent,
    QqSearchComponent,
    QqGencoderComponent,
    QqDrivingComponent,
    QqSphericalComponent,
    QqAutocompleteComponent,
    QqCityComponent,
    QqLocationComponent,
    QqControlComponent,
    QqMarkerClusterComponent,
    QqInfoComponent,
    QqPolylineComponent,
    QqPolygonComponent,
    QqCircleComponent,
    QqGroundOverlayComponent,
    QqOverlayComponent,
    QqMapPanesComponent,
    QqGeolocationComponent
  ],
  declarations: [
    QqMapComponent,
    QqMarkerComponent,
    QqLabelComponent,
    QqSearchComponent,
    QqGencoderComponent,
    QqDrivingComponent,
    QqSphericalComponent,
    QqAutocompleteComponent,
    QqCityComponent,
    QqLocationComponent,
    QqControlComponent,
    QqMarkerClusterComponent,
    QqInfoComponent,
    QqPolylineComponent,
    QqPolygonComponent,
    QqCircleComponent,
    QqGroundOverlayComponent,
    QqOverlayComponent,
    QqMapPanesComponent,
    QqGeolocationComponent
  ]
})
export class QqMapModule { }
