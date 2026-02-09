import { NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { AfterViewChecked, AfterViewInit, Component, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { TestingService } from "./services/testing.service";
import { DayTwoComponent } from "./day-two/day-two.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

}

