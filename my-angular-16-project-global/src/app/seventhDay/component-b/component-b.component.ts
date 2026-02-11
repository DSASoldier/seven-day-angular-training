import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  messageRecieved: string = '';

  userName: string = '';

  constructor(private userService:UserService,private dataService: DataServiceService) {}

  ngOnInit(): void {
    
    this.dataService.message$.subscribe(msg=>{
      this.messageRecieved = msg;
      console.log(this.messageRecieved);
    })

    this.userService.currentUser.subscribe(user=>this.userName = user);
    

  }
  
}
