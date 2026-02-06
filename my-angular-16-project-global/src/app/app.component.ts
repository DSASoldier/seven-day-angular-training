import { NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { TestingService } from "./services/testing.service";
import { DayTwoComponent } from "./day-two/day-two.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title="data is passed successfully"

  userId: number = 10;

  productIds: number[]=[1,2,3,4,5,6,7];

  @ViewChild(DayTwoComponent) child!: DayTwoComponent;
  

  constructor(private dataItem:TestingService){
    console.log(dataItem.getData());

  }
  
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes triggered",changes);
  }
  
  ngOnInit(): void {
    console.log("ng on init is called");
  }

  
  ngAfterViewInit(): void {
    console.log('Child component available:', this.child);
   
  }

  ngOnDestroy(): void {
    console.log("ng on destroy is called");
  }

  ngAfterContentInit(): void {
    console.log("ng after Content init ia called at app")
  }
  ngAfterViewChecked(): void {
    console.log("ng after view checked is called at app");
  }

}
