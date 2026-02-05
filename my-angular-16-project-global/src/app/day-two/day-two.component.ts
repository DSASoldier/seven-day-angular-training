import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css'],

})
export class DayTwoComponent implements AfterViewInit {
  @Input() title: string='';
  @ViewChild('head') hTag: any;

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

  ngAfterViewInit(): void {
    console.log(this.hTag.nativeElement.textContent)
  }

  // ngAfterContentInit(): void {
  //   console.log("ng after content init is called in day two component");
  // }
  // ngAfterContentChecked(): void {
  //   console.log("ng after content checked is called in day two component");
  // }
}
