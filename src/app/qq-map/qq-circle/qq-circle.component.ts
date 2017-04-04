import {Component, Input, OnInit} from '@angular/core';
import {LatLng} from "../base";
declare var qq;
export class CircleOptions{
  public center: LatLng;
  public clickable: boolean = false;
  public cursor: string = '';
  public fillColor: any = '#ccc';
  public map: any;
  public radius: number = 2;
  public strokeColor: any = '#ddd';
  public strokeDashStyle: string = 'solid';
  public strokeWeight: number = 2;
  public visible: boolean = false;
  public zIndex: number = 1;
}
@Component({
  selector: 'app-qq-circle',
  templateUrl: './qq-circle.component.html',
  styleUrls: ['./qq-circle.component.css']
})
export class QqCircleComponent implements OnInit {
  circleOptions: CircleOptions;
  circle: any;
  constructor() {
    this.circleOptions = new CircleOptions();
    this.circle = qq.maps.Circle(this.circleOptions)
  }

  @Input()
  get options(){
    return this.circleOptions
  }
  set options(val: CircleOptions){
    this.circleOptions = val;
  }

  ngOnInit() {
    this.circle.setOptions(this.circleOptions)
  }

}
