import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LatLng} from "../base";
declare var qq;
@Component({
  selector: 'app-qq-marker',
  templateUrl: './qq-marker.component.html',
  styleUrls: ['./qq-marker.component.css']
})
export class QqMarkerComponent implements OnInit {
  marker: any;
  constructor() {

  }

  // 标注的动画效果
  _animation: any;
  @Input()
  get animation(){
    return this._animation;
  }
  set animation(val: any){
    this._animation = val;
    if(val){
      this.marker && this.marker.setAnimation(val)
    }
  }
  // 标注是否可点击
  _clickAble: boolean
  @Input()
  get clickAble(){
    return this._clickAble;
  }
  set clickAble(val: boolean){
    this._clickAble = val;
    this.marker && this.marker.setClickable(val)
  }
  // 标注的鼠标样式
  @Input()
  get cursor(){
    return this.marker.getCursor()
  }
  set cursor(val: string){
    if(val){
      this.marker.setCursor(val)
    }
  }
  // 标注是否可拖拽
  @Input()
  get draggable(){
    return this.marker.getDraggable()
  }
  set draggable(val: boolean){
    this.marker.setDraggable(val)
  }

  // 是否有阴影
  @Input()
  get flat(){
    return this.marker.getFlat()
  }
  set flat(val: boolean){
    this.marker.setFlat(val)
  }

  //标注的图标
  @Input()
  get icon(){
    return this.marker.getIcon()
  }
  set icon(val: string){
    this.marker.setIcon(val)
  }
  // 标注的map对象
  _map: any;
  @Input()
  get map(){
    return this._map;
  }
  set map(val: any){
    this._map = val;
    this.marker && this.marker.setMap(val)
  }

  // 标注的位置
  _position: any;
  @Input()
  get position(){
    return this._position;
  }
  set position(val: LatLng){
    this._position = val;
    if(val){
      this.marker && this.marker.setPosition(val);
    }
  }
  // 标注的阴影
  @Input()
  get shadow(){
    return this.marker.getShadow()
  }
  set shadow(val: any){
    this.marker.setShadow(val)
  }
  // 标注的可响应区域
  @Input()
  get shape(){
    return this.marker.getShape()
  }
  set shape(val: any){
    this.marker.setShape(val)
  }
  // 标注的名称属性
  @Input()
  get title(){
    return this.marker.getTitle();
  }
  set title(val: string){
    this.marker.setTitle(val)
  }
  // 标注是否可见
  @Input()
  get visible(){
    return this.marker.getVisible();
  }
  set visible(val: boolean){
    this.marker.setVisible(val)
  }
  // 标注的zIndex
  _zindex: number
  @Input()
  get zindex(){
    return this._zindex;
  }
  set zindex(val: number){
    this._zindex = val;
    if(this._zindex){
      this.marker && this.marker.setZIndex(val)
    }
  }
  // marker的旋转角度
  @Input()
  get rotation(){
    return this.marker.getRotation();
  }
  set rotation(val: number){
    this.marker.setRotation(val)
  }

  _option: any;
  ngOnInit() {

  }
  _create: boolean = false;
  @Input()
  get create(){
    return this._create;
  }
  set create(val:boolean){
    this._create = val;
    if(this._create){
      this.initCreate()
    }
  }
  initCreate(){
    this._option = {
      map: this._map,
      position: this._position
    }
    this.marker = new qq.maps.Marker(this._option);
    qq.maps.event.addListener(this.marker,'click',(e)=>{
      this.click.emit(this.marker)
    });
    qq.maps.event.addListener(this.marker,'dragend',(e)=>{
      this.dragend.emit(this.marker)
    });
  }
  @Output() click: EventEmitter<any> = new EventEmitter()
  @Output() dragend: EventEmitter<any> = new EventEmitter()

}
