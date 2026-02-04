import { Component } from '@angular/core';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message: string = 'hello ';
  serviceDataInChild: string = '';

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  constructor(private test:TestingService){
    this.serviceDataInChild = test.getData()[0];
  }

}
