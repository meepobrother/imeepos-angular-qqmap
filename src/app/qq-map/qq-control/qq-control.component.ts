import {Component, ElementRef, Input, OnInit} from '@angular/core';
declare var qq;

export enum ControlPosition{
  TOP_LEFT,
  TOP_CENTER,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_CENTER,
  BOTTOM_RIGHT,
  LEFT_TOP,
  LEFT_CENTER,
  LEFT_BOTTOM,
  RIGHT_TOP,
  RIGHT_CENTER,
  RIGHT_BOTTOM,
  CENTER
}

@Component({
  selector: 'app-qq-control',
  templateUrl: './qq-control.component.html',
  styleUrls: ['./qq-control.component.css']
})
export class QqControlComponent implements OnInit {

  _map: any;
  @Input()
  get map(){
    return this._map
  }
  set map(val: any){
    this._map = val;
  }
  index: number = 1;
  _postion: any;
  @Input()
  get position(){
    return this._postion
  }
  set position(val: string){
    if(val == 'TOP_LEFT'){
      this._postion =  qq.maps.ControlPosition.TOP_LEFT;
    }else if(val == 'TOP_CENTER'){
      this._postion =  qq.maps.ControlPosition.TOP_CENTER;
    }else if(val == 'TOP_RIGHT'){
      this._postion =  qq.maps.ControlPosition.TOP_RIGHT;
    }else if(val == 'BOTTOM_LEFT'){
      this._postion =  qq.maps.ControlPosition.BOTTOM_LEFT;
    }else if(val == 'BOTTOM_CENTER'){
      this._postion =  qq.maps.ControlPosition.BOTTOM_CENTER;
    }else if(val == 'BOTTOM_RIGHT'){
      this._postion =  qq.maps.ControlPosition.BOTTOM_RIGHT;
    }else if(val == 'LEFT_TOP'){
      this._postion =  qq.maps.ControlPosition.LEFT_TOP;
    }else if(val == 'LEFT_CENTER'){
      this._postion =  qq.maps.ControlPosition.LEFT_CENTER;
    }else if(val == 'LEFT_BOTTOM'){
      this._postion =  qq.maps.ControlPosition.LEFT_BOTTOM;
    }else if(val == 'RIGHT_TOP'){
      this._postion =  qq.maps.ControlPosition.RIGHT_TOP;
    }else if(val == 'RIGHT_CENTER'){
      this._postion =  qq.maps.ControlPosition.RIGHT_CENTER;
    }else if(val == 'RIGHT_BOTTOM'){
      this._postion =  qq.maps.ControlPosition.RIGHT_BOTTOM;
    }else if(val == 'CENTER'){
      this._postion =  qq.maps.ControlPosition.CENTER;
    }else{
      this._postion =  qq.maps.ControlPosition.TOP_CENTER;
    }
  }


  constructor(
    public ele: ElementRef
  ) {

  }

  ngOnInit() {
    this._map.controls[this._postion].push(this.ele.nativeElement);
  }

}
