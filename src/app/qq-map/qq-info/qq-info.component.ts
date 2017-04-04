import {Component, OnInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';
import {LatLng} from "../base";

export class InfoWindowOptions{
  public map: any;
  public content: any;
  public position: LatLng;
  public zIndex: number = 1;
  public show: boolean = false;

  constructor(){

  }

  closeclick(e){
    e.show = false;
  }
}

//
// export interface InfoWindowOptions{
//   map: any;
//   content: any;
//   position: any;
//   zIndex: number;
// }

declare var qq;
@Component({
  selector: 'app-qq-info',
  templateUrl: './qq-info.component.html',
  styleUrls: ['./qq-info.component.css']
})
export class QqInfoComponent implements OnInit {
  infoWindow: any;
  infoWindowOptions: InfoWindowOptions;
  constructor(
    public ele: ElementRef
  ) {
    this.infoWindow = this.infoWindow || new qq.maps.InfoWindow()
  }

  @Input()
  get options(){
    return this.infoWindowOptions
  }
  set options(val: InfoWindowOptions){
    this.infoWindowOptions = val;
    if(this.infoWindowOptions.show){
      this.infoWindow.open();
    }
  }
  @Output() closeclick: EventEmitter<InfoWindowOptions> = new EventEmitter()
  ngOnInit() {
    this.infoWindowOptions.content = this.ele.nativeElement
    this.infoWindow.setOptions(this.infoWindowOptions)
    qq.maps.event.addListener(this.infoWindow,'closeclick',(e)=>{
      this.closeclick.emit(this.infoWindowOptions);
    });
  }

}
