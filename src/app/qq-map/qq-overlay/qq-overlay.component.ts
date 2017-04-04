import { Component, OnInit } from '@angular/core';
import {LatLng} from "../base";
declare var qq;

export class CustomOverlay{
  public index: number;
  public position: LatLng;

  constructor(){

  }
}

@Component({
  selector: 'app-qq-overlay',
  templateUrl: './qq-overlay.component.html',
  styleUrls: ['./qq-overlay.component.css']
})
export class QqOverlayComponent implements OnInit {

  overlay: any;
  constructor() {
    this.overlay = new qq.maps.Overlay();
  }

  ngOnInit() {

  }

}
