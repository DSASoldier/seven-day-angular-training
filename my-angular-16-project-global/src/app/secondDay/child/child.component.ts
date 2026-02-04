import { Component, Input,Output,EventEmitter } from '@angular/core';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()  message: string = '';
  childServiceData: string = '';

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }

  constructor(private test:TestingService){
    this.childServiceData = test.getData()[1];
  }
}
