import {Component, EventEmitter, OnInit, Output,Input} from '@angular/core';
import {LatLng} from "../base";
declare var qq;
@Component({
  selector: 'app-qq-search',
  templateUrl: './qq-search.component.html',
  styleUrls: ['./qq-search.component.css']
})
export class QqSearchComponent implements OnInit {
  service: any;
  @Output() complete: EventEmitter<any> = new EventEmitter()
  @Output() error: EventEmitter<any> = new EventEmitter()

  option: any;
  constructor() {
    this.option = {
      complete: (res)=>{
        this.complete.emit(res)
      },
      error: (res)=>{
        this.error.emit(res)
      }
    }
    this.service = new qq.maps.SearchService(this.option)
  }

  _search: string;
  @Input()
  get search(){
    return this._search;
  }
  set search(val: string){
    this._search = val;
    if(this._search){
      this.service.search(this._search)
    }
  }

  _location: string;
  @Input()
  get location(){
    return this._location;
  }
  set location(val: string){
    this._location = val;
    if(this._location){
      this.service.setLocation(this._location)
    }
  }

  _page: number;
  @Input()
  get page(){
    return this._page
  }
  set page(val: number){
    this._page = val;
    if(this._page){
      this.service.setPageIndex(this._page);
    }
  }

  _pageCount: number;
  @Input()
  get pageCount(){
    return this._pageCount
  }
  set pageCount(val: number){
    this._pageCount =val;
    if(this._pageCount){
      this.service.setPageCapacity(this._pageCount)
    }
  }

  _clear: boolean =false;
  @Input()
  get clear(){
    return this._clear
  }
  set clear(val: boolean){
    this._clear = val;
    this.service.clear();
  }

  _map: any;
  @Input()
  get map(){
    return this._map;
  }
  set map(val: any){
    this._map = val;
    if(this._map){
      this.service.clear();
      this.option.map = this._map;
      this.service = new qq.maps.SearchService(this.option)
    }
  }

  ngOnInit() {
  }

}
