import { outputAst } from '@angular/compiler';
import { Component, Input,Output,EventEmitter } from '@angular/core';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input(
    'msg'
  )  message: string = '';
  childServiceData: string = '';

  constructor(){
 
  }

  editCity(index: number){
    this.index.emit(index)
  }

  deleteCity(index: number){
    this.deleteIndex.emit(index);
  }

}
