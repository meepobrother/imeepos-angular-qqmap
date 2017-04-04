export interface LatLng{
  lat: number;
  lng: number;
}
export interface Point{
  x:number;
  y:number;
  equals(other: Point): boolean;
  getX(): number;
  getY(): number;
  toString(): string;
  clone(): Point;
}
export interface Size{
  width:number;
  height: number;
  equals(other: Size): boolean;
  getWidth(): number;
  getHeight(): number;
  toString(): string;
  clone(): Size;
}
export interface LatLngBounds{
  sw: LatLng;
  ne: LatLng;
}

export interface Color{
  red: number;
  green: number;
  blue: number;
  alpha: number;
  toRGB(): string;
  toRGBA(): string;
  toHex(): string;
  fromHex(hex: string, alpha?: number): Color;
}
