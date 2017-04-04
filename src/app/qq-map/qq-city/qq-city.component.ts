import {Component, EventEmitter, OnInit,Output,Input} from '@angular/core';
import {LatLng} from "../base";
declare var qq;
export interface CityServiceOptions{
  complete: Function;
  error: Function;
}

@Component({
  selector: 'app-qq-city',
  templateUrl: './qq-city.component.html',
  styleUrls: ['./qq-city.component.css']
})
export class QqCityComponent implements OnInit {
  @Output() complete: EventEmitter<any> = new EventEmitter()
  @Output() error: EventEmitter<any> = new EventEmitter()

  constructor() {
    this.options = {
      complete: (res)=>{
        this.complete.emit(res)
      },
      error: (err)=>{
        this.error.emit(err)
      }
    }
    this.city = new qq.maps.CityService(this.options);
  }
  city: any;
  options: CityServiceOptions;

  ngOnInit() {
    this.searchLocalCity()
  }

  searchLocalCity(){
    console.log('sss',this.latlng);
    this.city.searchLocalCity();
  }
  // 根据城市名称查询城市信息
  _cityname: string;
  @Input()
  get cityname(){
    return this._cityname;
  }
  set cityname(val: string){
    this._cityname = val;
    this.searchCityByName(val)
  }
  searchCityByName(cityname: string){
    this.city.searchCityByName(cityname)
  }

  // 根据经纬度查询城市信息
  _latlng: LatLng;
  @Input()
  get latlng(){
    return this._latlng;
  }
  set latlng(val: LatLng){
    this._latlng = val;
    if(val) {
      this.searchCityByLatLng(val)
    }
  }
  searchCityByLatLng(latlng: LatLng){
    console.log('lat lng 定位',latlng);
    this.city.searchCityByLatLng(latlng)
  }

  // 根据指定IP地址查询城市信息
  _ip: string;
  @Input()
  get ip(){
    return this._ip;
  }
  set ip(val: string){
    this._ip = val;
    this.searchCityByIP(val)
  }
  searchCityByIP(ip: string){
    this.city.searchCityByIP(ip)
  }

  // 根据电话区号查询城市信息
  _areaCode: string;
  @Input()
  get areaCode(){
    return this._areaCode;
  }
  set areaCode(val: string){
    this._areaCode = val;
    this.searchCityByAreaCode(val)
  }
  searchCityByAreaCode(areaCode:string){
    this.city.searchCityByAreaCode(areaCode)
  }

  // 设置检索成功后的回调函数
  @Input()
  get completeSet(){
    return this.options.complete
  }
  set completeSet(val: Function){
    this.options.complete = val;
    this.setComplete(val)
  }
  setComplete(complete: Function){
    this.city.setComplete(complete)
  }

  // 设置检索失败后的回调函数
  @Input()
  get errorSet(){
    return this.options.error
  }
  set errorSet(val: Function){
    this.options.error = val;
    this.setError(val)
  }

  setError(error: Function){
    this.city.setError(error)
  }
}
