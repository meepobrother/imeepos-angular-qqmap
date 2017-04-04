import {Component, EventEmitter, OnInit, Output} from '@angular/core';
declare var qq;
import { Observable } from 'rxjs/Rx'
@Component({
  selector: 'app-qq-geolocation',
  templateUrl: './qq-geolocation.component.html',
  styleUrls: ['./qq-geolocation.component.css']
})
export class QqGeolocationComponent implements OnInit {
  key: string = '4MHBZ-JVL35-WLMII-Q3NME-3Z2G2-PKBJJ';
  geolocation: any;
  @Output() success: EventEmitter<any> = new EventEmitter()

  constructor() {
    this.geolocation = new qq.maps.Geolocation(this.key,'app-qq-geolocation');
  }
  // 响应式
  getLocation(){
    return Observable.create(r=>{
      this.geolocation.getLocation((res)=>{
        //成功
        r.next(res)
        r.complete()
      },()=>{
        //失败
        this.geolocation.getIpLocation((res)=>{
          //成功
          r.next(res)
          r.complete()
        },()=>{
          //失败
        })
      },{timeout: 2000})
    })
  }

  ngOnInit() {
    this.getLocation().subscribe(res=>{
      this.success.emit(res)
    });
  }

}
