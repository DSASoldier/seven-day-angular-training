import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  constructor() { }


  getDataById(id: number){
    return id;
  }
}
