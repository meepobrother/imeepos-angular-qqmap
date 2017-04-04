import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild,Input} from '@angular/core';
import {Size} from "../base";
declare var qq;

export interface AutoComplete{
  index: number;
  value: string;
}

export interface AutocompleteOptions{
  offset: Size,
  location: string;
}

@Component({
  selector: 'app-qq-autocomplete',
  templateUrl: './qq-autocomplete.component.html',
  styleUrls: ['./qq-autocomplete.component.css']
})
export class QqAutocompleteComponent implements OnInit {
  place: any;
  @ViewChild('auto') input: ElementRef
  constructor() {}

  @Output() confirmSuccess: EventEmitter<AutoComplete> = new EventEmitter()

  _options: AutocompleteOptions;
  @Input()
  get options(){
    return this._options;
  }
  set options(val: AutocompleteOptions){
    this._options = val;
    this.init();
  }

  ngOnInit() {
    this.init()
  }

  init(){
    this.place && this.place.dispose();
    this.place = new qq.maps.place.Autocomplete(
      this.input.nativeElement,this._options
    );
    this.addDomListener()
  }
  addDomListener(){
    qq.maps.event.addDomListener(this.place,'confirm',(res:AutoComplete)=>{
      this.confirmSuccess.emit(res)
    })
  }

}
