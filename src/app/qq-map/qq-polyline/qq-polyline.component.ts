import {Component, Input, OnInit} from '@angular/core';
declare var qq;
export class PolylineOptions{
  constructor(){}

  public clickable: boolean = false;
  public cursor: string = '';
  public editable: boolean = false;
  public map: any;
  public path: any = [];
  public strokeColor: any = '#ccc';
  public strokeDashStyle: string = 'solid';
  public strokeWeight: number = 2;
  public visible: boolean= false;
  public zIndex: number = 1;

  setMap(map: any){
    this.map = map;
  }
}

@Component({
  selector: 'app-qq-polyline',
  templateUrl: './qq-polyline.component.html',
  styleUrls: ['./qq-polyline.component.css']
})
export class QqPolylineComponent implements OnInit {
  polylineOptions: PolylineOptions;
  polyline: any;
  constructor() {
    this.polylineOptions = new PolylineOptions();
    this.polyline = new qq.maps.Polyline(this.polylineOptions)
  }

  @Input()
  get options(){
    return this.polylineOptions
  }
  set options(val: PolylineOptions){
    this.polylineOptions = val;
  }

  ngOnInit() {
    this.polyline.setOptions(this.polylineOptions)
  }

}
