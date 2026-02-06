import { NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterOutlet } from "@angular/router";
import { AfterViewChecked, AfterViewInit, Component, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { TestingService } from "./services/testing.service";
import { DayTwoComponent } from "./day-two/day-two.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit,OnChanges,OnInit,OnDestroy {
  title="data is passed successfully"

  @ViewChild(DayTwoComponent) child!: DayTwoComponent;

  constructor(private route:Router, private dataItem:TestingService){
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

  ngAfterViewChecked(): void {
    
  }
  
  goToPage1(){
    this.route.navigate(['/page1'],{
      queryParams: {category:'electronics',page:100},
      fragment:'section-jump'
    })
  }
}
