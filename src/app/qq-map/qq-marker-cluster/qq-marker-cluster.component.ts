import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare var qq;

@Component({
  selector: 'app-qq-marker-cluster',
  templateUrl: './qq-marker-cluster.component.html',
  styleUrls: ['./qq-marker-cluster.component.css']
})
export class QqMarkerClusterComponent implements OnInit {

  constructor() {

  }

  _map: any;
  @Input()
  get map(){
    return this._map
  }
  set map(val: any){
    this._map = val;
  }

  _markers: any;
  @Input()
  get markers(){
    return this._markers
  }
  set markers(val: any){
    this._markers = val;
  }

  _minimumClusterSize: number;
  @Input()
  get minimumClusterSize(){
    return this._minimumClusterSize;
  }
  set minimumClusterSize(val: number){
    this._minimumClusterSize = val;
  }

  _zoomOnClick: boolean;
  @Input()
  get zoomOnClick(){
    return this._zoomOnClick;
  }
  set zoomOnClick(val: boolean){
    this._zoomOnClick = val;
  }

  _gridSize: number;
  @Input()
  get gridSize (){
    return this._gridSize;
  }
  set gridSize (val: number){
    this._gridSize = val;
  }

  _averageCenter: boolean;
  @Input()
  get averageCenter(){
    return this._averageCenter;
  }
  set averageCenter(val: boolean){
    this._averageCenter = val;
  }

  _maxZoom: number;
  @Input()
  get maxZoom(){
    return this._maxZoom;
  }
  set maxZoom(val: number){
    if(val < 4){
      val = 4;
    }
    if(val > 18){
      val = 18;
    }
    this._maxZoom = val;
  }

  MarkerCluster: any;
  @Output() markerClusterClick: EventEmitter<any> = new EventEmitter()
  ngOnInit() {
    this.MarkerCluster = new qq.maps.MarkerCluster({
      map: this._map,
      minimumClusterSize: this._minimumClusterSize || 2,
      markers: this._markers,
      zoomOnClick: this._zoomOnClick,
      gridSize: this._gridSize || 60,
      averageCenter: this._averageCenter,
      maxZoom: this._maxZoom || 18
    })

    qq.maps.event.addListener(this.MarkerCluster,'clusterclick',(evt)=>{
      this.markerClusterClick.emit(evt);
    })
  }

}
