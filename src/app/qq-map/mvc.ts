export interface MVCArray{
  forEach(callback:Function);
  getAt(index:number);
  setAt(index:number,element:any);
  getLength();
  pop();
  insertAt(index:number,element:any);
  removeAt();
}

export interface MVCObject{
  get(key:string);
  set(key:string,value: any);
  bindTo(key:string,target:MVCArray,targetKey:string,noNotify: boolean);
  unbind(key:string);
  unbindAll();
  notify(key:string);
  changed(key:string);
  setValues(values:Object);
}
