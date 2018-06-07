import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitTestService {

  constructor() { }

  isNull(arg:any):boolean{
    return arg == null?true:false;
  }
}
