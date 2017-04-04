import {Component, Input, OnInit} from '@angular/core';
declare var qq;
export class PolygonOptions{
  public clickable: boolean = false;
  public cursor: string = '';
  public editable: boolean = false;
  public fillColor: any = '#ccc';
  public map: any;
  public path: any = [];
  public strokeColor: any = '#ccc';
  public strokeDashStyle: string = '';
  public strokeWeight: number = 2;
  public visible: boolean = false;
  public zIndex: number = 1;
}
@Component({
  selector: 'app-qq-polygon',
  templateUrl: './qq-polygon.component.html',
  styleUrls: ['./qq-polygon.component.css']
})
export class QqPolygonComponent implements OnInit {
  polygonOptions: PolygonOptions;
  Polygon: any;
  constructor() {
    this.polygonOptions = new PolygonOptions();
    this.Polygon = qq.maps.Polygon(this.polygonOptions)
  }

  @Input()
  get options(){
    return this.polygonOptions
  }
  set options(val: PolygonOptions){
    this.polygonOptions = val;
  }

  ngOnInit() {
    this.Polygon.setOptions(this.polygonOptions)
  }

}
