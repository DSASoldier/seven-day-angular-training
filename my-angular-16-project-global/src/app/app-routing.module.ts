import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './fourthDay/page1/page1.component';
import { Page2Component } from './fourthDay/page2/page2.component';
import { Page3Component } from './fourthDay/page3/page3.component';
import { Page21Component } from './fourthDay/page21/page21.component';
import { Page22Component } from './fourthDay/page22/page22.component';
import { LoginComponent } from './fourthDay/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'page2',pathMatch:'full'},
  {path:'login/:id',component:LoginComponent},
  {path:'page1',component:Page1Component,data:{
    title: "My Static Data",
    role:"admin"
  }},
  {path:'page2',component:Page2Component,children:[
    {path:'page21',component:Page21Component},
    {path:'page22',component:Page22Component},
    {path:'',redirectTo:'page22',pathMatch:'full'}
  ]},
  {path:'page3',component:Page3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
