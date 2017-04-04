import { Component, OnInit } from '@angular/core';
export class MapPanes{
  public mapPane: HTMLElement;
  public overlayLayer: HTMLElement;
  public overlayShadow: HTMLElement;
  public overlayImage: HTMLElement;
  public floatShadow: HTMLElement;
  public overlayMouseTarget: HTMLElement;
  public floatPane: HTMLElement;
}
@Component({
  selector: 'app-qq-map-panes',
  templateUrl: './qq-map-panes.component.html',
  styleUrls: ['./qq-map-panes.component.css']
})
export class QqMapPanesComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
