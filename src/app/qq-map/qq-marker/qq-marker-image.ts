import {Point, Size} from "../base";
declare var qq;
export class QqMarkerImage {
  create(
    url: string,
    size: Size,
    origin: Point,
    anchor: Point,
    scaleSize: Size,
    shadowAngle: number
  ){
    return new qq.maps.MarkerImage(url, size, origin, anchor, scaleSize,shadowAngle);
  }
}
