import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name:string = "sudeep chatterjee";
  buttonVisibility:boolean = false;
  itemImageUrl:string = "assets/favicon.ico";
  direction:string = "UP";
  city:string[] = ["indore","mumbai","chennai","kolkata","bhopal"];
  visibility:boolean = false;
  saveVisible:boolean = false;
  index:number = -1;

  constructor(){
    this.name = "sudeep";
  }

  buttnDisableHandling(){
    this.buttonVisibility = !this.buttonVisibility;
  }

  handleDirectionClick(){
    this.direction = this.direction === "UP" ? "down":"UP";
  }
  
  method(updatedName:string){
    this.name = updatedName;
  }
  
  toggleVisibility(){
    this.visibility = !this.visibility;
  }

  addCity(cityName:string){
    this.city.push(cityName);
  }

  handleEdit(index:number){
    this.saveVisible = !this.saveVisible;
    this.index=index;
  }
  saveButtonAdd(){
    this.city[this.index] = this.name;
    this.saveVisible = !this.saveVisible;
  }
}
