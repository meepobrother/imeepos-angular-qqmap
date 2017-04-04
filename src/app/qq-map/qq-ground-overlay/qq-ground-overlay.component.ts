import {Component, Input, OnInit} from '@angular/core';
declare var qq;
export class GroundOverlayOptions{
  public bounds: any;
  public clickable: boolean = false;
  public cursor: string = '';
  public imageUrl: string = '';
  public map: any;
  public opacity: number = 0.8;
  public visible: boolean = false;
  public zIndex: number = 1;
}
@Component({
  selector: 'app-qq-ground-overlay',
  templateUrl: './qq-ground-overlay.component.html',
  styleUrls: ['./qq-ground-overlay.component.css']
})
export class QqGroundOverlayComponent implements OnInit {
  groundOverlayOptions: GroundOverlayOptions;
  groundOverlay: any;
  constructor() {
    this.groundOverlayOptions = new GroundOverlayOptions();
    this.groundOverlay = new qq.maps.GroundOverlay(this.groundOverlayOptions)
  }

  @Input()
  get options(){
    return this.groundOverlayOptions
  }
  set options(val: GroundOverlayOptions){
    this.groundOverlayOptions = val;
  }

  ngOnInit() {
    this.groundOverlay.setOptions(this.groundOverlayOptions)
  }

}
