import { NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { Component, NgModule } from "@angular/core";


@Component({
  selector: 'app-root',
  // imports: [RouterOutlet,FormsModule,NgFor,NgIf],
  // imports:[RouterOutlet,FormsModule,NgFor,NgIf,NgModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title=""
  
}
