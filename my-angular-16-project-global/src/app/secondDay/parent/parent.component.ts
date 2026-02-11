import { Component, HostBinding } from '@angular/core';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  city: string = '';
  cities: string[] = [];
  index = -1;


  addCity(){

    this.index == -1 ? this.cities.push(this.city) : this.cities[this.index] = this.city;
    
    this.index=-1;
  }

  updateCity(index: number){

    this.city = this.cities[index];

    this.index=index;
  }

  deleteCity(index: number){

    console.log(index);

    this.cities.splice(index,1);
  }
}