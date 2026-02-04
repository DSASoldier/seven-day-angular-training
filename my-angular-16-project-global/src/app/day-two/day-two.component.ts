import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css'],

})
export class DayTwoComponent {
  @Input() title: string='';

  status: string = '';
  color: string = "";
  isActive: boolean = true;
  isBold: boolean = false;
  counter: number = 0;

  @HostListener('window:keydown.enter',['$event'])
  handleKeyDown(event:KeyboardEvent) {
    this.counter++;
  }


  public updateStatus(newStatus: string): void{
    this.status = newStatus;
  }

  changeColor(){
    this.color="blue";
  }

}
