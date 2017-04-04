import {
  Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import {LatLng} from "../base";
declare var qq;

export interface MapOptions{
  center?: LatLng;
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  noClear?: number;
  backgroundColor?: string;
  boundary?: any;
  draggableCursor?: string;
  draggingCursor?: string;
  draggable?: boolean;
  scrollwheel?: boolean;
  disableDoubleClickZoom?: boolean;
  keyboardShortcuts?: boolean;
  mapTypeControl?: boolean;
  mapTypeControlOptions?: any;
  panControl?: boolean;
  panControlOptions?: any;
  zoomControl?: boolean;
  zoomControlOptions?: any;
  scaleControl?: boolean;
  scaleControlOptions?: any;
}

@Component({
  selector: 'app-qq-map',
  templateUrl: './qq-map.component.html',
  styleUrls: ['./qq-map.component.css']
})
export class QqMapComponent implements OnInit {
  map: any;

  option: MapOptions = {
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    panControl: false,
    panControlOptions:{

    },
    scaleControl:false,
    scaleControlOptions: {

    },
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds:[]
    }
  };

  @Output() boundsChange: EventEmitter<any> = new EventEmitter()
  @Output() idle: EventEmitter<any> = new EventEmitter()

  constructor(
    public ele: ElementRef
  ) {
    console.log(this.option);
    this.map = new qq.maps.Map(this.ele.nativeElement,this.option);

    qq.maps.event.addListener(this.map,'bounds_changed',(res)=>{
      this.boundsChange.emit(res);
    })

    qq.maps.event.addListener(this.map,'idle',(res)=>{
      this.idle.emit('map now free')
    })
  }

  @Output() mapSuccess: EventEmitter<any> = new EventEmitter()

  _zoom: number;
  @Input()
  get zoom(){
    return this._zoom;
  }
  set zoom(num: number){
    this._zoom = num;
    if(this._zoom){
      this.map.zoomTo(this._zoom)
    }
  }

  _draggable: boolean;
  @Input()
  get draggable(){
    return this._draggable
  }
  set draggable(val: boolean){
    this._draggable = val;
    this.option.draggable = val;
    this.map.setOptions(this.option)
  }

  ngOnInit() {
    console.log('on init');
    let option = {
      zoom: this._zoom
    }
    this.map.setOptions(option);
    this.mapSuccess.emit(this.map)
  }

  @Output() getBounds: EventEmitter<any> = new EventEmitter()

  _center: any;
  @Input()
  get center(){
    return this._center;
  }
  set center(center: any){
    this._center = center;
    if(this._center){
      this.map.panTo(this._center)
    }
  }


}
