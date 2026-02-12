import { NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { AfterViewChecked, AfterViewInit, Component, ComponentRef, DestroyRef, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from "@angular/core";
import { TestingService } from "./services/testing.service";
import { DayTwoComponent } from "./day-two/day-two.component";
import { DynamicContentComponent } from "./seventhDay/dynamic-content/dynamic-content.component";
import { inject } from "@angular/core";
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, HostBinding, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { TestingService } from "./services/testing.service";
import { DayTwoComponent } from "./day-two/day-two.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

 @ViewChild('container',{ read: ViewContainerRef,static:true })
 container!: ViewContainerRef;

 private componentRef: ComponentRef<DynamicContentComponent> | null = null;

 private readonly destroyRef = inject(DestroyRef);

 loadComponent(){
  // this.container.clear();
  this.componentRef = this.container.createComponent(DynamicContentComponent);

  this.componentRef.setInput('data','Hello from App component');

  this.componentRef.instance.close.subscribe(()=>{
    this.destroyComponent();
  })

  this.destroyRef.onDestroy(() => this.componentRef?.destroy());

 }

 destroyComponent(){
  this.componentRef?.destroy();
  this.componentRef = null;
 }
export class AppComponent{
  title="data is passed successfully"

  userId: number = 10;

  productIds: number[]=[1,2,3,4,5,6,7];

  @HostBinding('disabled') role: boolean=false;




  @ViewChild(DayTwoComponent) child!: DayTwoComponent;
  

  constructor(private dataItem:TestingService){
    console.log(dataItem.getData());
    this.role = false;
  }
  
  buttonDisable(){
    this.role = true;

    setTimeout(()=>{
      this.role = false;
    },3000);
    
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

