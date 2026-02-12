import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})

export class ComponentAComponent implements OnInit {

  constructor(private userService:UserService,private dataService:DataServiceService){}
  item$!: Observable<any[]>; 

  ngOnInit(): void {
    this.item$ = this.userService.getItems();
    console.log(this.item$);
  }

  updateMessage(){
    this.dataService.sendMessage("Hello from component A!");
  }

  changeUser(){
    this.userService.changeUser('John Doe');
  }
}
