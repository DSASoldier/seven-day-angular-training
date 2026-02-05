import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './day-three/about/about.component';
import { LoginComponent } from './day-three/login/login.component';
import { CareerComponent } from './day-three/career/career.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'career',component:CareerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
